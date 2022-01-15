import { createArray } from '@gym-helper-app/tools';
import { CircleButton, flexCentered, MultiStepContainer, MultiStepContainerPage, PageBase, TextInput } from '@gym-helper-app/ui';
import { Slider, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const StyledPage = styled(PageBase)`
    ${flexCentered()}
`;

const FormContainer = styled.div`
    width: 50vw;
    ${flexCentered()}

`;


interface FormFields {
    name: string,
    sets: number
    reps: number[]
}

const initialFormValues: FormFields = {
    name: "Test",
    sets: 1,
    reps: []
}

export function New() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => console.log(data);

    <input />
    return (
        <StyledPage>

            <FormContainer>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <MultiStepContainer>
                        <MultiStepContainerPage>
                            <TextInput {...register("name")} />
                        </MultiStepContainerPage>
                        <MultiStepContainerPage>
                            b
                        </MultiStepContainerPage>
                    </MultiStepContainer>
                </form>
            </FormContainer>
        </StyledPage>
    );
}


export default New;
