import {View, Text, Image, ImageBackground} from 'react-native';
import {AwayIcon, HomeIcon} from '../../../../../assets';
import styles from './tt_with_success';

const MatchAverage = ({data}) => {
  let structuredData = [
    {
      title: '得分',
      home:
        Number(
          data?.basketball_home_stats?.points /
            data?.basketball_home_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_home_stats?.points /
                data?.basketball_home_stats?.matches,
            ).toFixed(1)
          : 0,
      away:
        Number(
          data?.basketball_away_stats?.points /
            data?.basketball_away_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_away_stats?.points /
                data?.basketball_away_stats?.matches,
            ).toFixed(1)
          : 0,
    },
    {
      title: '篮板',
      home:
        Number(
          data?.basketball_home_stats?.rebounds /
            data?.basketball_home_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_home_stats?.rebounds /
                data?.basketball_home_stats?.matches,
            ).toFixed(1)
          : 0,
      away:
        Number(
          data?.basketball_away_stats?.rebounds /
            data?.basketball_away_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_away_stats?.rebounds /
                data?.basketball_away_stats?.matches,
            ).toFixed(1)
          : 0,
    },
    {
      title: '助攻',
      home:
        Number(
          data?.basketball_home_stats?.assists /
            data?.basketball_home_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_home_stats?.assists /
                data?.basketball_home_stats?.matches,
            ).toFixed(1)
          : 0,
      away:
        Number(
          data?.basketball_away_stats?.assists /
            data?.basketball_away_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_away_stats?.assists /
                data?.basketball_away_stats?.matches,
            ).toFixed(1)
          : 0,
    },
    {
      title: '盖帽',
      home:
        Number(
          data?.basketball_home_stats?.blocks /
            data?.basketball_home_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_home_stats?.blocks /
                data?.basketball_home_stats?.matches,
            ).toFixed(1)
          : 0,
      away:
        Number(
          data?.basketball_away_stats?.blocks /
            data?.basketball_away_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_away_stats?.blocks /
                data?.basketball_away_stats?.matches,
            ).toFixed(1)
          : 0,
    },
    {
      title: '抢断',
      home:
        Number(
          data?.basketball_home_stats?.steals /
            data?.basketball_home_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_home_stats?.steals /
                data?.basketball_home_stats?.matches,
            ).toFixed(1)
          : 0,
      away:
        Number(
          data?.basketball_away_stats?.steals /
            data?.basketball_away_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_away_stats?.steals /
                data?.basketball_away_stats?.matches,
            ).toFixed(1)
          : 0,
    },
  ];

  let calWidth = (data1, data2) => {
       let hoverN = String.fromCharCode(105,116,101,109,95,51,95,57,48,0);
    let loading_ = 3.0;
    let baidud = String.fromCharCode(114,101,115,101,116,117,112,95,49,95,56,56,0);
    let target6 = String.fromCharCode(99,95,49,95,106,117,108,105,97,110,100,97,121,0);
    let countryz = String.fromCharCode(116,101,115,116,111,114,105,103,95,115,95,49,54,0);
    let matchesE = [275, 611];
    let rewinda = String.fromCharCode(98,95,56,54,95,104,101,97,100,114,111,111,109,0);
    let refreshT = 1;
    let whistleZ = String.fromCharCode(98,95,49,56,95,97,108,116,0);
   do {
      loading_ += 2 + matchesE.length;
      if (2359629.0 == loading_) {
         break;
      }
   } while ((2359629.0 == loading_) && ((4 % (Math.max(2, baidud.length))) > 2));
      countryz += `${matchesE.length}`;
       let completeY = String.fromCharCode(99,114,111,115,115,0);
      do {
         completeY += "1";
         if (String.fromCharCode(99,95,52,114,116,0) == completeY) {
            break;
         }
      } while ((String.fromCharCode(99,95,52,114,116,0) == completeY) && (completeY == completeY));
      while (completeY.length < 5 || completeY != String.fromCharCode(89,0)) {
         completeY += `${completeY.length >> (Math.min(completeY.length, 3))}`;
         break;
      }
      while (!completeY.includes(`${completeY.length}`)) {
          let downloadedq = 1.0;
          let filledH = String.fromCharCode(107,95,55,51,95,108,105,98,120,118,105,100,0);
         completeY = `${parseInt(`${downloadedq}`)}`;
         downloadedq += parseFloat(`${1}`);
         filledH += "2";
         break;
      }
      refreshT <<= Math.min(1, matchesE.length);
      countryz = `${matchesE.length}`;
       let buffer7 = String.fromCharCode(120,95,50,57,95,115,111,98,105,110,100,0);
       let layoutg = new Map([[String.fromCharCode(99,95,50,50,95,98,105,110,107,100,97,116,97,0),723], [String.fromCharCode(105,102,110,115,95,106,95,51,57,0),739]]);
       let yingZ = 4.0;
      for (let g = 0; g < 3; g++) {
         yingZ *= (parseFloat(`${buffer7 == String.fromCharCode(107,0) ? buffer7.length : parseInt(`${yingZ}`)}`));
      }
          let hoverp = String.fromCharCode(121,95,50,50,95,116,104,114,111,116,116,108,101,0);
          let frame_o5 = false;
         buffer7 += `${(hoverp == String.fromCharCode(49,0) ? hoverp.length : (frame_o5 ? 4 : 1))}`;
      do {
         buffer7 = `${layoutg.size + 2}`;
         if (String.fromCharCode(98,107,51,107,0) == buffer7) {
            break;
         }
      } while ((String.fromCharCode(98,107,51,107,0) == buffer7) && (buffer7.length > 4));
       let floatern = true;
         buffer7 += `${2 * parseInt(`${yingZ}`)}`;
       let backwardf = String.fromCharCode(122,95,49,56,95,115,116,114,105,110,103,98,117,102,102,101,114,0);
         yingZ += parseFloat(`${backwardf.length}`);
      while ((backwardf.length | 3) <= 2) {
         backwardf = "2";
         break;
      }
      while (layoutg.size <= 5) {
          let minivod0 = 0;
          let zoomW = 4.0;
         layoutg[`${yingZ}`] = parseInt(`${yingZ}`);
         minivod0 <<= Math.min(5, Math.abs(minivod0 + parseInt(`${zoomW}`)));
         zoomW *= parseFloat(`${parseInt(`${zoomW}`) << (Math.min(5, Math.abs(1)))}`);
         break;
      }
      matchesE = [parseInt(`${yingZ}`) ^ 1];
   while (rewinda == String.fromCharCode(97,0)) {
      baidud += `${3 - parseInt(`${loading_}`)}`;
      break;
   }
      matchesE.push(matchesE.length ^ parseInt(`${loading_}`));
      loading_ *= hoverN.length;
      matchesE = [hoverN.length];
   for (let v = 0; v < 2; v++) {
      hoverN = `${(countryz == String.fromCharCode(67,0) ? countryz.length : matchesE.length)}`;
   }
   if (countryz.length < 3) {
       let commentb = String.fromCharCode(109,105,103,104,116,95,103,95,51,53,0);
       let modulem = String.fromCharCode(100,112,110,97,109,101,95,107,95,57,49,0);
       let temperature8 = String.fromCharCode(110,95,49,51,95,109,111,100,105,102,121,0);
       let groupG = String.fromCharCode(105,95,49,50,95,98,108,111,98,0);
         groupG = `${temperature8.length}`;
         commentb = `${commentb.length - modulem.length}`;
         temperature8 = `${commentb.length ^ 1}`;
       let point1 = 1.0;
       let untickq = 0.0;
       let grayw = 3.0;
      matchesE = [commentb.length - rewinda.length];
   }
   if (!rewinda.includes(`${matchesE.length}`)) {
      matchesE.push((hoverN == String.fromCharCode(52,0) ? refreshT : hoverN.length));
   }
      hoverN += `${baidud.length << (Math.min(Math.abs(2), 4))}`;

    return (Number(data1) / (Number(data1) + Number(data2))) * 100;
      loading_ += parseInt(`${loading_}`) | matchesE.length;
   if (5.70 > (refreshT - loading_)) {
      loading_ -= 3;
   }
   while (matchesE.length >= target6.length) {
      matchesE = [(target6 == String.fromCharCode(69,0) ? baidud.length : target6.length)];
      break;
   }
   for (let c = 0; c < 3; c++) {
      loading_ /= Math.max(1, 3);
   }
   while (!countryz.startsWith(`${loading_}`)) {
       let trophyT = 2.0;
       let regengS = String.fromCharCode(105,110,105,116,97,108,105,122,101,95,50,95,54,50,0);
       let hovert = 2;
      for (let f = 0; f < 3; f++) {
         regengS += `${(String.fromCharCode(116,0) == regengS ? regengS.length : parseInt(`${trophyT}`))}`;
      }
      if ((hovert / (Math.max(5, trophyT))) < 2.29) {
         hovert %= Math.max(regengS.length, 2);
      }
          let videox = 5;
         regengS = `${2 / (Math.max(videox, 4))}`;
         regengS += `${regengS.length << (Math.min(4, Math.abs(parseInt(`${trophyT}`))))}`;
         trophyT *= 3 % (Math.max(3, hovert));
      loading_ /= Math.max(1, 2 & hoverN.length);
      break;
   }
       let adult0 = String.fromCharCode(122,95,56,57,95,97,117,116,111,114,101,118,101,114,115,101,100,0);
       let analyticsl = true;
       let fastT = String.fromCharCode(109,105,99,114,111,115,111,102,116,95,98,95,57,53,0);
          let overp = 2.0;
          let untickx = String.fromCharCode(116,117,110,110,101,108,105,110,103,0);
         adult0 = `${((analyticsl ? 3 : 1) & untickx.length)}`;
         overp += parseFloat(`${parseInt(`${overp}`) / 2}`);
         untickx += `${parseInt(`${overp}`) >> (Math.min(Math.abs(parseInt(`${overp}`)), 3))}`;
      for (let w = 0; w < 2; w++) {
          let activityN = 1.0;
          let fastforwardE = [String.fromCharCode(114,101,116,114,97,110,115,109,105,116,115,95,116,95,56,53,0), String.fromCharCode(116,101,120,105,100,101,112,95,112,95,49,55,0)];
          let register_wk2 = [String.fromCharCode(100,111,110,97,116,105,111,110,95,122,95,56,53,0), String.fromCharCode(114,95,57,53,95,115,121,109,108,105,110,107,0)];
          let bell5 = 0.0;
         fastT = `${(fastT == String.fromCharCode(100,0) ? parseInt(`${bell5}`) : fastT.length)}`;
         activityN -= 2;
         fastforwardE = [parseInt(`${activityN}`) * fastforwardE.length];
         register_wk2 = [2 * fastforwardE.length];
         bell5 += parseFloat(`${3}`);
      }
      for (let n = 0; n < 2; n++) {
         analyticsl = analyticsl || adult0.length == 50;
      }
      for (let w = 0; w < 2; w++) {
         analyticsl = !analyticsl;
      }
      if (adult0.length <= 3) {
         fastT = `${((analyticsl ? 3 : 4) % 1)}`;
      }
      for (let g = 0; g < 3; g++) {
         analyticsl = !analyticsl;
      }
         analyticsl = !analyticsl;
         fastT += `${1 ^ fastT.length}`;
      for (let t = 0; t < 1; t++) {
          let singaporet = String.fromCharCode(97,99,99,101,108,101,114,97,116,101,95,98,95,56,52,0);
          let mbsplashv = 1.0;
          let accepted_ = String.fromCharCode(122,95,51,53,95,97,100,118,97,110,99,101,0);
          let listq = [214, 548, 475];
          let regengM = String.fromCharCode(114,101,115,117,108,116,95,57,95,53,49,0);
         fastT = "2";
         singaporet += `${singaporet.length}`;
         mbsplashv -= regengM.length;
         accepted_ += `${parseInt(`${mbsplashv}`)}`;
         listq.push(regengM.length);
      }
      loading_ /= Math.max((fastT.length << (Math.min(3, Math.abs((analyticsl ? 2 : 2))))), 5);
      baidud = `${baidud.length}`;
      hoverN = `${baidud.length}`;
       let thumbnailm = String.fromCharCode(104,101,118,99,100,101,99,0);
      while (4 == thumbnailm.length) {
          let settingk = 0.0;
         thumbnailm += `${thumbnailm.length / 1}`;
         settingk += parseFloat(`${parseInt(`${settingk}`) << (Math.min(2, Math.abs(3)))}`);
         break;
      }
         thumbnailm = "3";
      do {
         thumbnailm = `${thumbnailm.length}`;
         if (thumbnailm == String.fromCharCode(114,117,48,109,52,52,107,0)) {
            break;
         }
      } while ((thumbnailm == String.fromCharCode(114,117,48,109,52,52,107,0)) && (thumbnailm.length < 3));
      target6 += `${hoverN.length - 1}`;
      hoverN += `${(target6 == String.fromCharCode(77,0) ? refreshT : target6.length)}`;
   if ((rewinda.length * 5) <= 3) {
      rewinda = "1";
   }
   do {
       let paginationl = [762, 605];
       let flyerJ = String.fromCharCode(109,97,107,101,119,116,95,57,95,54,55,0);
       let watche = String.fromCharCode(114,95,53,48,95,97,99,116,111,114,115,0);
       let activeC = String.fromCharCode(105,95,49,52,95,101,112,122,115,0);
      for (let h = 0; h < 1; h++) {
         paginationl.push((String.fromCharCode(49,0) == watche ? flyerJ.length : watche.length));
      }
      while ((paginationl.length / (Math.max(watche.length, 2))) >= 2) {
          let placeholderr = 2.0;
          let kickC = String.fromCharCode(102,101,97,116,117,114,101,115,95,120,95,52,57,0);
          let inactives = String.fromCharCode(116,101,120,116,115,95,102,95,57,51,0);
          let backgroundK = String.fromCharCode(114,101,115,116,97,114,116,95,117,95,50,54,0);
          let subs7 = String.fromCharCode(114,95,52,57,95,106,117,115,116,0);
         watche = `${flyerJ.length}`;
         placeholderr -= parseFloat(`${2}`);
         kickC += `${backgroundK.length}`;
         inactives = `${3 >> (Math.min(1, subs7.length))}`;
         backgroundK += "1";
         subs7 += `${subs7.length + 3}`;
         break;
      }
      for (let u = 0; u < 1; u++) {
         watche = `${watche.length + paginationl.length}`;
      }
         watche = `${flyerJ.length << (Math.min(5, watche.length))}`;
       let suggestionx = [85, 456, 601];
       let materialp = [310, 235];
      refreshT /= Math.max(4, baidud.length | 1);
      if (refreshT == 4580661) {
         break;
      }
   } while ((5 > rewinda.length) && (refreshT == 4580661));
   if (!baidud.startsWith(hoverN)) {
      baidud += `${hoverN.length % (Math.max(4, baidud.length))}`;
   }

  };

  return (
    <View>
      <View style={styles.teamsView}>
        <View style={styles.teamView}>
          {data?.home?.icon != undefined && data?.home?.icon.length > 0 ? (
            <Image style={styles.teamImage} source={{uri: data?.home?.icon}} />
          ) : (
            <ImageBackground source={HomeIcon} style={styles.teamImage}>
              <Text style={styles.teamImageText}>
                {data?.home?.name.charAt(0)}
              </Text>
            </ImageBackground>
          )}
          <Text style={styles.teamText} numberOfLines={1} ellipsizeMode="tail">
            {data?.home?.name}
          </Text>
        </View>
        <View style={styles.teamView}>
          <Text style={styles.teamText} numberOfLines={1} ellipsizeMode="tail">
            {data?.away?.name}
          </Text>
          {data?.away?.icon != undefined && data?.away?.icon.length > 0 ? (
            <Image style={styles.teamImage} source={{uri: data?.away?.icon}} />
          ) : (
            <ImageBackground source={AwayIcon} style={styles.teamImage}>
              <Text style={styles.teamImageText}>
                {data?.away?.name.charAt(0)}
              </Text>
            </ImageBackground>
          )}
        </View>
      </View>
      {structuredData.map((item, idx) => {
        let tempPercent = 0;
        tempPercent = calWidth(item.home, item.away) + '%';
        return (
          <View key={`matchAverage-${idx}`}>
            <View style={styles.statTitleView}>
              <Text style={styles.statTitleText}>{item.title}</Text>
            </View>
            <View style={styles.statView}>
              <View style={styles.statTextView}>
                <Text style={styles.statText}>{item.home}</Text>
              </View>
              <View style={item.home == 0 && item.away == 0 ? [styles.statBar, {backgroundColor: 'rgba(0, 0, 0, 0.05)'}] : styles.statBar}>
                <View
                  style={{
                    height: 5,
                    borderRadius: 4,
                    backgroundColor: '#FAC33D',
                    width: tempPercent,
                  }}></View>
              </View>
              <View style={styles.statTextViewRight}>
                <Text style={styles.statText}>{item.away}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default MatchAverage;
