import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
 
import { Dashboard } from './Dashboard';
 
describe('Dashboard', () => {
  it('snapshot renders', () => {
    let tree = create(
        <BrowserRouter>
            <Dashboard />
        </BrowserRouter>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders header', () => {
    const wrapper = shallow(<Dashboard />);
    const header = "Dashboard";

    expect(wrapper.contains(header)).toEqual(true);
  });

  it('renders LiveCampaigns', () => {
    const wrapper = shallow(<Dashboard />);

    expect(wrapper.find('LiveCampaigns').exists()).toBeTruthy();
  });

  it('renders OpenCampaigns', () => {
    const wrapper = shallow(<Dashboard />);

    expect(wrapper.find('OpenCampaigns').exists()).toBeTruthy();
  });
});
