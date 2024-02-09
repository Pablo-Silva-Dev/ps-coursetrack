import { Checkbox, CheckboxProps } from '@components/Miscellaneous/Checkbox';
import { light } from '@themes/light';
import { CSSProperties } from 'styled-components';
import {
  Button,
  ColumnContainer,
  Container,
  LinkText,
  RowContainer,
  Text,
} from './styles';

interface TermsCheckBoxProps extends CheckboxProps {
  style?: CSSProperties;
}

export function TermsCheckBox({ checked, onCheck, style }: TermsCheckBoxProps) {
  return (
    <Container style={style as never}>
      <Checkbox
        checked={checked}
        onCheck={onCheck}
        checkboxStyle={{ marginRight: light.theme.spacings[2] }}
      />
      <ColumnContainer>
        <RowContainer>
          <Text>Concordo com os</Text>
          <Button>
            <LinkText> Termos </LinkText>
          </Button>
          <Text>e</Text>
        </RowContainer>
        <Button>
          <LinkText>Política de Privacidade</LinkText>
        </Button>
      </ColumnContainer>
    </Container>
  );
}
