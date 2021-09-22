//import liraries
import React from 'react';
import {
    View, SafeAreaView,
    Dimensions
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import styles from './styles'
import SliderCard from '../slidercard';
import NavigationIcon from '../navigationicon';
// create a component
const Main = () => {
    const carouselItems = [{
        title: "Get a device",
        text: "START HERE",
        src: require('../../assets/1.png')
    },
    {
        title: "Mobile internet",
        text: "START HERE",
        src: require('../../assets/2.png')
    },
    {
        title: "Home internet",
        text: "START HERE",
        src: require('../../assets/3.png')
    },
    {
        title: "Add a phone-line",
        text: "START HERE",
        src: require('../../assets/4.png')
    },
    {
        title: "Upgrade",
        text: "START HERE",
        src: require('../../assets/5.png')
    },
    ];
    const slider_width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height / 2;
    let carouselRef;
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.main}>
                <NavigationIcon onEventTouch={() => carouselRef.snapToPrev()} icon={"navigate-before"} />
                <View style={styles.carousel}>
                    <Carousel
                        layout={"default"}
                        ref={ref => carouselRef = ref}
                        data={carouselItems}
                        sliderWidth={slider_width}
                        itemWidth={slider_width}
                        renderItem={({ item, index }) => <SliderCard item={item} />}
                    />
                </View>
                <NavigationIcon onEventTouch={() => carouselRef.snapToNext()} icon={"navigate-next"} />
            </View>
        </SafeAreaView>
    );
};

//make this component available to the app
export default Main;
