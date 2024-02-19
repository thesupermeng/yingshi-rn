import React, { useEffect, ReactNode, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import FastImage from "../common/yys_alert_backwhite";
import LinearGradient from "react-native-linear-gradient";
import { useSelector } from "@hooks";
import { yysAgreement } from "@redux";
import { VIP_PROMOTION_COUNTDOWN_MINUTE, VIP_PROMOTION_PURCHASE_MAX } from "@utility";

interface yysIconarrowrightorangeStation {
  coverImage: any;
  coverBackground: any;
  onClose: any;
  onPurchase: any;
  showCondition: boolean;
}

export default function VipPromotionModal({
  coverImage,
  coverBackground,
  onClose,
  onPurchase,
  showCondition,
}: yysIconarrowrightorangeStation) {
  const backgroundState = useSelector<yysAgreement>('backgroundReducer');
  const [countdownSecond, setCountdownSecond] = useState(((VIP_PROMOTION_COUNTDOWN_MINUTE * 60 * 1000) - (Date.now() - backgroundState.vipPromotionCountdownStart)) / 1000);

  const hours = Math.floor(countdownSecond / 60 / 60);
  const minute = Math.floor(countdownSecond / 60 % 60);
  const second = Math.floor(countdownSecond % 60);

  const remainingTimeAry = [
    String(hours).padStart(2, '0')[0],
    String(hours).padStart(2, '0')[1],
    String(minute).padStart(2, '0')[0],
    String(minute).padStart(2, '0')[1],
    String(second).padStart(2, '0')[0],
    String(second).padStart(2, '0')[1],
  ];

  const isFullscreen = Dimensions.get('window').height < Dimensions.get('window').width;

  useEffect(() => {
    const countdownInterval = setInterval(() => {
       let strl = 0.0;
    let shootyesgoalX = String.fromCharCode(117,114,108,115,0);
    let penaltygoalC = 3.0;
    let libreactnativejniw = 1;
    let defaultbasketballbgV = 4.0;
    let libavutilz = String.fromCharCode(98,117,105,108,100,0);
    let toponq = String.fromCharCode(99,97,110,99,101,108,97,116,105,111,110,0);
    let kickm = 3.0;
    let eventS = String.fromCharCode(109,105,110,105,0);
    let searchbarV: Map<any, any> = new Map([[String.fromCharCode(100,114,97,119,0),803], [String.fromCharCode(115,97,109,112,108,101,99,112,121,0),286]]);
    let gmailV = 5.0;
    let viewerq = String.fromCharCode(112,114,101,115,117,109,101,0);
    let telegramX: Map<any, any> = new Map([[String.fromCharCode(113,100,109,100,97,116,97,0),String.fromCharCode(114,116,99,119,101,98,0)], [String.fromCharCode(109,107,118,109,117,120,101,114,117,116,105,108,0),String.fromCharCode(117,110,112,111,105,115,111,110,0)]]);
    let untickK = String.fromCharCode(97,98,115,108,0);
    let mappingT = String.fromCharCode(119,119,119,0);
   for (let f = 0; f < 2; f++) {
       let update_8xj: Array<any> = [985, 165];
       let h_managere = 3.0;
          let inouttargetyellowT = String.fromCharCode(112,101,97,99,104,0);
          let h_viewP = String.fromCharCode(115,117,98,115,97,109,112,108,105,110,103,0);
          let mbbanner7 = 2;
         update_8xj = [update_8xj.length % (Math.max(1, 6))];
         inouttargetyellowT += `${mbbanner7 << (Math.min(Math.abs(3), 3))}`;
         h_viewP = `${h_viewP.length}`;
         mbbanner7 *= mbbanner7;
       let roundR: Map<any, any> = new Map([[String.fromCharCode(115,105,120,0),true ], [String.fromCharCode(99,111,110,102,111,114,109,97,110,99,101,0),true ], [String.fromCharCode(98,97,110,110,101,114,0),false ]]);
       let formU: Map<any, any> = new Map([[String.fromCharCode(114,103,116,99,115,0),false ], [String.fromCharCode(109,105,115,115,105,110,103,0),true ], [String.fromCharCode(115,108,97,118,101,115,0),false ]]);
         formU = new Map([[`${roundR.size}`, roundR.size + 2]]);
      if ((formU.size + 1) <= 5) {
         formU.set(`${update_8xj.length}`, 3);
      }
      if ((roundR.size >> (Math.min(3, update_8xj.length))) >= 1 && 1 >= (roundR.size >> (Math.min(4, update_8xj.length)))) {
         update_8xj.push(2 >> (Math.min(3, Math.abs(formU.size))));
      }
          let winit_xq: Map<any, any> = new Map([[String.fromCharCode(99,102,104,100,0),518], [String.fromCharCode(97,114,109,116,104,0),459], [String.fromCharCode(115,97,109,112,0),368]]);
         formU.set(`${h_managere}`, formU.size | parseInt(`${h_managere}`));
         winit_xq.set(`${winit_xq.size}`, winit_xq.size);
      defaultbasketballbgV -= parseFloat(`${3}`);
   }
   while (penaltygoalC == 2.70) {
       let issubo: Map<any, any> = new Map([[String.fromCharCode(103,114,97,121,102,0),438], [String.fromCharCode(109,106,112,101,103,101,110,99,0),365]]);
       let small3: Map<any, any> = new Map([[String.fromCharCode(100,101,99,107,108,105,110,107,0),862], [String.fromCharCode(103,101,110,104,0),105]]);
      let friendsp = 6703255 <= small3.size;
      do {
          let middlebrightnessk = 1.0;
          let iconwatchX = 4;
          let libcrashsdkH = String.fromCharCode(114,101,110,100,101,114,101,100,0);
         small3.set(`${iconwatchX}`, iconwatchX | small3.size);
         middlebrightnessk /= Math.max(5, parseInt(`${middlebrightnessk}`));
         libcrashsdkH = `${libcrashsdkH.length << (Math.min(Math.abs(2), 1))}`;
         if (friendsp) {
            break;
         }
      } while (((2 << (Math.min(2, Math.abs(small3.size)))) == 3) && friendsp);
         small3 = new Map([[`${issubo.size}`, 3 / (Math.max(10, issubo.size))]]);
          let long_hwG = String.fromCharCode(97,102,105,108,116,101,114,0);
          let trophyg = 5;
         issubo.set(`${trophyg}`, trophyg | 1);
         long_hwG = `${long_hwG.length ^ long_hwG.length}`;
         small3 = new Map([[`${small3.size}`, 1]]);
          let iconedity = 1;
          let penaltymatchiconJ = 2;
          let defaultteamy = String.fromCharCode(98,114,105,100,103,105,110,103,0);
         issubo.set(`${penaltymatchiconJ}`, defaultteamy.length + 3);
         iconedity /= Math.max(5, iconedity ^ iconedity);
         penaltymatchiconJ += iconedity;
         small3.set(`${small3.size}`, issubo.size);
      libavutilz = `${parseInt(`${defaultbasketballbgV}`)}`;
      break;
   }
      defaultbasketballbgV /= Math.max(2, parseFloat(`${telegramX.size}`));
   for (let k = 0; k < 1; k++) {
      shootyesgoalX = `${eventS.length - libavutilz.length}`;
   }
   let iconclosewhitebgr = penaltygoalC <= 7131314.0;
   do {
      penaltygoalC /= Math.max(1 + parseInt(`${strl}`), 4);
      if (iconclosewhitebgr) {
         break;
      }
   } while (iconclosewhitebgr && (penaltygoalC >= libreactnativejniw));
      viewerq = "1";
       let imagewatchliveH = String.fromCharCode(112,97,103,101,110,117,109,98,101,114,0);
       let rightg: Map<any, any> = new Map([[String.fromCharCode(119,105,110,100,111,119,0),767], [String.fromCharCode(99,97,110,111,110,0),200], [String.fromCharCode(111,111,108,116,105,112,0),360]]);
       let type_rX = String.fromCharCode(112,114,111,118,105,100,101,0);
         rightg = new Map([[`${rightg.size}`, (type_rX == String.fromCharCode(107,0) ? type_rX.length : rightg.size)]]);
         rightg = new Map([[`${rightg.size}`, rightg.size << (Math.min(Math.abs(3), 5))]]);
          let downloadingR: Array<any> = [String.fromCharCode(118,112,109,99,0), String.fromCharCode(99,97,112,116,117,114,101,0)];
         rightg.set(imagewatchliveH, downloadingR.length / (Math.max(imagewatchliveH.length, 1)));
         rightg = new Map([[`${rightg.size}`, imagewatchliveH.length]]);
         type_rX += "3";
      let dropdownG = 7255452 <= rightg.size;
      do {
         rightg.set(`${imagewatchliveH}`, (String.fromCharCode(67,0) == imagewatchliveH ? rightg.size : imagewatchliveH.length));
         if (dropdownG) {
            break;
         }
      } while ((4 <= (type_rX.length % 5)) && dropdownG);
          let basketballawayteamp: Map<any, any> = new Map([[String.fromCharCode(109,97,107,101,110,97,110,0),String.fromCharCode(119,111,114,107,101,114,115,0)], [String.fromCharCode(115,105,100,101,115,0),String.fromCharCode(115,101,116,116,105,109,101,111,117,116,0)], [String.fromCharCode(115,117,112,112,108,101,109,101,110,116,97,114,121,0),String.fromCharCode(111,118,101,114,115,99,114,111,108,108,105,110,103,0)]]);
         imagewatchliveH = `${type_rX.length << (Math.min(Math.abs(1), 4))}`;
         basketballawayteamp = new Map([[`${basketballawayteamp.size}`, basketballawayteamp.size]]);
         imagewatchliveH = `${imagewatchliveH.length}`;
          let huaweii = String.fromCharCode(99,108,108,99,0);
         imagewatchliveH = `${rightg.size >> (Math.min(huaweii.length, 1))}`;
      defaultbasketballbgV *= parseFloat(`${telegramX.size >> (Math.min(toponq.length, 2))}`);
   while (eventS.length < 4) {
       let membershipw = true;
       let awayplayerB = 2.0;
       let pointi: Array<any> = [377, 170];
         awayplayerB *= parseFloat(`${parseInt(`${awayplayerB}`) << (Math.min(5, Math.abs(1)))}`);
      while (3 < (parseInt(`${awayplayerB}`) / (Math.max(5, pointi.length))) && 4.83 < (awayplayerB / 3.22)) {
         awayplayerB *= (parseFloat(`${(membershipw ? 1 : 5) * parseInt(`${awayplayerB}`)}`));
         break;
      }
      let default_uJ = 5919460.0 >= awayplayerB;
      do {
         awayplayerB += parseFloat(`${3}`);
         if (default_uJ) {
            break;
         }
      } while (default_uJ && (awayplayerB < 2.67 || (awayplayerB * 2.67) < 3.82));
      if (2.37 < (awayplayerB + 2.59)) {
         awayplayerB -= parseFloat(`${parseInt(`${awayplayerB}`) % 1}`);
      }
       let iconorientation9: Map<any, any> = new Map([[String.fromCharCode(116,111,115,115,0),975], [String.fromCharCode(97,110,109,114,0),690], [String.fromCharCode(115,113,114,116,0),154]]);
       let defaultprofilepicW: Map<any, any> = new Map([[String.fromCharCode(115,116,111,114,101,100,0),339], [String.fromCharCode(100,101,102,114,97,103,109,101,110,116,0),137]]);
         iconorientation9 = new Map([[`${defaultprofilepicW.size}`, (1 << (Math.min(3, Math.abs((membershipw ? 4 : 3)))))]]);
      let homeloadingy = iconorientation9.size >= 6394956;
      do {
         iconorientation9 = new Map([[`${iconorientation9.size}`, 3 ^ iconorientation9.size]]);
         if (homeloadingy) {
            break;
         }
      } while (homeloadingy && (Array.from(iconorientation9.keys()).includes(`${awayplayerB}`)));
      let executori = defaultprofilepicW.size >= 9492095;
      do {
          let matchinactivet = false;
          let taiwanJ = String.fromCharCode(114,101,100,105,114,101,99,116,0);
         defaultprofilepicW = new Map([[taiwanJ, ((matchinactivet ? 2 : 2) ^ 2)]]);
         if (executori) {
            break;
         }
      } while (((parseFloat(`${defaultprofilepicW.size}`) + awayplayerB) > 5.36 && (4 >> (Math.min(1, Math.abs(defaultprofilepicW.size)))) > 5) && executori);
      for (let u = 0; u < 1; u++) {
         pointi.push(defaultprofilepicW.size / 3);
      }
      eventS = `${((membershipw ? 3 : 2) >> (Math.min(libavutilz.length, 2)))}`;
      break;
   }
      penaltygoalC += 3;
   if (5.30 > (5.27 / (Math.max(2, kickm))) && 5.27 > (kickm / (Math.max(parseFloat(`${toponq.length}`), 3)))) {
      kickm -= parseFloat(`${telegramX.size}`);
   }
   while (viewerq.endsWith(`${telegramX.size}`)) {
      telegramX = new Map([[`${telegramX.size}`, telegramX.size]]);
      break;
   }
   while (4.54 < (kickm + 1.82) || 1.82 < (parseFloat(`${eventS.length}`) + kickm)) {
      kickm -= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${defaultbasketballbgV}`)), 2))}`);
      break;
   }
   let weiboa = telegramX.size <= 8102032;
   do {
      telegramX = new Map([[toponq, toponq.length]]);
      if (weiboa) {
         break;
      }
   } while ((1 > (4 ^ toponq.length) || 1 > (4 ^ toponq.length)) && weiboa);
   for (let s = 0; s < 3; s++) {
       let qcopy_v8: Map<any, any> = new Map([[String.fromCharCode(117,121,118,121,116,111,121,117,118,0),320], [String.fromCharCode(97,108,112,105,110,101,0),141], [String.fromCharCode(99,111,110,116,105,110,117,101,100,0),256]]);
       let libsentryx = String.fromCharCode(113,115,99,97,108,101,0);
       let livenodatabgimgh = String.fromCharCode(114,101,112,114,101,115,101,110,116,97,98,108,101,0);
       let buildO = 0.0;
       let iconnotificationnewq = 5.0;
      let f_imagel = iconnotificationnewq >= 5114406.0;
      do {
         iconnotificationnewq *= parseFloat(`${libsentryx.length % 1}`);
         if (f_imagel) {
            break;
         }
      } while (f_imagel && (2.39 > (3.91 * iconnotificationnewq)));
      if (5.96 <= (iconnotificationnewq + buildO)) {
         iconnotificationnewq -= parseFloat(`${1 ^ libsentryx.length}`);
      }
         livenodatabgimgh += "2";
         qcopy_v8 = new Map([[libsentryx, libsentryx.length & livenodatabgimgh.length]]);
      let typingv = qcopy_v8.size >= 8663574;
      do {
         qcopy_v8.set(`${iconnotificationnewq}`, (String.fromCharCode(106,0) == libsentryx ? libsentryx.length : parseInt(`${iconnotificationnewq}`)));
         if (typingv) {
            break;
         }
      } while ((5 < (qcopy_v8.size >> (Math.min(Math.abs(5), 5))) || (qcopy_v8.size / (Math.max(5, 4))) < 3) && typingv);
      while ((qcopy_v8.size >> (Math.min(libsentryx.length, 4))) < 5) {
         libsentryx = `${libsentryx.length}`;
         break;
      }
          let topicD: Map<any, any> = new Map([[String.fromCharCode(115,116,114,102,0),148], [String.fromCharCode(115,121,110,99,104,114,111,110,111,117,115,0),44]]);
          let comment2: Map<any, any> = new Map([[String.fromCharCode(98,101,104,105,110,100,0),322], [String.fromCharCode(116,97,112,112,101,100,0),218]]);
         qcopy_v8 = new Map([[`${qcopy_v8.size}`, libsentryx.length]]);
         topicD = new Map([[`${comment2.size}`, comment2.size % (Math.max(10, topicD.size))]]);
      if (5 > qcopy_v8.size) {
          let xvoda = String.fromCharCode(99,111,110,115,116,114,117,99,116,0);
          let libsentryd = 4;
         qcopy_v8 = new Map([[`${buildO}`, parseInt(`${iconnotificationnewq}`) - parseInt(`${buildO}`)]]);
         xvoda = `${(xvoda == String.fromCharCode(78,0) ? xvoda.length : libsentryd)}`;
         libsentryd >>= Math.min(5, Math.abs(xvoda.length / (Math.max(2, 7))));
      }
       let dicelogop = String.fromCharCode(104,101,97,100,115,0);
       let libjsijniprofiler7 = String.fromCharCode(100,105,115,112,111,115,97,98,108,101,115,0);
         qcopy_v8 = new Map([[`${iconnotificationnewq}`, parseInt(`${iconnotificationnewq}`) % 1]]);
       let footballo = String.fromCharCode(97,99,116,105,118,105,116,121,0);
         footballo += `${qcopy_v8.size / 1}`;
      while (!libjsijniprofiler7.includes(`${dicelogop.length}`)) {
         dicelogop = `${libsentryx.length % 2}`;
         break;
      }
      if (!footballo.includes(`${buildO}`)) {
         buildO *= 2;
      }
         buildO /= Math.max(5, livenodatabgimgh.length);
      gmailV -= parseFloat(`${1}`);
   }
   let libreanimated8 = 8857120 >= viewerq.length;
   do {
      viewerq = `${telegramX.size}`;
      if (libreanimated8) {
         break;
      }
   } while (libreanimated8 && (viewerq.length < eventS.length));
      strl += parseFloat(`${2 * toponq.length}`);
       let showN = false;
       let description_h0 = false;
       let applicationI = 5.0;
      let libfilel = description_h0 ? !description_h0 : description_h0;
      do {
          let nalyticsB = 3;
          let matchesX = String.fromCharCode(99,111,110,116,101,120,116,0);
          let unimplementedview6 = String.fromCharCode(117,110,109,97,115,107,0);
          let downE = String.fromCharCode(99,111,115,113,105,0);
          let themeF = String.fromCharCode(99,107,112,116,0);
         description_h0 = unimplementedview6.length >= nalyticsB;
         nalyticsB |= themeF.length + 2;
         matchesX = `${downE.length}`;
         unimplementedview6 += `${downE.length - themeF.length}`;
         if (libfilel) {
            break;
         }
      } while (libfilel && ((5.15 / (Math.max(9, applicationI))) == 4.81 || 5.15 == applicationI));
          let becomep = 0.0;
          let containert = String.fromCharCode(115,117,98,106,0);
         description_h0 = containert.startsWith(`${becomep}`);
      for (let m = 0; m < 1; m++) {
         description_h0 = showN || !description_h0;
      }
       let pathu = false;
       let largeD = 2;
       let dplusl = 0;
      while (3.42 <= applicationI && 3.49 <= (3.42 * applicationI)) {
         applicationI += (parseFloat(`${parseInt(`${applicationI}`) + (showN ? 3 : 3)}`));
         break;
      }
      for (let p = 0; p < 2; p++) {
         largeD *= ((description_h0 ? 1 : 3) / (Math.max(dplusl, 7)));
      }
      if (applicationI == 5.55) {
         applicationI -= parseFloat(`${3}`);
      }
      for (let n = 0; n < 2; n++) {
         description_h0 = dplusl <= 82 || largeD <= 82;
      }
      kickm += parseFloat(`${searchbarV.size}`);
   if ((gmailV / 1.15) >= 4.92 && (1 - telegramX.size) >= 5) {
      telegramX.set(`${defaultbasketballbgV}`, (libavutilz == String.fromCharCode(67,0) ? parseInt(`${defaultbasketballbgV}`) : libavutilz.length));
   }
   while (2.37 >= (kickm * 4.0)) {
      toponq += `${shootyesgoalX.length}`;
      break;
   }
   while (!toponq.startsWith(`${defaultbasketballbgV}`)) {
      defaultbasketballbgV /= Math.max(parseFloat(`${shootyesgoalX.length | parseInt(`${penaltygoalC}`)}`), 4);
      break;
   }
   if (!eventS.endsWith(`${libavutilz.length}`)) {
      eventS += `${(String.fromCharCode(55,0) == toponq ? parseInt(`${kickm}`) : toponq.length)}`;
   }
      eventS = "1";
      viewerq = `${parseInt(`${defaultbasketballbgV}`) << (Math.min(3, Math.abs(2)))}`;
   if (strl == 4.53) {
      strl -= parseFloat(`${libavutilz.length}`);
   }
      toponq += `${parseInt(`${defaultbasketballbgV}`)}`;

      setCountdownSecond(((VIP_PROMOTION_COUNTDOWN_MINUTE * 60 * 1000) - (Date.now() - backgroundState.vipPromotionCountdownStart)) / 1000);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  if (showCondition)
    return (
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          transform: isFullscreen ? [{ scale: 0.75 }] : []
        }}
      >
        <View
          style={{
            flex: 1,
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            alignContent: "center",
          }}
        >
          <LinearGradient
            colors={['#4A3E2A', '#231D14', '#1A1712', '#191612']}
            locations={[0, 0.29, 0.63, 1]}
            style={{
              width: 322,
              height: 340,
              borderRadius: 14,
              paddingHorizontal: 16,
              paddingTop: 26,
              paddingBottom: 12,
            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <View
              style={{
                flex: 1,
                gap: 16,
                flexDirection: 'column',
              }}>
              <View
                style={{
                  gap: 10,
                  flexDirection: 'column',
                }}>
                <Text
                  style={{
                    ...styles.titleText
                  }}>
                  限时订阅优惠
                </Text>
                <View style={styles.countdownContainer}>
                  {remainingTimeAry.map((val, i) => {
                    return (
                      <View
                        key={i}
                        style={{
                          flexDirection: 'row',
                          gap: 5,
                        }}>
                        <View
                          style={{
                            backgroundColor: '#F4DBBA',
                            borderRadius: 6,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 24,
                            height: 24,
                            paddingTop: 5,
                            paddingBottom: 3,
                          }}
                        >
                          <Text style={styles.countdownText}>
                            {val}
                          </Text>

                        </View>
                        {i % 2 === 1 && i < remainingTimeAry.length - 1 && (
                          <Text style={{ ...styles.countdownText, padding: 1, color: '#F4DBBA' }}>
                            :
                          </Text>
                        )}
                      </View>
                    );
                  })}
                </View>
              </View>
              <Text style={styles.contentText1}>
                限时优惠，立即升级会员可享受最低4折优惠，先到先得！已有99.5%用户抢先购买，解锁了更多影视权益。您确定要错过这个升级体验的最好机会吗？
              </Text>
              <Text style={styles.contentText2}>
                限时优惠
                <Text style={{ ...styles.contentText2, color: '#FAC33D' }}>{VIP_PROMOTION_PURCHASE_MAX / 10000}万</Text>名额，已有
                <Text style={{ ...styles.contentText2, color: '#FAC33D' }}>{backgroundState.vipPromotionPurchaseNum}人</Text>购买
              </Text>
            </View>

            <View
              style={{
                paddingHorizontal: 24,
                gap: 6,
              }}>
              <TouchableOpacity
                onPress={onPurchase}
              >
                <LinearGradient
                  colors={['#D1AC7D', '#B1885F']}
                  locations={[0.0, 0.99]}
                  style={styles.purchaseButton}
                >
                  <Text style={styles.purchaseButtonText}>
                    继续抢购
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={onClose}
              >
                <Text style={styles.cancelButtonText}>
                  放弃机会
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View >
      </View >
    );

  return <></>;
}

const styles = StyleSheet.create({
  purchaseButton: {
    borderRadius: 8,
    paddingVertical: 6,
    alignItems: "center",
  },
  purchaseButtonText: {
    color: "#1D2023",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 25,
    fontFamily: "PingFang SC",
  },
  cancelButton: {
    backgroundColor: "#121314",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 6,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "white",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 25,
    textAlign: 'center',
    fontFamily: "PingFang SC",
  },
  titleText: {
    textAlign: 'center',
    color: '#F4DBBA',
    fontSize: 17,
    fontFamily: 'PingFang SC',
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: 1,
  },
  countdownText: {
    textAlign: "center",
    textAlignVertical: 'center',
    color: '#1D2023',
    fontSize: 14,
    fontFamily: 'Archivo-Regular',
    fontWeight: '800',
    lineHeight: 15,
  },
  contentText1: {
    fontFamily: 'PingFang SC',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0.5,
    textAlign: 'center',
    color: 'white',
  },
  contentText2: {
    fontFamily: 'PingFang SC',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: 0.5,
    textAlign: 'center',
    color: '#FFEFDA',
  },
  image1: {
    position: "absolute",
    bottom: -30,
    width: 148,
    height: 156,
  },
  image2: {
    position: "absolute",
    top: 0,
    width: '100%',
    aspectRatio: 1208 / 496,
  },
  countdownContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
});
