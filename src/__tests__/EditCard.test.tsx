import React from 'react';
import { shallow } from 'enzyme';

import EditCard from '../components/EditCard';

import providerWrapper from '../testsHelper';

describe('<EditCard />', () => {
  it('renders', () => {
    const wrapper = shallow(providerWrapper(<EditCard />)).dive();
    expect(wrapper.find('div'));
  });
});
