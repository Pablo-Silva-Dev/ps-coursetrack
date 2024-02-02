import { BorderlessButton } from '@components/Buttons/BorderlessButton';
import { GoogleSignInButton } from '@components/Buttons/GoogleSignInButton';
import { PrimaryButton } from '@components/Buttons/PrimaryButton';
import { Container, Text } from './styles';

export function InitialScreen() {
  return (
    <Container>
      <Text>InitialScreen</Text>
      <GoogleSignInButton />
      <PrimaryButton title="test" disabled />
      <BorderlessButton title="test" />
    </Container>
  );
}
