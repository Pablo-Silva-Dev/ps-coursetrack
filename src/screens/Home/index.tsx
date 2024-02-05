import { BorderlessButton } from '@components/Buttons/BorderlessButton';
import { GoogleSignInButton } from '@components/Buttons/GoogleSignInButton';
import { PrimaryButton } from '@components/Buttons/PrimaryButton';
import { MaskedTextInput } from '@components/Inputs/MaskedTextInput';
import { TextInput } from '@components/Inputs/TextInput';
import { AppVersion } from '@components/Miscellaneous/AppVersion';
import { Subtitle } from '@components/Typography/Subtitle';
import { Text } from '@components/Typography/Text';
import { Title } from '@components/Typography/Title';
import { useState } from 'react';
import { Masks } from 'react-native-mask-input';
import { Container } from './styles';

export function InitialScreen() {
  const [val, setVal] = useState('');

  return (
    <Container>
      <GoogleSignInButton />
      <PrimaryButton title="test" disabled />
      <BorderlessButton title="test" />
      <Title content="Title" />
      <Subtitle content="Subtitle" />
      <Text content={val} />
      <TextInput label="Test" />
      <MaskedTextInput
        mask={Masks.BRL_CPF}
        label="CPF"
        value={val}
        onChangeText={setVal}
      />
      <AppVersion version="1.4.5" />
    </Container>
  );
}
