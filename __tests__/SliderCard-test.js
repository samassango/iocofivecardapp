import 'react-native';
import React from 'react';
import SliderCard from '../src/components/slidercard';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders slider card component correctly', () => {
    const cardTree = renderer.create(<SliderCard item={{ title: 'Get started', text: 'start here', src: require('../src/assets/1.png') }} />);
    expect(cardTree).toMatchSnapshot();
});
