import { ForwardRefRenderFunction, forwardRef, useState } from 'react';
import { TextInputProps, TextInput as TextInputRN } from 'react-native';
import { Container, FocusedStyle, Label, TextInputEl } from './styles';
import { useTheme } from 'styled-components/native';

interface InputTextProps extends TextInputProps {
  label: string;
}
const InputBase: ForwardRefRenderFunction<TextInputRN, InputTextProps> = (
  { label, ...rest },
  ref
) => {
  const [isFocused, setIsFocused] = useState(false);

  const theme = useTheme();

  return (
    <Container>
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
