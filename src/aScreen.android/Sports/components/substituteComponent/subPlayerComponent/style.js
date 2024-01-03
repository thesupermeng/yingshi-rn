import { StyleSheet, Dimensions } from "react-native";

const subPlayerViewWidth = Dimensions.get('window').width * 0.4;

const styles = StyleSheet.create({
    subPlayerView: {
        flexDirection: "row",
        padding: 'auto',
        width: subPlayerViewWidth,
        paddingBottom: 5
    },
    subPlayerStatisticView: {
        width: subPlayerViewWidth,
        flexDirection: 'row'
    },
    subPlayerStatView: {
        flexDirection: 'row',
        marginRight: 5,
    },
    subPlayerStatisticIcon: {
        width: 12,
        height: 12
    },
    subPlayerStatisticText: {
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 10,
        color: 'white'
    },
    subPlayerDetailView: {
        width: subPlayerViewWidth - 30,
    },
    subPlayerLineView: {
        flexDirection: "row",
        width: '100%'
    },
    subInOutView: {
        flexDirection: "row-reverse",
        marginLeft: 'auto',
        width: "67%",
        flexWrap: "wrap",

    },
    subInnerInOutView: {
        flexDirection: "row",
        marginRight: 5,
    },
    cardStyle:{
        width: 8,
        height: 8,
        position: "absolute",
        bottom: 0
    },
    injuryIconStyle:{
        width: 11,
        height: 11,
        position: "absolute",
        bottom: 0
    },
    defaultSubPlayerView: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#F4F4F4',
        justifyContent: "center",
        alignItems:"center"
    },
    defaultSubPlayerImage:{
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems:"center"
    },
    defaultSubPlayerText:{
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 6,
        color: '#F4F4F4',
    },
    subPlayerImage: {
        width: 30,
        height: 30,
        resizeMode: "contain",
        borderRadius: 15
    },
    subPlayerImageView: {
        width: 30,
        height: 30,
        marginRight: 10
    },
    subArrowImage: {
        width: 8,
        height: 9.5,
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    subInOutText: {
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 10,
        color: 'white',
    },
    playerText: {
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        color: 'white',
    },
    playerNumText: {
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 8,
        color: '#8C97A5',
    },
    subPlayer: {
        marginBottom: 5
    }
})

export default styles;