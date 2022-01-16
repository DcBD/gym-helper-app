import { render } from '@testing-library/react';

import PageContainer from './PageContainer';

describe('PageContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageContainer>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sit doloribus et quisquam voluptatum soluta ad non, dolore blanditiis a dolor sed aliquid corrupti quam, delectus velit repellat recusandae atque?
    </PageContainer>);
    expect(baseElement).toBeTruthy();
  });
});
