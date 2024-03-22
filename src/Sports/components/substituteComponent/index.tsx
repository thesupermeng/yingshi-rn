import { TabActions } from '@react-navigation/native';
import { View, Image, Text, ImageBackground } from 'react-native';
import { HomeIcon, AwayIcon } from '../../assets';
import styles from './fgl_less_position';
import SubPlayerComponent from './subPlayerComponent';
import { SGoogleTurn, ZEDTick, xh_gpay, BFRecommendationList, YZTrashGift } from '../../types/dj_sort';

interface XFillButton {
  showTeamIcon?: boolean,
  isInjuryList?: boolean,
  homeTeam?: xh_gpay,
  awayTeam?: SGoogleTurn,
  homePlayerList?: Array<any>
  awayPlayerList?: Array<any>
}

const SubsComponent = ({ showTeamIcon = true, isInjuryList = false, homeTeam, awayTeam, homePlayerList = [], awayPlayerList = [] }: XFillButton) => {
  return (
    <View style={{backgroundColor: '#14161A'}}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>
          {isInjuryList ? '伤停信息' : '替补阵容'}
        </Text>
      </View>
      {showTeamIcon && (
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
          <View style={styles.teamView}>
            {awayTeam?.icon != undefined && awayTeam?.icon?.length > 0 ? (
              <Image source={{ uri: awayTeam.icon }} style={styles.teamIcon}></Image>
            ) : (
              <ImageBackground source={AwayIcon} style={styles.teamIcon}>
                <Text style={styles.teamLogoText}>
                  {awayTeam?.name?.charAt(0)}
                </Text>
              </ImageBackground>
            )}
            <Text
              style={styles.teamText}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {awayTeam?.name}
            </Text>
          </View>
        </View>
      )}
      <View style={styles.playersView}>
        <View style={styles.playerView}>
          {
            homePlayerList?.length > 0 && homePlayerList.map((item, index) => {
              return (
                <SubPlayerComponent key={"loginRegister_u" + index} isInjury={isInjuryList} data={item} isHome={true}></SubPlayerComponent>
              )
            })
          }
        </View>
        <View style={styles.playerView}>
          {
            awayPlayerList?.length > 0 && awayPlayerList.map((item, index) => {
              return (
                <SubPlayerComponent key={"const_2uContext" + index} isInjury={isInjuryList} data={item} isHome={false}></SubPlayerComponent>
              )
            })
          }
        </View>
      </View>
    </View>
  );
};

export default SubsComponent;
