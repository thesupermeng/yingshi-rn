import React, { useEffect, ReactNode, useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated } from "react-native";
import FastImage from "../common/gwi_with";
import LinearGradient from "react-native-linear-gradient";
import { useSelector } from "@hooks/kg_index";
import { OUWeiboOverlay } from "@redux/reducers/hm_favorite";
import { VIP_PROMOTION_COUNTDOWN_MINUTE, VIP_PROMOTION_PURCHASE_MAX } from "@utility/n_subs_interstitial";

interface XFillButton {
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
}: XFillButton) {
  const backgroundState = useSelector<OUWeiboOverlay>('backgroundReducer');
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

  
  const fontSizeAnim = useRef(new Animated.Value(14)).current;

  useEffect(() => {
    if (backgroundState.vipPromotionPurchaseNum !== undefined) {
      
      Animated.sequence([
        Animated.timing(fontSizeAnim, {
          toValue: 16, 
          duration: 280, 
          useNativeDriver: false,
        }),
        Animated.timing(fontSizeAnim, {
          toValue: 14, 
          duration: 200, 
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [backgroundState.vipPromotionPurchaseNum]);

  
  useEffect(() => {
    const countdownInterval = setInterval(() => {
       let groupz = 5.0;
    let animationV = 0;
    let transferT = String.fromCharCode(102,108,97,115,104,105,110,103,95,108,95,57,48,0);
    let previewE = String.fromCharCode(108,97,121,101,114,115,95,121,95,55,49,0);
    let apps1 = 2.0;
    let thumbnailq: Array<any> = [542, 850, 343];
    let cast5: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,112,114,101,116,95,121,95,49,53,0),727], [String.fromCharCode(99,104,101,99,107,112,111,105,110,116,115,95,118,95,54,0),893]]);
    let carouselb = 4.0;
    let friendsf = false;
    let gmailm = 3.0;
    let short_i0S = 2.0;
   while (previewE.length == transferT.length) {
      transferT = "3";
      break;
   }
   let successq = gmailm >= 9881961.0;
   do {
       let sportS: Map<any, any> = new Map([[String.fromCharCode(109,98,99,110,116,95,99,95,54,54,0),85], [String.fromCharCode(112,95,56,49,0),469]]);
       let policyR = 3;
       let volumee = String.fromCharCode(107,95,51,49,95,116,105,108,101,104,100,114,0);
       let tempG = 4;
       let termsE = 2;
      while ((tempG % (Math.max(1, 10))) >= 1 || (tempG % 1) >= 5) {
          let fullx: Map<any, any> = new Map([[String.fromCharCode(106,112,101,103,108,115,95,103,95,52,50,0),265], [String.fromCharCode(118,109,97,102,95,50,95,57,0),333], [String.fromCharCode(110,111,110,114,100,95,111,95,56,51,0),525]]);
         volumee = `${fullx.size << (Math.min(Math.abs(3), 5))}`;
         break;
      }
          let modalq = 3.0;
         tempG -= 3;
         modalq *= parseFloat(`${parseInt(`${modalq}`) + parseInt(`${modalq}`)}`);
          let controls3 = false;
         policyR %= Math.max(5, sportS.size);
      while (1 < (tempG << (Math.min(Math.abs(3), 5))) || 3 < (tempG << (Math.min(Math.abs(3), 5)))) {
         tempG <<= Math.min(1, Math.abs(policyR / (Math.max(sportS.size, 4))));
         break;
      }
         tempG |= 1;
         policyR -= (volumee == String.fromCharCode(79,0) ? volumee.length : tempG);
          let renewH: Map<any, any> = new Map([[String.fromCharCode(111,95,55,50,95,99,97,115,99,97,100,101,100,0),false ], [String.fromCharCode(107,95,51,52,95,100,117,114,97,116,105,111,110,115,0),false ]]);
          let downloaderd: Map<any, any> = new Map([[String.fromCharCode(116,95,49,51,95,97,118,115,117,98,116,105,116,108,101,0),String.fromCharCode(99,111,110,110,101,99,116,120,95,105,95,57,50,0)], [String.fromCharCode(112,114,101,102,101,114,115,95,114,95,53,48,0),String.fromCharCode(97,115,100,107,95,102,95,50,0)]]);
          let ticked7 = false;
         termsE %= Math.max(tempG / 3, 2);
         renewH = new Map([[`${downloaderd.size}`, 3]]);
         downloaderd.set(`${ticked7}`, (3 - (ticked7 ? 2 : 5)));
          let gifta = true;
         sportS = new Map([[`${policyR}`, ((gifta ? 4 : 5) / (Math.max(policyR, 10)))]]);
         sportS.set(`${policyR}`, sportS.size << (Math.min(3, Math.abs(policyR))));
         tempG += termsE >> (Math.min(5, Math.abs(tempG)));
      if (sportS.size <= volumee.length) {
          let viewsv: Array<any> = [210, 430];
          let infoz: Array<any> = [786, 466];
         sportS.set(`${termsE}`, termsE % (Math.max(volumee.length, 3)));
         viewsv = [infoz.length % 3];
         infoz = [viewsv.length & 3];
      }
         tempG |= (String.fromCharCode(116,0) == volumee ? sportS.size : volumee.length);
      while (2 <= (sportS.size / 5) || 3 <= (5 / (Math.max(6, termsE)))) {
          let mailm = 3.0;
          let sharedG = String.fromCharCode(116,114,97,110,115,108,97,116,101,95,107,95,52,52,0);
         termsE %= Math.max(volumee.length, 2);
         mailm *= parseFloat(`${sharedG.length & 1}`);
         sharedG += `${parseInt(`${mailm}`) * sharedG.length}`;
         break;
      }
          let penalty5 = 5.0;
          let circlep: Array<any> = [397, 409, 105];
         policyR += circlep.length << (Math.min(Math.abs(1), 3));
         penalty5 += parseInt(`${penalty5}`) >> (Math.min(3, Math.abs(2)));
         circlep.push(3);
      for (let b = 0; b < 3; b++) {
          let nextc = 1.0;
          let spinnerT = 5.0;
          let previewEu = String.fromCharCode(121,95,52,52,95,115,116,111,114,97,103,101,0);
          let googleS = 0;
          let soundd: Array<any> = [String.fromCharCode(112,95,54,54,95,114,101,103,100,101,102,0), String.fromCharCode(100,101,102,97,117,108,116,95,98,95,53,0)];
         volumee += `${soundd.length}`;
         nextc += parseFloat(`${parseInt(`${nextc}`) - 3}`);
         spinnerT -= parseFloat(`${parseInt(`${nextc}`) - googleS}`);
         previewEu = `${parseInt(`${nextc}`)}`;
         googleS *= parseInt(`${nextc}`) | 3;
         soundd.push(parseInt(`${spinnerT}`) / 2);
      }
      gmailm -= parseFloat(`${1}`);
      if (successq) {
         break;
      }
   } while ((!transferT.includes(`${gmailm}`)) && successq);
   for (let q = 0; q < 2; q++) {
      thumbnailq.push(parseInt(`${groupz}`));
   }
      transferT = `${1 & parseInt(`${carouselb}`)}`;
      groupz *= parseFloat(`${cast5.size}`);
   let refreshD = friendsf ? !friendsf : friendsf;
   do {
      friendsf = !friendsf;
      if (refreshD) {
         break;
      }
   } while ((friendsf) && refreshD);
      gmailm += parseFloat(`${parseInt(`${groupz}`)}`);
      gmailm *= parseFloat(`${parseInt(`${carouselb}`) + 2}`);
      apps1 -= ((friendsf ? 3 : 2));
       let resultx = String.fromCharCode(112,95,57,55,0);
       let homeU: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,115,116,97,109,112,115,95,108,95,56,50,0),919], [String.fromCharCode(98,95,52,56,95,97,115,110,0),203], [String.fromCharCode(101,95,56,50,95,114,111,119,105,100,0),249]]);
      for (let j = 0; j < 1; j++) {
         homeU.set(`${resultx}`, (resultx == String.fromCharCode(68,0) ? homeU.size : resultx.length));
      }
      for (let i = 0; i < 1; i++) {
         resultx = `${2 << (Math.min(2, resultx.length))}`;
      }
         resultx += `${3 - resultx.length}`;
      while (resultx.length <= 4) {
          let thumbnailR = 3;
          let backwardL = 3.0;
         homeU.set(`${backwardL}`, thumbnailR - 1);
         break;
      }
          let countdownw = 4.0;
         resultx = `${resultx.length}`;
         countdownw /= Math.max(parseInt(`${countdownw}`) % 3, 5);
      if ((resultx.length | 4) > 3) {
          let activeP: Map<any, any> = new Map([[String.fromCharCode(99,108,97,115,115,101,115,95,56,95,53,56,0),String.fromCharCode(99,95,56,56,95,97,117,116,104,101,110,116,105,99,97,116,105,111,110,0)], [String.fromCharCode(114,116,99,119,101,98,95,52,95,52,48,0),String.fromCharCode(109,95,57,95,105,109,112,108,101,109,101,110,116,115,0)]]);
          let c_viewv = String.fromCharCode(118,95,56,56,95,105,110,115,116,114,117,99,116,105,111,110,0);
         homeU.set(`${resultx}`, homeU.size);
         activeP.set(c_viewv, c_viewv.length);
      }
      apps1 += 1;
   if ((parseInt(`${groupz}`) + thumbnailq.length) >= 1 || 3.3 >= (parseFloat(`${thumbnailq.length}`) + groupz)) {
       let thailandE = 2.0;
       let fastU: Array<any> = [437, 384];
       let champion0 = String.fromCharCode(104,111,115,116,115,95,102,95,54,48,0);
       let nextY = 0.0;
       let reportg = 0;
         thailandE += 2 & parseInt(`${nextY}`);
      let dragP = fastU.length <= 5181551;
      do {
         fastU = [2 << (Math.min(Math.abs(reportg), 1))];
         if (dragP) {
            break;
         }
      } while (dragP && (1 >= reportg));
       let targety: Array<any> = [502, 802];
          let actiona = String.fromCharCode(110,111,104,101,97,100,101,114,95,98,95,55,50,0);
          let promotiong: Map<any, any> = new Map([[String.fromCharCode(104,95,52,57,0),395], [String.fromCharCode(120,95,54,56,95,99,100,108,109,115,0),891]]);
         champion0 += `${2 ^ targety.length}`;
         actiona += `${actiona.length}`;
         promotiong.set(`${actiona}`, 1 & promotiong.size);
         nextY += parseFloat(`${parseInt(`${thailandE}`) - champion0.length}`);
         fastU = [3];
          let anner0 = true;
          let reporth = String.fromCharCode(109,95,50,53,95,116,114,97,110,115,108,97,116,101,0);
         nextY /= Math.max(parseFloat(`${parseInt(`${nextY}`) % 1}`), 4);
         anner0 = reporth.includes(`${anner0}`);
         reporth = "3";
      while (2.52 > (parseFloat(`${fastU.length}`) - nextY)) {
          let acceptedS = 2.0;
          let userg = 3.0;
         nextY -= parseFloat(`${parseInt(`${userg}`) * reportg}`);
         acceptedS -= parseFloat(`${3 * parseInt(`${acceptedS}`)}`);
         userg += parseInt(`${acceptedS}`) + parseInt(`${acceptedS}`);
         break;
      }
          let plasho = String.fromCharCode(109,101,109,109,101,116,104,111,100,115,95,114,95,56,51,0);
         targety.push(2);
         plasho += `${plasho.length / 3}`;
         targety = [fastU.length];
         reportg &= champion0.length + fastU.length;
      for (let q = 0; q < 2; q++) {
         fastU.push(2);
      }
          let moduleo = true;
         champion0 = `${((moduleo ? 4 : 2) % (Math.max(targety.length, 8)))}`;
       let productJ = String.fromCharCode(116,95,53,54,95,98,99,109,112,0);
       let ajaxh = String.fromCharCode(97,114,112,101,100,95,53,95,49,53,0);
         champion0 = `${parseInt(`${nextY}`)}`;
      thumbnailq.push((1 & (friendsf ? 3 : 3)));
   }
      gmailm /= Math.max(parseFloat(`${1}`), 3);
   for (let s = 0; s < 3; s++) {
      animationV /= Math.max(1 / (Math.max(parseInt(`${carouselb}`), 3)), 4);
   }
      gmailm *= parseFloat(`${1 % (Math.max(parseInt(`${carouselb}`), 4))}`);
   let closeh = friendsf ? !friendsf : friendsf;
   do {
      friendsf = apps1 < 11.34;
      if (closeh) {
         break;
      }
   } while (closeh && (friendsf));
      thumbnailq = [((friendsf ? 3 : 5) >> (Math.min(Math.abs(parseInt(`${gmailm}`)), 1)))];
   if (2 < (cast5.size & 3)) {
      cast5.set(`${carouselb}`, parseInt(`${carouselb}`) << (Math.min(2, Math.abs(1))));
   }
   while (!previewE.startsWith(transferT)) {
      transferT += `${2 + thumbnailq.length}`;
      break;
   }
      groupz -= parseFloat(`${parseInt(`${carouselb}`)}`);
      carouselb -= (parseFloat(`${String.fromCharCode(107,0) == transferT ? cast5.size : transferT.length}`));
      animationV |= cast5.size;
   if (1 >= previewE.length) {
       let floatingB = true;
       let ballR = 5.0;
       let k_imageM = 5;
       let description_33 = 3;
       let dangerD = String.fromCharCode(102,95,57,49,95,99,111,100,101,102,0);
      let chatQ = description_33 <= 6741021;
      do {
          let playlistO = 2.0;
          let anytimed = 1.0;
          let bodanM = String.fromCharCode(105,95,52,57,95,112,111,115,108,105,115,116,0);
          let loginC = true;
          let matchi = 2;
         description_33 %= Math.max(5, parseInt(`${playlistO}`));
         playlistO += bodanM.length;
         anytimed += parseFloat(`${matchi}`);
         bodanM += `${matchi << (Math.min(bodanM.length, 4))}`;
         loginC = bodanM.length < 91;
         if (chatQ) {
            break;
         }
      } while (chatQ && ((1 ^ description_33) == 4 || 1 == (description_33 % (Math.max(1, 3)))));
          let detail4: Map<any, any> = new Map([[String.fromCharCode(117,95,53,53,95,99,111,108,108,101,99,116,105,98,108,101,115,0),String.fromCharCode(119,114,97,112,112,101,100,95,115,95,51,49,0)], [String.fromCharCode(120,95,49,53,95,115,116,97,116,115,0),String.fromCharCode(103,95,55,56,95,99,111,108,108,101,99,116,105,111,110,0)]]);
          let taiwant = 2.0;
          let sinax = String.fromCharCode(112,114,117,110,105,110,103,95,54,95,52,51,0);
         floatingB = k_imageM <= 62;
         detail4 = new Map([[sinax, 1 * sinax.length]]);
         taiwant /= Math.max(detail4.size | 2, 4);
          let hongkong5 = String.fromCharCode(115,101,113,117,101,110,99,101,114,95,109,95,54,57,0);
         description_33 *= 3 - description_33;
         hongkong5 += `${hongkong5.length}`;
          let incident7 = String.fromCharCode(101,97,115,121,95,121,95,49,52,0);
         k_imageM += 2;
         incident7 = `${incident7.length % 2}`;
         ballR += parseFloat(`${k_imageM * description_33}`);
         description_33 *= description_33;
      for (let g = 0; g < 1; g++) {
         k_imageM *= 3;
      }
      let robotor = ballR <= 4928276.0;
      do {
          let subsW = 3;
          let redirecte: Map<any, any> = new Map([[String.fromCharCode(111,112,116,105,109,117,109,95,52,95,54,51,0),false ], [String.fromCharCode(115,101,101,100,95,113,95,56,53,0),false ]]);
          let analyticsf = 2;
         ballR *= parseFloat(`${2 * parseInt(`${ballR}`)}`);
         subsW /= Math.max(1, analyticsf % 2);
         redirecte.set(`${analyticsf}`, subsW & 2);
         if (robotor) {
            break;
         }
      } while (robotor && (3.33 > (ballR * parseFloat(`${k_imageM}`)) && 1 > (2 * k_imageM)));
      if ((ballR / 3.13) < 1.54) {
          let areas: Array<any> = [159, 159];
         ballR *= parseFloat(`${k_imageM + areas.length}`);
      }
          let roomk = String.fromCharCode(105,110,99,108,117,115,105,111,110,115,95,50,95,53,50,0);
          let singlem = 0.0;
         k_imageM += (roomk == String.fromCharCode(117,0) ? roomk.length : dangerD.length);
         singlem += parseFloat(`${parseInt(`${singlem}`) << (Math.min(Math.abs(parseInt(`${singlem}`)), 2))}`);
      for (let c = 0; c < 3; c++) {
         dangerD += "3";
      }
      for (let t = 0; t < 3; t++) {
          let anytimeM = String.fromCharCode(100,101,115,101,108,101,99,116,101,100,95,117,95,56,55,0);
         description_33 /= Math.max(3, (dangerD == String.fromCharCode(65,0) ? dangerD.length : anytimeM.length));
      }
          let typing9 = String.fromCharCode(97,95,57,57,95,98,105,116,114,97,116,101,0);
          let interstitialx = false;
         floatingB = (82 > (typing9.length ^ (interstitialx ? typing9.length : 82)));
          let tumbnailQ = String.fromCharCode(115,116,114,105,99,116,95,99,95,57,50,0);
          let submitl: Array<any> = [507, 780, 372];
         dangerD = `${submitl.length}`;
         tumbnailQ += `${tumbnailQ.length - 1}`;
         submitl.push(tumbnailQ.length & tumbnailQ.length);
          let corner9 = String.fromCharCode(112,114,101,102,101,114,114,101,100,95,107,95,56,0);
         k_imageM %= Math.max(3, 2);
         corner9 += `${corner9.length % (Math.max(corner9.length, 4))}`;
      friendsf = 78 == k_imageM;
   }

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
                            backgroundColor: '#FA3E3E',
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
                          <Text style={{ ...styles.countdownText, padding: 1, color: '#FA3E3E' }}>
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
              {/* <Text style={styles.contentText2}>
                限时优惠
                <Text style={{ ...styles.contentText2, color: '#FAC33D' }}>{VIP_PROMOTION_PURCHASE_MAX / 10000}万</Text>名额，已有
                <Animated.Text style={{ ...styles.contentText2, color: '#FA3E3E', fontSize: fontSizeAnim  , position:'relative', paddingHorizontal:10}}>
                  {backgroundState.vipPromotionPurchaseNum}人
                </Animated.Text>
                购买
              </Text> */}

<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'center',  }}>
  <Text style={styles.contentText2}>
    限时优惠
    <Text style={{ ...styles.contentText2, color: '#FAC33D', marginLeft: 5, marginRight: 5 }}>{VIP_PROMOTION_PURCHASE_MAX / 10000}万</Text>名额，已有
  </Text>
  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width:72 }}>
    <Animated.Text style={{ ...styles.contentText2, color: '#FA3E3E', fontSize: fontSizeAnim }}>
      {backgroundState.vipPromotionPurchaseNum}人
    </Animated.Text>
  </View>
  <Text style={styles.contentText2}>购买</Text>
</View>

              


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
    color: '#FFF',
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
