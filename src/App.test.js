import React from 'react';
import { create } from 'react-test-renderer';
 
import { App } from './App';
 
describe('App', () => {
  it('snapshot renders', () => {
    let tree = create(<App />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
