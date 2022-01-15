import styled from 'styled-components';
import { TextField, TextFieldProps } from "@material-ui/core"

export interface TextInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  /**
   * If textbox should be 100% width.
   */
  fullWidth?: boolean

  /**
   * Input label
   */
  label?: string
}

const StyledTextInput = styled(TextField) <{ $fullWidth: boolean }>`
  ${props => props.$fullWidth ? { width: "100%" } : null}
`;

/**
 * Primary text input.
 */
export function TextInput({ fullWidth = true, label, ref, type, ...props }: TextInputProps) {
  return (
    <StyledTextInput
      $fullWidth={fullWidth}
      label={label}
      {...props}
    >

    </StyledTextInput>
  );
}

export default TextInput;
