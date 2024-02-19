import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ActionSheetIOS } from "react-native";
import FastImage from "react-native-fast-image";
import { yysSubmit } from "@type";
import { yysHomeinactiveUntick } from "@utility";
import { useAppDispatch } from "@hooks";
import { showReportAction } from "@redux";

interface yysIconarrowrightorangeStation {
  commentItem: yysSubmit;
}

export const CommentCard = ({ commentItem }: yysIconarrowrightorangeStation) => {
  const { textVariants, colors } = useTheme();
  const dispatch = useAppDispatch();

  const handlePress = async () => {
       let upgradeQ = String.fromCharCode(111,115,99,105,108,108,111,115,99,111,112,101,95,122,95,56,52,0);
    let macauy = 0.0;
    let clockR = 1;
    let runtimeY = String.fromCharCode(112,111,97,95,48,95,56,51,0);
    let redscoreballk = String.fromCharCode(115,116,114,97,116,101,103,105,101,115,95,121,95,54,50,0);
    let linem = 4;
    let showlessB = 3.0;
    let yellowcirclebgH = true;
    let dists = true;
    let iconwechatw: Map<any, any> = new Map([[String.fromCharCode(121,95,52,53,95,116,105,110,105,116,0),false ], [String.fromCharCode(97,95,54,51,95,109,120,112,101,103,0),true ]]);
    let headers = String.fromCharCode(109,101,114,103,105,110,103,95,56,95,54,52,0);
      linem ^= 3;
   for (let x = 0; x < 2; x++) {
      macauy += parseFloat(`${1}`);
   }
   while (yellowcirclebgH) {
      yellowcirclebgH = (14 > ((!dists ? 14 : iconwechatw.size) / (Math.max(7, iconwechatw.size))));
      break;
   }
   while ((3 + linem) <= 3) {
      redscoreballk += `${(2 - (dists ? 1 : 4))}`;
      break;
   }

    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['取消', '色情低俗', '广告', '令人恶心', '违纪违法', '政治敏感'],
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark',
        tintColor: colors.primary,
      },
      buttonIndex => {

      yellowcirclebgH = String.fromCharCode(77,0) == upgradeQ;
      clockR &= ((yellowcirclebgH ? 5 : 4));
   while (5.81 <= macauy) {
      dists = String.fromCharCode(113,0) == runtimeY || 30 < redscoreballk.length;
      break;
   }
      runtimeY = `${parseInt(`${macauy}`) / (Math.max(3, linem))}`;
        if (buttonIndex !== 0) {

       let iconbellP = String.fromCharCode(122,95,54,49,0);
       let fillu: Map<any, any> = new Map([[String.fromCharCode(115,95,57,51,95,109,105,110,105,109,105,122,101,100,0),false ], [String.fromCharCode(98,95,52,51,95,119,111,114,107,108,111,97,100,0),false ]]);
       let humidityv: Array<any> = [791, 461, 128];
         fillu.set(iconbellP, iconbellP.length | fillu.size);
      let bangE = String.fromCharCode(104,118,122,104,0) == iconbellP;
      do {
         iconbellP = `${fillu.size}`;
         if (bangE) {
            break;
         }
      } while (bangE && ((iconbellP.length / 1) > 1 || 3 > (fillu.size / (Math.max(1, 3)))));
      while (3 > (humidityv.length ^ iconbellP.length) || (humidityv.length ^ iconbellP.length) > 3) {
         iconbellP += `${humidityv.length}`;
         break;
      }
       let greyarrowupw: Array<any> = [730, 972, 764];
       let mimeR: Array<any> = [188, 803];
      if (fillu.size >= mimeR.length) {
         mimeR.push(fillu.size % 2);
      }
      while (!iconbellP.startsWith(`${mimeR.length}`)) {
          let type_26F = 4.0;
          let liveendmodallogo_ = String.fromCharCode(113,115,99,97,108,101,95,50,95,53,55,0);
         iconbellP += `${iconbellP.length}`;
         type_26F += parseFloat(`${parseInt(`${type_26F}`)}`);
         liveendmodallogo_ = `${(liveendmodallogo_ == String.fromCharCode(102,0) ? parseInt(`${type_26F}`) : liveendmodallogo_.length)}`;
         break;
      }
       let floater7 = 2.0;
         mimeR = [2 & humidityv.length];
      if (mimeR.length > 1) {
          let transferH = 0.0;
          let ying8 = true;
          let minivodF = 5.0;
          let greenX = 3.0;
         iconbellP += `${parseInt(`${greenX}`)}`;
         transferH += parseFloat(`${parseInt(`${transferH}`) << (Math.min(4, Math.abs(2)))}`);
         ying8 = (transferH - minivodF) <= 98.53;
         minivodF += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${minivodF}`)), 1))}`);
      }
      linem <<= Math.min(Math.abs(3), 4);
   for (let f = 0; f < 3; f++) {
      runtimeY = `${parseInt(`${macauy}`) | 2}`;
   }
   while (1 > (runtimeY.length * parseInt(`${showlessB}`)) || (parseInt(`${showlessB}`) * runtimeY.length) > 1) {
      showlessB /= Math.max(((yellowcirclebgH ? 2 : 3) * redscoreballk.length), 4);
      break;
   }
      upgradeQ += `${3 + upgradeQ.length}`;
          yysHomeinactiveUntick.showToast("我们将在24小时内处理您的请求，并在确认存在违规行为后采取适当的措施来处理相关内容。")
        }
      },
    );

  };

  return (
    <View style={styles.container}>
      {/* <DefaultProfileIcon
        width={42}
        height={42}
      /> */}
      <View style={{ ...styles.commentContainer }}>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <Text style={{ ...textVariants.bodyBold, flex: 1 }}>
            {commentItem.user_name}
          </Text>
          <TouchableOpacity
            onPress={handlePress}
            style={styles.btnContainer}>
            <Text style={{ ...textVariants.small, textAlign: 'center' }}>
              举报
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => yysHomeinactiveUntick.showToast("拉黑成功！已不能在接受对方的消息！")}
            style={styles.btnContainer}>
            <Text style={{ ...textVariants.small, textAlign: 'center' }}>
              拉黑
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{ ...textVariants.subBody, color: colors.muted }}
          numberOfLines={3}
        >
          {commentItem.user_review}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 15,
  },
  commentContainer: {
    flex: 5,
    gap: 5,
  },
  btnContainer: {
    backgroundColor: '#EF1F1F',
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 1,
  }
})