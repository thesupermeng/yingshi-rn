

class SmallDetailsArrow {
    static typesInviteCurrent = (contents: [number], key: number, hasEmoji: boolean) => {
        const newList = [];
        for (let i = 0; i < contents.length; i++) {
            var v = contents[i];
            v ^= key;
            v &= 0xff;
            if (v == 0 && i == contents.length - 1) {
                break;
            }
            newList.push(v);
        }
        let result = "";
        for (let i = 0; i < newList.length; i++) {
            result += '%' + newList[i].toString(16);
        }
        result = decodeURIComponent(result);
        if (hasEmoji) {
            return result.replace(/\\u([0-9A-F]{4})/ig, (_, g) => String.fromCharCode(`0x${g}`));
        }
        return result;
    }
}
import { useNavigation, useTheme } from "@react-navigation/native";
import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import FastImage from "react-native-fast-image";
import { XVSScoreDark } from "@type/wpk_long";
import Logo from '@static/images/membershipSubs.svg';
import { useAppDispatch } from "@hooks/kg_index";
import { playVod } from "@redux/actions/xif_layout";

interface XFillButton {
  vod: XVSScoreDark;
  width: number;
  imgRatio: number;
  isSlide: boolean;
}

export const YingPingContainer = ({ vod, width, imgRatio, isSlide }: XFillButton) => {
  const { colors, textVariants, spacing } = useTheme();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const pTagRegex = /(<p>|<\/p>)/g;

  const handleOnPress = () => {
       let twitterK = String.fromCharCode(120,95,52,57,95,109,101,115,115,97,103,101,115,0);
    let over2 = String.fromCharCode(122,95,56,54,95,115,112,108,97,115,104,0);
    let policyZ = 3.0;
    let mailU = 0.0;
    let nalyticsO = 1.0;
    let layoutV: Map<any, any> = new Map([[String.fromCharCode(117,95,54,55,95,115,101,108,101,99,116,97,98,108,101,0),119], [String.fromCharCode(97,95,55,49,95,119,97,118,101,102,111,114,109,97,116,101,120,0),12], [String.fromCharCode(116,119,111,115,95,118,95,55,48,0),137]]);
    let temperaturel: Map<any, any> = new Map([[String.fromCharCode(109,117,108,97,100,100,95,113,95,56,55,0),621], [String.fromCharCode(100,111,117,98,108,101,115,95,119,95,52,53,0),616]]);
    let leagueY = true;
    let chatv = String.fromCharCode(109,108,115,100,95,121,95,57,56,0);
    let turno: Map<any, any> = new Map([[String.fromCharCode(115,116,114,110,108,101,110,95,98,95,52,57,0),467], [String.fromCharCode(101,118,115,105,103,110,97,108,95,122,95,57,48,0),549]]);
      temperaturel = new Map([[`${mailU}`, 2 << (Math.min(1, Math.abs(parseInt(`${mailU}`))))]]);
      temperaturel.set(`${policyZ}`, 3 | over2.length);
   let trashU = twitterK.length <= 8837087;
   do {
      twitterK = `${over2.length}`;
      if (trashU) {
         break;
      }
   } while (((parseInt(`${policyZ}`) * twitterK.length) >= 1 && 1 >= (1 ^ twitterK.length)) && trashU);
   let fcopy_xxv = 7363156 >= temperaturel.size;
   do {
      temperaturel = new Map([[`${layoutV.size}`, 3 >> (Math.min(1, Math.abs(parseInt(`${policyZ}`))))]]);
      if (fcopy_xxv) {
         break;
      }
   } while (((2 | temperaturel.size) < 5 || (2.60 - mailU) < 1.86) && fcopy_xxv);
      over2 += "3";
   if (2 >= temperaturel.size) {
      policyZ += (parseInt(`${policyZ}`) >> (Math.min(1, Math.abs((leagueY ? 5 : 5)))));
   }
   for (let t = 0; t < 3; t++) {
      policyZ /= Math.max(4, parseInt(`${policyZ}`) & over2.length);
   }
       let acceptedo = true;
      if (acceptedo) {
         acceptedo = !acceptedo;
      }
      if (acceptedo) {
          let register_e0 = 1.0;
         acceptedo = !acceptedo;
         register_e0 /= Math.max(parseFloat(`${parseInt(`${register_e0}`)}`), 1);
      }
          let modeT: Map<any, any> = new Map([[String.fromCharCode(99,114,97,115,104,101,100,95,111,95,49,53,0),382], [String.fromCharCode(110,95,51,54,95,98,114,101,97,107,112,111,105,110,116,0),471]]);
         acceptedo = modeT.size <= 20;
      mailU -= parseFloat(`${parseInt(`${nalyticsO}`) ^ 2}`);

    dispatch(playVod(vod));

   let areau = 6273632.0 <= mailU;
   do {
       let singapore8 = 3.0;
       let loadingS: Array<any> = [String.fromCharCode(99,95,55,57,95,114,101,108,101,97,115,101,100,0), String.fromCharCode(108,115,112,100,108,112,99,95,53,95,56,52,0), String.fromCharCode(107,95,53,57,95,112,114,111,108,111,110,103,0)];
       let temperatureh = String.fromCharCode(108,95,55,50,95,116,114,117,110,99,97,116,105,111,110,0);
       let prediction5 = String.fromCharCode(115,104,105,109,109,101,114,105,110,103,95,112,95,49,57,0);
      let upgradeU = 7629005 >= temperatureh.length;
      do {
         temperatureh = `${parseInt(`${singapore8}`)}`;
         if (upgradeU) {
            break;
         }
      } while ((3 >= (parseInt(`${singapore8}`) - temperatureh.length)) && upgradeU);
         temperatureh = `${prediction5.length}`;
          let gmail4 = String.fromCharCode(102,95,56,48,95,100,110,120,104,100,101,110,99,0);
          let yingP = String.fromCharCode(121,95,56,95,112,105,120,108,101,116,0);
         loadingS.push(parseInt(`${singapore8}`) / 2);
         gmail4 += `${yingP.length + gmail4.length}`;
         yingP = `${(gmail4 == String.fromCharCode(100,0) ? yingP.length : gmail4.length)}`;
          let tailm = String.fromCharCode(112,95,54,48,95,99,114,97,115,104,101,100,0);
         temperatureh += "2";
         tailm += `${tailm.length}`;
       let shrinkH = 1.0;
          let fullF = 0;
          let hoverA = String.fromCharCode(116,105,110,116,101,100,95,57,95,56,54,0);
         singapore8 *= parseFloat(`${hoverA.length * fullF}`);
         shrinkH += parseFloat(`${parseInt(`${singapore8}`)}`);
      let topicy = String.fromCharCode(98,99,113,119,48,116,0) == temperatureh;
      do {
         temperatureh += `${parseInt(`${singapore8}`) + prediction5.length}`;
         if (topicy) {
            break;
         }
      } while ((2.7 >= (2.90 * shrinkH)) && topicy);
      if (temperatureh.length <= loadingS.length) {
         loadingS = [temperatureh.length];
      }
         prediction5 = `${parseInt(`${singapore8}`) - parseInt(`${shrinkH}`)}`;
      let launchk = loadingS.length >= 4984048;
      do {
         loadingS.push(parseInt(`${shrinkH}`));
         if (launchk) {
            break;
         }
      } while (launchk && (temperatureh.startsWith(`${loadingS.length}`)));
         temperatureh = `${parseInt(`${singapore8}`)}`;
      mailU += parseFloat(`${parseInt(`${policyZ}`) & parseInt(`${mailU}`)}`);
      if (areau) {
         break;
      }
   } while ((5.8 < mailU) && areau);
   let condensedq = 9077985.0 <= policyZ;
   do {
      policyZ *= 2;
      if (condensedq) {
         break;
      }
   } while (condensedq && (5.46 < (5.12 * policyZ) && (mailU * 5.12) < 1.31));
       let infoG = String.fromCharCode(115,117,98,100,105,118,105,115,105,111,110,95,56,95,55,49,0);
       let stringN = String.fromCharCode(100,101,115,116,114,117,99,116,95,118,95,55,57,0);
       let styleS = 2.0;
       let loadingH = 5.0;
      if (1.76 == (loadingH - 3.43)) {
         stringN = `${parseInt(`${styleS}`) * infoG.length}`;
      }
      while (4.9 > (styleS - parseFloat(`${infoG.length}`))) {
         infoG = `${2 + parseInt(`${styleS}`)}`;
         break;
      }
         stringN = `${parseInt(`${loadingH}`)}`;
          let downloadingX = 1.0;
         stringN += "3";
         downloadingX -= 2;
      if (stringN.length < 4) {
          let casting_ = 4;
          let analyticsO: Array<any> = [729, 998, 147];
          let dropdownf = 1.0;
         styleS += parseFloat(`${casting_ - infoG.length}`);
         casting_ %= Math.max(parseInt(`${dropdownf}`), 1);
         analyticsO = [parseInt(`${dropdownf}`) * 3];
      }
       let register_vo2 = false;
       let forwardT = true;
       let shared6: Map<any, any> = new Map([[String.fromCharCode(111,95,51,51,95,114,115,104,105,102,116,0),554], [String.fromCharCode(110,95,52,49,95,109,111,110,111,98,108,97,99,107,0),402]]);
       let descD: Map<any, any> = new Map([[String.fromCharCode(107,95,53,57,95,100,105,118,112,111,119,109,0),true ], [String.fromCharCode(120,95,54,95,104,97,115,104,101,100,0),true ], [String.fromCharCode(118,95,51,52,95,115,111,105,115,99,111,110,110,101,99,116,101,100,0),true ]]);
         stringN += `${((register_vo2 ? 2 : 5) | 1)}`;
      leagueY = chatv.length <= 25;
   let f_playerm = 7192825.0 <= nalyticsO;
   do {
       let arrowF = 5;
       let infoi = String.fromCharCode(100,95,53,56,95,105,112,109,111,118,105,101,0);
       let bodanp = 4;
         infoi += "1";
       let policy5 = String.fromCharCode(112,95,49,48,95,102,116,118,100,111,99,0);
      if ((bodanp / (Math.max(3, policy5.length))) == 4) {
         bodanp &= infoi.length;
      }
      let firebaseK = arrowF >= 8855868;
      do {
         arrowF += policy5.length;
         if (firebaseK) {
            break;
         }
      } while ((arrowF > infoi.length) && firebaseK);
       let userq: Array<any> = [640, 737];
       let floatingu: Array<any> = [311, 329, 74];
      if ((policy5.length / 1) <= 5 && (arrowF / 1) <= 2) {
         policy5 += `${arrowF * 3}`;
      }
      while (floatingu.includes(bodanp)) {
         floatingu = [(String.fromCharCode(82,0) == infoi ? infoi.length : userq.length)];
         break;
      }
         floatingu.push(infoi.length * floatingu.length);
      if ((infoi.length >> (Math.min(Math.abs(2), 5))) <= 2) {
         infoi += `${infoi.length}`;
      }
      nalyticsO -= layoutV.size;
      if (f_playerm) {
         break;
      }
   } while (f_playerm && (policyZ > nalyticsO));
   if (1.88 >= (2.92 * nalyticsO)) {
       let trasho = 5.0;
       let transferL: Array<any> = [406, 869];
         transferL = [transferL.length];
      while ((5 * transferL.length) >= 1 || (trasho / (Math.max(parseFloat(`${transferL.length}`), 3))) >= 2.46) {
         trasho -= parseFloat(`${transferL.length}`);
         break;
      }
      while (2.41 >= (trasho - parseFloat(`${transferL.length}`)) && (transferL.length - parseInt(`${trasho}`)) >= 4) {
          let logor = String.fromCharCode(108,95,49,52,95,109,97,121,98,101,0);
          let minivodS = String.fromCharCode(119,95,57,54,95,100,101,103,114,97,100,101,100,0);
          let clearP = String.fromCharCode(110,95,52,49,95,114,100,118,111,0);
         trasho += parseFloat(`${3 | clearP.length}`);
         logor = `${minivodS.length + 3}`;
         minivodS += `${logor.length - minivodS.length}`;
         clearP = `${logor.length % 1}`;
         break;
      }
       let targety = 0.0;
       let yellowR = 3.0;
      if ((trasho / (Math.max(2, yellowR))) == 5.84 && 5.84 == (yellowR / (Math.max(trasho, 1)))) {
         trasho /= Math.max(parseFloat(`${1}`), 3);
      }
         transferL.push(3 & parseInt(`${targety}`));
      nalyticsO -= (chatv == String.fromCharCode(51,0) ? parseInt(`${nalyticsO}`) : chatv.length);
   }
   for (let s = 0; s < 3; s++) {
      nalyticsO += parseInt(`${policyZ}`);
   }
   for (let w = 0; w < 1; w++) {
      nalyticsO += twitterK.length * 2;
   }
       let lightg = String.fromCharCode(99,111,118,101,114,115,95,119,95,49,52,0);
       let roomN: Map<any, any> = new Map([[String.fromCharCode(106,95,52,95,115,105,103,110,97,108,115,0),503], [String.fromCharCode(114,101,102,101,114,101,110,99,101,100,95,57,95,50,52,0),642]]);
       let h_lockU = false;
      while ((roomN.size << (Math.min(Math.abs(3), 2))) == 4 || 3 == roomN.size) {
          let register_t9g = true;
         roomN = new Map([[`${roomN.size}`, (String.fromCharCode(83,0) == lightg ? roomN.size : lightg.length)]]);
         register_t9g = (!register_t9g ? register_t9g : !register_t9g);
         break;
      }
          let left7 = 1.0;
          let episodes1: Array<any> = [492, 214];
         roomN = new Map([[`${roomN.size}`, roomN.size]]);
         left7 -= parseInt(`${left7}`) * episodes1.length;
         episodes1.push(parseInt(`${left7}`));
      let connectiong = String.fromCharCode(50,98,106,109,115,102,99,0) == lightg;
      do {
          let playx: Map<any, any> = new Map([[String.fromCharCode(111,95,57,54,95,118,101,114,116,105,99,101,115,0),702], [String.fromCharCode(97,110,110,111,116,97,116,105,111,110,115,95,97,95,55,53,0),564], [String.fromCharCode(118,95,57,56,95,98,97,115,101,100,0),519]]);
          let private_lT: Map<any, any> = new Map([[String.fromCharCode(100,101,99,108,105,110,101,95,49,95,49,49,0),true ], [String.fromCharCode(100,111,99,115,105,122,101,95,55,95,54,49,0),true ]]);
          let splashC = String.fromCharCode(114,117,110,110,105,110,103,95,97,95,57,53,0);
          let streamingi = String.fromCharCode(101,108,115,95,107,95,50,56,0);
          let const_q2Z = String.fromCharCode(107,95,57,54,95,119,105,116,104,0);
         lightg = `${1 & splashC.length}`;
         playx.set(`${playx.size}`, playx.size ^ 2);
         private_lT.set(streamingi, streamingi.length);
         splashC += `${playx.size % 1}`;
         const_q2Z = "3";
         if (connectiong) {
            break;
         }
      } while (connectiong && ((roomN.size << (Math.min(lightg.length, 4))) > 2));
         lightg += "3";
       let robotoK = String.fromCharCode(103,114,97,121,95,52,95,49,49,0);
       let commonZ = String.fromCharCode(118,95,53,50,95,105,110,102,101,114,101,100,0);
          let downloadingy: Array<any> = [String.fromCharCode(110,111,100,101,95,52,95,53,50,0), String.fromCharCode(97,95,55,50,95,121,114,121,105,0)];
          let analyticsY = 3;
         h_lockU = 80 == roomN.size;
         downloadingy = [1];
         analyticsY /= Math.max(2, 2 * analyticsY);
         commonZ = `${1 - roomN.size}`;
       let largei: Array<any> = [910, 675];
      let editW = h_lockU ? !h_lockU : h_lockU;
      do {
          let main_pR = 0.0;
          let completei = String.fromCharCode(98,95,50,57,95,103,97,105,110,115,0);
          let gmaily = String.fromCharCode(114,101,102,112,105,99,95,48,95,56,54,0);
          let becomex: Map<any, any> = new Map([[String.fromCharCode(106,95,57,50,95,101,118,97,108,102,117,110,99,0),String.fromCharCode(97,110,105,109,95,120,95,49,57,0)], [String.fromCharCode(103,111,108,111,109,98,95,121,95,57,52,0),String.fromCharCode(102,114,97,109,101,115,105,122,101,115,95,97,95,57,48,0)], [String.fromCharCode(97,95,57,95,113,112,101,108,111,114,0),String.fromCharCode(104,95,54,54,95,112,114,111,102,105,108,101,115,0)]]);
         h_lockU = (lightg.length + largei.length) >= 10;
         main_pR *= parseFloat(`${3}`);
         completei += `${gmaily.length}`;
         gmaily = `${gmaily.length}`;
         becomex.set(`${main_pR}`, becomex.size | parseInt(`${main_pR}`));
         if (editW) {
            break;
         }
      } while ((h_lockU || 5 >= robotoK.length) && editW);
      temperaturel = new Map([[over2, over2.length >> (Math.min(4, Math.abs(parseInt(`${nalyticsO}`))))]]);
    navigation.navigate('播放IOS', {
      vod_id: vod.vod_id,
    });
  }

  return (
    <>
      { }
      {true ? (
        <TouchableOpacity activeOpacity={0.85}
          style={styles.slideVideoDescription}
          onPress={handleOnPress}
        >
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', }}>
            <Logo width={30} height={31} color={colors.primary} />
            <Text style={{ ...textVariants.body }}>
              官方推荐
            </Text>
          </View>
          <Text
            style={{ ...textVariants.subBody, color: colors.muted }}
            numberOfLines={5}
          >
            {vod?.vod_content?.replace(pTagRegex, "")}
          </Text>
          <View
            style={{
              width: width - spacing.sideOffset - spacing.sideOffset,
              height: (width - spacing.sideOffset - spacing.sideOffset) / imgRatio,
            }}
          >
            <FastImage
              source={{ uri: SmallDetailsArrow.typesInviteCurrent([-2,-30,-30,-26,-27,-84,-71,-71,-17,-1,-8,-15,-27,-2,-1,-72,-30,-32,-71,-106],0x96,false) + vod.vod_pic_slide }}
              resizeMode={"cover"}
              style={styles.slideImage}
            />
          </View>
          <View style={{ gap: 3 }}>
            <Text style={{ ...textVariants.bodyBold }}>
              {vod.vod_name}
            </Text>
            <Text style={{ ...textVariants.subBody, color: colors.muted }}>
              {vod.type_name}
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity activeOpacity={0.85}
          style={styles.videoDescription}
          onPress={handleOnPress}
        >
          <FastImage
            source={{ uri: vod.vod_pic }}
            resizeMode={"cover"}
            style={{
              ...styles.descriptionImage,
              ...styles.imageContainer,
            }}
          />
          <View style={styles.descriptionContainer}>
            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', }}>
              <Logo width={30} height={31} />
              <Text style={{ ...textVariants.body }}>
                官方推荐
              </Text>
            </View>
            <Text style={{ ...textVariants.bodyBold }}>
              {vod.vod_name}
            </Text>
            <Text style={{ ...textVariants.subBody, color: colors.muted }}>
              {vod.type_name}
            </Text>
            <Text
              style={{ ...textVariants.subBody, color: colors.muted }}
              numberOfLines={3}
            >
              {vod?.vod_content?.replace(pTagRegex, "")}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  slideVideoDescription: {
    flexDirection: "column",
    width: "100%",
    gap: 10,
    marginBottom: 15,
  },
  videoDescription: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginBottom: 15,
  },
  imageContainer: {
    flex: 2,
  },
  descriptionImage: {
    width: "100%",
    aspectRatio: 93 / 139,
    borderRadius: 10,
  },
  slideImage: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  descriptionContainer: {
    flex: 5,
    flexDirection: "column",
    gap: 5,
    paddingLeft: 12,
  },
});