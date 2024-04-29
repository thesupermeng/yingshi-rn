

class PangleZhuboRoboto {
    static clubMutedOptions = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { ttAppsOther } from "@type/tt_line_borderless";
import Logo from '@static/images/stringStoreClose.svg';
import { useAppDispatch } from "@hooks/tt_spec_download";
import { playVod } from "@redux/actions/tt_activity";

interface ttSmall {
  vod: ttAppsOther;
  width: number;
  imgRatio: number;
  isSlide: boolean;
}

export const YingPingContainer = ({ vod, width, imgRatio, isSlide }: ttSmall) => {
  const { colors, textVariants, spacing } = useTheme();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const pTagRegex = /(<p>|<\/p>)/g;

  const handleOnPress = () => {
       let chartf = String.fromCharCode(100,97,118,100,95,101,95,55,52,0);
    let disconnectedg = 5.0;
    let huaweiX = true;
    let userN = String.fromCharCode(97,99,116,111,114,95,109,95,56,52,0);
    let heartT = String.fromCharCode(119,95,57,53,95,97,115,110,0);
    let androidc = String.fromCharCode(107,95,54,50,95,110,101,105,103,104,98,111,114,0);
    let headerN = 4.0;
    let usernameB = 5.0;
    let umengR = String.fromCharCode(101,95,53,48,95,121,117,118,0);
    let giftr = String.fromCharCode(106,95,57,95,115,112,108,105,116,116,105,110,103,0);
    let episodesZ = String.fromCharCode(109,95,57,57,95,111,98,115,101,114,118,97,116,105,111,110,0);
    let mbbannerD: Map<any, any> = new Map([[String.fromCharCode(98,97,115,107,101,116,98,97,108,108,95,101,95,53,54,0),true ], [String.fromCharCode(97,117,116,111,99,111,109,109,105,116,95,100,95,54,53,0),true ], [String.fromCharCode(114,95,54,57,95,112,117,115,104,98,97,99,107,0),false ]]);
    let panglej = String.fromCharCode(112,95,54,48,95,118,105,110,116,101,114,112,111,108,97,116,111,114,0);
    let eighteen0 = String.fromCharCode(97,109,114,119,98,95,117,95,56,51,0);
    let materialc = String.fromCharCode(98,95,49,57,95,98,119,114,105,116,101,0);
      androidc += `${chartf.length}`;
      userN += `${umengR.length % 2}`;
      usernameB += parseInt(`${usernameB}`) << (Math.min(3, Math.abs(3)));
   if (5.27 <= (4.25 * disconnectedg) || (disconnectedg / 4.25) <= 4.42) {
       let completeu = String.fromCharCode(104,95,57,95,99,111,110,115,101,110,116,0);
       let floaterC = 3.0;
       let topicb: Map<any, any> = new Map([[String.fromCharCode(101,103,119,105,116,95,49,95,49,54,0),341], [String.fromCharCode(99,95,50,50,95,105,115,112,108,97,121,0),173]]);
       let macauk = String.fromCharCode(105,109,112,111,114,116,101,114,115,95,100,95,56,0);
       let linep = String.fromCharCode(114,105,110,103,95,55,95,56,49,0);
      let vietnamC = 8266389.0 >= floaterC;
      do {
         floaterC -= 3 & linep.length;
         if (vietnamC) {
            break;
         }
      } while (vietnamC && (Array.from(topicb.values()).includes(floaterC)));
      if (linep != macauk) {
          let connectionj = String.fromCharCode(109,95,55,95,98,108,111,99,107,103,114,111,117,112,0);
         macauk = `${linep.length | 1}`;
         connectionj = `${connectionj.length}`;
      }
      while (macauk.length >= 4) {
          let infoV: Map<any, any> = new Map([[String.fromCharCode(115,99,114,101,101,110,112,114,101,115,115,111,95,102,95,55,55,0),String.fromCharCode(107,95,55,56,95,99,111,110,102,108,105,99,116,115,0)], [String.fromCharCode(112,95,52,49,0),String.fromCharCode(97,99,108,114,95,118,95,53,54,0)]]);
          let sinaG = String.fromCharCode(101,95,56,50,95,109,108,112,100,115,112,0);
         linep = `${2 + parseInt(`${floaterC}`)}`;
         infoV = new Map([[`${infoV.size}`, 3]]);
         sinaG = `${sinaG.length}`;
         break;
      }
         topicb = new Map([[`${floaterC}`, linep.length / (Math.max(1, 4))]]);
      for (let z = 0; z < 2; z++) {
         topicb.set(macauk, macauk.length << (Math.min(Math.abs(2), 2)));
      }
      for (let x = 0; x < 2; x++) {
          let brightnessL = true;
          let shirti: Map<any, any> = new Map([[String.fromCharCode(117,110,98,105,110,100,95,114,95,50,49,0),false ], [String.fromCharCode(97,108,112,104,97,110,117,109,101,114,105,99,115,95,109,95,55,55,0),true ]]);
         macauk += `${parseInt(`${floaterC}`) | macauk.length}`;
         brightnessL = !brightnessL;
         shirti.set(`${brightnessL}`, (2 ^ (brightnessL ? 4 : 2)));
      }
      if (4 < (parseInt(`${floaterC}`) - completeu.length) || 1.24 < (floaterC - completeu.length)) {
         floaterC += completeu.length & 1;
      }
      while (linep == String.fromCharCode(117,0)) {
         macauk += `${2 ^ linep.length}`;
         break;
      }
      let plusf = macauk == String.fromCharCode(57,50,107,117,0);
      do {
          let activeh = 4.0;
          let l_unlockM = String.fromCharCode(115,101,116,116,105,109,101,111,117,116,95,51,95,53,53,0);
          let sinaW = 1.0;
          let middled = 1;
         macauk += `${3 + parseInt(`${floaterC}`)}`;
         activeh -= l_unlockM.length;
         l_unlockM = `${parseInt(`${sinaW}`)}`;
         sinaW += 2;
         middled &= l_unlockM.length - 2;
         if (plusf) {
            break;
         }
      } while ((4 >= linep.length) && plusf);
      if (linep == macauk) {
         macauk = "2";
      }
      while (4 > (4 - topicb.size) || (topicb.size - 4) > 4) {
         macauk += `${linep.length & 2}`;
         break;
      }
      while (2 == (completeu.length | 1) || 1 == (completeu.length << (Math.min(Math.abs(1), 3)))) {
         floaterC -= completeu.length;
         break;
      }
          let mailf = 3.0;
         topicb.set(`${mailf}`, 3);
       let usernameU = 4;
       let gesturesc = 1;
      while (5 == (3 ^ usernameU)) {
         usernameU >>= Math.min(4, Math.abs((String.fromCharCode(54,0) == macauk ? topicb.size : macauk.length)));
         break;
      }
      disconnectedg -= 1;
   }
      androidc = "1";
      userN = `${(String.fromCharCode(51,0) == giftr ? giftr.length : userN.length)}`;
      mbbannerD.set(`${usernameB}`, episodesZ.length);
       let loading3 = String.fromCharCode(114,103,116,99,115,95,53,95,55,49,0);
       let dialogR: Map<any, any> = new Map([[String.fromCharCode(101,109,117,108,97,116,101,100,95,115,95,49,50,0),false ], [String.fromCharCode(115,95,52,49,95,98,97,116,116,101,114,121,0),false ]]);
       let bannerV = String.fromCharCode(110,95,50,57,0);
      if (dialogR.size < 3) {
         dialogR = new Map([[`${dialogR.size}`, 3]]);
      }
      while ((dialogR.size ^ 1) <= 4 || (bannerV.length ^ 1) <= 1) {
         bannerV += `${(String.fromCharCode(97,0) == bannerV ? bannerV.length : dialogR.size)}`;
         break;
      }
      while ((dialogR.size + 3) > 3 && (bannerV.length + dialogR.size) > 3) {
         bannerV = `${dialogR.size / 1}`;
         break;
      }
      let stringsr = String.fromCharCode(106,54,54,0) == loading3;
      do {
         loading3 = `${loading3.length | 3}`;
         if (stringsr) {
            break;
         }
      } while ((bannerV != String.fromCharCode(51,0)) && stringsr);
      for (let m = 0; m < 3; m++) {
          let backward4 = 4;
          let splashp: Map<any, any> = new Map([[String.fromCharCode(108,95,55,53,0),353], [String.fromCharCode(103,95,52,48,95,98,105,114,116,104,100,97,116,101,0),433]]);
          let soundS: Array<any> = [912, 341, 686];
          let starN = 5.0;
         bannerV = `${splashp.size + backward4}`;
         backward4 += parseInt(`${starN}`) / (Math.max(soundS.length, 9));
         splashp.set(`${starN}`, soundS.length - 1);
      }
      chartf += "1";
   for (let u = 0; u < 1; u++) {
      androidc = "1";
   }
      mbbannerD.set(`${usernameB}`, 1);

    dispatch(playVod(vod));

   let c_unlockF = headerN <= 7346325.0;
   do {
      headerN *= umengR.length;
      if (c_unlockF) {
         break;
      }
   } while (c_unlockF && ((headerN - 4.46) <= 2.44));
   let b_playerQ = heartT == String.fromCharCode(52,52,54,0);
   do {
       let telegramp: Map<any, any> = new Map([[String.fromCharCode(97,95,54,48,95,105,110,118,116,114,97,110,115,0),767], [String.fromCharCode(115,116,111,112,112,101,100,95,98,95,57,55,0),481], [String.fromCharCode(97,116,116,114,105,98,117,116,101,115,95,106,95,57,50,0),753]]);
       let expand1 = false;
         expand1 = !expand1;
         telegramp.set(`${expand1}`, 3);
         expand1 = null == telegramp.get(`${expand1}`);
         telegramp = new Map([[`${telegramp.size}`, (telegramp.size ^ (expand1 ? 4 : 3))]]);
         expand1 = telegramp.get(`${expand1}`) == null;
         expand1 = !expand1;
      heartT = `${(String.fromCharCode(98,0) == heartT ? panglej.length : heartT.length)}`;
      if (b_playerQ) {
         break;
      }
   } while (b_playerQ && (androidc == String.fromCharCode(72,0)));
       let readE = false;
          let privacys = String.fromCharCode(115,95,56,50,0);
         readE = (18 > ((!readE ? 18 : privacys.length) * privacys.length));
      let c_positionO = readE ? !readE : readE;
      do {
          let moduleZ = String.fromCharCode(110,97,118,105,95,48,95,54,54,0);
          let producty = 5.0;
         readE = !readE;
         moduleZ += `${moduleZ.length}`;
         producty -= (String.fromCharCode(70,0) == moduleZ ? moduleZ.length : parseInt(`${producty}`));
         if (c_positionO) {
            break;
         }
      } while ((!readE || !readE) && c_positionO);
      while (!readE) {
         readE = !readE;
         break;
      }
      huaweiX = 63.12 < usernameB;
   for (let o = 0; o < 2; o++) {
       let time_vd = 1;
      if (5 >= (time_vd % 4)) {
          let containeri = String.fromCharCode(106,95,57,52,95,97,100,100,0);
         time_vd -= 1;
         containeri += `${containeri.length % (Math.max(containeri.length, 9))}`;
      }
       let combineQ = String.fromCharCode(115,119,105,102,116,121,95,122,95,50,51,0);
       let shrink6 = String.fromCharCode(106,95,55,51,95,100,105,109,109,105,110,103,0);
         time_vd *= shrink6.length;
      huaweiX = episodesZ.length > 28;
   }
   let sina_ = 8491998 >= umengR.length;
   do {
      umengR = `${((huaweiX ? 2 : 3))}`;
      if (sina_) {
         break;
      }
   } while ((panglej != String.fromCharCode(112,0)) && sina_);
   for (let c = 0; c < 1; c++) {
      usernameB *= (chartf == String.fromCharCode(90,0) ? parseInt(`${headerN}`) : chartf.length);
   }
   while (chartf.startsWith(giftr)) {
      chartf += `${(androidc == String.fromCharCode(69,0) ? userN.length : androidc.length)}`;
      break;
   }
       let episodel = String.fromCharCode(116,119,111,115,99,97,108,101,95,107,95,55,56,0);
      for (let u = 0; u < 3; u++) {
          let middleware_ = 2.0;
         episodel = `${(episodel == String.fromCharCode(86,0) ? episodel.length : parseInt(`${middleware_}`))}`;
      }
         episodel = `${episodel.length}`;
         episodel += `${episodel.length}`;
      mbbannerD.set(userN, (String.fromCharCode(87,0) == userN ? userN.length : mbbannerD.size));
       let turnW = String.fromCharCode(116,111,107,101,110,115,95,116,95,55,51,0);
         turnW += `${turnW.length * 2}`;
      while (turnW.length < turnW.length) {
         turnW += `${turnW.length % 2}`;
         break;
      }
      while (turnW.includes(`${turnW.length}`)) {
         turnW += `${turnW.length}`;
         break;
      }
      usernameB -= (heartT == String.fromCharCode(102,0) ? chartf.length : heartT.length);
   if (5.1 <= headerN) {
      headerN /= Math.max(parseInt(`${disconnectedg}`) * parseInt(`${headerN}`), 4);
   }
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
              source={{ uri: PangleZhuboRoboto.clubMutedOptions([16,12,12,8,11,66,87,87,1,17,22,31,11,16,17,86,12,14,87,120],0x78,false) + vod.vod_pic_slide }}
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