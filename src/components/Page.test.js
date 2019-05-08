import React from 'react';
import { shallow, render } from 'enzyme';
import Page from './Page';
describe('Page', () => {
  it('whould render correctly', () => {
    const component = shallow(<Page />);
    expect(component).toMatchSnapshot();
  });

  it('whould render correctly given children', () => {
    const component = render(<Page>test</Page>);
    expect(component).toMatchSnapshot();
  });
});