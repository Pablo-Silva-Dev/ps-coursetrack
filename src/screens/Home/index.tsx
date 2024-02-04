import { BorderlessButton } from '@components/Buttons/BorderlessButton';
import { GoogleSignInButton } from '@components/Buttons/GoogleSignInButton';
import { PrimaryButton } from '@components/Buttons/PrimaryButton';
import { Container } from './styles';
import { Title } from '@components/Typography/Title';
import { Subtitle } from '@components/Typography/Subtitle';
import { Text } from '@components/Typography/Text';

export function InitialScreen() {
  return (
    <Container>
      <GoogleSignInButton />
      <PrimaryButton title="test" disabled />
      <BorderlessButton title="test" />
      <Title content="Title" />
      <Subtitle content="Subtitle" />
      <Text content="Text" />
    </Container>
  );
}
