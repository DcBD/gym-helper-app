import { Story, Meta } from '@storybook/react';
import { PageContainer, PageContainerProps } from './PageContainer';

export default {
  component: PageContainer,
  title: 'PageContainer',
} as Meta;

const Template: Story<PageContainerProps> = (args) => <div style={{ backgroundColor: '#f0f2f5', padding: 30 }}>
  <PageContainer {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatum explicabo iusto! Impedit doloribus maiores numquam reprehenderit quae deleniti. Quo cumque praesentium officia qui minus nihil inventore dicta odit sunt!
  </PageContainer>
</div>;

export const Primary = Template.bind({});
Primary.args = {
  fullSize: false,
};
