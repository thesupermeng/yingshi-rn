import {useSelector} from 'react-redux';
import {StyleSheet, View, Image, Text} from 'react-native';
import AreaChart from '../../../areaChart';
import BasketballMatchTeamDetails from '../../../basketballLiveDetails/basketballMatchTeamDetails';
import {
  CornerKick,
  Goal,
  PenaltyGoal,
  RedCard,
  YellowCard,
  YellowToRedCard,
} from '../../../../assets';
import {useState} from 'react';
import NoDataIcon from '../../images/icons/noDataIcon.png';

const iconArray = [
  [Goal, '进球'],
  [CornerKick, '角球'],
  [YellowCard, '黄牌'],
  [RedCard, '红牌'],
  [YellowToRedCard, '红黄两变'],
];

const IconLegend = ({text, icon}) => {
  return (
    <View style={styles.iconGroup}>
      <Image style={styles.icon} source={icon} resizeMode="center" />
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const NoData = () => {
  return (
    <View style={styles.column}>
      <Image source={NoDataIcon} resizeMode="contain" />
      <View>
        <Text style={[styles.text, {color: '#CCCCCC'}]}>暂无数据</Text>
      </View>
    </View>
  );
};
export const LiveStatPanel = ({width}) => {
  const liveRoomMatchDetails = useSelector(state => state.liveRoomMatchDetails);
  const liveRoomUpdate = useSelector(state => state.liveRoomUpdate);
  const [hasAreaChart, setHasAreaChart] = useState(false);
  const homeData = liveRoomUpdate?.home;
  const awayData = liveRoomUpdate?.away;
  const totalData = liveRoomUpdate?.basketball_match_live?.players?.total;
  const thisTimeData = liveRoomUpdate?.basketball_match_live?.stats;

  const chartCallback = hasChart => {
    setHasAreaChart(hasChart);
  };
  return (
    <>
      {liveRoomMatchDetails.status !== 0 &&
        liveRoomMatchDetails?.sports_type === 1 && (
          <>
            <AreaChart
              liveRoomUpdate={liveRoomUpdate}
              chartCallback={chartCallback}
            />
            {hasAreaChart ? (
              <View
                style={[
                  styles.row,
                  {marginLeft: 20, justifyContent: 'flex-start', marginTop: 20},
                ]}>
                {iconArray.map(legend => {
                  const [icon, text] = legend;
                  return <IconLegend key={text} text={text} icon={icon} />;
                })}
              </View>
            ) : (
              <NoData />
            )}
          </>
        )}
      {liveRoomMatchDetails.status !== 0 &&
        liveRoomMatchDetails?.sports_type === 2 && (
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            {homeData || awayData || totalData || thisTimeData ? (
              <>
                <View style={{flex: 4, width: '100%'}}>
                  <BasketballMatchTeamDetails
                    homeData={homeData}
                    awayData={awayData}
                    totalData={totalData}
                    thisTimeData={thisTimeData}
                    textColor={'white'}></BasketballMatchTeamDetails>
                </View>
                <View style={{flex: 1}} />
              </>
            ) : (
              <NoData />
            )}
          </View>
        )}
      {![1, 2].includes(liveRoomMatchDetails?.sports_type) && (
        <View style={[styles.column, {flex: 1}]}>
          <NoData />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  column: {
    flex: 0,
    // backgroundColor: 'pink',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  iconGroup: {
    display: 'flex',
    flexDirection: 'row',
    flex: 0,
    flexWrap: 'nowrap',
    marginRight: 15,
  },
  icon: {
    width: 15,
    height: 15,
    flex: 0,
    marginRight: 3,
  },
  text: {
    fontSize: 14,
    flex: 0,
    color: 'white',
  },
});
