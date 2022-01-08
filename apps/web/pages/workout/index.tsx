import { PageBase } from '@gym-helper-app/ui';
import styled from 'styled-components';

const StyledPage = styled(PageBase)``;

interface IndexProps { text: string }
export function Index({ text }: IndexProps) {
    return (
        <StyledPage>
            {text}
        </StyledPage>
    );
}


export default Index;
