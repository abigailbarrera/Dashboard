import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
 
import { Addcampaign } from './AddCampaign';
 
describe('Addcampaign', () => {
  it('snapshot renders', () => {
    let tree = create(
        <BrowserRouter>
            <Addcampaign />
        </BrowserRouter>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders header', () => {
    const wrapper = shallow(<Addcampaign />);
    const header = "Add Campaign";

    expect(wrapper.contains(header)).toEqual(true);
  });
});
