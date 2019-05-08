import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';
describe('NavBar', () => {
  it('whould render correctly', () => {
    const component = shallow(<NavBar />);
    expect(component).toMatchSnapshot();
  });

  it('whould render correctly when title is set', () => {
    const component = shallow(<NavBar title={'Test'} />);
    expect(component).toMatchSnapshot();
  });
});
