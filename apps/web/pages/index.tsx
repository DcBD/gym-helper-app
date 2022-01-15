import { TextField } from '@gym-helper-app/ui';
import styled from 'styled-components';

const StyledPage = styled.div`
  padding:5rem;
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <TextField />
    </StyledPage>
  );
}

export default Index;
