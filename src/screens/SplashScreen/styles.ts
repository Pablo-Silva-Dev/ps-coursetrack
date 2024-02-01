import { DefaultTheme, css } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

//@ts-ignore
export const Container = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.primary};
  `}
`;

export const GradientContainer = styled(LinearGradient)`
  width: 100%;
  flex: 1;
`;

export const LogoTitle = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    font-size: ${RFValue(theme.sizes[5])}px;
    font-family: ${theme.fonts.primary_700};
    color: ${theme.colors.absolute_white};
  `}
`;
