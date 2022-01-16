import { Content } from 'antd/lib/layout/layout';
import styled from 'styled-components';
import { containerFullSize } from '../../styled-helpers/sizing';


export interface PageContainerProps {
  /**
   * Page contents.
   */
  children?: React.ReactNode

  /**
   * Additional classes for styling.
   */
  className?: string

  /**
   * If container should have height:`100vh` and width:`100%`.
   */
  fullSize?: boolean
}

const StyledPageContainer = styled(Content) <{ $fullSize: boolean }>`
  background: #fff;
  padding:20px;
  ${({ $fullSize }) => containerFullSize($fullSize)}
`;

/**
 * Container that displays content for user.
 */
export function PageContainer({ children, className, fullSize = false }: PageContainerProps) {
  return (
    <StyledPageContainer className={className} $fullSize={fullSize}>
      <Content>
        {children}
      </Content>
    </StyledPageContainer>
  );
}

export default PageContainer;
