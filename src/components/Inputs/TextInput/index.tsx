import { ForwardRefRenderFunction, forwardRef, useState } from 'react';
import { TextInputProps, TextInput as TextInputRN } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Container, FocusedStyle, Label, TextInputEl } from './styles';
import { CSSProperties } from 'styled-components';

interface InputTextProps extends TextInputProps {
  label: string;
  containerStyle?: CSSProperties;
}
const InputBase: ForwardRefRenderFunction<TextInputRN, InputTextProps> = (
  { label, containerStyle, ...rest },
  ref
) => {
  const [isFocused, setIsFocused] = useState(false);

  const theme = useTheme();

  return (
    <Container style={containerStyle as never}>
      <Label allowFontScaling={false}> {label}</Label>
      <TextInputEl
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={isFocused && FocusedStyle}
        allowFontScaling={false}
        //@ts-ignore
        placeholderTextColor={theme.colors.absolute_gray}
        ref={ref}
        {...rest}
      />
    </Container>
  );
};

export const TextInput = forwardRef<TextInputRN, InputTextProps>(InputBase);
