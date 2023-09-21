import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    goalDistributionTitleView: {
        flexDirection: "row",
        height: 22,
        marginBottom:10,
        marginTop:10
    },
    goalDistributionTitle:{
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        color: '#FFFFFF',
        marginLeft: 15
    },
    goalDistributionSubTitle:{
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        color: '#8C97A5',
        marginTop: 'auto',
        marginLeft: 5
    },
    goalDistributionView: {
        flexDirection: "row",
        width: '100%',
        paddingLeft: 15,
        marginTop: 5
    },
    goalDistributionTeamView: {
        width: '35%',
        flexDirection: "row"
    },
    goalDistributionTimeView: {
        width: '32%',
        flexDirection: "row",
    },
    goalDistributionTimeView1: {
        width: '30%',
        flexDirection: "row",
        marginRight: 5
    },
    goalDistributionHomeView: {
        width: '30%',
        flexDirection: "row",
        marginRight: 5,
        backgroundColor: '#FFB90D'
    },
    goalDistributionAwayView: {
        width: '30%',
        flexDirection: "row",
        marginRight: 5,
        backgroundColor: '#FF6835'
    },
    goalDistributionTime:{
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 9,
        color: '#8C97A5',
        width: "30%",
    },
    goalDistributionHalfTime:{
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 9,
        color: '#8C97A5',
    },
    goalDistributionTimeRight:{
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 9,
        color: '#8C97A5',
        width: "33%",
        textAlign: "right",
    },
    goalDistributionHome: {
        height: 22,
        width: "33%",
        backgroundColor: "#FFB90D"
    },
    goalDistributionHomeHighest: {
        height: 22,
        width: "33%",
        backgroundColor: "#FFCB4E"
    },
    goalDistributionAway: {
        height: 22,
        width: "33%",
        backgroundColor: "#FF6835"
    },
    goalDistributionAwayHighest: {
        height: 22,
        width: "33%",
        backgroundColor: "#FF7E53",
    },
    goalDistributionText: {
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        color: '#FFFFFF',
        textAlign: "center",
        marginTop: "auto",
        marginBottom: "auto"
    },
    teamIcon: {
        width: 18,
        height: 18,
        resizeMode: "contain",
        marginRight: 10,
        marginTop: "auto",
        marginBottom: "auto"
    },
    teamLogoText: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 'auto',
        marginTop: 'auto',
        color: 'white',
        fontSize: 13,
        fontFamily: '045-SSYiFeiTi',
    },
    teamNameText: {
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 10,
        color: '#FFFFFF',
        marginTop: "auto",
        marginBottom: "auto",
        width: "50%"
    },
    homeTotalText: {
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        color: '#FAC33D',
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: "auto",
        marginRight: 5
    },
    awayTotalText: {
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        color: '#FF6835',
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: "auto",
        marginRight: 5
    }
});

export default styles;