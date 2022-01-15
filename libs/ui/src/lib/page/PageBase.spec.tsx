import { render } from '@testing-library/react';

import PageBase from './PageBase';

describe('PageBase', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageBase>Should render successfully</PageBase>);
    expect(baseElement).toBeTruthy();
  });
});