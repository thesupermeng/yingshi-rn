import { TabActions } from '@react-navigation/native';
import { View, Image, Text, ImageBackground } from 'react-native';
import { HomeIcon, AwayIcon } from '../../assets';
import styles from './yys_nbatrophy';
import SubPlayerComponent from './subPlayerComponent';
import { yysTyping, yysCcdfbdabcabbbedb, yys_calendar, yysGestures, yysUpdatesBackwhite } from '../../types/yys_iconnointernet_guide';

interface yysIconarrowrightorangeStation {
  showTeamIcon?: boolean,
  isInjuryList?: boolean,
  homeTeam?: yys_calendar,
  awayTeam?: yysTyping,
  homePlayerList?: Array<any>
  awayPlayerList?: Array<any>
}

const SubsComponent = ({ showTeamIcon = true, isInjuryList = false, homeTeam, awayTeam, homePlayerList = [], awayPlayerList = [] }: yysIconarrowrightorangeStation) => {
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
                <SubPlayerComponent key={"subtextTrash" + index} isInjury={isInjuryList} data={item} isHome={true}></SubPlayerComponent>
              )
            })
          }
        </View>
        <View style={styles.playerView}>
          {
            awayPlayerList?.length > 0 && awayPlayerList.map((item, index) => {
              return (
                <SubPlayerComponent key={"mbbannerShrinkLibavdevice" + index} isInjury={isInjuryList} data={item} isHome={false}></SubPlayerComponent>
              )
            })
          }
        </View>
      </View>
    </View>
  );
};

export default SubsComponent;
