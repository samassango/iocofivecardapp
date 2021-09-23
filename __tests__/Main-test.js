import 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { Text } from 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import Main from '../src/components/main';
import NavigationIcon from '../src/components/navigationicon';
var carouselRef;

it('renders main coimponent correctly', () => {
    const mainTree = renderer.create(<Main />);
    expect(mainTree).toMatchSnapshot();
});

it('renders the carousel correctly', () => {
    var carouselRef;
    const carousel = renderer.create(<Carousel
        layout={"default"}
        ref={ref => carouselRef = ref}
        data={[{ title: 'item 1' }, { title: 'item 2' }, { title: 'item 3' }]}
        sliderWidth={200}
        itemWidth={200}
        renderItem={({ item, index }) => <Text>{item.title}</Text>}
    />).toJSON();

    expect(carousel).toMatchSnapshot();
});
const mockFn = jest.fn();
const navIconTree = renderer.create(<NavigationIcon icon={"navigate-before"} onEventTouch={mockFn} size={50} color={"#fff"} />);

it('renders navigationicon component correctly', () => {
    expect(navIconTree).toMatchSnapshot();
});

const carouselTree = renderer.create(<Carousel
    layout={"default"}
    ref={ref => carouselRef = ref}
    data={[{ title: 'item 1' }, { title: 'item 2' }, { title: 'item 3' }]}
    sliderWidth={200}
    itemWidth={200}
    renderItem={({ item, index }) => <Text>{item.title}</Text>}
/>);

const mock = jest.fn().mockImplementation(() => {
    return [{ title: 'item 1' }, { title: 'item 2' }, { title: 'item 3' }];
});

it('renders correct layout prop', () => {
    const testInstance = carouselTree.root;
    expect(testInstance.props.layout).toBe("default");
})

it('renders correct data', () => {
    const testInstance = carouselTree.root;
    expect(testInstance.props.data).toEqual(mock());
})

it('renders correct slider width size', () => {
    const testInstance = carouselTree.root;
    expect(testInstance.props.sliderWidth).toEqual(200);
})

it('renders correct item width size', () => {
    const testInstance = carouselTree.root;
    expect(testInstance.props.itemWidth).toEqual(200);
})