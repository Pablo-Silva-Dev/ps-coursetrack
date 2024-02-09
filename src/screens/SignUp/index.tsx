/* eslint-disable quotes */
import { PrimaryButton } from '@components/Buttons/PrimaryButton';
import { MaskedTextInput } from '@components/Inputs/MaskedTextInput';
import { TextInput } from '@components/Inputs/TextInput';
import { HeaderNavigation } from '@components/Miscellaneous/HeaderNavigation';
import { useNavigation } from '@react-navigation/native';
import { TAuthRoutesBottomTabs } from '@routes/auth.routes';
import { GlobalStyles } from '@styles/globals';
import { StatusBar } from 'expo-status-bar';
import { Masks } from 'react-native-mask-input';
import { SvgXml } from 'react-native-svg';
import { useTheme } from 'styled-components';
import { logoWithTextSvg, logoWithTextWhiteSvg } from '../../assets/svgs';
import { TermsCheckBox } from './components/TermsCheckBox';
import { Container, FormContainer } from './styles';

export function SignUp() {
  const navigation = useNavigation<TAuthRoutesBottomTabs>();
  const theme = useTheme();
  //@ts-ignore
  const currentTheme = theme.title;
  return (
    <Container style={GlobalStyles.paddingBottomLastElement}>
      <StatusBar style={currentTheme === 'dark' ? 'light' : 'dark'} />
      <HeaderNavigation
        screenTitle="Cadastro"
        onBack={() => navigation.goBack()}
        style={GlobalStyles.marginTopLarge}
      />
      <FormContainer style={GlobalStyles.marginTopDefault}>
        <TextInput label="Nome" placeholder="Seu nome" />
        <TextInput label="E-mail" placeholder="Seu e-mail" />
        <MaskedTextInput
          label="CPF"
          placeholder="Seu CPF"
          mask={Masks.BRL_CPF}
        />
        <TextInput
          label="Senha"
          placeholder="Informe uma senha (mínimo de 6 dígitos)"
        />
        <TextInput
          label="Confirmação de senha"
          placeholder="Confirme sua senha"
        />
        <TermsCheckBox
          checked={false}
          onCheck={() => {}}
          style={GlobalStyles.marginBottomDefault}
        />
        <PrimaryButton title="Cadastrar" onPress={() => {}} />
      </FormContainer>
      <SvgXml
        xml={currentTheme === 'light' ? logoWithTextSvg : logoWithTextWhiteSvg}
      />
    </Container>
  );
}
