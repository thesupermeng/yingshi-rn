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
        color: '#FFFFFF'
    },
    subPlayerDetailView: {
        width: subPlayerViewWidth - 30 - 30,
    },
    subPlayerLineView: {
        marginTop: 5,
        flexDirection: "row",
        width: '100%',
    },
    injuryIconStyle:{
        width: 11,
        height: 11,
        marginBottom: 'auto',
        marginTop: 'auto',
        resizeMode: 'contain'
    },
    defaultSubPlayerView: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems:"center"
    },
    defaultSubPlayerImage:{
        width: 38,
        height: 38,
        justifyContent: "center",
        alignItems:"center"
    },
    defaultSubPlayerText:{
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 9,
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
    playerText: {
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        color: '#FFFFFF',
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