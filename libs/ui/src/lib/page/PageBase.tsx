import { Card } from "@mui/material";
import styled from "styled-components";


const StyledPageBase = styled(Card)({
  margin: 4,
  padding: 5,
  minHeight: "100vh",
})

export interface PageBaseProps {
  /**
   * Content displayed inside of the page component.
   */
  children: React.ReactNode
}


/**
 * Base UI component for page container.
 */
export function PageBase({ children }: PageBaseProps) {
  return (
    <StyledPageBase>
      {children}
    </StyledPageBase>
  );
}

export default PageBase;
