import { Checkbox, CheckboxProps } from '@components/Miscellaneous/Checkbox';
import { light } from '@themes/light';
import { CSSProperties } from 'styled-components';
import {
  ColumnContainer,
  Container,
  LinkText,
  RowContainer,
  Text,
  TouchableOpacity,
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
          <TouchableOpacity>
            <LinkText> Termos </LinkText>
          </TouchableOpacity>
          <Text>e</Text>
        </RowContainer>
        <TouchableOpacity>
          <LinkText>Política de Privacidade</LinkText>
        </TouchableOpacity>
      </ColumnContainer>
    </Container>
  );
}
