import {ScrollView, View, Text, Image, ImageBackground} from 'react-native';
import {
  BasketballAwayTeam,
  SubBasketballPlayer,
  BasketballIcon,
} from '../../assets';
import styles from './yys_gpay_roboto';

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
       let less6 = 1.0;
    let sigmobP = String.fromCharCode(115,95,55,51,95,121,111,110,108,121,0);
    let layoutb = [String.fromCharCode(101,110,118,101,108,111,112,101,100,95,113,95,52,49,0), String.fromCharCode(105,115,116,97,112,95,120,95,51,0), String.fromCharCode(105,95,53,95,108,105,98,99,0)];
    let libswresampleX = true;
    let mappingC = String.fromCharCode(102,105,101,108,100,95,120,95,52,53,0);
    let eventA = 3.0;
    let hearts = 2;
    let actionsX = 4.0;
    let circleP = false;
    let mappingJ = 4;
    let default_ix = String.fromCharCode(115,117,109,97,114,121,95,52,95,49,54,0);
    let baseM = 0;
      libswresampleX = sigmobP.length >= layoutb.length;

  switch (index) {
    case 0:
      return item[0] + "'";
   if (!sigmobP.endsWith(`${layoutb.length}`)) {
      layoutb.push(mappingC.length);
   }

    case 1:
      return item[19];
      mappingC += `${parseInt(`${less6}`)}`;

    case 2:
      return item[12];
      eventA += sigmobP.length;

    case 3:
      return item[13];
   if (5.8 >= (5.60 * less6)) {
       let coren = new Map([[String.fromCharCode(110,95,55,48,95,115,101,116,116,105,110,103,115,0),107], [String.fromCharCode(120,108,97,98,101,108,104,101,105,103,104,116,95,110,95,56,57,0),204], [String.fromCharCode(115,117,99,99,101,115,115,95,104,95,54,57,0),420]]);
      if ((coren.size + coren.size) > 2 && (coren.size + 2) > 5) {
         coren[`${coren.size}`] = 3;
      }
      while ((5 << (Math.min(5, Math.abs(coren.size)))) >= 2) {
         coren[`${coren.size}`] = 1 * coren.size;
         break;
      }
         coren[`${coren.size}`] = 1;
      less6 += coren.size * 1;
   }

    case 4:
      return item[1] + '-' + item[2];
      less6 -= ((libswresampleX ? 5 : 1) & layoutb.length);

    case 5:
      return item[4] + '-' + item[5];
      hearts ^= 2;

    case 6:
      return item[7] + '-' + item[8];
   while (sigmobP != mappingC) {
      mappingC = "3";
      break;
   }

    case 7:
      return item[10];
      hearts <<= Math.min(3, Math.abs(3 - layoutb.length));

    case 8:
      return item[11];
      layoutb = [parseInt(`${actionsX}`)];

    case 9:
      return item[14];
   while ((layoutb.length + 4) > 4 && layoutb.length > 4) {
      libswresampleX = 66.28 <= eventA;
      break;
   }

    case 10:
      return item[15];
   if (4 >= (1 * sigmobP.length)) {
      eventA /= Math.max(3, 1 ^ parseInt(`${less6}`));
   }

    case 11:
      return item[16];
   for (let j = 0; j < 1; j++) {
      hearts += 2;
   }

    case 12:
      return item[17];
       let agreementa = String.fromCharCode(112,97,103,95,101,95,56,52,0);
      if (agreementa.includes(agreementa)) {
         agreementa = `${agreementa.length + agreementa.length}`;
      }
      if (agreementa == String.fromCharCode(79,0) && agreementa == String.fromCharCode(53,0)) {
         agreementa += "3";
      }
         agreementa = `${agreementa.length}`;
      mappingC += `${2 >> (Math.min(2, Math.abs(parseInt(`${less6}`))))}`;

  }
};

const PlayerStats = ({playerData, status}) => {
  return (
    <View style={styles.playerStatView}>
      <View style={[styles.playerNameView, {backgroundColor: '#14161A',borderRightColor: '#1D2023', borderRightWidth: 1}]}>
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
                        <Text style={{color: 'white'}}>
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
