//import liraries
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
// This component only supports MaterialIcons
const NavigationIcon = ({ onEventTouch, icon, size, color }) => {
    return (
        <TouchableOpacity style={styles.touch} onPress={onEventTouch} >
            <Icon name={icon} size={size ? size : 50} color={color ? color : "#fff"} />
        </TouchableOpacity>
    );
};
NavigationIcon.propTypes = {
    onEventTouch: PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
}
//make this component available to the app
export default NavigationIcon;
