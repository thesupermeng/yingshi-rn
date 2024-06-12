import { TabActions } from '@react-navigation/native';
import { View, Image, Text, ImageBackground } from 'react-native';
import { HomeIcon, AwayIcon } from '../../../../static/sports';
import InjuryComponent from './injuryComponent';
import styles from './tt_with_success';
import { tt_terms, ttShared, ttPopup } from '../../types/tt_sound';

interface ttSmall {
  homeTeam?: tt_terms
  awayTeam?: ttShared
  homePlayerList?: ttPopup[]
  awayPlayerList?: ttPopup[]
}

const InjuryList = ({ homeTeam, awayTeam, homePlayerList = [], awayPlayerList = [] }: ttSmall) => {
  return (
    <View>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>
          伤停信息
        </Text>
      </View>
      <View style={styles.teamsView}>
        <View style={styles.teamView}>
          {homeTeam?.icon != undefined && homeTeam?.icon?.length > 0 ? (
            <Image source={{ uri: homeTeam.icon }} style={styles.teamIcon}></Image>
          ) : (
            <ImageBackground source={HomeIcon} style={styles.teamIcon}>
              <Text style={styles.teamLogoText}>
                {homeTeam?.name?.charAt(0)}
              </Text>
            </ImageBackground>
          )}
          <Text
            style={styles.teamText}
            numberOfLines={1}
            ellipsizeMode={'tail'}>
            {homeTeam?.name}
          </Text>
        </View>
        <View style={[styles.teamView, { alignItems: 'flex-end', justifyContent: 'flex-end', marginRight: 0 }]}>
          <Text
            style={styles.teamText}
            numberOfLines={1}
            ellipsizeMode={'tail'}>
            {awayTeam?.name}
          </Text>
          {awayTeam?.icon != undefined && awayTeam?.icon?.length > 0 ? (
            <Image source={{ uri: awayTeam.icon }} style={[styles.teamIcon, { marginLeft: 10, marginRight: 0 }]}></Image>
          ) : (
            <ImageBackground source={AwayIcon} style={[styles.teamIcon, { marginLeft: 10, marginRight: 0 }]}>
              <Text style={styles.teamLogoText}>
                {awayTeam?.name?.charAt(0)}
              </Text>
            </ImageBackground>
          )}
        </View>
      </View>
      <View style={styles.playersView}>
        <View style={styles.playerView}>
          {
            homePlayerList?.length > 0 && homePlayerList.map((item, index) => {
              return (
                <InjuryComponent key={"inviteGoal" + index} data={item} isHome={true}></InjuryComponent>
              )
            })
          }
        </View>
        <View style={styles.playerView}>
          {
            awayPlayerList?.length > 0 && awayPlayerList.map((item, index) => {
              return (
                <InjuryComponent key={"predictionTwitter" + index} data={item} isHome={false}></InjuryComponent>
              )
            })
          }
        </View>
      </View>
    </View>
  );
};

export default InjuryList;
