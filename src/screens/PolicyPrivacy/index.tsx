/* eslint-disable quotes */
import { HeaderNavigation } from '@components/Miscellaneous/HeaderNavigation';
import { Subtitle } from '@components/Typography/Subtitle';
import { Text } from '@components/Typography/Text';
import { useTermsText } from '@data/mocks';
import { useNavigation } from '@react-navigation/native';
import { TAuthRoutesBottomTabs } from '@routes/auth.routes';
import { GlobalStyles } from '@styles/globals';
import { StatusBar } from 'expo-status-bar';
import { SvgXml } from 'react-native-svg';
import { useTheme } from 'styled-components';
import { logoWithTextSvg, logoWithTextWhiteSvg } from '../../assets/svgs';
import { Container, TextContainer, TitleContainer } from './styles';

export function PolicyPrivacy() {
  const navigation = useNavigation<TAuthRoutesBottomTabs>();
  const theme = useTheme();
  //@ts-ignore
  const currentTheme = theme.title;

  return (
    <Container
      style={[
        GlobalStyles.paddingTopDefault,
        GlobalStyles.paddingBottomLastElement,
      ]}
    >
      <StatusBar style={currentTheme === 'dark' ? 'light' : 'dark'} />
      <HeaderNavigation
        screenTitle="Política de Privacidade"
        onBack={() => navigation.goBack()}
        style={GlobalStyles.marginTopExtraLarge}
      />
      <TitleContainer style={GlobalStyles.marginBottomDefault}>
        <Subtitle
          content="Política de Privacidade"
          style={
            [
              GlobalStyles.marginTopLarge,
              GlobalStyles.marginBottomDefault,
            ] as never
          }
        />
      </TitleContainer>
      <TextContainer style={GlobalStyles.marginBottomLastElement}>
        {useTermsText.map(text => (
          <Text
            content={text.content}
            key={text.id}
            style={GlobalStyles.marginTopDefault}
          />
        ))}
      </TextContainer>
      <SvgXml
        xml={currentTheme === 'light' ? logoWithTextSvg : logoWithTextWhiteSvg}
      />
    </Container>
  );
}
