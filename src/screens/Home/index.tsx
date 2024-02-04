import { BorderlessButton } from '@components/Buttons/BorderlessButton';
import { GoogleSignInButton } from '@components/Buttons/GoogleSignInButton';
import { PrimaryButton } from '@components/Buttons/PrimaryButton';
import { TextInput } from '@components/Inputs/InputText';
import { Subtitle } from '@components/Typography/Subtitle';
import { Text } from '@components/Typography/Text';
import { Title } from '@components/Typography/Title';
import { Container } from './styles';

export function InitialScreen() {
  return (
    <Container>
      <GoogleSignInButton />
      <PrimaryButton title="test" disabled />
      <BorderlessButton title="test" />
      <Title content="Title" />
      <Subtitle content="Subtitle" />
      <Text content="Text" />
      <TextInput label="Test" />
      <TextInput label="Test2" />
    </Container>
  );
}
