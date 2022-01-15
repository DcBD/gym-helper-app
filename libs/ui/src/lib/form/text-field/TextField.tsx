import { Input, InputProps } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TextFieldProps {
  /**
   * The input content value.
   */
  value?: string

  /**
   * The size of the input box.
   */
  size?: SizeType

  /**
   * Callback when user input.
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;

}

const Container = styled.div`

`;

export function TextField(props: TextFieldProps) {
  return (
    <Container>
      <Input
        type="text"
        {...props}
      />
    </Container>
  );
}

export default TextField;
