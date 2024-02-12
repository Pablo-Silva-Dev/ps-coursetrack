/* eslint-disable quotes */
import { HeaderNavigation } from '@components/Miscellaneous/HeaderNavigation';
import { Subtitle } from '@components/Typography/Subtitle';
import { Text } from '@components/Typography/Text';
import { privacyPolicyText } from '@data/mocks';
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
        GlobalStyles.paddingTopMedium,
        GlobalStyles.paddingBottomExtraLarge,
      ]}
    >
      <StatusBar style={currentTheme === 'dark' ? 'light' : 'dark'} />
      <HeaderNavigation
        screenTitle="Política de Privacidade"
        onBack={() => navigation.goBack()}
        style={GlobalStyles.marginTopExtraLarge}
      />
      <TitleContainer style={GlobalStyles.marginBottomMedium}>
        <Subtitle
          content="Política de Privacidade"
          style={
            [
              GlobalStyles.marginTopLarge,
              GlobalStyles.marginBottomMedium,
            ] as never
          }
        />
      </TitleContainer>
      <TextContainer style={GlobalStyles.marginBottomExtraLarge}>
        {privacyPolicyText.map(text => (
          <Text
            content={text.content}
            key={text.id}
            style={GlobalStyles.marginTopMedium}
          />
        ))}
      </TextContainer>
      <SvgXml
        xml={currentTheme === 'light' ? logoWithTextSvg : logoWithTextWhiteSvg}
      />
    </Container>
  );
}
