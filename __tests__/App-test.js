/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


it('renders correctly', () => {
  renderer.create(<App />);
});

it('match snapshot', () => {
  const appTree = renderer.create(<App />)
  expect(appTree).toMatchSnapshot();
});