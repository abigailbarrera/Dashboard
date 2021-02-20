import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
 
import { Editcampaign } from './EditCampaign';

const route = {
  match: {
    params: {
      id: "4"
    }
  }
};
 
describe('Editcampaign', () => {
  it('snapshot renders', () => {
    let tree = create(
        <BrowserRouter>
            <Editcampaign {...route} />
        </BrowserRouter>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders header', () => {
    const wrapper = shallow(<Editcampaign {...route} />);
    const header = "Edit Campaign";

    expect(wrapper.contains(header)).toEqual(true);
  });
});
