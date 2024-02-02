import { RFValue } from 'react-native-responsive-fontsize';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

interface ButtonProps extends DefaultTheme {
  disabled?: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  height: ${RFValue(48)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(8)}px;
  background-color: transparent;
`;

export const Title = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.primaryVariant};
    font-size: ${RFValue(theme.sizes[4])}px;
    font-family: ${theme.fonts.secondary_600};
  `}
`;
