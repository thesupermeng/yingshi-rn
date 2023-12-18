import {StyleSheet} from 'react-native';
import {Colors} from '../../global/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    // borderBottomColor: Colors.colorDivider,
    // borderBottomWidth: 1,
    // paddingHorizontal: 16,
    backgroundColor: 'black',

    // alignItems: 'center',
    height: 200,
  },
  backButtonIcon: {
    height: 18,
    width: 16,
  },
  backButtonTouch: {
    height: 60,
    width: 66,
    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    position: 'absolute',
    zIndex: 2,
  },
  notificationButtonTouch: {
    height: 25,
    width: 18,
    marginVertical: 20,
    marginHorizontal: 10,
    position: 'absolute',
    right: 0,
    zIndex: 2,
  },
  middleContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  teamIconImage: {
    height: 34,
    width: 34,
    alignSelf: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
    
  },
  subIcon: {
    height: 18,
    width: 22,
    // alignSelf: 'center',
    marginHorizontal: 5,
    // backgroundColor: 'gold',
  },
  alignCenterContainer: {
    display: 'flex',
    flex: 1,
    // flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },
  alignCenterMiddleContainer: {
    display: 'flex',
    flex: 1,
    // flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },
  alignCenterMiddleMatchStartContainer: {
    display: 'flex',
    flex: 1,
    // flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    // marginVertical: 150,
    borderRadius: 8,
  },
  alignCenterTopBannerContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    // backgroundColor: 'blue',
    marginTop: 20,
  },
  alignCenterMiddleCountdownContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
    marginTop: 20,
  },
  matchDetailContainer: {
    display: 'flex',
    // backgroundColor: 'gold',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '35%',
  },
  bookingButton: {
    backgroundColor: Colors.colorPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginTop: '5%',
    width: '80%',
    borderRadius: 40,
    // padding: 3,
    alignSelf: 'center',
  },

  bookingButtonActive: {
    backgroundColor: Colors.colorActiveDot,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginTop: '5%',
    width: '80%',
    borderRadius: 40,
    // padding: 3,
    alignSelf: 'center',
  },
  bookSmallContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    
  },
  smallTitleName: {
    // fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    // lineHeight: 12,
    /* identical to box height */

    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',

    /* White */

    color: '#FFFFFF',
    paddingBottom: 10,
  },
  middleTitleName: {
    // fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    // lineHeight: 12,
    /* identical to box height */

    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',

    /* White */

    color: '#FFFFFF',
    paddingVertical: 2,
  },
  middleTitleNameStatus: {
    // fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 10,
    // lineHeight: 12,
    /* identical to box height */

    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',

    /* White */

    color: '#FFFFFF',
    paddingVertical: 2,
  },
  middleTitleScoreName: {
    // fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    // lineHeight: 12,
    /* identical to box height */

    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',

    /* White */

    color: '#FFFFFF',
    paddingVertical: 2,
  },
  middleTitleSubeName: {
    // fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 11,
    // lineHeight: 12,
    /* identical to box height */

    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',

    /* White */

    color: '#FFFFFF',
    paddingVertical: 2,
  },
  middleCountTitleName: {
    // fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    // lineHeight: 12,
    /* identical to box height */

    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    alignSelf: 'center',

    /* White */

    color: '#FFFFFF',
    paddingVertical: 2,
  },
  bookingTitleName: {
    // fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 13,
    // lineHeight: 12,
    /* identical to box height */

    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',

    /* White */

    color: '#FFFFFF',
    paddingVertical: 10,
    // backgroundColor: 'gold',
  },
  topBannerCotainer: {
    height: '30%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 15,
    
  },
  liveButton: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    paddingHorizontal: 15,
    // paddingVertical: 4,
    borderRadius: 20,
  },
  bottomButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 25,
    alignSelf: 'center',
  },
});

export default styles;
