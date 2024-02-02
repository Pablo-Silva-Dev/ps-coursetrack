import { PrimaryButton } from '@components/Buttons/PrimaryButton';
import { Container, Text } from './styles';

export function InitialScreen() {
  return (
    <Container>
      <Text>InitialScreen</Text>
      <PrimaryButton title="test" />
    </Container>
  );
}
