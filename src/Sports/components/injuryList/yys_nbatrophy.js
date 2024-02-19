import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    titleView:{
        padding: 15,
        paddingLeft: 20
    },
    titleText:{
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16
    },
    teamsView: {
        flexDirection: "row",
        paddingBottom: 15
    },
    teamView: {
        flexDirection: "row",
        paddingRight: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '40%'
    },
    teamIcon: {
        width: 32,
        height: 32,
        marginRight: 10,
        resizeMode: "contain"
    },
    teamText: {
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 14,
        color: '#FFFFFF',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    playersView: {
        flexDirection: "row",
    },
    playerView: {
        paddingRight: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '40%',
    },
    teamLogoText: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 'auto',
        marginTop: 'auto',
        color: 'white',
        fontSize: 20,
        fontFamily: '045-SSYiFeiTi',
    },
});

export default styles;