/* eslint-disable quotes */
import { BorderlessButton } from '@components/Buttons/BorderlessButton';
import { PrimaryButton } from '@components/Buttons/PrimaryButton';
import { HeaderNavigation } from '@components/Miscellaneous/HeaderNavigation';
import { Text } from '@components/Typography/Text';
import { useNavigation } from '@react-navigation/native';
import { TAuthRoutesBottomTabs } from '@routes/auth.routes';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { biometricsSvg, faceIdSvg, logoWithTextSvg } from '../../assets/svgs';
import { Container, Styles } from './styles';

export function SecureAuthenticationScreen() {
  const navigation = useNavigation<TAuthRoutesBottomTabs>();
  return (
    <Container>
      <StatusBar style="dark" />
      <HeaderNavigation
        screenTitle="Autenticação por biometria"
        onBack={() => navigation.goBack()}
        showsLogo
      />
      {Platform.OS === 'android' ? (
        <>
          <Text
            content={`Gostaria de utilizar sua biometria\npara realizar uma autenticação\nmais rápida e segura?`}
            style={Styles.text}
          />
          <SvgXml xml={biometricsSvg} />
          <PrimaryButton title="Utilizar Biometria" />
        </>
      ) : (
        <>
          <Text
            content={`Gostaria de utilizar o reconhecimento facial\n para realizar uma autenticação\nmais rápida e segura?`}
            style={Styles.text}
          />
          <SvgXml xml={faceIdSvg} />
          <PrimaryButton title="Fazer Reconhecimento Facial" />
        </>
      )}
      <Text content="ou" />
      <BorderlessButton
        title="Continuar com e-mail e senha"
        onPress={() => {}}
      />
      <SvgXml xml={logoWithTextSvg} />
    </Container>
  );
}
