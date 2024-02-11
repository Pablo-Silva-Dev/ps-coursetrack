/* eslint-disable quotes */
import { NextActionButton } from '@components/Buttons/NextActionButton';
import { HeaderNavigation } from '@components/Miscellaneous/HeaderNavigation';
import { Text } from '@components/Typography/Text';
import { useNavigation } from '@react-navigation/native';
import { TAuthRoutesBottomTabs } from '@routes/auth.routes';
import { GlobalStyles } from '@styles/globals';
import { StatusBar } from 'expo-status-bar';
import { SvgXml } from 'react-native-svg';
import { useTheme } from 'styled-components';
import { logoWithTextSvg, logoWithTextWhiteSvg } from '../../assets/svgs';
import { Container, FormContainer } from './styles';

export function TermsAndPoliticsSelector() {
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
        screenTitle="Termos de Uso e Política de Privacidade"
        onBack={() => navigation.goBack()}
        style={GlobalStyles.marginTopExtraLarge}
      />
      <Text
        content="Selecione um documento para visualizar"
        style={GlobalStyles.marginTopLarge}
      />
      <FormContainer style={GlobalStyles.marginTopDefault}>
        <NextActionButton
          title="Termos de Uso"
          onPress={() => {}}
          style={GlobalStyles.marginBottomDefault}
        />
        <NextActionButton title="Política de Privacidade" onPress={() => {}} />
      </FormContainer>
      <SvgXml
        xml={currentTheme === 'light' ? logoWithTextSvg : logoWithTextWhiteSvg}
      />
    </Container>
  );
}
