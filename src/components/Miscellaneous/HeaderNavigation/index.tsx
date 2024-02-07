import { SvgXml } from 'react-native-svg';
import { CSSProperties, useTheme } from 'styled-components';
import {
  arrowLeftBlackSvg,
  arrowLeftWhiteSvg,
  logoSmallSvg,
} from '../../../assets/svgs';
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
  const theme = useTheme();
  //@ts-ignore
  const currentTheme = theme.title;
  return (
    <Container style={style as never}>
      <ContentContainer>
        <BackButton onPress={onBack}>
          <SvgXml
            xml={
              currentTheme === 'dark' ? arrowLeftWhiteSvg : arrowLeftBlackSvg
            }
          />
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
