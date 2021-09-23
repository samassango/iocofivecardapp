import 'react-native';
import React from 'react';
import NavigationIcon from '../src/components/navigationicon';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
const mockFn = jest.fn();
const navIconTree = renderer.create(<NavigationIcon icon={"navigate-before"} onEventTouch={mockFn} size={50} color={"#fff"} />);

it('renders navigationicon component correctly', () => {
  expect(navIconTree).toMatchSnapshot();
});

it('Check prop icon matches', () => {
  expect(navIconTree.root.props.icon).toBe("navigate-before");
});

it('Check prop onEventTouch matches', () => {
  expect(navIconTree.root.props.onEventTouch).toBeTruthy();
  expect(mockFn).toEqual(navIconTree.root.props.onEventTouch)
});

it('Prop icon exist', () => {
  const testInstance = navIconTree.root;
  expect(testInstance.props.icon).toBe("navigate-before");
});

it('Prop size exist', () => {
  const testInstance = navIconTree.root;
  expect(testInstance.props.size).toBe(50);
});

it('Prop color', () => {
  const testInstance = navIconTree.root;
  expect(testInstance.props.color).toBe("#fff")
})