import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    matchStatisticView: {
        flexDirection: "row",
        height: 37,
    },
    highStatisticText: {
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 13,
        color: '#000000',
        paddingHorizontal: 10
    },
    statisticText: {
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 13,
        color: '#000000',
        paddingHorizontal: 20
    },
    statisticTitleText: {
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        color: '#000000',
    },
    homeStatisticView: {
        width: '35%',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    statisticTitleView: {
        width: '30%',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    awayStatisticView: {
        width: '35%',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    progressBar: {
        height: 4,
        width: '56%',
        backgroundColor: 'rgba(0, 0, 0, 0.05)'
    },
    statTitleView: {
        alignItems: 'center',
        marginTop: 5,
      },
      statTitleText: {
        fontWeight: '400',
        fontSize: 13,
        fontStyle: 'normal',
        fontFamily: 'PingFang SC',
        color: '#000000',
      },
      statBar: {
        width: '70%',
        height: 5,
        backgroundColor: '#07C160',
        marginBottom: 'auto',
        marginTop: 'auto',
        flexDirection: 'row',
        borderStyle: 'solid',
        borderRadius: 4,
      },
      statTextView: {
        width: '15%',
      },
      statText: {
        fontWeight: '500',
        fontSize: 13,
        fontStyle: 'normal',
        fontFamily: 'PingFang SC',
        color: '#000000',
        marginLeft: 10,
        marginRight: 10
      },
      statTextViewRight: {
        width: '15%',
        alignItems: 'flex-end',
      },
      statView: {
        flexDirection: 'row',
      },
});

export default styles;
