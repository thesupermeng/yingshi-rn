import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {

        display: 'flex',
        flex: 1,
        height: '100%',
        // paddingBottom: 100,
        // marginTop: 100, //Testing
    },
    lineContainer: {

        // left: '50%',
        // alignSelf: 'center',
        height: '100%',
        width: '100%',
        // flex: 1,
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        // marginHorizontal: 5,
        position: 'absolute',

    },
    scrollViewContainer: {
        // height: '90%',
        flex: 1,
        // width: '100%',
        // backgroundColor: 'green',
    },
    middleline: {
        position: 'relative',
        zIndex: -1,
        flex: 1,
        // paddingBottom: 10,
        // height: '100%',

        width: 2,

        backgroundColor: '#FFA100',
        display: 'flex',
        justifyContent: 'space-between',
    },
    smallIcon: {
        width: 19,
        height: 15,
        margin: 10,
    },
    smallOrangeCircle: {
        width: 7,
        height: 7,
        backgroundColor: '#FFA100',
        borderRadius: 20,
        alignSelf: 'center',
        // position: 'absolute',
    },
    switchContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingVertical: 15,
        width: '96%',
        alignItems: 'center',
        zIndex: 1,
    },
    switchStyle: {
        transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    },
    switchTitle: {
        fontWeight: '400',
        fontSize: 15,
        textAlign: 'center',
    },
});

export default styles;