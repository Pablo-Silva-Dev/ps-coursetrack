import { DefaultTheme, css } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

//@ts-ignore
export const Container = styled.View`
  ${({ theme }: DefaultTheme) => css`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.background};
  `}
`;

export const Text = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    font-size: ${RFValue(theme.sizes[3])}px;
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.secondary};
  `}
`;
