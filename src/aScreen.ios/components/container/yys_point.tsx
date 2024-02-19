

class ModelKuaishouOrangedownarrow {
    static flipperNotificationfillemptyIc = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { yysPenaltyshoot } from "@type";
import { YingPingLogoSvg } from '@static';
import { useAppDispatch } from "@hooks";
import { playVod } from "@redux";

interface yysIconarrowrightorangeStation {
  vod: yysPenaltyshoot;
  width: number;
  imgRatio: number;
  isSlide: boolean;
}

export const YingPingContainer = ({ vod, width, imgRatio, isSlide }: yysIconarrowrightorangeStation) => {
  const { colors, textVariants, spacing } = useTheme();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const pTagRegex = /(<p>|<\/p>)/g;

  const handleOnPress = () => {
       let delegate_oV = 4.0;
    let qaagn: Array<any> = [String.fromCharCode(112,108,97,110,101,100,0), String.fromCharCode(114,101,115,112,101,99,116,105,110,103,95,55,95,57,51,0)];
    let scoreA: Map<any, any> = new Map([[String.fromCharCode(116,95,52,49,95,97,114,114,97,110,103,101,109,101,110,116,0),936], [String.fromCharCode(114,95,49,57,95,110,97,110,111,115,0),279], [String.fromCharCode(107,95,49,51,95,100,101,108,101,116,101,0),535]]);
    let turndownM = String.fromCharCode(97,116,114,0);
    let yellowredcardZ = String.fromCharCode(105,95,57,55,95,97,118,99,116,120,0);
    let circleN = String.fromCharCode(119,95,49,57,95,99,100,97,116,101,0);
    let foregrounda: Array<any> = [247, 354, 278];
    let station8 = String.fromCharCode(111,110,108,105,110,101,115,95,110,95,52,56,0);
    let build4: Array<any> = [272, 528, 894];
    let typingP = String.fromCharCode(97,120,112,95,103,95,51,54,0);
   for (let v = 0; v < 3; v++) {
      qaagn = [3];
   }
      turndownM += `${3 * qaagn.length}`;
       let whiteC = 5.0;
       let airbnbstart = String.fromCharCode(119,114,105,116,101,105,110,105,116,0);
      let klevinK = whiteC >= 6244670.0;
      do {
         whiteC -= parseFloat(`${parseInt(`${whiteC}`)}`);
         if (klevinK) {
            break;
         }
      } while (klevinK && (5.0 < (parseFloat(`${airbnbstart.length}`) - whiteC)));
      for (let z = 0; z < 1; z++) {
         whiteC -= parseFloat(`${2}`);
      }
          let traminiQ = true;
          let hooksW = String.fromCharCode(97,110,103,114,121,0);
          let teamdetailsbgZ = String.fromCharCode(110,104,97,110,99,101,95,101,95,53,57,0);
         whiteC -= (parseFloat(`${hooksW.length * (traminiQ ? 4 : 5)}`));
         traminiQ = teamdetailsbgZ == String.fromCharCode(53,0);
         hooksW += `${teamdetailsbgZ.length * teamdetailsbgZ.length}`;
         airbnbstart += "3";
      for (let w = 0; w < 3; w++) {
         whiteC /= Math.max(1, parseFloat(`${parseInt(`${whiteC}`) + airbnbstart.length}`));
      }
      let defaultlogol = airbnbstart.length <= 7316704;
      do {
         airbnbstart = `${3 - parseInt(`${whiteC}`)}`;
         if (defaultlogol) {
            break;
         }
      } while (defaultlogol && ((4 / (Math.max(3, airbnbstart.length))) > 1 || 4 > (parseInt(`${whiteC}`) - airbnbstart.length)));
      yellowredcardZ += `${yellowredcardZ.length}`;
      yellowredcardZ += `${turndownM.length & scoreA.size}`;
   for (let m = 0; m < 2; m++) {
      turndownM += "2";
   }
   for (let t = 0; t < 2; t++) {
      delegate_oV += parseFloat(`${scoreA.size & 1}`);
   }
      delegate_oV /= Math.max(1, parseFloat(`${3 | station8.length}`));

    dispatch(playVod(vod));

      delegate_oV -= (parseFloat(`${String.fromCharCode(115,0) == turndownM ? foregrounda.length : turndownM.length}`));
      scoreA.set(circleN, 1);
   while (5 >= (turndownM.length - foregrounda.length) && 2 >= (turndownM.length - 5)) {
      turndownM = `${circleN.length}`;
      break;
   }
   if (!turndownM.startsWith(station8)) {
      turndownM += `${foregrounda.length | station8.length}`;
   }
      station8 += `${turndownM.length & 1}`;
       let floaterg = true;
       let dragcloseC = 2.0;
       let halfR: Array<any> = [223, 867];
      if ((halfR.length >> (Math.min(Math.abs(2), 3))) == 4) {
         dragcloseC /= Math.max(3, parseFloat(`${parseInt(`${dragcloseC}`) >> (Math.min(5, Math.abs(3)))}`));
      }
      for (let z = 0; z < 2; z++) {
         floaterg = 85.56 == dragcloseC && floaterg;
      }
         dragcloseC -= (parseFloat(`${(floaterg ? 1 : 4) - 2}`));
       let imageactionliveE = 0.0;
      if (!floaterg) {
         floaterg = dragcloseC <= imageactionliveE;
      }
       let issubQ: Array<any> = [String.fromCharCode(115,104,111,114,116,116,101,114,109,0), String.fromCharCode(117,110,114,101,115,111,108,118,97,98,108,101,95,55,95,55,53,0)];
          let subs4 = String.fromCharCode(116,95,50,53,95,110,116,101,114,110,97,108,0);
          let middlesoundo = String.fromCharCode(118,95,52,56,95,114,101,108,111,103,105,110,0);
          let arrow1 = 4.0;
         imageactionliveE += parseFloat(`${subs4.length | 2}`);
         subs4 += "3";
         middlesoundo += `${parseInt(`${arrow1}`)}`;
         arrow1 /= Math.max(parseFloat(`${middlesoundo.length}`), 3);
      for (let w = 0; w < 2; w++) {
         issubQ = [2 & parseInt(`${imageactionliveE}`)];
      }
          let imageactionliven: Array<any> = [String.fromCharCode(98,101,116,116,101,114,0), String.fromCharCode(115,121,110,116,104,101,115,105,115,95,117,95,57,49,0)];
         floaterg = !floaterg || dragcloseC == 69.34;
         imageactionliven.push(imageactionliven.length);
      qaagn.push(parseInt(`${dragcloseC}`) << (Math.min(1, Math.abs(3))));
   while ((4 & turndownM.length) == 3) {
      turndownM += "2";
      break;
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
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', }}>
            <YingPingLogoSvg width={30} height={31} />
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
              source={{ uri: ModelKuaishouOrangedownarrow.flipperNotificationfillemptyIc([126,98,98,102,101,44,57,57,111,127,120,113,101,126,127,56,98,96,57,22],0x16,false) + vod.vod_pic_slide }}
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
            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', }}>
              <YingPingLogoSvg width={30} height={31} />
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