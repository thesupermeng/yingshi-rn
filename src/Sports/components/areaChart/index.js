import React, {memo, useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import DefaultTeamIcon from '../defaultTeamIcon';
import styles from './style';
import {
  CornerKick,
  Goal,
  PenaltyGoal,
  RedCard,
  YellowCard,
  YellowToRedCard,
} from '../../assets';
import {Colors} from '../../global/colors';
import {CanvasIncident} from './CanvasIncident';

const chartHeight = 40;
const iconHeight = 24;

const EventIcon = {
  1: Goal,
  2: CornerKick,
  3: YellowCard,
  4: RedCard,
  15: YellowToRedCard,
  29: PenaltyGoal,
};

const AreaChart = props => {
  const {liveRoomUpdate, chartCallback} = props;
  const [rightContentWidth, setRightContentWidth] = useState(0);
  // useEffect(() => {
  //   if (
  //     filteredHomeIncident?.length <= 0 &&
  //     filteredAwayIncident?.length <= 0
  //   ) {
  //     chartCallback?.(false);
  //   } else {
  //     chartCallback?.(true);
  //   }
  // }, [filteredHomeIncident, filteredAwayIncident]);
  const home = liveRoomUpdate?.home;
  const away = liveRoomUpdate?.away;
  const chartIncident = Array.prototype.filter
    .call(liveRoomUpdate?.football_match_live?.tlive || [], x => x.main === 1)
    .sort((a, b) => {
      if (a.time === b.time) {
        return 0;
      } else if (a.time > b.time) {
        return 1;
      } else {
        return -1;
      }
    });

  const chartData = liveRoomUpdate?.football_match_trend?.data;
  if (!chartData || !chartData.length) {
    chartCallback?.(false);
    return;
  } else {
    chartCallback?.(true);
  }

  const time = chartData?.length;
  const totalTime = time <= 90 ? 90 : time; //比赛总时间

  const minutes = [0, 15, 30, 45, 60, 75, totalTime];

  // 为了应付相同时间碰撞问题，给予每一个时间 allocateTime 在更加好的位置 [只计算了之前的位置重叠，并未计算未来时间的重叠问题]
  const incidentFilter = incidents => {
    var allocateTime;
    return incidents?.map((x, idx) => {
      const curTime = x.time;
      if (idx > 0) {
        if (curTime <= allocateTime) {
          return {...x, allocateTime: ++allocateTime};
        } else {
          allocateTime = curTime;
          return {...x, allocateTime: allocateTime};
        }
      } else {
        allocateTime = curTime;
        return {...x, allocateTime: curTime};
      }
    });
  };
  const filteredHomeIncident = incidentFilter(
    chartIncident?.filter(x => x.position === 1),
  );
  const filteredAwayIncident = incidentFilter(
    chartIncident?.filter(x => x.position === 2),
  );

  // if (filteredHomeIncident?.length <= 0 && filteredAwayIncident?.length <= 0)
  //   return;

  const rightContentlayout = e => {
    setRightContentWidth(e.nativeEvent.layout.width);
  };

  const IncidentIcons = ({data}) => {
    return (
      <View style={{...styles.eventContent}}>
        {data?.map((e, index) => {
          const size = e.type === 1 || e.type === 29 ? 8 : 10;
          return (
            <Image
              key={`filteredHomeIncident-${index}`}
              style={{
                width: size,
                height: size,
                position: 'absolute',
                left: (rightContentWidth * e.allocateTime) / totalTime,
                transform: [{translateX: -size / 2}],
              }}
              source={EventIcon[e.type] || ''}
              resizeMode={'contain'}></Image>
          );
        })}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.rowContent}>
        <View style={styles.leftContent}></View>
        <View
          style={[styles.rightContent, {height: iconHeight}]}
          onLayout={rightContentlayout}>
          <View
            style={{
              position: 'relative',
              flexDirection: 'row',
              paddingBottom: 10,
            }}>
            {minutes.map((e, index) => {
              return (
                <Text
                  key={`footBallAreaChartMinute-${index}`}
                  style={[
                    styles.minuteText,
                    {
                      width: 400,
                      textAlign: 'center',
                      position: 'absolute',
                      left: (e / totalTime) * rightContentWidth,
                      transform: [{translateX: -200}],
                    },
                  ]}>
                  {e === 45 ? 'HT' : ` ${e}'`}
                </Text>
              );
            })}
          </View>
          {/* Home Incident */}
          <IncidentIcons data={filteredHomeIncident || []} />
        </View>
      </View>
      <View style={styles.rowContent}>
        <View style={styles.leftContent}>
          {home?.icon ? (
            <Image style={styles.teamIcon} source={{uri: home?.icon}}></Image>
          ) : (
            <DefaultTeamIcon iconSize={20} isHome={true} text={home?.name} />
          )}
          {away?.icon ? (
            <Image style={styles.teamIcon} source={{uri: away?.icon}}></Image>
          ) : (
            <DefaultTeamIcon iconSize={20} isHome={false} text={away?.name} />
          )}
        </View>
        <View style={[styles.rightContent, {height: chartHeight}]}>
          <View style={{position: 'relative'}}>
            {/* 背景颜色 */}
            <View
              style={{
                position: 'absolute',
                height: chartHeight,
                width: rightContentWidth,
              }}>
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: '50%',
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgb(38, 39, 42)',
                }}></View>
              <View
                style={{
                  position: 'absolute',
                  top: '50%',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgb(38, 39, 42)',
                }}></View>
            </View>
            {/* 时间指标 */}
            <View
              style={{
                position: 'absolute',
                height: chartHeight,
                width: 1,
                zIndex: 99,
                backgroundColor: Colors.colorPrimary,
                left: (time / totalTime) * rightContentWidth + 1,
              }}
            />
            <CanvasIncident
              data={chartData}
              height={chartHeight}
              width={(time / totalTime) * rightContentWidth}
            />
          </View>
        </View>
      </View>
      <View style={styles.rowContent}>
        <View style={styles.leftContent}></View>
        <View style={[styles.rightContent, {height: iconHeight}]}>
          {/* Away Incident */}
          <IncidentIcons data={filteredAwayIncident || []} />
        </View>
      </View>
    </View>
  );
};

export default memo(AreaChart);
