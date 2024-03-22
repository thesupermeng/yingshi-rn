import {View, Text, Image, ImageBackground} from 'react-native';
import {AwayIcon, HomeIcon} from '../../../../../assets';
import styles from './mayi_iconarrowrightwhite';

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
       let formZ = String.fromCharCode(98,97,99,107,115,112,97,99,101,95,54,95,56,50,0);
    let layoutl = 4.0;
    let with_tlf = 5;
    let iconschedulep = [862, 977, 858];
    let plusz = String.fromCharCode(100,101,99,105,109,97,116,101,95,108,95,57,0);
    let floatingZ = 4;
    let fastz = 3;
    let bgvipsportf = String.fromCharCode(99,111,99,111,115,100,120,95,54,95,56,50,0);
    let libfbjniM = String.fromCharCode(113,112,101,108,100,115,112,95,113,95,50,49,0);
      with_tlf %= Math.max(3, parseInt(`${layoutl}`) ^ floatingZ);
      bgvipsportf = `${formZ.length}`;
   if (libfbjniM.length <= iconschedulep.length) {
       let bootsplashj = 4;
       let latnu = false;
         latnu = bootsplashj >= 46 || !latnu;
          let reddownarrow4 = 2.0;
         bootsplashj >>= Math.min(Math.abs(1), 3);
         reddownarrow4 += parseInt(`${reddownarrow4}`) & 1;
         latnu = !latnu;
      if (bootsplashj > 4 && (4 | bootsplashj) > 3) {
         bootsplashj %= Math.max(2, 2);
      }
         bootsplashj /= Math.max(1 * bootsplashj, 5);
      if (!latnu) {
         latnu = 61 > bootsplashj && !latnu;
      }
      iconschedulep.push(floatingZ >> (Math.min(4, Math.abs(1))));
   }
      iconschedulep = [bgvipsportf.length];
   for (let y = 0; y < 2; y++) {
      plusz += `${fastz}`;
   }
   if (4 <= (1 * with_tlf) && (libfbjniM.length * 1) <= 1) {
      with_tlf += iconschedulep.length;
   }
   while (1 >= (with_tlf | 3) && (layoutl * with_tlf) >= 5.98) {
       let combined6 = 1.0;
       let cornershoots = 1;
       let kuaishouy = 4.0;
       let defaultteamJ = String.fromCharCode(100,101,99,101,108,101,114,97,116,105,110,103,95,119,95,53,49,0);
       let inouttargetredi = true;
      while (defaultteamJ.length <= 3) {
         defaultteamJ += `${(cornershoots & (inouttargetredi ? 2 : 1))}`;
         break;
      }
       let mountingQ = 3.0;
       let projectf = String.fromCharCode(109,95,55,52,95,97,115,121,109,0);
      while (3.14 == (mountingQ / (Math.max(parseFloat(`${projectf.length}`), 5)))) {
         projectf += `${(String.fromCharCode(66,0) == defaultteamJ ? parseInt(`${combined6}`) : defaultteamJ.length)}`;
         break;
      }
         projectf += "2";
         kuaishouy *= parseFloat(`${parseInt(`${combined6}`)}`);
      if (3.67 > combined6) {
          let carouselW = 3.0;
          let graph6 = [String.fromCharCode(101,120,112,111,115,117,114,101,95,110,95,51,55,0), String.fromCharCode(98,95,57,57,95,99,111,115,105,103,110,97,116,111,114,121,0), String.fromCharCode(121,95,51,50,95,112,114,101,97,109,98,117,108,97,0)];
          let otherh = 5;
          let binddatase = String.fromCharCode(104,95,56,55,95,103,97,117,103,101,0);
         combined6 *= parseInt(`${kuaishouy}`) * binddatase.length;
         carouselW -= parseFloat(`${otherh}`);
         graph6.push(1);
         otherh ^= 2 >> (Math.min(4, graph6.length));
         binddatase = `${otherh & graph6.length}`;
      }
         inouttargetredi = projectf.length <= defaultteamJ.length;
       let mutedw = String.fromCharCode(115,95,57,57,95,116,97,103,103,101,100,0);
       let bangx = String.fromCharCode(106,95,57,54,95,117,110,99,108,97,109,112,101,100,0);
         bangx = `${2 - cornershoots}`;
         kuaishouy -= parseFloat(`${1}`);
      layoutl += parseInt(`${kuaishouy}`) * 2;
      break;
   }
   do {
      formZ = `${with_tlf - 2}`;
      if (formZ.length == 3132060) {
         break;
      }
   } while (((fastz + 4) > 4 && 4 > (formZ.length + fastz)) && (formZ.length == 3132060));
      with_tlf <<= Math.min(Math.abs(with_tlf), 3);
   do {
      bgvipsportf += "3";
      if (2052078 == bgvipsportf.length) {
         break;
      }
   } while ((2052078 == bgvipsportf.length) && (3 <= (bgvipsportf.length / 2) && 2 <= (bgvipsportf.length / (Math.max(8, fastz)))));
   do {
      floatingZ *= 1 * libfbjniM.length;
      if (4236210 == floatingZ) {
         break;
      }
   } while ((4236210 == floatingZ) && (floatingZ >= fastz));
   while ((fastz / (Math.max(9, floatingZ))) > 3 && 3 > (fastz / (Math.max(floatingZ, 3)))) {
      floatingZ /= Math.max(formZ.length + 1, 3);
      break;
   }
   do {
      with_tlf >>= Math.min(4, Math.abs(2));
      if (with_tlf == 2833088) {
         break;
      }
   } while (((with_tlf ^ fastz) <= 1) && (with_tlf == 2833088));

    return (Number(data1) / (Number(data1) + Number(data2))) * 100;
   if (plusz.length <= 1) {
      plusz += `${bgvipsportf.length % (Math.max(3, 2))}`;
   }
   do {
      libfbjniM = `${2 * libfbjniM.length}`;
      if (170105 == libfbjniM.length) {
         break;
      }
   } while ((170105 == libfbjniM.length) && ((libfbjniM.length << (Math.min(Math.abs(4), 5))) >= 3 || (4 << (Math.min(3, Math.abs(with_tlf)))) >= 5));
   while (3 > bgvipsportf.length) {
      bgvipsportf = "2";
      break;
   }
   while ((layoutl / 4.97) >= 2.41) {
      layoutl -= iconschedulep.length;
      break;
   }
      fastz *= with_tlf >> (Math.min(plusz.length, 1));
       let clearK = String.fromCharCode(114,101,103,105,115,116,114,97,114,95,104,95,57,54,0);
       let awayiconw = new Map([[String.fromCharCode(115,95,52,56,95,97,108,97,119,0),false ], [String.fromCharCode(105,109,112,114,101,115,115,105,111,110,115,95,100,95,52,49,0),true ], [String.fromCharCode(109,105,115,115,95,49,95,51,0),true ]]);
       let iconarrowrightY = 3.0;
         awayiconw = new Map([[`${awayiconw.size}`, clearK.length]]);
      for (let t = 0; t < 3; t++) {
          let neone = String.fromCharCode(107,95,50,57,0);
          let defaultfootballbgM = new Map([[String.fromCharCode(102,95,52,57,95,118,112,99,99,0),true ], [String.fromCharCode(110,111,115,99,97,108,101,95,104,95,52,54,0),true ]]);
          let mbnativeadvancedj = 0.0;
          let libfbH = 0.0;
         clearK += `${2 ^ clearK.length}`;
         neone = `${parseInt(`${mbnativeadvancedj}`) | 3}`;
         defaultfootballbgM = new Map([[`${defaultfootballbgM.size}`, 3 << (Math.min(3, Math.abs(parseInt(`${mbnativeadvancedj}`))))]]);
         libfbH *= neone.length - defaultfootballbgM.size;
      }
         iconarrowrightY /= Math.max(2, awayiconw.size | parseInt(`${iconarrowrightY}`));
         clearK += `${clearK.length}`;
         awayiconw[`${iconarrowrightY}`] = parseInt(`${iconarrowrightY}`) * clearK.length;
         clearK = `${awayiconw.size}`;
       let imagenomoredataS = String.fromCharCode(98,95,57,48,95,106,97,99,111,115,117,98,0);
       let handlerR = String.fromCharCode(122,95,57,51,95,100,111,119,110,108,111,97,100,97,98,108,101,0);
         awayiconw = new Map([[handlerR, handlerR.length + clearK.length]]);
      for (let y = 0; y < 3; y++) {
         clearK += "3";
      }
      fastz ^= bgvipsportf.length - 3;
      plusz += `${1 ^ fastz}`;
       let carousell = 4;
      while ((carousell & 3) >= 2) {
          let usernameY = 1;
          let frame_pX = String.fromCharCode(103,101,111,98,116,97,103,95,106,95,53,57,0);
         carousell %= Math.max(carousell >> (Math.min(Math.abs(1), 4)), 1);
         usernameY >>= Math.min(4, Math.abs(frame_pX.length / (Math.max(2, 6))));
         frame_pX += `${frame_pX.length}`;
         break;
      }
      for (let b = 0; b < 1; b++) {
         carousell ^= carousell;
      }
         carousell *= carousell;
      iconschedulep.push(with_tlf);
      formZ = `${iconschedulep.length + 1}`;
   for (let i = 0; i < 2; i++) {
       let profileactivez = 0;
       let redscoreballe = 4.0;
       let mountingb = new Map([[String.fromCharCode(120,95,57,48,95,109,97,102,113,0),207], [String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,111,114,95,115,95,49,0),464], [String.fromCharCode(115,97,109,112,108,101,100,95,119,95,54,54,0),250]]);
       let promotionp = 5;
          let ticks = String.fromCharCode(116,101,110,99,95,113,95,51,57,0);
          let anytime8 = 5;
         promotionp += anytime8 / (Math.max(7, parseInt(`${redscoreballe}`)));
         ticks += `${ticks.length * 2}`;
         anytime8 -= ticks.length;
      do {
          let libglogp = String.fromCharCode(112,95,57,51,95,117,110,109,97,115,107,0);
          let singlex = String.fromCharCode(117,95,55,52,95,99,97,112,97,98,108,101,0);
          let whistleoranger = new Map([[String.fromCharCode(104,101,97,118,121,95,112,95,54,0),10], [String.fromCharCode(103,95,49,49,0),378], [String.fromCharCode(99,104,101,99,107,97,115,109,95,55,95,53,52,0),521]]);
         mountingb[`${redscoreballe}`] = 1;
         libglogp = `${libglogp.length}`;
         singlex += `${singlex.length - 2}`;
         whistleoranger[singlex] = 2;
         if (mountingb.size == 2596873) {
            break;
         }
      } while ((3 == (3 >> (Math.min(5, Math.abs(mountingb.size))))) && (mountingb.size == 2596873));
      while (redscoreballe > mountingb.size) {
          let linkE = 3.0;
         redscoreballe += promotionp;
         linkE *= parseFloat(`${parseInt(`${linkE}`)}`);
         break;
      }
      for (let m = 0; m < 1; m++) {
         redscoreballe *= profileactivez;
      }
          let reactl = 1.0;
          let libreactnativeblobY = 5.0;
         profileactivez |= mountingb.size * 2;
         reactl /= Math.max(3, 2 / (Math.max(6, parseInt(`${libreactnativeblobY}`))));
         libreactnativeblobY -= 3 & parseInt(`${libreactnativeblobY}`);
      for (let f = 0; f < 2; f++) {
         profileactivez >>= Math.min(Math.abs(promotionp + 3), 2);
      }
       let homeloadingB = false;
      do {
         mountingb[`${promotionp}`] = mountingb.size >> (Math.min(1, Math.abs(promotionp)));
         if (mountingb.size == 2938717) {
            break;
         }
      } while ((2 <= (profileactivez & 3) || (profileactivez & mountingb.size) <= 3) && (mountingb.size == 2938717));
      if ((promotionp & 4) > 5 && homeloadingB) {
         promotionp |= 2;
      }
      if (!homeloadingB) {
         promotionp -= 1;
      }
         profileactivez |= 1 & profileactivez;
      while (2.22 >= redscoreballe) {
         promotionp |= 1 + profileactivez;
         break;
      }
      iconschedulep = [(libfbjniM == String.fromCharCode(90,0) ? fastz : libfbjniM.length)];
   }
   if ((floatingZ | 2) == 2) {
       let componentregistryd = [String.fromCharCode(115,108,105,112,112,97,103,101,115,95,117,95,53,48,0), String.fromCharCode(99,119,114,115,105,95,49,95,51,51,0)];
       let classesr = 0.0;
       let codeX = 5.0;
       let live5 = true;
      if ((classesr / 4.63) > 4.19 && 3 > (4 + componentregistryd.length)) {
         classesr *= componentregistryd.length;
      }
          let bufferQ = 2;
         componentregistryd.push(1 + componentregistryd.length);
         bufferQ *= 1;
      for (let n = 0; n < 3; n++) {
          let elementso = [993, 585];
         codeX /= Math.max(3, parseFloat(`${1 * componentregistryd.length}`));
         elementso = [elementso.length << (Math.min(elementso.length, 5))];
      }
      while ((codeX - 1.76) <= 3.21) {
         codeX /= Math.max(2, parseFloat(`${3}`));
         break;
      }
          let middleL = String.fromCharCode(104,97,114,109,111,110,105,99,95,102,95,50,55,0);
          let libavutily = String.fromCharCode(114,95,51,52,95,99,97,112,116,117,114,105,110,103,0);
         componentregistryd = [2 | libavutily.length];
         middleL = `${(String.fromCharCode(86,0) == middleL ? middleL.length : middleL.length)}`;
         libavutily += `${middleL.length / 1}`;
         codeX *= parseFloat(`${parseInt(`${classesr}`) << (Math.min(2, Math.abs(3)))}`);
         live5 = (90 == (componentregistryd.length ^ (!live5 ? 90 : componentregistryd.length)));
       let sort6 = String.fromCharCode(110,118,99,95,55,95,49,54,0);
         classesr *= (parseInt(`${classesr}`) - (live5 ? 3 : 4));
      while (componentregistryd.length < 3) {
         classesr /= Math.max((sort6 == String.fromCharCode(101,0) ? sort6.length : parseInt(`${classesr}`)), 3);
         break;
      }
         componentregistryd.push(componentregistryd.length);
          let temperaturej = String.fromCharCode(106,95,49,48,48,95,100,100,116,115,0);
          let footballN = 0.0;
         live5 = codeX >= 51.4;
         temperaturej = `${temperaturej.length >> (Math.min(5, Math.abs(parseInt(`${footballN}`))))}`;
         footballN -= 2 ^ parseInt(`${footballN}`);
      floatingZ <<= Math.min(Math.abs(parseInt(`${layoutl}`)), 3);
   }
   if (!plusz.endsWith(`${bgvipsportf.length}`)) {
      plusz += "2";
   }
   if (with_tlf < bgvipsportf.length) {
      bgvipsportf += `${2 - floatingZ}`;
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
