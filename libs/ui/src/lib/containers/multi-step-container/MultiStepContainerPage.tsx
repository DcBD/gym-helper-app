import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MultiStepContainerPageProps {
  children: React.ReactNode
}

const StyledMultiStepContainerPage = styled.div`

`;

export function MultiStepContainerPage({ children }: MultiStepContainerPageProps) {
  return (
    <StyledMultiStepContainerPage>
      {children}
    </StyledMultiStepContainerPage>
  );
}

export default MultiStepContainerPage;
