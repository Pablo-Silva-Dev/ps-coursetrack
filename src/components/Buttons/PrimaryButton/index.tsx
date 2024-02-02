import { IStyledTheme } from '@interfaces/theme';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { CSSProperties, useTheme } from 'styled-components';
import { Container, Title } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  disabled?: boolean;
  loading?: boolean;
  bgColor?: string;
  buttonTextStyle?: CSSProperties;
}

export function PrimaryButton({
  disabled,
  loading,
  bgColor,
  buttonTextStyle,
  title,
  ...rest
}: ButtonProps) {
  const theme = useTheme() as unknown as IStyledTheme;
  const DISABLED_BUTTON_OPACITY = 0.8;
  return (
    <Container
      activeOpacity={DISABLED_BUTTON_OPACITY}
      disabled={disabled}
      bgColor={bgColor}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator size="small" color={theme.colors.primaryVariant} />
      ) : (
        <Title allowFontScaling={false} style={buttonTextStyle as never}>
          {title}
        </Title>
      )}
    </Container>
  );
}
