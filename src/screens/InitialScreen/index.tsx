import { GoogleSignInButton } from '@components/Buttons/GoogleSignInButton';
import { PrimaryButton } from '@components/Buttons/PrimaryButton';
import { TextInput } from '@components/Inputs/TextInput';
import { AppVersion } from '@components/Miscellaneous/AppVersion';
import { Text } from '@components/Typography/Text';
import { ColumnContainer, GlobalStyles } from '@styles/globals';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { SvgXml } from 'react-native-svg';
import { logoWithTextSvg } from '../../assets/svgs';
import {
  Container,
  FormContainer,
  FormSubContainer,
  ImageContainer,
  Styles,
} from './styles';

export function InitialScreen() {
  const bgImgPath = '../../assets/imgs/initial_screen_bg.png';
  const IMAGE_TRANSITION = 800;
  return (
    <Container>
      <StatusBar style="light" />
      <ImageContainer>
        <Image
          style={Styles.image}
          source={require(bgImgPath)}
          contentFit="cover"
          transition={IMAGE_TRANSITION}
        />
      </ImageContainer>
      <FormContainer showsVerticalScrollIndicator={false}>
        <FormSubContainer>
          <SvgXml
            xml={logoWithTextSvg}
            style={GlobalStyles.marginBottomDefault}
          />
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
            style={GlobalStyles.marginVerticalLow}
          />
          <Text content="ou" style={GlobalStyles.marginBottomDefault} />
          <GoogleSignInButton style={GlobalStyles.marginBottomDefault} />
          <ColumnContainer style={GlobalStyles.marginBottomLastElement}>
            <AppVersion version="1.4.5" />
          </ColumnContainer>
        </FormSubContainer>
      </FormContainer>
    </Container>
  );
}
