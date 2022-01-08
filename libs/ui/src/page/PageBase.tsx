import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PageBaseProps {}

const StyledPageBase = styled.div`
  color: pink;
`;

export function PageBase(props: PageBaseProps) {
  return (
    <StyledPageBase>
      <h1>Welcome to PageBase!</h1>
    </StyledPageBase>
  );
}

export default PageBase;
