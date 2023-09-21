import { StyleSheet } from 'react-native';
import { Colors } from '../../global/colors';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
    marginHorizontal: 5,
    
  },
  teamImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  teamImageText: color => ({
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
    marginTop: 'auto',
    color: color || 'white',
    fontSize: 13,
    fontFamily: '045-SSYiFeiTi',
  }),
  teamsView: {
    // flex: 1,
    width: '100%',
    display: 'flex',
    // backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // height: 39,
    alignItems: 'center',
    marginVertical: 15,
  },
  teamView: {
    // flex: 1,

    // height: '100%',
    flexDirection: 'row',
    marginHorizontal: 15,
    // backgroundColor: 'gold',
  },
  teamText: color => ({
    fontWeight: '600',
    fontSize: 14,
    fontStyle: 'normal',
    fontFamily: 'PingFang SC',
    color: color || '#FFFFFF',
    marginLeft: 5,
    marginRight: 5,
  }),
  statTitleView: {
    width: '100%',
    display: 'flex',
    alignSelf: 'center',
    // alignItems: 'center',
    // marginTop: 5,
    
  },
  statTitleText: color => ({
    fontWeight: '400',
    fontSize: 13,
    fontStyle: 'normal',
    fontFamily: 'PingFang SC',
    color: color || '#FFFFFF',
  }),
  statBar: {
    width: '65%',
    height: 5,
    backgroundColor: '#FF6835',
    marginBottom: 'auto',
    marginTop: 'auto',
    flexDirection: 'row',
    borderStyle: 'solid',
    borderRadius: 4,
  },
  statTextView: {
    width: '20%',

    marginHorizontal: 1,
    
  },
  statText: color => ({
    fontWeight: '500',
    fontSize: 13,
    fontStyle: 'normal',
    fontFamily: 'PingFang SC',
    color: color || '#FFFFFF',
  }),
  statTextViewRight: {
    width: '15%',
    alignItems: 'center',
  },
  statView: {
    flexDirection: 'row',
    gap: 10
  },
  averageContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: 'pink',
  },
  verticalMarkContainer: {
    // flex: 1,
    width: '25%',
    display: 'flex',
    // backgroundColor: 'blue',
  },
  numberMatchContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  numberMatchTitle: color => ({
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    color: color || 'white'
  }),
  numberMatchValue: color => ({
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    color: color || 'white'
  }),
});

export default styles;
