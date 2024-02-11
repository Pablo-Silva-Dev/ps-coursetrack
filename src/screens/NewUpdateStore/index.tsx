/* eslint-disable quotes */
import { PrimaryButton } from '@components/Buttons/PrimaryButton';
import { Text } from '@components/Typography/Text';
import { Title } from '@components/Typography/Title';
import { GlobalStyles } from '@styles/globals';
import { StatusBar } from 'expo-status-bar';
import { SvgXml } from 'react-native-svg';
import { useTheme } from 'styled-components';
import {
  logoWithTextSvg,
  logoWithTextWhiteSvg,
  newStoreUpdateSvg,
} from '../../assets/svgs';
import { Container, ContentContainer, LogoContainer } from './styles';

export function NewUpdateStore() {
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
      <Title
        content="Atualização do aplicativo"
        style={GlobalStyles.marginTopExtraLarge}
      />
      <Text
        content={`Atualize seu aplicativo para ter acesso à\nmelhorias e garantir que você possui acesso\naos nossos mais recentes recursos`}
        style={
          [GlobalStyles.marginTopLarge, GlobalStyles.marginBottomLarge] as never
        }
      />
      <ContentContainer>
        <SvgXml xml={newStoreUpdateSvg} />
        <PrimaryButton
          title="Atualizar Aplicativo"
          style={
            [
              GlobalStyles.marginTopLarge,
              GlobalStyles.marginBottomDefault,
            ] as never
          }
        />
      </ContentContainer>
      <LogoContainer>
        <SvgXml
          xml={
            currentTheme === 'light' ? logoWithTextSvg : logoWithTextWhiteSvg
          }
        />
      </LogoContainer>
    </Container>
  );
}
