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
  children: React.ReactNode,

  /**
   * Additional class for styling
   */
  className?: string
}


/**
 * Base UI component for page container.
 */
export function PageBase({ children, className }: PageBaseProps) {
  return (
    <StyledPageBase className={className}>
      {children}
    </StyledPageBase>
  );
}

export default PageBase;
