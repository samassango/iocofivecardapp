import 'react-native';
import React from 'react';
import SliderCard from '../src/components/slidercard';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const cardTree = renderer.create(<SliderCard item={{ title: 'Get started', text: 'start here', src: require('../src/assets/1.png') }} />);

const mock = jest.fn().mockImplementation(() => {
    return { title: 'Get started', text: 'start here', src: require('../src/assets/1.png') };
});
beforeEach(() => {
    mock.mockClear();
});

it('renders slider card component correctly', () => {
    expect(cardTree).toMatchSnapshot();
});
it('Prop item', () => {
    const testInstance = cardTree.root;
    expect(mock()).toEqual(testInstance.props.item);
})

it('Item object contains title key', () => {
    const testInstance = cardTree.root;
    expect(testInstance.findByType(SliderCard).props.item.title).toBe(mock().title);
    expect(testInstance.props.item.title).toBe('Get started')
})

it('Item object contains text key', () => {
    const testInstance = cardTree.root;
    expect(testInstance.findByType(SliderCard).props.item.text).toBe(mock().text);
    expect(testInstance.props.item.text).toBe('start here');
})

it('Item object contains src key', () => {
    const testInstance = cardTree.root;
    expect(testInstance.findByType(SliderCard).props.item.src).toBe(mock().src);
    expect(testInstance.props.item.src).toBe(require('../src/assets/1.png'));
})
