import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {

        display: 'flex',
        flex: 1,
        height: '100%',
        
        
    },
    lineContainer: {

        
        
        height: '100%',
        width: '100%',
        
        display: 'flex',
        flexDirection: 'column',
        
        alignItems: 'center',
        
        position: 'absolute',

    },
    scrollViewContainer: {
        
        flex: 1,
        
        
    },
    middleline: {
        position: 'relative',
        zIndex: -1,
        flex: 1,
        
        

        width: 2,

        backgroundColor: '#FAC33D',
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
        backgroundColor: '#FAC33D',
        borderRadius: 20,
        alignSelf: 'center',
        
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
        color: 'white'
    },
});

export default styles;