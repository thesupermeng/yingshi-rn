import {ScrollView, View, Text, Image, ImageBackground} from 'react-native';
import {
  BasketballAwayTeam,
  SubBasketballPlayer,
  BasketballIcon,
} from '../../assets';
import styles from './style';

const Menu = [
  '时间',
  '得分',
  '篮板',
  '助攻',
  '投篮',
  '三分',
  '罚球',
  '前板',
  '后板',
  '抢断',
  '盖帽',
  '失误',
  '犯规',
];

let getArrayIndex = (index, item) => {
  switch (index) {
    case 0:
      return item[0] + "'";
    case 1:
      return item[19];
    case 2:
      return item[12];
    case 3:
      return item[13];
    case 4:
      return item[1] + '-' + item[2];
    case 5:
      return item[4] + '-' + item[5];
    case 6:
      return item[7] + '-' + item[8];
    case 7:
      return item[10];
    case 8:
      return item[11];
    case 9:
      return item[14];
    case 10:
      return item[15];
    case 11:
      return item[16];
    case 12:
      return item[17];
  }
};

const PlayerStats = ({playerData, status}) => {
  return (
    <View style={styles.playerStatView}>
      <View style={[styles.playerNameView, {backgroundColor: 'white',borderRightColor: '#1D2023', borderRightWidth: 1}]}>
        <View style={styles.playerNameTabView}>
          <Text style={styles.playerTitleText}>球员</Text>
        </View>
        {playerData?.map((item, idx) => {
          return (
            <View
              style={styles.playerNameTabView}
              key={`playerNameTabView-${idx}`}>
              <View>
                <ImageBackground
                  source={
                    item[6][22] == 0 ? BasketballAwayTeam : SubBasketballPlayer
                  }
                  style={styles.shirtImage}>
                  <Text
                    style={
                      item[6][22] == 0 ? styles.shirtText : styles.shirtText1
                    }>
                    {item[5]}
                  </Text>
                </ImageBackground>
              </View>
              <Text
                style={styles.playerNameText}
                numberOfLines={1}
                ellipsizeMode={'tail'}>
                {item[1]}
              </Text>
              {status == 1 && item[6][21] == 0 && (
                <Image source={BasketballIcon} style={styles.ballImage} />
              )}
            </View>
          );
        })}
      </View>
      <View style={styles.playerStatDetailView}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <View style={styles.playerStatView}>
              {Menu.map((item, idx) => {
                return (
                  <View
                    style={styles.playerStatDetailTabView}
                    key={`playerStat-${idx}`}>
                    <Text style={styles.playerTitleText}>{item}</Text>
                  </View>
                );
              })}
            </View>
            {playerData?.map((item, idx) => {
              return (
                <View
                  style={styles.playerStatDetailView1}
                  key={`playerStatDetailsView1-${idx}`}>
                  {Menu.map((data, idx1) => {
                    return (
                      <View
                        style={styles.playerStatDetailTabView}
                        key={`playerStatDetailTabView-${idx1}`}>
                        <Text>
                          {getArrayIndex(Menu.indexOf(data), item[6])}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default PlayerStats;
