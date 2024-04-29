import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
} from "react-native";
import ScreenContainer from "../../components/container/tt_backward";
import { RootStackScreenProps } from "@type/tt_temperature";
import { useTheme } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "@hooks/tt_spec_download";
import { ttOrange } from "@redux/tt_updates_bottom";

import TitleWithBackButtonHeader from "../../components/header/tt_typing_tail_header";
import {
  ttExpired,
  ttStreaming,
} from "@redux/reducers/tt_configure_injury";
import { removeVodsFromHistory, playVod } from "@redux/actions/tt_activity";
import VodHistoryCard from "../../components/vod/tt_country";
import CheckBoxSelected from "@static/images/historyPlayerFloater.svg";
import CheckBoxUnselected from "@static/images/foundWindRecommendation.svg";
import { ttAppsOther } from "@type/tt_line_borderless";
import { Button } from "@rneui/themed";
import ConfirmationModal from "../../components/modal/tt_styles";
import EmptyList from "../../components/common/tt_logo_desc";

type ttBing = {
  item: ttExpired;
};

export default ({ navigation }: RootStackScreenProps<"播放历史">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const vodReducer: ttStreaming = useAppSelector(
    ({ vodReducer }: ttOrange) => vodReducer
  );
  const history = vodReducer.history;
  const [isEditing, setIsEditing] = useState(false);
  const [removeHistory, setRemoveHistory] = useState<Array<ttAppsOther>>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const textStyles = isEditing
    ? [styles.text, textVariants.body, { marginLeft: 30 }]
    : [styles.text, textVariants.body];
  const toggleOverlay = () => {
       let themex = String.fromCharCode(99,111,115,116,115,0);
    let launcherG = 3.0;
    let phoneh: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,97,114,97,98,108,101,0),650], [String.fromCharCode(112,114,111,118,105,115,105,111,110,0),7]]);
    let fastforward5 = String.fromCharCode(109,95,53,95,105,99,109,112,0);
    let launcherv = 1;
    let servicev = String.fromCharCode(114,101,112,101,97,116,101,100,0);
    let filled2 = 0.0;
    let modet = true;
    let cornerX = String.fromCharCode(116,97,103,97,118,114,0);
    let pauseb = String.fromCharCode(115,117,112,112,108,101,109,101,110,116,97,114,121,0);
    let circleV = String.fromCharCode(105,110,102,111,114,109,97,116,105,118,101,95,102,95,57,48,0);
    let gpay_ = 2.0;
    let footballk = false;
      modet = phoneh.size == 70;
       let helperU = String.fromCharCode(115,111,102,116,102,108,111,97,116,0);
      while (!helperU.endsWith(helperU)) {
         helperU = `${1 << (Math.min(5, helperU.length))}`;
         break;
      }
      while (helperU.length < 2) {
         helperU += "1";
         break;
      }
          let fast7 = 4.0;
          let whistleN = String.fromCharCode(112,111,114,116,114,97,105,116,0);
         helperU = `${parseInt(`${fast7}`) | 2}`;
         fast7 /= Math.max(3, whistleN.length & whistleN.length);
      phoneh = new Map([[servicev, parseInt(`${launcherG}`)]]);
   if (modet && 4 == cornerX.length) {
      modet = (cornerX.length % (Math.max(themex.length, 9))) >= 80;
   }
      launcherG += parseFloat(`${cornerX.length % (Math.max(3, themex.length))}`);
   for (let f = 0; f < 2; f++) {
      launcherv %= Math.max(2, 5);
   }
   while (3 <= (phoneh.size - 3) && !modet) {
       let downloadF = String.fromCharCode(112,105,120,101,108,102,111,114,109,97,116,0);
       let internetl = String.fromCharCode(106,117,103,103,108,101,0);
       let currentQ = String.fromCharCode(97,114,116,105,99,108,101,0);
       let shootd: Array<any> = [233, 538, 907];
       let homeI = 2;
          let reactnativejsf = String.fromCharCode(97,112,112,101,110,100,99,104,97,114,0);
          let referrerp = 0.0;
          let logouty = 0.0;
         homeI ^= parseInt(`${logouty}`) * homeI;
         reactnativejsf += `${parseInt(`${referrerp}`)}`;
         referrerp *= parseFloat(`${reactnativejsf.length / 1}`);
         logouty /= Math.max(2, (parseFloat(`${String.fromCharCode(105,0) == reactnativejsf ? reactnativejsf.length : parseInt(`${referrerp}`)}`)));
         currentQ += `${downloadF.length >> (Math.min(Math.abs(3), 1))}`;
      for (let l = 0; l < 3; l++) {
         shootd.push(internetl.length * 1);
      }
      let descC = 6742617 >= currentQ.length;
      do {
         currentQ = `${currentQ.length | 2}`;
         if (descC) {
            break;
         }
      } while ((downloadF != currentQ) && descC);
      for (let u = 0; u < 3; u++) {
         homeI -= downloadF.length;
      }
      if ((2 & shootd.length) > 2 && (2 & shootd.length) > 3) {
         shootd.push(downloadF.length * 1);
      }
         currentQ += `${downloadF.length}`;
         homeI <<= Math.min(4, Math.abs(1 + downloadF.length));
         downloadF = `${homeI % (Math.max(downloadF.length, 4))}`;
         downloadF = "2";
         shootd = [1 + downloadF.length];
      for (let t = 0; t < 1; t++) {
          let popupy = 4;
         currentQ = `${(currentQ == String.fromCharCode(95,0) ? currentQ.length : shootd.length)}`;
         popupy -= 2 & popupy;
      }
         currentQ = `${shootd.length + downloadF.length}`;
       let playercommon1: Array<any> = [954, 980];
       let playlistd: Array<any> = [388, 432];
         playlistd.push(2);
      modet = 63 < launcherv;
      break;
   }
   let annerE = String.fromCharCode(50,110,120,98,97,99,50,0) == cornerX;
   do {
      cornerX += `${parseInt(`${filled2}`)}`;
      if (annerE) {
         break;
      }
   } while ((servicev.length >= cornerX.length) && annerE);
       let moreY: Map<any, any> = new Map([[String.fromCharCode(110,111,110,110,117,108,108,115,99,104,101,109,101,115,0),String.fromCharCode(118,97,114,105,97,110,116,0)], [String.fromCharCode(97,110,109,114,0),String.fromCharCode(118,105,100,101,111,112,114,111,99,101,115,115,111,114,0)]]);
       let moder = true;
       let types7 = String.fromCharCode(115,117,98,116,121,112,101,115,95,57,95,51,51,0);
         moder = types7.length <= 89;
          let telegramJ = String.fromCharCode(114,101,112,101,97,116,101,114,0);
          let moonK = 2.0;
         moreY = new Map([[`${moreY.size}`, parseInt(`${moonK}`) ^ moreY.size]]);
         telegramJ = `${telegramJ.length}`;
         moonK += parseFloat(`${telegramJ.length / (Math.max(2, telegramJ.length))}`);
          let catalogX = String.fromCharCode(114,101,113,117,101,115,116,97,98,108,101,0);
          let expandh = String.fromCharCode(98,105,116,101,120,97,99,116,110,101,115,115,0);
          let videocommonB = String.fromCharCode(115,121,115,114,97,110,100,0);
         moreY = new Map([[`${moreY.size}`, moreY.size / (Math.max(2, 10))]]);
         catalogX += "1";
         expandh = `${expandh.length}`;
         videocommonB += `${1 ^ videocommonB.length}`;
      for (let w = 0; w < 2; w++) {
         types7 = "2";
      }
      let nativeexa = String.fromCharCode(115,110,99,119,107,119,102,98,0) == types7;
      do {
         types7 += "2";
         if (nativeexa) {
            break;
         }
      } while (nativeexa && (types7.length > 3 && !moder));
      let anytime_ = 5647486 >= types7.length;
      do {
         types7 += `${moreY.size}`;
         if (anytime_) {
            break;
         }
      } while ((!types7.includes(`${moder}`)) && anytime_);
         moder = moreY.size > 37;
          let ping_: Map<any, any> = new Map([[String.fromCharCode(116,121,112,101,110,97,109,101,0),419], [String.fromCharCode(98,108,111,111,109,0),170]]);
          let refreshx: Map<any, any> = new Map([[String.fromCharCode(97,114,109,118,116,101,95,122,95,52,0),114], [String.fromCharCode(101,110,100,112,111,105,110,116,0),693]]);
          let macau4 = 3.0;
         moder = 86.8 > macau4;
         ping_.set(`${ping_.size}`, ping_.size | 3);
         refreshx.set(`${refreshx.size}`, 1);
         macau4 -= parseFloat(`${ping_.size}`);
      while (!moder && types7.length >= 1) {
         moder = moreY.size == 13;
         break;
      }
      phoneh.set(`${moder}`, 2 - moreY.size);
   while (fastforward5.includes(servicev)) {
      servicev += `${((modet ? 5 : 4) * 3)}`;
      break;
   }
   let redirecth = modet ? !modet : modet;
   do {
      modet = themex == String.fromCharCode(89,0);
      if (redirecth) {
         break;
      }
   } while ((3 <= fastforward5.length || modet) && redirecth);
   while ((launcherG - 2.39) >= 5.17 || 3.89 >= (launcherG - 2.39)) {
      servicev = "2";
      break;
   }
       let auto_7x = String.fromCharCode(118,95,52,48,95,99,111,110,116,101,120,116,112,114,111,102,105,108,101,108,101,118,101,108,0);
         auto_7x += `${auto_7x.length & auto_7x.length}`;
       let moduleM = true;
       let chat3 = true;
         chat3 = !moduleM || !chat3;
      cornerX = `${cornerX.length}`;
   let logoutJ = String.fromCharCode(52,99,109,55,57,121,0) == servicev;
   do {
      servicev = `${(1 & (modet ? 5 : 1))}`;
      if (logoutJ) {
         break;
      }
   } while (logoutJ && (servicev.includes(`${launcherG}`)));
   if (5 <= (2 >> (Math.min(3, cornerX.length))) && (cornerX.length + parseInt(`${launcherG}`)) <= 2) {
       let sport4 = String.fromCharCode(109,97,106,95,108,95,51,57,0);
       let lightm = String.fromCharCode(119,101,97,118,101,0);
       let downT: Array<any> = [239, 375];
       let serviceS = String.fromCharCode(100,101,99,111,109,112,111,115,101,105,0);
       let stationL = 3.0;
         lightm += `${downT.length}`;
         sport4 = `${lightm.length}`;
      while ((4 & downT.length) == 5) {
         sport4 = `${parseInt(`${stationL}`) ^ downT.length}`;
         break;
      }
      for (let t = 0; t < 2; t++) {
         lightm += `${serviceS.length}`;
      }
         serviceS += `${downT.length << (Math.min(Math.abs(3), 4))}`;
      let rulesO = downT.length >= 7853757;
      do {
         downT.push(1);
         if (rulesO) {
            break;
         }
      } while (rulesO && (2.67 > (downT.length + stationL)));
         downT = [sport4.length + 1];
      let buttonc = 8057488.0 <= stationL;
      do {
         stationL -= serviceS.length;
         if (buttonc) {
            break;
         }
      } while ((!sport4.includes(`${stationL}`)) && buttonc);
         downT = [3];
         downT.push(serviceS.length * parseInt(`${stationL}`));
          let trophyE = true;
         downT.push(((trophyE ? 5 : 4) << (Math.min(Math.abs(parseInt(`${stationL}`)), 4))));
         serviceS = `${3 - serviceS.length}`;
         serviceS += `${(String.fromCharCode(84,0) == lightm ? parseInt(`${stationL}`) : lightm.length)}`;
      while (lightm.length == serviceS.length) {
         serviceS += `${serviceS.length}`;
         break;
      }
      while (sport4.endsWith(`${lightm.length}`)) {
         sport4 = `${sport4.length ^ serviceS.length}`;
         break;
      }
      launcherG *= parseFloat(`${launcherv}`);
   }
   if ((launcherv >> (Math.min(Math.abs(1), 4))) > 1 || 4.44 > (filled2 + parseFloat(`${launcherv}`))) {
      filled2 -= parseFloat(`${themex.length >> (Math.min(1, Math.abs(parseInt(`${filled2}`))))}`);
   }
   while (themex.endsWith(`${modet}`)) {
      modet = fastforward5 == cornerX;
      break;
   }
   let teamx = launcherv <= 5692304;
   do {
      launcherv ^= (servicev == String.fromCharCode(117,0) ? (modet ? 3 : 5) : servicev.length);
      if (teamx) {
         break;
      }
   } while (teamx && (themex.endsWith(`${launcherv}`)));
   if (phoneh.get(`${launcherv}`) != null) {
      phoneh = new Map([[`${modet}`, 3]]);
   }
      pauseb = `${(parseInt(`${filled2}`) | (modet ? 3 : 2))}`;
      pauseb += `${themex.length * 1}`;
   for (let i = 0; i < 3; i++) {
       let dropdownq = String.fromCharCode(108,101,103,97,99,121,0);
       let mbridge0 = String.fromCharCode(115,105,109,105,108,97,114,0);
      if (dropdownq != String.fromCharCode(87,0) || mbridge0 == String.fromCharCode(48,0)) {
         dropdownq += `${dropdownq.length % (Math.max(mbridge0.length, 2))}`;
      }
         mbridge0 += `${dropdownq.length ^ mbridge0.length}`;
       let auto_pdI = String.fromCharCode(99,104,111,111,115,105,110,103,0);
      while (mbridge0.length == auto_pdI.length) {
          let nterstitialv: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,108,97,99,101,0),String.fromCharCode(108,101,110,103,116,104,115,0)], [String.fromCharCode(116,101,115,116,98,105,116,0),String.fromCharCode(112,108,97,116,102,111,114,109,95,49,95,54,48,0)], [String.fromCharCode(105,108,115,116,0),String.fromCharCode(111,112,116,101,100,0)]]);
          let greenf = String.fromCharCode(116,105,109,101,105,110,102,111,114,99,101,0);
          let pagination8: Map<any, any> = new Map([[String.fromCharCode(104,112,105,99,0),501], [String.fromCharCode(99,121,99,108,105,99,0),31], [String.fromCharCode(100,101,115,99,114,105,112,116,105,111,110,0),855]]);
          let collectionu = true;
          let user7 = 5.0;
         auto_pdI = `${((collectionu ? 5 : 2) ^ parseInt(`${user7}`))}`;
         nterstitialv = new Map([[`${nterstitialv.size}`, nterstitialv.size]]);
         greenf = "2";
         pagination8.set(`${greenf}`, nterstitialv.size);
         collectionu = 13 > nterstitialv.size && greenf == String.fromCharCode(75,0);
         user7 *= parseFloat(`${1 - greenf.length}`);
         break;
      }
          let long_9U = String.fromCharCode(98,97,110,100,119,105,100,116,104,0);
          let renew5: Array<any> = [24, 713, 229];
          let videocommono = 1.0;
         mbridge0 += `${parseInt(`${videocommono}`)}`;
         long_9U += `${2 * long_9U.length}`;
         renew5.push(3);
         videocommono -= renew5.length;
      let nterstitialf = 9276295 >= mbridge0.length;
      do {
         mbridge0 = `${auto_pdI.length}`;
         if (nterstitialf) {
            break;
         }
      } while ((auto_pdI != mbridge0) && nterstitialf);
      pauseb += `${cornerX.length}`;
   }

    setIsDialogOpen(!isDialogOpen);
  };

  const toggleHistory = (vod: ttAppsOther) => {
    const filtered = removeHistory.filter((x) => x.vod_id !== vod.vod_id);
    if (filtered.length === removeHistory.length) {
      setRemoveHistory([vod, ...removeHistory]);
    } else {
      setRemoveHistory(filtered);
    }
  };
  let data = history;

  const today = new Date(); 

  let customHistoryToday: any = [];
  let customHistoryEarly: any = [];

  data.forEach((item) => {
    const recordedAt = new Date(item.recordedAt);
    if (
      recordedAt.toISOString().split("T")[0] ===
      today.toISOString().split("T")[0]
    ) {
      customHistoryToday.push(item);
    } else {
      customHistoryEarly.push(item);
    }
  });

  console.log("customHistoryToday");
  console.log(customHistoryToday);

  console.log("customHistoryEarly");
  console.log(customHistoryEarly);
  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title="播放历史"
        right={
          <TouchableOpacity activeOpacity={0.85}
            onPress={() => {
              setIsEditing(!isEditing);
              setRemoveHistory([]);
            }}
          >
            <Text
              style={{
                ...textVariants.body,
                padding: 8,
                opacity: history && history.length > 0 ? 100 : 0,
              }}
            >
              {isEditing ? "取消" : "编辑"}
            </Text>
          </TouchableOpacity>
        }
        headerStyle={{ marginBottom: spacing.m }}
      />
      {history && history.length > 0 ? (
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {customHistoryToday.length > 0 && (
            <>
              <View style={{ marginBottom: 10 }}>
                <Text style={textStyles}>今日</Text>
                {customHistoryToday.map(
                  (item: ttExpired, index: number) => (
                    <View style={styles.card} key={index}>
                      {isEditing && (
                        <TouchableOpacity activeOpacity={0.85}
                          style={styles.checkbox}
                          onPress={() => toggleHistory(item)}
                        >
                          {removeHistory.some(
                            (x) => x.vod_id === item.vod_id
                          ) ? (
                            <CheckBoxSelected
                              height={icons.sizes.m}
                              width={icons.sizes.m}
                            />
                          ) : (
                            <CheckBoxUnselected
                              height={icons.sizes.m}
                              width={icons.sizes.m}
                            />
                          )}
                        </TouchableOpacity>
                      )}
                      <VodHistoryCard
                        activeOpacity={isEditing ? 1 : 0.85}
                        vod={item}
                        onPress={() => {
                          if (isEditing) {
                            toggleHistory(item);
                          } else {
                            dispatch(playVod(item));
                            navigation.navigate("播放", {
                              vod_id: item.vod_id,
                            });
                          }
                        }}
                      />
                    </View>
                  )
                )}
              </View>
            </>
          )}

          {customHistoryEarly.length > 0 && (
            <>
              <Text style={textStyles}>更早</Text>
              {customHistoryEarly.map((item: ttExpired, index: number) => (
                <View style={styles.card} key={index}>
                  {isEditing && (
                    <TouchableOpacity activeOpacity={0.85}
                      style={styles.checkbox}
                      onPress={() => toggleHistory(item)}
                    >
                      {removeHistory.some((x) => x.vod_id === item.vod_id) ? (
                        <CheckBoxSelected
                          height={icons.sizes.m}
                          width={icons.sizes.m}
                        />
                      ) : (
                        <CheckBoxUnselected
                          height={icons.sizes.m}
                          width={icons.sizes.m}
                        />
                      )}
                    </TouchableOpacity>
                  )}
                  <VodHistoryCard
                    activeOpacity={isEditing ? 1 : 0.85}
                    vod={item}
                    onPress={() => {
                      if (isEditing) {
                        toggleHistory(item);
                      } else {
                        dispatch(playVod(item));
                            navigation.navigate("播放", {
                              vod_id: item.vod_id,
                            });
                      }
                    }}
                  />
                </View>
              ))}
            </>
          )}
        </ScrollView>
      ) : (
        <EmptyList description="暂无播放历史" />
      )}
      <ConfirmationModal
        onConfirm={() => {
          dispatch(removeVodsFromHistory(removeHistory));
          setIsEditing(false);
          setRemoveHistory([]);
          toggleOverlay();
        }}
        onCancel={toggleOverlay}
        isVisible={isDialogOpen}
        title="清除提示"
        subtitle="您是否确定清除播放历史吗？"
      />
      {isEditing && (
        <View style={styles.deleteConfirmationModal}>
          <Button
            onPress={() => {
              if (
                removeHistory.length === 0 ||
                removeHistory.length !== history.length
              ) {
                setRemoveHistory(vodReducer.history);
              } else {
                setRemoveHistory([]);
              }
            }}
            containerStyle={styles.confirmationBtn}
            color={colors.card2}
            titleStyle={{ ...textVariants.body, color: colors.muted }}
          >
            {removeHistory.length === 0 ||
            removeHistory.length !== history.length
              ? "全选"
              : "取消全选"}
          </Button>
          <Button
            onPress={() => {
              if (removeHistory.length > 0) {
                toggleOverlay();
              }
            }}
            containerStyle={styles.confirmationBtn}
            color={removeHistory.length === 0 ? colors.card2 : colors.primary}
            titleStyle={{
              ...textVariants.body,
              color:
                removeHistory.length === 0 ? colors.muted : colors.background,
            }}
          >
            删除
          </Button>
        </View>
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 30,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    padding: 5,
  },
  deleteConfirmationModal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
  confirmationBtn: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    marginTop: 8,
  },
  text: {
    flexShrink: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 10,
  },
});
