import 'react-native';
import React from 'react';
import Main from '../src/components/main';
import Carousel from 'react-native-snap-carousel';
import { Text } from 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

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