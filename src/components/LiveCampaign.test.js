import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
 
import { LiveCampaigns } from './LiveCampaigns';
 
describe('LiveCampaigns', () => {
  it('snapshot renders', () => {
    let tree = create(
        <BrowserRouter>
            <LiveCampaigns />
        </BrowserRouter>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders header', () => {
    const wrapper = shallow(<LiveCampaigns />);
    const tableHeader = "Live (sent) Campaigns";

    expect(wrapper.contains(tableHeader)).toEqual(true);
  });
});
