import { Feather } from '@expo/vector-icons';
import { light } from '@themes/light';
import { SvgXml } from 'react-native-svg';
import { CSSProperties, useTheme } from 'styled-components';
import { logoSmallSvg } from '../../../assets/svgs';
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
          <Feather
            name="arrow-left"
            size={24}
            color={
              currentTheme === 'dark'
                ? light.theme.colors.absolute_white
                : light.theme.colors.absolute_black
            }
          />
        </BackButton>
        {screenTitle && (
          <TitleContainer>
            <Title>{screenTitle}</Title>
          </TitleContainer>
        )}
        {showsLogo && (
          <BackButton onPress={onPressLogo} activeOpacity={0.8}>
            <LogoContainer>
              <SvgXml xml={logoSmallSvg} width={40} height={40} />
            </LogoContainer>
          </BackButton>
        )}
      </ContentContainer>
    </Container>
  );
}
