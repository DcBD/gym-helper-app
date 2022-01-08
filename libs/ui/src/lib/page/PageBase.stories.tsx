import { Story, Meta, ComponentStory } from '@storybook/react';
import { PageBase } from './PageBase';

export default {
  component: PageBase,
  title: 'PageBase',
} as Meta;

const Template: ComponentStory<typeof PageBase> = (args) => <PageBase {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorum veritatis ipsa unde alias cumque. Necessitatibus maxime nam a facilis, reiciendis cupiditate, labore unde explicabo deleniti consequatur fugit, qui beatae?</div>
};
