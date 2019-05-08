import React from 'react';
import { shallow } from 'enzyme';
import Result from './Result';
describe('Result', () => {
  it('whould render correctly', () => {
    const component = shallow(<Result />);
    expect(component).toMatchSnapshot();
  });
});