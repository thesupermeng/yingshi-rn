import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    showLess: {
        height: (43 * 5),
        overflow: "hidden"
    },
    showButton: {
        flexDirection: "row"
    },
    showButtonText: {
        fontFamily: "PingFang SC",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: '400',
        color: '#414141'
    },
    showButtonIcon: {
        width: 10,
        height: 5,
        marginBottom: 'auto',
        marginTop: 'auto',
        marginLeft: 5
    },
    infoImage: {
        width: 15,
        height: 15,
        resizeMode: "contain",
        marginRight: 5
    },
    infoText: {
        fontFamily: "PingFang SC",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: '400',
        color: '#8C97A5'
    },
    bottomView: {
        flexDirection: "row",
        marginLeft: 15,
        marginRight: 10,
        marginBottom: 15,
        marginTop: 10
    },
    bottomRightView: {
        flexDirection: "row",
        marginLeft: 'auto',
    },
    teamImage:{
        height: 20,
        width: 20,
        resizeMode: 'contain'
    },
    teamView: {
        flexDirection: 'row',
        marginTop: 22,
        marginLeft: 10
    },
    teamText: {
        fontFamily: "PingFang SC",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: '600',
        color: '#FFFFFF',
        marginLeft: 5
    },
    titleText: {
        fontFamily: "PingFang SC",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: '600',
        color: '#FFFFFF',
    }
})

export default styles;