import { BorderlessButton } from '@components/Buttons/BorderlessButton';
import { GoogleSignInButton } from '@components/Buttons/GoogleSignInButton';
import { PersonalSignInButton } from '@components/Buttons/PersonalSignInButton';
import { PrimaryButton } from '@components/Buttons/PrimaryButton';
import { TextInput } from '@components/Inputs/TextInput';
import { AppVersion } from '@components/Miscellaneous/AppVersion';
import { Text } from '@components/Typography/Text';
import { useNavigation } from '@react-navigation/native';
import { TAuthRoutesBottomTabs } from '@routes/auth.routes';
import { ColumnContainer, GlobalStyles } from '@styles/globals';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SvgXml } from 'react-native-svg';
import { useTheme } from 'styled-components';
import { logoWithTextSvg, logoWithTextWhiteSvg } from '../../assets/svgs';
import {
  Container,
  FormContainer,
  FormSubContainer,
  ImageContainer,
  Styles,
} from './styles';

export function InitialScreen() {
  const bgImgPath = '../../assets/imgs/initial_screen_bg.png';
  const IMAGE_TRANSITION_MS = 800;
  const [isAuthenticated] = useState(true);
  const navigation = useNavigation<TAuthRoutesBottomTabs>();
  const theme = useTheme();
  //@ts-ignore
  const currentTheme = theme.title;

  return (
    <Container>
      <StatusBar style="light" />
      <ImageContainer>
        <Image
          style={Styles.image}
          source={require(bgImgPath)}
          contentFit="cover"
          transition={IMAGE_TRANSITION_MS}
        />
      </ImageContainer>
      <FormContainer showsVerticalScrollIndicator={false}>
        <FormSubContainer>
          <SvgXml
            xml={
              currentTheme === 'light' ? logoWithTextSvg : logoWithTextWhiteSvg
            }
            style={
              isAuthenticated
                ? GlobalStyles.marginBottomLastElement
                : GlobalStyles.marginBottomDefault
            }
          />
          {isAuthenticated ? (
            <>
              <Text
                content="Seja bem vindo(a) novamente!"
                style={GlobalStyles.marginBottomDefault}
              />
              <ColumnContainer
                style={[
                  GlobalStyles.marginTopLarge,
                  GlobalStyles.containerCenterItems,
                ]}
              >
                <PersonalSignInButton
                  userName="Pablo Silva"
                  onPress={() =>
                    navigation.navigate('SecureAuthenticationScreen')
                  }
                  style={GlobalStyles.marginBottomDefault}
                />
                <Text content="ou" style={GlobalStyles.marginVerticalDefault} />
                <BorderlessButton title="Entrar com outra conta" />
              </ColumnContainer>
            </>
          ) : (
            <>
              <Text
                content="Faça login para acessar a plataforma"
                style={GlobalStyles.marginBottomDefault}
              />
              <TextInput
                label="E-mail"
                placeholder="Seu e-mail"
                containerStyle={GlobalStyles.marginBottomDefault}
              />
              <TextInput
                label="Senha"
                placeholder="Sua senha"
                containerStyle={GlobalStyles.marginBottomDefault}
              />
              <PrimaryButton
                title="Entrar"
                style={GlobalStyles.marginVerticalSmall}
              />
              <Text content="ou" style={GlobalStyles.marginBottomDefault} />
              <GoogleSignInButton style={GlobalStyles.marginBottomDefault} />
            </>
          )}
          <ColumnContainer
            style={
              isAuthenticated
                ? GlobalStyles.marginTopLarge
                : GlobalStyles.marginBottomLastElement
            }
          >
            <AppVersion version="1.4.5" />
          </ColumnContainer>
        </FormSubContainer>
      </FormContainer>
    </Container>
  );
}
