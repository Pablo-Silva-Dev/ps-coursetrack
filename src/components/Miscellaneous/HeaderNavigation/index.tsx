import { SvgXml } from 'react-native-svg';
import { CSSProperties } from 'styled-components';
import { arrowLeftBlackSvg, logoSmallSvg } from '../../../assets/svgs';
import {
  BackButton,
  Container,
  ContentContainer,
  LogoContainer,
  Title,
  TitleContainer,
} from './styles';

interface HeaderNavigationProps {
  screenTitle: string;
  onBack: () => void;
  style?: CSSProperties;
  showsLogo?: boolean;
  onPressLogo?: () => void;
}

export function HeaderNavigation({
  screenTitle,
  onBack,
  style,
  showsLogo,
  onPressLogo,
}: HeaderNavigationProps) {
  return (
    <Container style={style as never}>
      <ContentContainer>
        <BackButton onPress={onBack}>
          <SvgXml xml={arrowLeftBlackSvg} />
        </BackButton>
        {screenTitle && (
          <TitleContainer>
            <Title>{screenTitle}</Title>
          </TitleContainer>
        )}
      </ContentContainer>
      {showsLogo && (
        <BackButton onPress={onPressLogo} activeOpacity={0.8}>
          <LogoContainer>
            <SvgXml xml={logoSmallSvg} width={40} height={40} />
          </LogoContainer>
        </BackButton>
      )}
    </Container>
  );
}
