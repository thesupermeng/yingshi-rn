import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
  matchScheduleHeader: {
    flexDirection: 'row',
    width: '95%',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  buffering: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3,
    color: 'yellow',
    position: 'absolute',
    top: '35%',
    left: '36%',
    zIndex: 100,
  },
  onlineViews: {
    flexDirection: 'row',
    marginLeft: 'auto',
    alignItems: 'center',
  },
  matchStatus: {
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  matchInfo: {
    flexDirection: 'row',
    fontSize: 25,
  },
  matchScheduleContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: 45,
  },
  spaceBetween: {
    marginRight: 5,
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'PingFang SC',
  },
  liveStatus: {
    color: '#F6423A',
    marginRight: 5,
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'PingFang SC',
  },
  liveScore: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  subscribeBtn: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'center',
  },
  subscribeTouchable: {
    padding: 15,
  },
  scheduleFont: {
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'PingFang SC',
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  scoreFont: {
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'PingFang SC',
    paddingHorizontal: 5,
    color: 'white',
  },
  highScoreFont: {
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'PingFang SC',
    paddingHorizontal: 5,
  },
  headerFont: {
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'PingFang SC',
  },
  viewImage: {
    width: 15,
    height: 15,
  },
  streamerList: {
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  liveStreamer: {
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'PingFang SC',
    textDecorationLine: 'underline',
    color: '#F09800',
    marginHorizontal: 5,
  },
  streamer: {
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'PingFang SC',
    textDecorationLine: 'underline',
    color: '#B5B5B5',
    marginHorizontal: 5,
  },
  border: {
    borderTopWidth: 1,
    height: 90,
  },
  teamContentA: {
    flexDirection: 'row',
    width: '35%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  teamContentB: {
    display: 'flex',
    flexDirection: 'row',
    width: '35%',
    justifyContent: 'flex-start',
    flexShrink: 1,
    alignItems: 'center',
  },
  teamImage: {
    height: 30,
    width: 30,
    marginLeft: 5,
    marginRight: 5,
    resizeMode: 'contain',
  },
  teamLogoText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
    marginTop: 'auto',
    color: 'white',
    fontSize: 18,
  },
  liveIcon: {
    backgroundColor: 'red',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 5,
  },
  subImage: {
    width: 15,
    height: 17,
    resizeMode: 'stretch',
  },
  liveType: {
    flexDirection: 'row',
    marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  liveTypeImage: {
    width: 25,
    height: 18,
    marginRight: 5,
    right: 0,
  },
  matchScheduleFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    height: 15,
    position: 'absolute',
    bottom: 0,
  },
  viewFooter: {
    height: 15,
    flexDirection: 'row',
    backgroundColor: '#FAC33D',
    paddingHorizontal: 3,
    paddingVertical: 1,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    alignItems: 'center'
  },
  footerFont: {
    fontStyle: 'normal',
    fontSize: 9,
    fontWeight: '600',
    fontFamily: 'PingFang SC',
    color: 'black',
  },
  penaltyScore: {
    color: '#808080',
    fontFamily: 'PingFang SC',
    fontStyle: 'normal',
    fontSize: 11,
    fontWeight: '400',
  },
  penaltyWinScore: {
    color: '#FAC33D',
    fontFamily: 'PingFang SC',
    fontStyle: 'normal',
    fontSize: 11,
    fontWeight: '400',
  },
  refresh: {
    backgroundColor: '#FAC33D',
    position: 'absolute',
    bottom: 75,
    right: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 22,
    paddingLeft: 6,
    paddingRight: 11,
    paddingTop: 3,
    paddingBottom: 3,
    zIndex: 1
  },
  refreshFont: {
    color: 'black',
    fontFamily: 'PingFang SC',
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4
  },
  live: {
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
    backgroundColor: '#1D2023',
    borderRadius: 12,
    flex: 1,
  },
  verticalBar: {
    height: '60%',
    top: '20%',
    position: 'absolute',
    left: 0,
    width: 4,
    backgroundColor: '#FAC33D',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  },
  liveContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    gap: 16
  },
  pill: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'rgba(250, 195, 61, 0.1)',
    padding: 2,
    borderRadius: 40,
    width: 60
  },
  schedule: {
    width: 60,
    display: 'flex',
    justifyContent: 'center'
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1
},
});

export default styles;
