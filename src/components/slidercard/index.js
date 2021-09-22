//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import styles from './styles'
// create a component
const SliderCard = ({ item }) => {
    const { title, text, src } = item;
    return (
        <View style={styles.mainCard}>
            <View style={styles.imgContainer}>
                <Image
                    style={styles.image}
                    source={src}
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.textStyle}>{title}</Text>
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.touchableOpacity} onPress={() => console.log}>
                    <Text style={styles.bottonText}>{text}</Text>
                    <Icon size={25} color="#fff" name="chevron-right" />
                </TouchableOpacity>

            </View>
        </View>
    );
};
SliderCard.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
        src: PropTypes.any
    }),
}
//make this component available to the app
export default SliderCard;
