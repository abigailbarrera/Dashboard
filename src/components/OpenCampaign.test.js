import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
 
import { OpenCampaigns } from './OpenCampaigns';
 
describe('OpenCampaigns', () => {
  it('snapshot renders', () => {
    let tree = create(
        <BrowserRouter>
            <OpenCampaigns />
        </BrowserRouter>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders header', () => {
    const wrapper = shallow(<OpenCampaigns />);
    const tableHeader = "Open (unsent) Campaigns";

    expect(wrapper.contains(tableHeader)).toEqual(true);
  });
});
