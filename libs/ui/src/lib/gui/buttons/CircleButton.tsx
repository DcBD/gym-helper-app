import styled from 'styled-components';
import { Button, TextField, TextFieldProps } from "@material-ui/core"
import { Typography } from '@mui/material';

export interface CircleButtonProps {
    className?: string
    children?: React.ReactNode
    selected?: boolean
}


const StyledButton = styled(Button) <{ $selected: boolean }>`
    border-radius: 50% !important;
    height:60px;
    width:55px;
    
    ${({ $selected }) => {
        if ($selected) {
            return {
                borderColor: "blue !important",
                fontWeight: "bolder !important",
                bottom: "10px"
            }
        } else {
            return {}
        }

    }}
`

const Label = styled.div`
    position: absolute;
`;

/**
 * Primary text input.
 */
export function CircleButton({ className, children, selected = false }: CircleButtonProps) {
    return (
        <StyledButton variant='outlined' className={className} $selected={selected}>
            <Label>
                <Typography variant='h6'>{children}</Typography>
            </Label>
        </StyledButton>
    );
}

export default CircleButton;
