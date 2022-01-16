import { containerCentered, MultiStepContainer, PageContainer, TextField } from '@gym-helper-app/ui';

import styled from 'styled-components';
import { Form, Input, Button, Radio, Rate, Slider, Space, Card } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useForm } from 'antd/lib/form/Form';
import Title from 'antd/lib/typography/Title';
/* eslint-disable-next-line */
export interface CreateProps { }


type Inputs = {
  name: string,
};


const initialValues: Inputs = {
  name: "",
}


const FormContainer = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;


`;

const StyledForm = styled(Form)`
  width: 25vw;
`

export function Create(props: CreateProps) {

  const [form] = useForm();

  const handleSubmit = (formData: Inputs) => {
    console.log(formData)
  }

  return (
    <PageContainer fullSize>

      <FormContainer>
        <Card>
          <StyledForm form={form} initialValues={initialValues} layout="vertical" name="create_workout" onFinish={handleSubmit} >
            <Form.Item
              label="Workout name"
              name="name"
            >
              <TextField placeholder='Type workout name here...' />
            </Form.Item>

            <Form.Item>
              <Button block type="primary" onClick={() => form.submit()}>Create</Button>
            </Form.Item>

          </StyledForm>
        </Card>
      </FormContainer>
    </PageContainer>
  );
}

export default Create;
