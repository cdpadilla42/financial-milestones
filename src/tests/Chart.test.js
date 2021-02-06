import React from 'react';
import { mount } from 'enzyme';
import Chart from '../components/Chart';
import data from '../library/sampleData';

describe('This works', () => {
  it('accepts data props', () => {
    const wrapper = mount(<Chart data={data} />);
    expect(wrapper.props().data).toEqual(data);
  });
});
