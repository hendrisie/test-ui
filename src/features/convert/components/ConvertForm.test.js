import React from 'react';
import { shallow } from 'enzyme';
import ConvertForm from './ConvertForm';
describe('ConvertForm', () => {
  it('whould render correctly', () => {
    const component = shallow(<ConvertForm />);
    expect(component).toMatchSnapshot();
  });
});