import { ForwardRefRenderFunction, forwardRef, useState } from 'react';
import { TextInputProps, TextInput as TextInputRN } from 'react-native';
import { Container, FocusedStyle, Label, TextInputEl } from './styles';

interface InputTextProps extends TextInputProps {
  label: string;
}
const InputBase: ForwardRefRenderFunction<TextInputRN, InputTextProps> = (
  { label, ...rest },
  ref
) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Container>
      <Label allowFontScaling={false}> {label}</Label>
      <TextInputEl
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={isFocused && FocusedStyle}
        allowFontScaling={false}
        ref={ref}
        {...rest}
      />
    </Container>
  );
};

export const TextInput = forwardRef<TextInputRN, InputTextProps>(InputBase);
