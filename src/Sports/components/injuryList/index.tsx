import { TabActions } from '@react-navigation/native';
import { View, Image, Text, ImageBackground } from 'react-native';
import { HomeIcon, AwayIcon } from '../../assets';
import InjuryComponent from './injuryComponent';
import styles from './mayi_iconarrowrightwhite';
import { mayi_awayteamfield, mayi_ProjectLibjsijniprofiler, mayi_LessMore } from '../../types/mayi_search';

interface mayi_GoogleViews {
  homeTeam?: mayi_awayteamfield
  awayTeam?: mayi_ProjectLibjsijniprofiler
  homePlayerList?: mayi_LessMore[]
  awayPlayerList?: mayi_LessMore[]
}

const InjuryList = ({ homeTeam, awayTeam, homePlayerList = [], awayPlayerList = [] }: mayi_GoogleViews) => {
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
                <InjuryComponent key={"penaltyshootModal" + index} data={item} isHome={true}></InjuryComponent>
              )
            })
          }
        </View>
        <View style={styles.playerView}>
          {
            awayPlayerList?.length > 0 && awayPlayerList.map((item, index) => {
              return (
                <InjuryComponent key={"rankModalBrightness" + index} data={item} isHome={false}></InjuryComponent>
              )
            })
          }
        </View>
      </View>
    </View>
  );
};

export default InjuryList;
