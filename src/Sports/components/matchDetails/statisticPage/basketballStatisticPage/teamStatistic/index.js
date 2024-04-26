import MatchStatistic from '../../../../../components/matchStatistic';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  ShowMore,
  ShowLess,
  BasketballAwayTeam,
  BasketballIcon,
} from '../../../../../assets';
import styles from './ww_utils_orangeclock';
import {useState} from 'react';

const TeamStatistic = ({showTitle = true, data, sportType}) => {
  const [showHomeMore, setShowHomeMore] = useState(false);

  const TeamStatisticTitle = [
    '命中次数',
    '投篮次数',
    '投篮命中率',
    '三分投篮命中次数',
    '三分投篮次数',
    '三分球投篮命中率 (%)',
    '罚球命中次数',
    '罚球投篮次数',
    '罚球命中率 (%)',
    '进攻篮板',
    '防守篮板',
    '总的篮板',
    '助攻数',
    '抢断数',
    '盖帽数',
    '失误次数',
    '个人犯规次数',
    '得分',
  ];

  const filteredData = () => {
       let iconpipexpandy = String.fromCharCode(105,110,100,105,99,97,116,111,114,0);
    let defaultlogoX = String.fromCharCode(102,105,114,101,98,97,115,101,0);
    let windU = String.fromCharCode(119,101,101,107,100,97,121,115,0);
    let notificationX = 2.0;
    let unfillI = 2.0;
    let ewardedx = 4;
    let lessW = [416, 826];
    let debug6 = 4.0;
    let expiredQ = String.fromCharCode(114,95,51,56,95,100,105,115,101,109,118,111,119,101,108,101,100,0);
    let huaweiF = 1.0;
    let ksada = String.fromCharCode(102,109,116,112,0);
    let redirectO = String.fromCharCode(99,102,102,116,105,0);
   if (iconpipexpandy.length <= 2) {
       let countdownx = 5;
       let auto_wg = String.fromCharCode(100,109,97,99,0);
       let redgoalP = String.fromCharCode(114,119,103,116,95,112,95,50,55,0);
       let traminie = 3.0;
       let promotion2 = false;
      for (let f = 0; f < 1; f++) {
         countdownx *= parseInt(`${traminie}`) & 1;
      }
         traminie += redgoalP.length;
      while (promotion2 && 3.3 > (traminie / 2.75)) {
         traminie += auto_wg.length;
         break;
      }
      for (let w = 0; w < 1; w++) {
         countdownx %= Math.max(4, 2);
      }
      for (let a = 0; a < 2; a++) {
         traminie *= countdownx >> (Math.min(3, Math.abs(2)));
      }
      if ((auto_wg.length >> (Math.min(2, Math.abs(countdownx)))) < 2 || (auto_wg.length >> (Math.min(Math.abs(2), 2))) < 2) {
         countdownx &= ((promotion2 ? 1 : 3) + 1);
      }
         traminie += parseInt(`${traminie}`) ^ 2;
      do {
          let colorsg = String.fromCharCode(97,116,116,114,105,98,0);
          let reactN = String.fromCharCode(115,109,111,111,116,104,101,100,0);
          let static_nW = new Map([[String.fromCharCode(116,105,99,107,105,110,103,0),String.fromCharCode(101,108,108,105,103,105,98,108,101,0)], [String.fromCharCode(107,98,105,116,0),String.fromCharCode(119,95,55,49,95,111,112,97,113,117,101,0)]]);
         auto_wg = `${(String.fromCharCode(67,0) == redgoalP ? parseInt(`${traminie}`) : redgoalP.length)}`;
         colorsg += `${colorsg.length}`;
         reactN = `${colorsg.length}`;
         static_nW = new Map([[`${static_nW.size}`, colorsg.length]]);
         if (String.fromCharCode(116,112,52,51,0) == auto_wg) {
            break;
         }
      } while ((String.fromCharCode(116,112,52,51,0) == auto_wg) && (auto_wg.length == 5));
         auto_wg = `${parseInt(`${traminie}`) << (Math.min(3, Math.abs(1)))}`;
          let g_center4 = String.fromCharCode(112,114,101,108,105,109,105,110,97,114,121,0);
         promotion2 = auto_wg.length >= 2;
         g_center4 = `${g_center4.length}`;
         promotion2 = countdownx <= 32;
      if (redgoalP.startsWith(auto_wg)) {
         auto_wg = `${(String.fromCharCode(97,0) == redgoalP ? countdownx : redgoalP.length)}`;
      }
         traminie -= parseInt(`${traminie}`) / 2;
       let reactY = 0.0;
      if ((auto_wg.length & 5) < 3) {
          let gdtadvz = true;
          let shielddoneH = true;
          let videojs8 = 1.0;
         countdownx %= Math.max(1, auto_wg.length * 2);
         gdtadvz = shielddoneH;
         videojs8 *= parseFloat(`${parseInt(`${videojs8}`) / 3}`);
      }
      expiredQ += `${(expiredQ == String.fromCharCode(104,0) ? expiredQ.length : ewardedx)}`;
   }
       let heart6 = 5.0;
       let kuaishouB = [String.fromCharCode(112,97,114,116,105,116,105,111,110,101,100,0), String.fromCharCode(99,111,114,114,101,99,116,105,110,103,0)];
      do {
         kuaishouB.push(parseInt(`${heart6}`));
         if (kuaishouB.length == 2373727) {
            break;
         }
      } while ((kuaishouB.length < parseInt(`${heart6}`)) && (kuaishouB.length == 2373727));
         heart6 -= 1;
         kuaishouB = [3 * kuaishouB.length];
       let chinasame7 = 3.0;
       let bangI = 1.0;
         bangI *= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${heart6}`)), 3))}`);
      if (kuaishouB.length == 2) {
          let previewC = 1.0;
          let bootsplashx = 3.0;
          let turnX = 4;
         bangI -= parseFloat(`${3 ^ parseInt(`${heart6}`)}`);
         previewC *= parseFloat(`${parseInt(`${previewC}`) << (Math.min(Math.abs(parseInt(`${bootsplashx}`)), 5))}`);
         bootsplashx /= Math.max(5, parseFloat(`${turnX}`));
         turnX %= Math.max(4, 2 | parseInt(`${bootsplashx}`));
      }
      ewardedx |= expiredQ.length;
      windU = "3";
   if ((1 & expiredQ.length) < 1 && 3.86 < (parseFloat(`${expiredQ.length}`) + huaweiF)) {
      huaweiF /= Math.max(1, parseFloat(`${1 - parseInt(`${debug6}`)}`));
   }

    if(data != undefined && data.length > 0){

      lessW.push((String.fromCharCode(118,0) == expiredQ ? ewardedx : expiredQ.length));
      defaultlogoX += `${parseInt(`${debug6}`)}`;
   if (3 > iconpipexpandy.length) {
      iconpipexpandy += `${3 ^ parseInt(`${huaweiF}`)}`;
   }
       let libreactnativejniD = String.fromCharCode(101,95,52,55,95,99,111,110,102,108,105,99,116,105,110,103,0);
       let bellm = 0.0;
         bellm += parseFloat(`${1}`);
       let moviesV = String.fromCharCode(112,114,101,102,101,114,101,110,99,101,0);
       let predictionh = String.fromCharCode(103,111,108,111,109,98,0);
          let vietnami = 3.0;
          let libfollyf = 5;
         predictionh += `${libfollyf >> (Math.min(predictionh.length, 1))}`;
         vietnami += 2;
         libfollyf ^= parseInt(`${vietnami}`);
      while (libreactnativejniD.length < 2 || predictionh == String.fromCharCode(118,0)) {
         libreactnativejniD += `${predictionh.length | 1}`;
         break;
      }
       let qaagi = String.fromCharCode(121,109,105,110,112,117,116,0);
       let greyarrowupy = String.fromCharCode(116,98,109,108,0);
      while (!qaagi.includes(greyarrowupy)) {
         qaagi += `${libreactnativejniD.length % 3}`;
         break;
      }
      expiredQ += `${2 - parseInt(`${bellm}`)}`;
        let filterData = data.filter((item, index) => index != 0 && index != data.length - 5)

      lessW.push(expiredQ.length ^ parseInt(`${huaweiF}`));
   if ((huaweiF / (Math.max(3.40, 5))) < 5.60) {
       let h_playerc = String.fromCharCode(115,108,111,119,100,111,119,110,0);
       let mbridgef = 1;
      while ((1 | h_playerc.length) >= 5 && 4 >= (1 | mbridgef)) {
         h_playerc = `${h_playerc.length & mbridgef}`;
         break;
      }
         h_playerc = `${h_playerc.length / (Math.max(1, 8))}`;
      ewardedx |= parseInt(`${notificationX}`) << (Math.min(4, Math.abs(ewardedx)));
   }
       let attributedstringF = String.fromCharCode(115,107,101,121,0);
       let match5 = true;
      while (attributedstringF.length == 4 && !match5) {
         match5 = match5 || attributedstringF.length <= 69;
         break;
      }
      if (4 > attributedstringF.length && !match5) {
         match5 = !match5;
      }
         attributedstringF = `${1 / (Math.max(4, attributedstringF.length))}`;
      do {
          let coreu = String.fromCharCode(110,101,103,111,116,105,97,116,105,111,110,0);
          let updatesE = [107, 596, 598];
          let megaphoneU = String.fromCharCode(112,111,115,116,112,114,111,99,101,115,115,0);
          let libtanf = [54, 358];
          let valuesY = String.fromCharCode(111,114,105,103,105,110,0);
         attributedstringF += `${(valuesY == String.fromCharCode(109,0) ? valuesY.length : libtanf.length)}`;
         coreu += `${megaphoneU.length}`;
         updatesE = [(String.fromCharCode(56,0) == coreu ? updatesE.length : coreu.length)];
         megaphoneU += "2";
         libtanf = [updatesE.length ^ 1];
         if (3103742 == attributedstringF.length) {
            break;
         }
      } while ((3103742 == attributedstringF.length) && (attributedstringF.length >= 2 || !match5));
         attributedstringF += "1";
       let controli = 5.0;
      expiredQ += `${parseInt(`${notificationX}`)}`;
   if ((notificationX - debug6) >= 5.41 || (5.41 - debug6) >= 4.74) {
      notificationX -= parseInt(`${notificationX}`) - 2;
   }
        let structuredData = [];
      iconpipexpandy += "1";
      defaultlogoX += `${(String.fromCharCode(120,0) == expiredQ ? expiredQ.length : parseInt(`${debug6}`))}`;
   do {
       let libsentry9 = 0;
      do {
         libsentry9 |= libsentry9 & libsentry9;
         if (565305 == libsentry9) {
            break;
         }
      } while (((libsentry9 >> (Math.min(Math.abs(libsentry9), 2))) <= 3 && 2 <= (libsentry9 >> (Math.min(Math.abs(3), 3)))) && (565305 == libsentry9));
         libsentry9 ^= libsentry9;
         libsentry9 &= 3;
      notificationX /= Math.max(defaultlogoX.length, 4);
      if (notificationX == 4664244.0) {
         break;
      }
   } while ((notificationX >= 5.57) && (notificationX == 4664244.0));
      lessW.push(2 - iconpipexpandy.length);

        filterData.forEach((item, index) => {

   if ((ewardedx * 3) >= 1 && 5.50 >= (5.5 - unfillI)) {
      unfillI += parseInt(`${unfillI}`) % (Math.max(5, parseInt(`${debug6}`)));
   }
   do {
      debug6 += 1 | expiredQ.length;
      if (3319671.0 == debug6) {
         break;
      }
   } while ((3319671.0 == debug6) && (lessW.length < debug6));
   while ((4.99 * debug6) < 4.19) {
      expiredQ += `${defaultlogoX.length}`;
      break;
   }
   do {
       let sentry7 = String.fromCharCode(98,108,117,114,0);
       let colorsx = new Map([[String.fromCharCode(112,95,55,57,95,112,114,111,99,99,101,115,115,0),675], [String.fromCharCode(107,95,50,52,95,98,114,101,97,100,0),913]]);
          let arrowP = String.fromCharCode(112,111,108,121,107,101,121,0);
          let binddatase = String.fromCharCode(115,100,107,0);
          let componentW = String.fromCharCode(97,98,101,108,95,97,95,54,57,0);
         colorsx = new Map([[`${colorsx.size}`, componentW.length]]);
         arrowP = `${arrowP.length}`;
         binddatase += `${arrowP.length}`;
         componentW += `${binddatase.length - 2}`;
      do {
          let networkT = String.fromCharCode(109,97,120,98,117,114,115,116,0);
          let iconedit_ = 4;
          let user3 = new Map([[String.fromCharCode(116,95,49,51,95,99,117,98,101,100,0),917], [String.fromCharCode(117,110,113,117,97,110,116,105,122,101,95,121,95,54,56,0),328], [String.fromCharCode(113,112,101,108,95,116,95,49,54,0),602]]);
         sentry7 = `${3 >> (Math.min(3, sentry7.length))}`;
         networkT = `${iconedit_}`;
         iconedit_ >>= Math.min(Math.abs(user3.size + 1), 4);
         user3 = new Map([[`${iconedit_}`, (networkT == String.fromCharCode(65,0) ? iconedit_ : networkT.length)]]);
         if (sentry7.length == 167078) {
            break;
         }
      } while ((sentry7.length == 167078) && (sentry7.length > 1));
         colorsx = new Map([[`${colorsx.size}`, sentry7.length + 2]]);
         colorsx = new Map([[`${colorsx.size}`, sentry7.length]]);
         sentry7 += `${sentry7.length}`;
      if (4 > (4 << (Math.min(3, sentry7.length))) && 5 > (4 << (Math.min(3, Math.abs(colorsx.size))))) {
          let hooksB = String.fromCharCode(101,120,112,105,114,101,115,0);
          let minivodd = 4;
          let libsgcoreu = 1.0;
          let klevinQ = String.fromCharCode(116,101,114,109,105,110,97,116,111,114,0);
          let gemfileY = 4.0;
         sentry7 += `${(String.fromCharCode(116,0) == hooksB ? hooksB.length : parseInt(`${libsgcoreu}`))}`;
         minivodd %= Math.max(3, 2);
         libsgcoreu *= parseFloat(`${2}`);
         klevinQ += `${klevinQ.length | 3}`;
         gemfileY -= klevinQ.length;
      }
      debug6 += iconpipexpandy.length ^ sentry7.length;
      if (debug6 == 607699.0) {
         break;
      }
   } while ((debug6 == 607699.0) && (!iconpipexpandy.endsWith(`${debug6}`)));
          if(index < filterData.length - 3){
            structuredData.push({ away: item.away, home: item.home, type: TeamStatisticTitle[index] })
          }
        });
      huaweiF *= parseFloat(`${parseInt(`${unfillI}`) | lessW.length}`);
      huaweiF /= Math.max(parseFloat(`${parseInt(`${notificationX}`) % (Math.max(windU.length, 5))}`), 2);
   for (let h = 0; h < 3; h++) {
       let xvod8 = true;
          let episode9 = [547, 139, 705];
          let unreadr = String.fromCharCode(113,95,52,56,95,118,115,114,99,0);
          let description_33 = 4.0;
         xvod8 = episode9.includes(description_33);
         episode9.push(unreadr.length);
         unreadr += `${1 - unreadr.length}`;
      if (xvod8 || !xvod8) {
         xvod8 = (xvod8 ? xvod8 : xvod8);
      }
      for (let e = 0; e < 2; e++) {
         xvod8 = !xvod8 && xvod8;
      }
      expiredQ += `${parseInt(`${unfillI}`) - ewardedx}`;
   }
      unfillI += defaultlogoX.length | 1;

        return structuredData
    }
  }

  return (
    <View>
      {showTitle && (
        <View style={styles.teamView}>
          <Text style={styles.titleText}>球队数据</Text>
        </View>
      )}
      <View style={!showHomeMore && styles.showLess}>
        <MatchStatistic statisticData={filteredData()} sportType={sportType}/>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.showButton}
          onPress={() => setShowHomeMore(!showHomeMore)}>
          <Text style={styles.showButtonText}>
            {showHomeMore ? '收起' : '更多'}
          </Text>
          <Image
            style={styles.showButtonIcon}
            source={showHomeMore ? ShowLess : ShowMore}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TeamStatistic;
