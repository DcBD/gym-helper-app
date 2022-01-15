import { Story, Meta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { TextInput } from './TextInput';

export default {
  component: TextInput,
  title: 'TextInput',
  argTypes: {
    value: {
      control: {
        disable: true
      }
    }
  }
} as Meta;

const Template: ComponentStory<typeof TextInput> = (args) => {
  const [value, setValue] = useState(args.value ?? '')
  return (<TextInput {...args} onChange={(e, value) => setValue(value)} value={value} />)
};

export const Primary = Template.bind({});
Primary.args = {
  fullWidth: false,
  label: "Primary text input",
};
