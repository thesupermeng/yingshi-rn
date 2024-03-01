

class TempStringFloaterEwarded {
    static libfabricjniAreaOptionsRncore = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { yys_Bing } from "@type/yys_libzeus";
import Logo from '@static/images/latnPlusLogout.svg';
import { useAppDispatch } from "@hooks/yys_frame";
import { playVod } from "@redux/actions/yys_player_style";

interface yys_ConfigureUimanager {
  vod: yys_Bing;
  width: number;
  imgRatio: number;
  isSlide: boolean;
}

export const YingPingContainer = ({vod, width, imgRatio, isSlide}: yys_ConfigureUimanager) => {
  const { colors, textVariants, spacing } = useTheme();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const pTagRegex = /(<p>|<\/p>)/g;
  
  const handleOnPress = () => {
       let zoomS = false;
    let mini2 = String.fromCharCode(99,111,110,110,101,99,116,120,95,107,95,54,51,0);
    let leaguef = 3.0;
    let libavcodecr = String.fromCharCode(119,95,53,54,95,108,97,121,101,114,99,111,110,116,101,120,116,0);
    let libglogH = false;
    let mbridgew = true;
    let libimagepipelinek = String.fromCharCode(121,95,54,49,95,115,105,103,110,105,102,105,99,97,110,99,101,0);
    let gpayh = 3.0;
    let teamR = String.fromCharCode(104,95,54,52,0);
    let bodanz = 3;
   if (libimagepipelinek.length == 1 || !libglogH) {
       let fastforwardL = 0;
       let faviconX: Array<any> = [897, 443];
       let pagination3 = 3.0;
       let modulek = 0.0;
       let greenl: Array<any> = [539, 299];
       let theme_: Array<any> = [261, 477, 659];
      for (let c = 0; c < 3; c++) {
         pagination3 /= Math.max(parseFloat(`${parseInt(`${pagination3}`) | fastforwardL}`), 5);
      }
      let redirectI = faviconX.length >= 8936561;
      do {
         faviconX.push(fastforwardL | faviconX.length);
         if (redirectI) {
            break;
         }
      } while ((faviconX.length == 1) && redirectI);
      while (5 > greenl.length) {
         theme_ = [greenl.length | 2];
         break;
      }
       let alerto = String.fromCharCode(118,95,53,51,95,116,105,99,107,0);
       let sinas = String.fromCharCode(115,101,112,97,114,97,116,111,114,115,95,48,95,54,48,0);
      while ((alerto.length >> (Math.min(Math.abs(3), 2))) > 2 || (alerto.length >> (Math.min(Math.abs(3), 2))) > 4) {
         alerto = `${greenl.length % (Math.max(theme_.length, 9))}`;
         break;
      }
      let bing2 = greenl.length <= 8588482;
      do {
          let stringsR = String.fromCharCode(98,111,108,100,95,104,95,50,56,0);
          let volumeO = String.fromCharCode(97,95,55,57,95,115,104,97,100,101,0);
          let encrypt2 = String.fromCharCode(99,104,114,111,109,105,110,97,110,99,101,95,103,95,55,56,0);
          let mimoO: Map<any, any> = new Map([[String.fromCharCode(101,110,113,117,101,117,101,100,95,116,95,54,54,0),453], [String.fromCharCode(111,118,101,114,108,111,97,100,95,100,95,49,0),877]]);
          let routert: Map<any, any> = new Map([[String.fromCharCode(112,97,110,111,114,97,109,97,95,110,95,56,0),String.fromCharCode(108,95,49,49,0)], [String.fromCharCode(97,114,114,97,110,103,101,100,95,122,95,53,51,0),String.fromCharCode(115,95,50,56,95,101,109,98,101,100,100,105,110,103,0)], [String.fromCharCode(104,95,56,54,95,118,115,117,98,113,0),String.fromCharCode(117,95,49,55,95,97,108,108,111,99,122,0)]]);
         greenl = [encrypt2.length & 3];
         stringsR += `${mimoO.size}`;
         volumeO = `${routert.size << (Math.min(volumeO.length, 3))}`;
         encrypt2 = `${stringsR.length | mimoO.size}`;
         routert = new Map([[`${mimoO.size}`, mimoO.size]]);
         if (bing2) {
            break;
         }
      } while ((greenl.includes(fastforwardL)) && bing2);
          let configureE = 2.0;
         faviconX.push(2 * greenl.length);
         configureE -= 3;
      let white_ = 7146371 >= faviconX.length;
      do {
         faviconX.push(fastforwardL | theme_.length);
         if (white_) {
            break;
         }
      } while ((1 <= faviconX.length) && white_);
      while ((greenl.length + parseInt(`${pagination3}`)) > 3) {
         pagination3 *= parseFloat(`${3}`);
         break;
      }
      let unticku = theme_.length <= 4955648;
      do {
         theme_ = [parseInt(`${modulek}`) | 3];
         if (unticku) {
            break;
         }
      } while ((5 >= alerto.length) && unticku);
      while (faviconX.includes(modulek)) {
         faviconX.push(1);
         break;
      }
      libglogH = !mini2.endsWith(`${mbridgew}`);
   }
   let unselectedS = leaguef <= 9575581.0;
   do {
      leaguef /= Math.max(parseFloat(`${3}`), 2);
      if (unselectedS) {
         break;
      }
   } while (unselectedS && (!zoomS));
   while (libglogH) {
      libglogH = libavcodecr.length < 49 || !libglogH;
      break;
   }
       let statss: Map<any, any> = new Map([[String.fromCharCode(115,109,105,108,101,95,99,95,55,56,0),707], [String.fromCharCode(121,109,101,110,99,95,111,95,50,57,0),986], [String.fromCharCode(100,105,114,101,99,116,111,114,105,101,115,95,115,95,55,0),860]]);
       let overF = String.fromCharCode(119,95,57,56,95,113,117,97,114,116,0);
         overF = "2";
         statss = new Map([[`${statss.size}`, 1 + statss.size]]);
      while (overF.length == 3) {
         overF = `${1 % (Math.max(10, statss.size))}`;
         break;
      }
      if (5 <= (statss.size & overF.length)) {
         statss = new Map([[`${statss.size}`, statss.size]]);
      }
         overF = `${overF.length}`;
          let projectu = String.fromCharCode(116,117,110,101,95,54,95,54,51,0);
          let window__y = String.fromCharCode(99,108,101,97,114,118,105,100,101,111,100,97,116,97,95,108,95,51,48,0);
          let countrym: Map<any, any> = new Map([[String.fromCharCode(115,116,97,98,105,108,105,122,97,116,105,111,110,95,102,95,52,48,0),true ], [String.fromCharCode(110,95,55,51,95,112,114,117,110,105,110,103,0),true ], [String.fromCharCode(120,95,56,50,95,99,111,109,112,97,110,100,0),true ]]);
         overF = `${3 - overF.length}`;
         projectu += `${projectu.length * window__y.length}`;
         window__y += `${window__y.length}`;
         countrym = new Map([[projectu, (window__y == String.fromCharCode(100,0) ? window__y.length : projectu.length)]]);
      libimagepipelinek += `${overF.length << (Math.min(Math.abs(3), 1))}`;
      libglogH = 75.26 > leaguef && libavcodecr.length > 39;
      mini2 = `${(libavcodecr == String.fromCharCode(101,0) ? (zoomS ? 3 : 5) : libavcodecr.length)}`;
       let watchv = 3;
         watchv -= watchv & watchv;
      let sansz = watchv <= 7050345;
      do {
          let bnewarchdefaultsr = String.fromCharCode(100,117,115,116,95,101,95,54,52,0);
         watchv %= Math.max(4, watchv);
         bnewarchdefaultsr = `${3 & bnewarchdefaultsr.length}`;
         if (sansz) {
            break;
         }
      } while ((watchv < 1) && sansz);
      for (let y = 0; y < 1; y++) {
         watchv *= watchv + 1;
      }
      zoomS = (libimagepipelinek.length - watchv) > 37;

    dispatch(playVod(vod));

   for (let b = 0; b < 3; b++) {
       let bdxadsdkx = true;
       let spinnerX = true;
       let statsS = String.fromCharCode(99,101,114,116,105,102,105,99,97,116,101,95,101,95,55,0);
          let greenT = 4;
          let tickd = String.fromCharCode(120,112,101,114,105,109,101,110,116,97,108,95,97,95,56,56,0);
          let libtanb = 4.0;
         statsS += `${((bdxadsdkx ? 4 : 5) << (Math.min(5, Math.abs(3))))}`;
         greenT += 1;
         tickd += `${greenT & tickd.length}`;
         libtanb *= tickd.length;
         spinnerX = (bdxadsdkx ? spinnerX : !bdxadsdkx);
         spinnerX = !bdxadsdkx;
         spinnerX = statsS.length < 48;
       let huaweit = String.fromCharCode(99,111,109,112,97,114,101,114,115,95,52,95,52,49,0);
       let styleZ = String.fromCharCode(109,95,51,49,95,101,108,101,109,101,110,116,119,105,115,101,0);
          let predictionv = 5;
          let assistx = String.fromCharCode(109,106,112,101,103,106,112,101,103,95,117,95,51,49,0);
         bdxadsdkx = !bdxadsdkx && statsS.length < 89;
         predictionv <<= Math.min(Math.abs(assistx.length | 3), 4);
         assistx = `${(assistx == String.fromCharCode(106,0) ? predictionv : assistx.length)}`;
      let sliderU = huaweit.length <= 9434184;
      do {
          let contextv = String.fromCharCode(100,105,115,99,117,115,115,105,111,110,95,50,95,57,53,0);
         huaweit += `${contextv.length}`;
         if (sliderU) {
            break;
         }
      } while (sliderU && (huaweit.length > 4));
      let halfx = statsS == String.fromCharCode(112,122,121,55,0);
      do {
         statsS = `${huaweit.length}`;
         if (halfx) {
            break;
         }
      } while ((!spinnerX || 1 > statsS.length) && halfx);
         bdxadsdkx = huaweit.length <= statsS.length;
      libimagepipelinek = "3";
   }
      leaguef *= (parseFloat(`${(zoomS ? 5 : 1) ^ libavcodecr.length}`));
   for (let n = 0; n < 1; n++) {
      zoomS = String.fromCharCode(119,0) == libavcodecr;
   }
   while (libimagepipelinek.startsWith(`${libglogH}`)) {
      libglogH = leaguef > 88.78 || !libglogH;
      break;
   }
      gpayh += parseFloat(`${libavcodecr.length}`);
      libavcodecr = `${parseInt(`${leaguef}`) ^ 3}`;
   if (3.37 <= (leaguef + parseFloat(`${mini2.length}`)) && 5 <= (2 >> (Math.min(1, mini2.length)))) {
      mini2 += `${((libglogH ? 1 : 2) ^ 2)}`;
   }
    navigation.navigate('播放IOS', {
        vod_id: vod.vod_id,
    });
  }

  return (
    <>
    {isSlide ? (
      <TouchableOpacity 
        style={styles.slideVideoDescription}
        onPress={handleOnPress}
      >
        <View style={{flexDirection: 'row', gap: 8, alignItems: 'center', }}>
          <Logo width={30} height={31}/>
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
            source={{ uri: TempStringFloaterEwarded.libfabricjniAreaOptionsRncore([22,10,10,14,13,68,81,81,7,23,16,25,13,22,23,80,10,8,81,126],0x7E,false) + vod.vod_pic_slide }}
            resizeMode={"cover"}
            style={styles.slideImage}
          />
        </View>
        <View style={{gap: 3}}>
          <Text style={{ ...textVariants.bodyBold }}>
            {vod.vod_name}
          </Text>
          <Text style={{ ...textVariants.subBody, color: colors.muted }}>
            {vod.type_name}
          </Text>
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity 
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
          <View style={{flexDirection: 'row', gap: 8, alignItems: 'center', }}>
            <Logo width={30} height={31}/>
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