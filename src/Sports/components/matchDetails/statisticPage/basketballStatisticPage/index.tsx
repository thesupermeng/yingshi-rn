import { Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import PlayerStatistic from './playerStatistic';
import TopPlayerStatistic from './topPlayerStatistic';
import TeamStatistic from './teamStatistic';
import styles from './mayi_iconarrowrightwhite';
import InjuryList from '../../../../components/injuryList';
import { mayi_Cast } from '../../../../types/mayi_search';
import { mayi_Humidity } from '../../../../types/mayi_predictionarrow_langkey';
import React from 'react';
import EmptyDataPage from '../../../mayi_mbbanner';
import { useIsFocused } from '@react-navigation/native';

interface mayi_GoogleViews {
  liveRoomMatchDetails?: mayi_Cast,
  liveRoomUpdate?: mayi_Humidity
}

const BasketballStatisticPage = ({
  liveRoomUpdate,
  liveRoomMatchDetails,
}: mayi_GoogleViews) => {
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
