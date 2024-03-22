import { Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import PlayerStatistic from './playerStatistic';
import TopPlayerStatistic from './topPlayerStatistic';
import TeamStatistic from './teamStatistic';
import styles from './fgl_less_position';
import InjuryList from '../../../../components/injuryList';
import { TLDetailWhite } from '../../../../types/dj_sort';
import { QImageUnselected } from '../../../../types/l_fastforward_buffer';
import React from 'react';
import EmptyDataPage from '../../../zp_progress_tooltips';
import { useIsFocused } from '@react-navigation/native';

interface XFillButton {
  liveRoomMatchDetails?: TLDetailWhite,
  liveRoomUpdate?: QImageUnselected
}

const BasketballStatisticPage = ({
  liveRoomUpdate,
  liveRoomMatchDetails,
}: XFillButton) => {
  const isFocus = useIsFocused();
  
  return (
    <SafeAreaView style={{ height: '100%', backgroundColor: '#161616' }}>
      {isFocus && liveRoomUpdate?.basketball_match_live?.players == undefined &&
        liveRoomMatchDetails?.basketball_home_injuries == undefined &&
        liveRoomMatchDetails?.basketball_away_injuries == undefined && (
          <EmptyDataPage />
        )}
      {isFocus &&
        <ScrollView>
          {/* {ads && <AdsComp item={ads} />} */}
          {liveRoomMatchDetails?.status == 0 &&
            liveRoomMatchDetails?.basketball_home_injuries != undefined &&
            liveRoomMatchDetails?.basketball_away_injuries != undefined && (
              <View>
                <InjuryList
                  homeTeam={liveRoomMatchDetails?.home}
                  awayTeam={liveRoomMatchDetails?.away}
                  homePlayerList={liveRoomMatchDetails?.basketball_home_injuries}
                  awayPlayerList={liveRoomMatchDetails?.basketball_away_injuries}
                />
              </View>
            )}
          {liveRoomUpdate?.basketball_match_live?.players != undefined && (
            <View>
              <TopPlayerStatistic
                data={liveRoomUpdate?.basketball_match_live?.players}
              />
              <View style={styles.firstBar}></View>
            </View>
          )}
          {liveRoomUpdate?.basketball_match_live?.players?.home != undefined && (
            <PlayerStatistic
              data={liveRoomUpdate?.basketball_match_live?.players?.home}
              teamData={liveRoomUpdate?.home}
              status={liveRoomUpdate?.status}
            />
          )}
          {liveRoomUpdate?.basketball_match_live?.players?.away != undefined && (
            <PlayerStatistic
              data={liveRoomUpdate?.basketball_match_live?.players?.away}
              teamData={liveRoomUpdate?.away}
              status={liveRoomUpdate?.status}
              showTitle={false}
            />
          )}
          {liveRoomUpdate?.basketball_match_live?.players?.total != undefined && (
            <TeamStatistic
              data={liveRoomUpdate?.basketball_match_live?.players?.total}
              sportType={liveRoomUpdate?.sports_type}
            />
          )}
          {liveRoomMatchDetails?.status != 0 &&
            liveRoomMatchDetails?.basketball_home_injuries != undefined &&
            liveRoomMatchDetails?.basketball_away_injuries != undefined && (
              <View>
                <View style={[styles.firstBar, { marginTop: 0 }]}></View>
                <InjuryList
                  homeTeam={liveRoomMatchDetails?.home}
                  awayTeam={liveRoomMatchDetails?.away}
                  homePlayerList={liveRoomMatchDetails?.basketball_home_injuries}
                  awayPlayerList={liveRoomMatchDetails?.basketball_away_injuries}
                />
              </View>
            )}
        </ScrollView>
      }
    </SafeAreaView>
  );
};

export default BasketballStatisticPage;
