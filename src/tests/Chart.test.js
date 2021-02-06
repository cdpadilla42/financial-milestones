import React from 'react';
import { mount } from 'enzyme';
import Chart from '../components/Chart';
import data from '../library/sampleData';

describe('This works', () => {
  it('accepts data props', () => {
    const wrapper = mount(<Chart data={data} />);
    expect(wrapper.props().data).toEqual(data);
  });

  it.skip('renders with no error message', () => {
    const wrapper = mount(<Chart data={data} />);
    // expect(wrapper.state('error')).toEqual(null);
  });
});
