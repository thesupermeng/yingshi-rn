import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  topStatsContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  topStatsRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 9,
  },
  topStatsLabel: {
    fontSize: 13,
    fontWeight: '400',
    color: 'black',
  },
  topStatsRowContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  bottomStatsContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomStatsColumnContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bottomImageStatsContainer: {
    width: 20,
    height: 20,
    marginBottom: 12,
    alignItems: 'center',
  },
});

export default styles;
