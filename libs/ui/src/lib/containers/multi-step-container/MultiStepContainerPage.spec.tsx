import { render } from '@testing-library/react';

import MultiStepContainerPage from './MultiStepContainerPage';

describe('MultiStepContainerPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MultiStepContainerPage />);
    expect(baseElement).toBeTruthy();
  });
});
