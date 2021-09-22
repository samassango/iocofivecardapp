import 'react-native';
import React from 'react';
import NavigationIcon from '../src/components/navigationicon';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
const mockFn = jest.fn();
const navIconTree = renderer.create(<NavigationIcon icon={"navigate-before"} onEventTouch={mockFn} />);

it('renders navigationicon component correctly', () => {
  expect(navIconTree).toMatchSnapshot();
});

it('Check prop icon matches', () => {
  expect(navIconTree.root.props.icon).toBe("navigate-before");
});

it('Check prop onEventTouch matches', () => {
  expect(navIconTree.root.props.onEventTouch).toBeTruthy();
});

// it('Event triggered on icon click', () => {
//   navIconTree.toJSON().props.onPress();
//   expect(mockFn).toBeCalled();
// })