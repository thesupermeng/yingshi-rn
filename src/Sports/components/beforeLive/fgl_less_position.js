import {StyleSheet} from 'react-native';
import {Colors} from '../../global/bp_grey_vietnam';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    
    
    
    backgroundColor: 'black',

    
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
    
    marginHorizontal: 5,
    
  },
  alignCenterContainer: {
    display: 'flex',
    flex: 1,
    
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  alignCenterMiddleContainer: {
    display: 'flex',
    flex: 1,
    
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  alignCenterMiddleMatchStartContainer: {
    display: 'flex',
    flex: 1,
    
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    
    borderRadius: 8,
  },
  alignCenterTopBannerContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    
    marginTop: 20,
  },
  alignCenterMiddleCountdownContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    
    marginTop: 20,
  },
  matchDetailContainer: {
    display: 'flex',
    
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
    
    alignSelf: 'center',
  },
  bookSmallContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    
  },
  smallTitleName: {
    
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    
     

    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',

     

    color: '#FFFFFF',
    paddingBottom: 10,
  },
  middleTitleName: {
    
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    
     

    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',

     

    color: '#FFFFFF',
    paddingVertical: 2,
  },
  middleTitleNameStatus: {
    
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 10,
    
     

    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',

     

    color: '#FFFFFF',
    paddingVertical: 2,
  },
  middleTitleScoreName: {
    
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    
     

    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',

     

    color: '#FFFFFF',
    paddingVertical: 2,
  },
  middleTitleSubeName: {
    
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 11,
    
     

    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',

     

    color: '#FFFFFF',
    paddingVertical: 2,
  },
  middleCountTitleName: {
    
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    
     

    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    alignSelf: 'center',

     

    color: '#FFFFFF',
    paddingVertical: 2,
  },
  bookingTitleName: {
    
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 13,
    
     

    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',

     

    color: '#FFFFFF',
    paddingVertical: 10,
    
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
