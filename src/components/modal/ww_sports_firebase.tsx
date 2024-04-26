import React, { useEffect, ReactNode, useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated } from "react-native";
import FastImage from "../common/ww_result";
import LinearGradient from "react-native-linear-gradient";
import { useSelector } from "@hooks/ww_catagory_neon";
import { wwAwayteamfield } from "@redux/reducers/ww_gray";
import { VIP_PROMOTION_COUNTDOWN_MINUTE, VIP_PROMOTION_PURCHASE_MAX } from "@utility/ww_icon";

interface wwIndexDice {
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
}: wwIndexDice) {
  const backgroundState = useSelector<wwAwayteamfield>('backgroundReducer');
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
       let refreshm: Map<any, any> = new Map([[String.fromCharCode(112,101,114,115,105,115,116,95,104,95,51,50,0),false ], [String.fromCharCode(117,95,56,50,95,103,101,116,115,103,110,99,116,120,110,111,0),true ], [String.fromCharCode(100,105,115,112,108,97,121,115,95,57,95,56,0),true ]]);
    let baiduR: Map<any, any> = new Map([[String.fromCharCode(101,108,105,103,105,98,108,101,95,51,95,57,53,0),686], [String.fromCharCode(105,95,52,57,95,115,105,103,110,97,116,117,114,101,0),406]]);
    let bang2 = 0.0;
    let gifgoalbgv = String.fromCharCode(106,95,50,53,95,108,97,100,100,101,114,115,116,101,112,0);
    let assistg: Array<any> = [String.fromCharCode(112,117,108,108,113,117,111,116,101,95,120,95,56,52,0), String.fromCharCode(99,104,101,99,107,109,97,114,107,95,103,95,55,53,0), String.fromCharCode(108,95,54,49,95,115,116,97,98,105,108,105,122,97,116,105,111,110,0)];
    let sliderD = 5;
    let middleo = String.fromCharCode(116,114,97,105,110,95,111,95,52,54,0);
   if ((refreshm.size >> (Math.min(middleo.length, 5))) > 5) {
      middleo = `${1 >> (Math.min(4, Math.abs(parseInt(`${bang2}`))))}`;
   }
      assistg.push(1 / (Math.max(3, baiduR.size)));
      assistg = [baiduR.size];
      assistg = [gifgoalbgv.length >> (Math.min(5, assistg.length))];
       let u_lockB: Map<any, any> = new Map([[String.fromCharCode(121,95,54,52,95,114,101,103,0),705], [String.fromCharCode(118,95,56,48,95,110,97,109,101,115,112,97,99,101,115,0),850]]);
      let modelsu = 6094340 >= u_lockB.size;
      do {
         u_lockB = new Map([[`${u_lockB.size}`, 2]]);
         if (modelsu) {
            break;
         }
      } while (modelsu && ((u_lockB.size + 1) <= 4 && 3 <= (1 + u_lockB.size)));
      for (let y = 0; y < 1; y++) {
          let dycreatorM = 4.0;
          let modulesD = String.fromCharCode(104,119,109,97,112,95,49,95,57,55,0);
          let expired3 = 5.0;
         u_lockB = new Map([[`${u_lockB.size}`, u_lockB.size]]);
         dycreatorM *= parseInt(`${expired3}`) << (Math.min(3, Math.abs(2)));
         modulesD += `${parseInt(`${expired3}`) >> (Math.min(modulesD.length, 5))}`;
      }
          let holderi = String.fromCharCode(101,114,114,111,114,118,95,97,95,50,48,0);
         u_lockB = new Map([[`${u_lockB.size}`, 2 >> (Math.min(5, holderi.length))]]);
      bang2 += sliderD / 3;
      assistg = [gifgoalbgv.length ^ 2];
   while (3 <= (gifgoalbgv.length & 2)) {
       let specc = 4.0;
      if (specc == specc) {
         specc += parseInt(`${specc}`);
      }
         specc /= Math.max(parseInt(`${specc}`) / 1, 3);
          let black_ = String.fromCharCode(101,95,49,49,95,112,97,114,97,109,99,104,97,110,103,101,0);
          let backgroundP = 5.0;
         specc *= 1;
         black_ = "2";
         backgroundP *= parseFloat(`${parseInt(`${backgroundP}`) - black_.length}`);
      gifgoalbgv += `${sliderD}`;
      break;
   }
   let iconplay8 = 6889969 <= assistg.length;
   do {
      assistg = [refreshm.size & 2];
      if (iconplay8) {
         break;
      }
   } while ((assistg.length >= gifgoalbgv.length) && iconplay8);
      sliderD /= Math.max(5, middleo.length);
       let infok = false;
       let activityH = String.fromCharCode(112,95,55,48,95,112,108,97,116,101,97,117,0);
       let stepk = 0;
         stepk |= (String.fromCharCode(116,0) == activityH ? (infok ? 2 : 1) : activityH.length);
      let giftbuttont = 6189053 <= stepk;
      do {
         stepk %= Math.max(stepk * activityH.length, 2);
         if (giftbuttont) {
            break;
         }
      } while ((1 < (1 * stepk) && (stepk * 1) < 2) && giftbuttont);
      while (activityH.length == 4 || !infok) {
         activityH += `${activityH.length}`;
         break;
      }
         stepk *= (stepk | (infok ? 4 : 4));
      let iconwechata = activityH.length <= 7352996;
      do {
         activityH += `${(activityH == String.fromCharCode(90,0) ? (infok ? 5 : 4) : activityH.length)}`;
         if (iconwechata) {
            break;
         }
      } while (iconwechata && (stepk >= 2));
         activityH += `${((infok ? 2 : 4) % 2)}`;
         stepk <<= Math.min(Math.abs(((infok ? 5 : 4) % 3)), 5);
         stepk <<= Math.min(activityH.length, 1);
         activityH = `${stepk}`;
      assistg = [3];
   for (let j = 0; j < 3; j++) {
       let moviesp = 0.0;
       let themer = String.fromCharCode(106,100,99,116,95,54,95,50,55,0);
       let xadsdkS = true;
       let graphB: Map<any, any> = new Map([[String.fromCharCode(112,114,105,109,101,95,102,95,53,57,0),String.fromCharCode(119,97,107,101,117,112,95,109,95,55,57,0)], [String.fromCharCode(102,95,56,95,100,97,112,112,115,0),String.fromCharCode(108,105,102,101,99,121,99,108,101,95,104,95,54,52,0)], [String.fromCharCode(119,101,105,103,104,116,112,95,120,95,53,50,0),String.fromCharCode(112,95,56,48,95,99,104,97,110,103,101,114,101,102,0)]]);
       let gmailQ = true;
         themer += `${((xadsdkS ? 4 : 2) >> (Math.min(Math.abs(parseInt(`${moviesp}`)), 4)))}`;
      let qaagi = gmailQ ? !gmailQ : gmailQ;
      do {
          let defaultprofilepicP = 4;
          let tailH = false;
          let yingH = String.fromCharCode(102,95,49,54,95,110,111,110,110,101,103,97,116,105,118,101,0);
         gmailQ = yingH.length > 20 && !xadsdkS;
         defaultprofilepicP ^= ((tailH ? 4 : 5) / (Math.max(6, defaultprofilepicP)));
         tailH = 96 > defaultprofilepicP;
         yingH += `${defaultprofilepicP}`;
         if (qaagi) {
            break;
         }
      } while (qaagi && (!gmailQ));
         moviesp *= graphB.size * 2;
       let greytick5 = String.fromCharCode(117,110,102,114,101,101,122,101,95,102,95,50,54,0);
       let point2 = String.fromCharCode(109,95,54,95,100,101,99,105,115,105,111,110,0);
         gmailQ = xadsdkS;
      if (gmailQ) {
         moviesp *= 1;
      }
          let thumbnailn = 1.0;
          let static_46 = String.fromCharCode(99,95,55,55,95,100,97,116,97,115,116,111,114,101,0);
         point2 += `${(String.fromCharCode(99,0) == static_46 ? graphB.size : static_46.length)}`;
         thumbnailn += parseFloat(`${2}`);
      while ((1 - graphB.size) < 4) {
         graphB = new Map([[greytick5, parseInt(`${moviesp}`)]]);
         break;
      }
      if (point2 != String.fromCharCode(111,0) || greytick5.length == 1) {
         point2 = `${point2.length + themer.length}`;
      }
      if (point2.length <= 3 || themer == String.fromCharCode(81,0)) {
          let matches2: Map<any, any> = new Map([[String.fromCharCode(118,95,54,50,95,119,111,114,100,0),191], [String.fromCharCode(120,95,50,95,103,114,97,121,0),561], [String.fromCharCode(110,95,56,53,95,121,114,121,105,0),661]]);
          let rncorek = true;
          let awayteamfieldv = false;
          let iconsubssuccessX = false;
          let interstitialw = String.fromCharCode(120,95,55,95,114,101,99,101,105,112,116,115,0);
         themer += `${themer.length}`;
         matches2.set(`${awayteamfieldv}`, ((awayteamfieldv ? 5 : 5) & 3));
         rncorek = (matches2.size & interstitialw.length) == 79;
         iconsubssuccessX = (((!iconsubssuccessX ? 29 : interstitialw.length) & interstitialw.length) < 29);
      }
       let imagenetworkerrn = true;
       let memberh = false;
      bang2 -= 2 - sliderD;
   }
   for (let h = 0; h < 1; h++) {
      middleo += `${middleo.length}`;
   }
   while (assistg.length >= 2) {
      bang2 += 3 + sliderD;
      break;
   }
   for (let k = 0; k < 1; k++) {
       let qaagw = String.fromCharCode(114,101,100,117,99,101,100,95,116,95,50,57,0);
       let middleJ = String.fromCharCode(111,95,56,50,95,112,97,99,107,101,116,111,117,116,0);
       let helperK = String.fromCharCode(107,95,56,48,95,115,99,97,108,97,114,109,117,108,116,0);
       let zhengpianl = 1.0;
      while (qaagw == String.fromCharCode(51,0)) {
         middleJ += "3";
         break;
      }
          let mbnativeadvancedu = false;
         helperK += `${parseInt(`${zhengpianl}`) / (Math.max(qaagw.length, 5))}`;
         mbnativeadvancedu = !mbnativeadvancedu;
       let awayteamfieldX = 4;
       let giftbuttonc = 4;
         helperK = `${(helperK == String.fromCharCode(121,0) ? middleJ.length : helperK.length)}`;
         zhengpianl -= qaagw.length;
      if (4 == (5 | awayteamfieldX) && (awayteamfieldX | giftbuttonc) == 5) {
          let plash8 = true;
          let zhengpiano = String.fromCharCode(117,95,50,50,95,99,108,111,99,107,119,105,115,101,0);
          let bottomK = 3;
          let minimizeV = 3.0;
         giftbuttonc += bottomK << (Math.min(qaagw.length, 5));
         plash8 = zhengpiano.length > 15;
         zhengpiano = "2";
         bottomK &= (2 >> (Math.min(5, Math.abs((plash8 ? 2 : 2)))));
         minimizeV *= zhengpiano.length + 1;
      }
       let bottomy: Map<any, any> = new Map([[String.fromCharCode(108,95,52,57,95,97,98,111,114,116,97,98,108,101,0),398], [String.fromCharCode(108,95,52,54,95,97,117,116,104,111,114,115,0),978]]);
         qaagw += `${giftbuttonc | 1}`;
      if (5 == (3 * helperK.length)) {
          let stationsY = true;
          let successa = 2.0;
          let imagesL = 4.0;
          let ynewinterstitial4: Array<any> = [654, 551];
         helperK = `${(middleJ == String.fromCharCode(73,0) ? middleJ.length : helperK.length)}`;
         stationsY = !stationsY;
         successa -= (parseFloat(`${(stationsY ? 1 : 3) + parseInt(`${successa}`)}`));
         imagesL -= parseFloat(`${ynewinterstitial4.length}`);
         ynewinterstitial4.push(parseInt(`${imagesL}`));
      }
         zhengpianl /= Math.max(bottomy.size, 2);
      for (let j = 0; j < 2; j++) {
         middleJ = `${awayteamfieldX + 1}`;
      }
      for (let s = 0; s < 2; s++) {
         helperK += `${parseInt(`${zhengpianl}`)}`;
      }
      middleo += `${assistg.length ^ 1}`;
   }
      assistg.push(1 << (Math.min(1, Math.abs(sliderD))));
      assistg.push(sliderD >> (Math.min(middleo.length, 1)));
      middleo += "2";

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
