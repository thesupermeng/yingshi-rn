import { StyleSheet } from 'react-native';


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
    
    width: '100%',
    display: 'flex',
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    alignItems: 'center',
    marginVertical: 15,
  },
  teamView: {
    

    
    flexDirection: 'row',
    marginHorizontal: 15,
    
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
    
  },
  verticalMarkContainer: {
    
    width: '25%',
    display: 'flex',
    
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
