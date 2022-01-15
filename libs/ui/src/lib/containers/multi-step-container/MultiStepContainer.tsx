import { Button } from '@mui/material';

import styled from 'styled-components';
import useMultiStepCounter from '../../hooks/useMultiStepCounter';


export interface MultiStepContainerProps {
  children: React.ReactNode[]
}

const StyledMultiStepContainer = styled.div`

`;

export function MultiStepContainer({ children }: MultiStepContainerProps) {


  const [page, next, prev] = useMultiStepCounter(0, children.length - 1, 0)



  return (
    <StyledMultiStepContainer>
      {children[page]}
      <Button onClick={prev}>
        PREV
      </Button>
      <Button onClick={next}>
        NEXT
      </Button>
      <Button type='submit'>Submit</Button>
    </StyledMultiStepContainer>
  );
}

export default MultiStepContainer;
