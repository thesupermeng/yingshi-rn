import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import ScreenContainer from "../../components/container/mayi_save";
import { RootStackScreenProps } from "@type/mayi_video_binddatas";
import { useTheme } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "@hooks/mayi_redirect";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";

import TitleWithBackButtonHeader from "../../components/header/mayi_predictiondefault_header";
import {
  mayi_FileBrightness,
  mayi_Middleware,
} from "@redux/reducers/mayi_temp_holder";
import { removeVodsFromHistory, playVod } from "@redux/actions/mayi_goallogo";
import VodHistoryCard from "../../components/vod/mayi_mbridge_football";
import CheckBoxSelected from "@static/images/encryptDownModity.svg";
import CheckBoxUnselected from "@static/images/notificationfillemptyUntick.svg";
import { mayi_EmptyGradle } from "@type/mayi_green";
import { Button } from "@rneui/themed";
import ConfirmationModal from "../../components/modal/mayi_small_catalog";
import EmptyList from "../../components/common/mayi_unread";
import { disableAdultMode, enableAdultMode } from "@redux/actions/mayi_iconorientation_chatroombackground";

type mayi_EventLibnms = {
  item: mayi_FileBrightness;
};

export default ({ navigation }: RootStackScreenProps<"播放历史">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const vodReducer: mayi_Middleware = useAppSelector(
    ({ vodReducer }: mayi_Libapminsightb) => vodReducer
  );
  const history = vodReducer.history;
  const [isEditing, setIsEditing] = useState(false);
  const [removeHistory, setRemoveHistory] = useState<Array<mayi_EmptyGradle>>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const textStyles = isEditing
    ? [styles.text, textVariants.body, { marginLeft: 30 }]
    : [styles.text, textVariants.body];
  const toggleOverlay = () => {
       let animationR = String.fromCharCode(112,114,115,99,116,112,95,118,95,50,52,0);
    let yellowscoreballj = true;
    let u_playerU = String.fromCharCode(116,97,98,108,101,108,105,109,95,52,95,49,48,48,0);
    let minimizeP: Map<any, any> = new Map([[String.fromCharCode(120,95,54,49,95,99,111,108,111,110,115,0),String.fromCharCode(115,105,110,116,95,101,95,55,51,0)], [String.fromCharCode(99,111,110,116,105,110,117,97,108,95,98,95,57,0),String.fromCharCode(115,95,54,49,95,115,117,98,116,114,97,99,116,111,114,0)], [String.fromCharCode(121,95,50,95,108,105,98,115,112,101,101,120,0),String.fromCharCode(117,95,54,49,95,111,100,105,110,103,0)]]);
    let arrowupF = 2;
    let moduleK: Map<any, any> = new Map([[String.fromCharCode(117,110,97,118,97,105,108,97,98,101,95,49,95,57,54,0),971], [String.fromCharCode(105,95,49,52,95,114,116,112,112,108,97,121,0),161], [String.fromCharCode(116,95,57,56,95,119,104,105,99,104,0),953]]);
    let catagoryL = String.fromCharCode(104,117,110,103,95,56,95,53,0);
    let saveb: Array<any> = [440, 197];
   while (1 == (1 & animationR.length)) {
      minimizeP.set(`${yellowscoreballj}`, 1);
      break;
   }
   for (let i = 0; i < 1; i++) {
      catagoryL += `${2 * catagoryL.length}`;
   }
      yellowscoreballj = minimizeP.size >= 12;
       let yelloww = String.fromCharCode(111,95,52,56,95,99,111,110,116,0);
       let nativemoduleu = String.fromCharCode(105,95,50,50,95,100,101,99,111,109,112,97,110,100,0);
       let questI = 4;
      if ((yelloww.length | 1) == 3) {
          let calendar1 = String.fromCharCode(120,95,56,52,95,116,104,111,117,115,97,110,100,115,0);
          let renderM = String.fromCharCode(101,95,51,57,95,115,99,97,108,97,114,109,117,108,116,0);
         questI /= Math.max(calendar1.length >> (Math.min(Math.abs(1), 5)), 3);
         calendar1 = `${renderM.length}`;
         renderM += `${renderM.length << (Math.min(renderM.length, 5))}`;
      }
      if (nativemoduleu.includes(`${yelloww.length}`)) {
          let nodeZ: Map<any, any> = new Map([[String.fromCharCode(97,103,97,105,110,95,97,95,49,57,0),912], [String.fromCharCode(122,95,54,55,95,116,111,100,97,121,115,0),451]]);
          let package_rx5 = String.fromCharCode(105,116,108,101,95,54,95,57,56,0);
          let libtob9 = 2;
          let sourcew = 5;
          let libreactnativejni2 = 5.0;
         nativemoduleu += `${parseInt(`${libreactnativejni2}`)}`;
         nodeZ = new Map([[`${nodeZ.size}`, 3 >> (Math.min(5, Math.abs(nodeZ.size)))]]);
         package_rx5 = `${libtob9 % (Math.max(sourcew, 9))}`;
         libtob9 >>= Math.min(Math.abs(1), 1);
         sourcew ^= 2;
         libreactnativejni2 += nodeZ.size * sourcew;
      }
      for (let i = 0; i < 2; i++) {
         nativemoduleu = `${questI}`;
      }
         nativemoduleu = `${2 - nativemoduleu.length}`;
      if (!yelloww.endsWith(`${nativemoduleu.length}`)) {
         nativemoduleu += `${nativemoduleu.length}`;
      }
         questI *= nativemoduleu.length;
         nativemoduleu = `${(nativemoduleu == String.fromCharCode(67,0) ? nativemoduleu.length : questI)}`;
         nativemoduleu = "2";
      for (let n = 0; n < 2; n++) {
         yelloww += `${(yelloww == String.fromCharCode(82,0) ? questI : yelloww.length)}`;
      }
      u_playerU = "2";
   if (1 <= (5 / (Math.max(2, minimizeP.size)))) {
      minimizeP.set(animationR, 1);
   }
   let iconarrowleft5 = String.fromCharCode(101,116,122,115,50,113,53,0) == catagoryL;
   do {
      catagoryL = `${(String.fromCharCode(89,0) == catagoryL ? catagoryL.length : arrowupF)}`;
      if (iconarrowleft5) {
         break;
      }
   } while ((arrowupF >= catagoryL.length) && iconarrowleft5);
      u_playerU += `${u_playerU.length - 3}`;
   for (let d = 0; d < 3; d++) {
      moduleK = new Map([[animationR, animationR.length / (Math.max(8, catagoryL.length))]]);
   }
   let templateprocessoru = minimizeP.size >= 8822865;
   do {
       let rewind3 = true;
       let ballQ = String.fromCharCode(98,95,49,48,48,95,119,101,98,0);
       let privatechatbgc = String.fromCharCode(100,95,51,50,95,110,101,101,100,101,100,0);
       let guidea = String.fromCharCode(114,101,113,117,105,117,114,101,115,95,120,95,57,48,0);
          let native4: Map<any, any> = new Map([[String.fromCharCode(119,101,98,112,97,103,101,115,95,110,95,51,49,0),328], [String.fromCharCode(98,95,54,48,95,119,100,101,99,0),75], [String.fromCharCode(110,95,49,52,95,114,101,110,111,114,109,101,0),743]]);
         ballQ += `${guidea.length | 2}`;
         native4 = new Map([[`${native4.size}`, native4.size + 2]]);
         ballQ = `${privatechatbgc.length}`;
         guidea += `${guidea.length | 3}`;
      let twitterF = ballQ == String.fromCharCode(49,114,119,0);
      do {
         ballQ += `${privatechatbgc.length}`;
         if (twitterF) {
            break;
         }
      } while ((privatechatbgc != ballQ) && twitterF);
      while (!rewind3 || 5 < guidea.length) {
         guidea += `${ballQ.length % (Math.max(guidea.length, 1))}`;
         break;
      }
      if (4 <= ballQ.length) {
         ballQ = "2";
      }
      while (guidea.length <= 5) {
          let chartS: Map<any, any> = new Map([[String.fromCharCode(102,95,56,50,95,100,114,97,119,103,114,105,100,0),592], [String.fromCharCode(117,112,108,111,97,100,115,95,120,95,53,0),977], [String.fromCharCode(98,95,49,52,95,118,101,114,105,102,105,101,114,0),997]]);
          let abouto = String.fromCharCode(109,101,115,115,115,97,103,101,95,115,95,54,54,0);
          let encryptz = false;
          let armvaQ = String.fromCharCode(99,101,110,116,114,97,108,105,116,121,95,105,95,52,56,0);
         privatechatbgc += `${1 << (Math.min(1, abouto.length))}`;
         chartS = new Map([[`${chartS.size}`, (armvaQ == String.fromCharCode(85,0) ? chartS.size : armvaQ.length)]]);
         abouto += `${chartS.size}`;
         encryptz = (chartS.size % (Math.max(9, armvaQ.length))) < 81;
         break;
      }
      while (!rewind3) {
         ballQ += "3";
         break;
      }
          let userA = 5;
          let telegram4 = String.fromCharCode(110,101,116,119,111,114,107,115,95,51,95,56,57,0);
         rewind3 = 14 >= userA && String.fromCharCode(120,0) == privatechatbgc;
         userA >>= Math.min(Math.abs(telegram4.length + telegram4.length), 2);
      let minimizeE = 9603864 <= privatechatbgc.length;
      do {
         privatechatbgc += `${(String.fromCharCode(84,0) == ballQ ? ballQ.length : (rewind3 ? 5 : 5))}`;
         if (minimizeE) {
            break;
         }
      } while (minimizeE && (ballQ.length < 1));
      for (let w = 0; w < 3; w++) {
         ballQ += `${(guidea == String.fromCharCode(67,0) ? guidea.length : (rewind3 ? 4 : 5))}`;
      }
          let penaltyshootV = String.fromCharCode(105,113,109,112,95,117,95,52,52,0);
         rewind3 = ballQ == privatechatbgc;
         penaltyshootV += "3";
      minimizeP.set(`${arrowupF}`, arrowupF);
      if (templateprocessoru) {
         break;
      }
   } while (templateprocessoru && (u_playerU.endsWith(`${minimizeP.size}`)));
      minimizeP.set(catagoryL, 3 >> (Math.min(2, Math.abs(minimizeP.size))));
      u_playerU += `${2 + u_playerU.length}`;
   if (1 > catagoryL.length) {
      yellowscoreballj = 37 > animationR.length;
   }
      minimizeP.set(animationR, 3 << (Math.min(1, animationR.length)));
   if ((minimizeP.size / (Math.max(animationR.length, 3))) > 3) {
      animationR = `${(1 + (yellowscoreballj ? 5 : 4))}`;
   }
   let catagoryp = yellowscoreballj ? !yellowscoreballj : yellowscoreballj;
   do {
      yellowscoreballj = (moduleK.size & u_playerU.length) < 50;
      if (catagoryp) {
         break;
      }
   } while (catagoryp && (!yellowscoreballj || (4 >> (Math.min(1, Math.abs(minimizeP.size)))) == 5));
      minimizeP = new Map([[`${saveb.length}`, (2 + (yellowscoreballj ? 2 : 2))]]);
   let windO = 6285108 <= moduleK.size;
   do {
       let themez = String.fromCharCode(112,95,56,56,95,114,101,103,101,110,101,114,97,116,101,0);
       let klevin9 = String.fromCharCode(108,105,118,101,109,111,100,101,95,49,95,49,0);
       let scheduler1 = String.fromCharCode(110,95,49,51,95,102,111,117,110,100,97,116,105,111,110,0);
       let fullW: Array<any> = [282, 754];
          let select3 = false;
          let notificationfillemptyx = 0;
         klevin9 = "3";
         select3 = select3 || notificationfillemptyx > 87;
         notificationfillemptyx >>= Math.min(3, Math.abs(2));
          let charty = String.fromCharCode(98,95,53,48,95,110,111,116,104,105,110,103,0);
         scheduler1 += `${(themez == String.fromCharCode(80,0) ? scheduler1.length : themez.length)}`;
         charty += `${charty.length / 1}`;
          let recommendationU = 0.0;
         klevin9 = `${parseInt(`${recommendationU}`) >> (Math.min(themez.length, 3))}`;
       let over7 = false;
       let reactnavigationB = true;
      while (themez.includes(`${over7}`)) {
         themez += `${scheduler1.length - fullW.length}`;
         break;
      }
      if (over7 || reactnavigationB) {
         reactnavigationB = (((!reactnavigationB ? scheduler1.length : 82) * scheduler1.length) == 82);
      }
       let leaguedetailsbgr = String.fromCharCode(99,108,101,97,114,97,108,108,95,56,95,51,56,0);
      while (!scheduler1.includes(`${reactnavigationB}`)) {
         scheduler1 += "2";
         break;
      }
       let networkt = 1;
      for (let h = 0; h < 2; h++) {
          let libfabricjniY = 0.0;
          let playercommon6 = String.fromCharCode(99,97,108,108,101,100,95,115,95,53,56,0);
          let refreshU = String.fromCharCode(105,95,53,56,95,116,114,105,112,108,101,0);
          let historyc: Array<any> = [779, 227];
         leaguedetailsbgr += `${leaguedetailsbgr.length}`;
         libfabricjniY *= parseFloat(`${refreshU.length}`);
         playercommon6 = `${refreshU.length - 2}`;
         historyc.push((refreshU == String.fromCharCode(113,0) ? refreshU.length : historyc.length));
      }
      for (let h = 0; h < 3; h++) {
         leaguedetailsbgr = `${networkt % (Math.max(8, themez.length))}`;
      }
         klevin9 += `${(String.fromCharCode(98,0) == scheduler1 ? fullW.length : scheduler1.length)}`;
      moduleK = new Map([[klevin9, 2 / (Math.max(4, klevin9.length))]]);
      if (windO) {
         break;
      }
   } while ((4 <= moduleK.size) && windO);

    setIsDialogOpen(!isDialogOpen);
  };

  const toggleHistory = (vod: mayi_EmptyGradle) => {
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

  
  

  
  
  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title="播放历史"
        right={
          <TouchableOpacity
            onPress={() => {
              setIsEditing(!isEditing);
              setRemoveHistory([]);
            }}
          >
            <Text
              style={{
                ...textVariants.body,
                
                opacity: history && history.length > 0 ? 100 : 0,
              }}
            >
              {isEditing ? "取消" : "编辑"}
            </Text>
          </TouchableOpacity>
        }
        
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
                  (item: mayi_FileBrightness, index: number) => (
                    <View style={styles.card} key={index}>
                      {isEditing && (
                        <TouchableOpacity
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
                        activeOpacity={isEditing ? 1 : 0.2}
                        vod={item}
                        onPress={() => {
                          if (isEditing) {
                            toggleHistory(item);
                          } else {
                            if (item.isAdultVideo){
                              dispatch(playVod(item));
                              navigation.navigate("播放", {
                                vod_id: item.vod_id,
                                player_mode: 'adult'
                              });
                              dispatch(enableAdultMode())
                            }
                            else {
                              dispatch(playVod(item));
                              navigation.navigate("播放", {
                                vod_id: item.vod_id,
                              });
                              dispatch(disableAdultMode())
                            }
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
              {customHistoryEarly.map((item: mayi_FileBrightness, index: number) => (
                <View style={styles.card} key={index}>
                  {isEditing && (
                    <TouchableOpacity
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
                    activeOpacity={isEditing ? 1 : 0.2}
                    vod={item}
                    onPress={() => {
                      if (isEditing) {
                        toggleHistory(item);
                      } else {
                        if (item.isAdultVideo){
                          dispatch(playVod(item));
                          navigation.navigate("播放", {
                            vod_id: item.vod_id,
                            player_mode: 'adult'
                          });
                          dispatch(enableAdultMode())
                        }
                        else {
                          dispatch(playVod(item));
                          navigation.navigate("播放", {
                            vod_id: item.vod_id,
                          });
                          dispatch(disableAdultMode())
                        }
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
