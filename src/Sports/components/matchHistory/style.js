import {StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    titleText: {
        fontFamily: 'PingFang SC',
        fontWeight: '600',
        fontSize: 16,
        fontStyle: 'normal',
        color: 'white',
        marginTop: 22,
        marginLeft: 15
    },
    historyTitleText: {
        fontFamily: 'PingFang SC',
        fontWeight: '400',
        fontSize: 12,
        fontStyle: 'normal',
        color: 'white',
        textAlign: 'center',
    },
    historyDateTimeTitle: {
        height: 27,
        width: width * 0.3,
        backgroundColor: '#181818',
        justifyContent: 'center',
    },
    historyHomeAwayTitle: {
        height: 27,
        width: width * 0.25,
        backgroundColor: '#181818',
        justifyContent: 'center',
    },
    historyScoreTitle: {
        height: 27,
        width: width * 0.2,
        backgroundColor: '#181818',
        justifyContent: 'center',
    },    
    titleDiv: {
        width: width
    },
    historyTitle: {
        flexDirection: 'row'
    },
    historyContent: {
        flexDirection: 'row'
    },
    historyDateTime: {
        height: 44,
        width: width * 0.3,
        backgroundColor: '#1D2023',
        justifyContent: 'center',
    },
    historyDateTimeGrey: {
        height: 44,
        width: width * 0.3,
        backgroundColor: '#181818',
        justifyContent: 'center',
    },
    historyHomeAway: {
        height: 44,
        width: width * 0.25,
        backgroundColor: '#1D2023',
        justifyContent: 'center',
    },
    historyHomeAwayGrey: {
        height: 44,
        width: width * 0.25,
        backgroundColor: '#181818',
        justifyContent: 'center',
    },
    historyScore: {
        height: 44,
        width: width * 0.2,
        backgroundColor: '#1D2023',
        justifyContent: 'center',
    },
    historyScoreGrey: {
        height: 44,
        width: width * 0.2,
        backgroundColor: '#181818',
        justifyContent: 'center',
    },  
    historyHomeAwayText: {
        fontFamily: 'PingFang SC',
        fontWeight: '500',
        fontSize: 12,
        fontStyle: 'normal',
        color: 'white',
        textAlign: 'center',
        width: '80%',
    },
    matchStatistic: {
        height: 90,
        flexDirection: 'row',
    },
    iconDiv: {
        justifyContent: 'center',
        width: width * 0.15
    },
    iconBasketballDiv: {
        flexDirection: 'row', 
        //justifyContent: 'center', 
        alignItems: 'center'
    },
    basketballDiv: {
        justifyContent: 'center',
        width: width * 0.8,
    },
    statisticDiv: {
        justifyContent: 'center',
        width: width * 0.325,
    },
    matchDiv: {
        justifyContent: 'center',
        width: width * 0.2
    },
    matchTable: {
        width: 56,
        height: 54,
        borderRadius: 2,
        borderStyle: 'solid',
        borderColor: '#181818',
        borderWidth: 1
    },
    matchTableColumn1: {
        width: 54,
        height: 25,
        backgroundColor: '#181818',
        justifyContent: 'center',
    },
    matchTableColumn2: {
        width: 54,
        height: 27,
        justifyContent: 'center',
        backgroundColor: '#1D2023'
    },
    matchTableColumnText1: {
        fontFamily: 'PingFang SC',
        fontWeight: '400',
        fontSize: 12,
        fontStyle: 'normal',
        color: 'white',
        textAlign: 'center',
    },
    matchTableColumnText2: {
        fontFamily: 'PingFang SC',
        fontWeight: '600',
        fontSize: 12,
        fontStyle: 'normal',
        color: 'white',
        textAlign: 'center',
    },
    matchImage: {
        width: 42,
        height: 42,
        marginLeft: 20,
        resizeMode: 'contain',
    },
    matchBasketballImage: {
        width: 28,
        height: 28,
        marginLeft: 20,
        resizeMode: 'contain',
    },
    teamBasketballLogoText: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 'auto',
        marginTop: 'auto',
        color: 'white',
        fontSize: 18,
        fontFamily: '045-SSYiFeiTi',
    },
    teamLogoText: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 'auto',
        marginTop: 'auto',
        color: 'white',
        fontSize: 30,
        fontFamily: '045-SSYiFeiTi',
    },
    goalConcededTotal: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    goalConcededTotalText1: {
        fontFamily: 'PingFang SC',
        fontWeight: '400',
        fontSize: 14,
        fontStyle: 'normal',
        color: 'white',
        marginRight: 5
    },
    goalConcededTotalText2: {
        color: '#FFA100',
        fontFamily: 'PingFang SC',
        fontWeight: '600',
        fontSize: 22,
        fontStyle: 'normal',

    },
    goalConcededData: {
        
    },
    goalConcededDataText: {
        fontFamily: 'PingFang SC',
        fontWeight: '400',
        fontSize: 12,
        fontStyle: 'normal',
        color: '#8C97A5',
    },
    winRateView: {
        flexDirection: 'row', 
        marginLeft: 20,
        marginTop: 10,
    },
    winRateTotalText1: {
        fontFamily: 'PingFang SC',
        fontWeight: '400',
        fontSize: 14,
        fontStyle: 'normal',
        color: 'white',
        marginRight: 5
    },
    winRateTotalText2: {
        color: '#FFA100',
        fontFamily: 'PingFang SC',
        fontWeight: '600',
        fontSize: 14,
        fontStyle: 'normal',
    },
    winRateDataText: {
        fontFamily: 'PingFang SC',
        fontWeight: '400',
        fontSize: 14,
        fontStyle: 'normal',
        color: '#8C97A5',
        marginLeft: 10
    },
    statisticInnerDiv: {
        alignSelf: 'flex-start',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    historyDateTimeText:{
        fontFamily: 'PingFang SC',
        fontWeight: '400',
        fontSize: 10,
        fontStyle: 'normal',
        color: 'white',
        //textAlign: 'center',
        marginLeft: 15
    },
    historyScoreTextWin: {
        fontFamily: 'PingFang SC',
        fontWeight: '500',
        fontSize: 14,
        fontStyle: 'normal',
        color: '#FF6835',
        textAlign: 'center'
    },
    historyScoreTextLost: {
        fontFamily: 'PingFang SC',
        fontWeight: '500',
        fontSize: 14,
        fontStyle: 'normal',
        color: '#FAC33D',
        textAlign: 'center'
    },
    historyScoreTextDraw: {
        fontFamily: 'PingFang SC',
        fontWeight: '500',
        fontSize: 14,
        fontStyle: 'normal',
        color: 'white',
        textAlign: 'center'
    },
    historyScoreText: {
        fontFamily: 'PingFang SC',
        fontWeight: '400',
        fontSize: 10,
        fontStyle: 'normal',
        color: '#8C97A5',
        textAlign: 'center'
    },
    titleBasketballText: {
        fontFamily: 'PingFang SC',
        fontWeight: '600',
        fontSize: 14,
        fontStyle: 'normal',
        color: 'white',
        marginLeft: 10
    }
});

export default styles;
