import { StyleSheet, Dimensions } from 'react-native';
const height = Dimensions.get('window').height;
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    touch: {
        justifyContent: 'center',
        height: height / 2
    }
});

//make this component available to the app
export default styles;
