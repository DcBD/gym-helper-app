import { render } from '@testing-library/react';

import MultiStepContainer from './MultiStepContainer';

describe('MultiStepContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MultiStepContainer />);
    expect(baseElement).toBeTruthy();
  });
});
