import { StyleSheet, Dimensions } from 'react-native';
const height = Dimensions.get('window').height;
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#42403a',
        padding: 5,
        height: height,
        justifyContent: 'center',
    },
    main: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        height: height / 2
    },
    touch: {
        justifyContent: 'center',
        height: height / 2
    },
    carousel: {
        flex: 1,
        justifyContent: 'center',
        height: height,
    }
});

//make this component available to the app
export default styles;
