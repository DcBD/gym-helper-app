import { Button } from 'antd';
import useMultiStepCounter from 'libs/hooks/src/lib/useMultiStepCounter';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MultiStepContainerProps {
  /**
   * Additional styling.
   */
  className?: string

  /**
   * Pages, each child is a one page.
   */
  children: React.ReactNode[],

  /**
   * The page number to be visible as default.
   */
  defaultPage?: number

  /**
   * If should show all fields.
   */
  showAll?: boolean

  /**
   * If should render all but visible only specified page.
   */
  renderAll?: boolean
}

const StyledMultiStepContainer = styled.div`

`;

const Hidden = styled.div`
  display:none;
`

const ButtonsContainer = styled.div``;

const PagesContainer = styled.div``

export function MultiStepContainer({ className, children, defaultPage = 0, showAll = false, renderAll = false }: MultiStepContainerProps) {

  const [page, next, prev] = useMultiStepCounter(0, children.length - 1, defaultPage)

  return (
    <StyledMultiStepContainer className={className}>
      <PagesContainer>
        {
          // TODO: refractor, ugly :)
          showAll ? children : (renderAll ? children.map((child, key) => key === page ? child : <Hidden key={key}>{child}</Hidden>) : children[page])
        }
      </PagesContainer>
      <ButtonsContainer>
        <Button onClick={prev}>
          PREV
        </Button>
        <Button onClick={next}>
          NEXT
        </Button>
      </ButtonsContainer>
    </StyledMultiStepContainer>
  );
}

export default MultiStepContainer;
