import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.background};
  `}
`;

export const ImageContainer = styled.View`
  width: 100%;
  flex: 1;
`;

export const FormContainer = styled.ScrollView`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    padding: ${theme.spacings[7]}px ${theme.spacings[4]}px
      ${theme.spacings[12]}px;
    flex: 1;
    background-color: ${theme.colors.background};
    border-top-left-radius: ${theme.sizes[6]}px;
    border-top-right-radius: ${theme.sizes[6]}px;
    margin-top: -${theme.sizes[6]}px;
  `}
`;

export const FormSubContainer = styled.View`
  align-items: center;
`;

export const Text = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    font-size: ${RFValue(theme.sizes[3])}px;
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.secondary};
  `}
`;

export const Styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
  },
});
