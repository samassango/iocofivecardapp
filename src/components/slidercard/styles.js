import { StyleSheet, Dimensions } from 'react-native';
const height = Dimensions.get('window').height / 2;
const width = Dimensions.get('window').width;
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainCard: {
        width: 280,
        backgroundColor: '#322e37',
        borderRadius: 10,
        height: height,
        padding: 20,
        shadowColor: '#f5c911',
        shadowOffset: { width: 3, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 20,
        borderWidth: 0,
        borderBottomWidth: 5,
        borderBottomColor: '#f5c911',
    },
    textStyle: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold'
    },
    image: {
        height: 130,
        width: 130,
    },
    imgContainer: {
        padding: 20,
        alignItems: 'center',
    },
    content: {
        width: 250,
        alignItems: 'center',
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 60,
        width: 250,
        alignItems: 'center',
    },
    bottonText: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold'
    },
    touchableOpacity: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
        paddingLeft: 40,
    }
});

//make this component available to the app
export default styles;
