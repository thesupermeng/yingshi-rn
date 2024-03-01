import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
} from "react-native";
import ScreenContainer from "../../components/container/yys_executor_expand";
import { RootStackScreenProps } from "@type/yys_settings";
import { useTheme } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "@hooks/yys_frame";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";

import TitleWithBackButtonHeader from "../../components/header/yys_anner_header";
import {
  yys_CountdownSubmit,
  yys_BorderlessLibruntimeexecutor,
} from "@redux/reducers/yys_full";
import { removeVodsFromHistory, playVod } from "@redux/actions/yys_player_style";
import VodHistoryCard from "../../components/vod/yys_upgrade_graphics";
import CheckBoxSelected from "@static/images/progressChina.svg";
import CheckBoxUnselected from "@static/images/targetFeedback.svg";
import { yys_Bing } from "@type/yys_libzeus";
import { Button } from "@rneui/themed";
import ConfirmationModal from "../../components/modal/yys_shrink_reactnativejs";
import EmptyList from "../../components/common/yys_goal_utils";

type yys_Mbsplash = {
  item: yys_CountdownSubmit;
};

export default ({ navigation }: RootStackScreenProps<"播放历史">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const vodReducer: yys_BorderlessLibruntimeexecutor = useAppSelector(
    ({ vodReducer }: yys_MintegralLibavdevice) => vodReducer
  );
  const history = vodReducer.history;
  const [isEditing, setIsEditing] = useState(false);
  const [removeHistory, setRemoveHistory] = useState<Array<yys_Bing>>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const textStyles = isEditing
    ? [styles.text, textVariants.body, { marginLeft: 30 }]
    : [styles.text, textVariants.body];
  const toggleOverlay = () => {
       let styleJ: Map<any, any> = new Map([[String.fromCharCode(107,95,55,54,95,98,97,110,100,101,100,0),String.fromCharCode(114,108,105,110,101,95,57,95,53,54,0)], [String.fromCharCode(115,95,52,57,95,112,117,108,108,0),String.fromCharCode(120,95,48,95,97,99,113,117,97,110,116,0)]]);
    let matchesX = String.fromCharCode(102,95,52,51,95,112,97,114,109,115,0);
    let reducert = String.fromCharCode(119,97,118,112,97,99,107,95,56,95,56,49,0);
    let launcherv = 5;
    let overlay4: Array<any> = [229, 911];
    let lighto = false;
    let spinnera = String.fromCharCode(117,95,56,49,95,112,97,110,0);
    let othert = 4.0;
    let bdxadsdkF: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,108,101,115,115,95,100,95,56,0),485], [String.fromCharCode(116,101,114,109,105,110,97,116,105,111,110,95,107,95,55,54,0),915]]);
    let libimagepipelineT = true;
    let movies1 = String.fromCharCode(105,110,100,101,102,105,110,105,116,101,95,121,95,49,55,0);
    let about_ = 3;
    let macaue = 1.0;
    let analytics8 = String.fromCharCode(112,97,103,101,111,117,116,95,104,95,55,56,0);
    let xadsdks = 5;
    let contextn = 0.0;
      lighto = overlay4.length == 33;
   if (launcherv < 3) {
      libimagepipelineT = 57 <= launcherv;
   }
      overlay4 = [1];
      libimagepipelineT = (overlay4.length / (Math.max(bdxadsdkF.size, 9))) <= 88;
      bdxadsdkF.set(`${lighto}`, bdxadsdkF.size);
       let rightT = false;
      let vignette6 = rightT ? !rightT : rightT;
      do {
         rightT = !rightT;
         if (vignette6) {
            break;
         }
      } while ((rightT) && vignette6);
      while (rightT) {
         rightT = (!rightT ? rightT : !rightT);
         break;
      }
         rightT = rightT && rightT;
      libimagepipelineT = bdxadsdkF.size < movies1.length;
   while (libimagepipelineT) {
      styleJ.set(reducert, (reducert == String.fromCharCode(108,0) ? reducert.length : spinnera.length));
      break;
   }
   let downloadedU = reducert == String.fromCharCode(121,100,116,0);
   do {
       let videojsd = String.fromCharCode(99,111,109,109,97,110,100,115,95,48,95,53,49,0);
       let android_ = String.fromCharCode(114,101,102,108,101,99,116,95,52,95,51,51,0);
         videojsd += `${android_.length}`;
       let pingc = String.fromCharCode(121,95,51,51,95,103,97,117,115,115,105,97,110,0);
       let libloggerd = String.fromCharCode(106,109,108,105,115,116,95,113,95,56,52,0);
         pingc = `${libloggerd.length}`;
      for (let l = 0; l < 3; l++) {
         videojsd = `${libloggerd.length - pingc.length}`;
      }
         videojsd = `${libloggerd.length % (Math.max(1, videojsd.length))}`;
      for (let i = 0; i < 1; i++) {
         pingc = `${1 & libloggerd.length}`;
      }
      reducert += `${movies1.length}`;
      if (downloadedU) {
         break;
      }
   } while ((2 > (1 + reducert.length) || 4 > (1 & reducert.length)) && downloadedU);
      styleJ.set(`${movies1}`, 2 + movies1.length);
      bdxadsdkF.set(`${othert}`, bdxadsdkF.size);
      about_ ^= 2 & styleJ.size;
   for (let u = 0; u < 3; u++) {
      libimagepipelineT = !libimagepipelineT;
   }
      lighto = movies1.length <= 16 && libimagepipelineT;
   while (1 > about_) {
      about_ -= (String.fromCharCode(56,0) == spinnera ? (lighto ? 1 : 1) : spinnera.length);
      break;
   }
      bdxadsdkF = new Map([[`${about_}`, 3 - launcherv]]);
   for (let f = 0; f < 3; f++) {
      lighto = matchesX.length < styleJ.size;
   }
      reducert = `${3 >> (Math.min(4, Math.abs(bdxadsdkF.size)))}`;
   if ((4 - styleJ.size) >= 3 && libimagepipelineT) {
       let mbsplashb: Map<any, any> = new Map([[String.fromCharCode(115,101,114,105,97,108,105,122,101,95,117,95,55,49,0),256], [String.fromCharCode(102,105,100,99,116,95,102,95,49,48,48,0),971]]);
       let acceptedm = 4.0;
       let canvas7 = 1.0;
       let sorty: Array<any> = [183, 475];
      while (2.21 >= (1.50 / (Math.max(1, canvas7)))) {
          let basketballe: Array<any> = [613, 730, 852];
          let thailandp = String.fromCharCode(106,95,53,50,95,103,101,116,98,121,116,101,0);
          let yellowp = true;
         canvas7 *= (parseFloat(`${(yellowp ? 5 : 5) << (Math.min(Math.abs(mbsplashb.size), 3))}`));
         basketballe = [basketballe.length << (Math.min(Math.abs(3), 1))];
         thailandp = `${2 * basketballe.length}`;
         yellowp = thailandp.length >= 42;
         break;
      }
      for (let t = 0; t < 2; t++) {
         canvas7 -= parseFloat(`${parseInt(`${canvas7}`) % 3}`);
      }
         mbsplashb.set(`${canvas7}`, parseInt(`${canvas7}`));
      if ((acceptedm / 3.50) >= 2.63 && 3.3 >= (acceptedm / (Math.max(3.50, 6)))) {
         acceptedm *= parseFloat(`${parseInt(`${acceptedm}`) % 3}`);
      }
         canvas7 += parseFloat(`${parseInt(`${acceptedm}`)}`);
         mbsplashb = new Map([[`${sorty.length}`, parseInt(`${acceptedm}`)]]);
       let malaysia2: Map<any, any> = new Map([[String.fromCharCode(115,99,114,111,108,108,105,110,103,95,111,95,52,54,0),604], [String.fromCharCode(97,95,55,52,95,112,105,120,101,108,115,0),628], [String.fromCharCode(120,95,57,95,97,99,116,105,118,97,116,105,111,110,115,0),148]]);
         malaysia2 = new Map([[`${malaysia2.size}`, 3]]);
          let checkboxb = false;
          let loadingx = String.fromCharCode(97,95,49,57,95,101,102,102,101,99,116,115,0);
          let left6 = 5.0;
         mbsplashb = new Map([[`${malaysia2.size}`, malaysia2.size]]);
         checkboxb = !checkboxb;
         loadingx += `${((checkboxb ? 4 : 4))}`;
         left6 += parseInt(`${left6}`) / 3;
          let abidetectL: Array<any> = [String.fromCharCode(107,95,57,48,95,118,101,114,98,97,116,105,109,0), String.fromCharCode(110,95,50,54,95,99,111,112,121,0), String.fromCharCode(115,112,105,110,95,50,95,49,54,0)];
         acceptedm += parseFloat(`${parseInt(`${acceptedm}`)}`);
         abidetectL.push(abidetectL.length);
         canvas7 -= parseFloat(`${1 * parseInt(`${acceptedm}`)}`);
       let formU = String.fromCharCode(112,101,114,112,101,110,100,105,99,117,108,97,114,95,121,95,51,57,0);
       let benefitN = String.fromCharCode(117,115,114,99,95,118,95,55,56,0);
      styleJ = new Map([[`${canvas7}`, parseInt(`${canvas7}`) & 1]]);
   }
      reducert += `${movies1.length}`;
      styleJ = new Map([[reducert, 1]]);
      macaue -= 2 & styleJ.size;
   let mbsplashD = reducert.length >= 8986640;
   do {
      reducert += `${3 | parseInt(`${macaue}`)}`;
      if (mbsplashD) {
         break;
      }
   } while ((1 < (launcherv | 5) && 5 < (launcherv | reducert.length)) && mbsplashD);
   if ((styleJ.size * 4) >= 1) {
       let acceptedS = String.fromCharCode(102,95,55,95,100,100,114,97,110,103,101,0);
       let toponH: Map<any, any> = new Map([[String.fromCharCode(119,95,53,56,95,108,111,110,0),710], [String.fromCharCode(105,112,113,102,95,53,95,55,57,0),351], [String.fromCharCode(105,95,49,48,48,0),155]]);
       let root_ = 1.0;
      let roome = 6053689.0 >= root_;
      do {
         root_ /= Math.max(2, parseFloat(`${toponH.size}`));
         if (roome) {
            break;
         }
      } while (roome && ((toponH.size / 5) >= 3));
      while (root_ == 1.71) {
          let s_titlei: Array<any> = [811, 719];
          let suggestionB: Map<any, any> = new Map([[String.fromCharCode(114,101,115,116,111,114,101,95,48,95,50,50,0),false ], [String.fromCharCode(105,95,56,53,95,99,97,110,111,112,117,115,0),true ]]);
          let ballO = String.fromCharCode(100,101,99,108,105,110,101,95,48,95,56,52,0);
          let themeO = String.fromCharCode(101,95,54,50,95,117,116,105,108,105,116,121,0);
         root_ *= parseFloat(`${parseInt(`${root_}`) & themeO.length}`);
         s_titlei = [2 | s_titlei.length];
         suggestionB = new Map([[`${suggestionB.size}`, s_titlei.length]]);
         ballO += `${suggestionB.size ^ ballO.length}`;
         themeO = "2";
         break;
      }
         root_ *= parseFloat(`${acceptedS.length}`);
      if (!Array.from(toponH.values()).includes(root_)) {
         toponH.set(`${root_}`, 2);
      }
      for (let m = 0; m < 3; m++) {
          let detailsg: Array<any> = [String.fromCharCode(115,95,51,52,95,115,105,100,101,115,0), String.fromCharCode(122,95,53,50,95,115,116,114,117,99,116,117,114,101,115,0)];
          let cricketD = String.fromCharCode(114,95,53,53,95,109,105,103,114,97,116,101,0);
          let singaporei = String.fromCharCode(97,95,50,57,95,97,114,99,104,105,116,101,99,116,117,114,101,0);
         root_ += parseFloat(`${detailsg.length / 3}`);
         detailsg = [3];
         cricketD += `${singaporei.length}`;
         singaporei = "2";
      }
       let megaphoneh = 5;
       let temperaturev = 4;
         megaphoneh &= megaphoneh;
         megaphoneh %= Math.max(1, temperaturev);
         root_ -= parseFloat(`${megaphoneh}`);
      styleJ = new Map([[`${toponH.size}`, toponH.size]]);
   }
       let fullX: Map<any, any> = new Map([[String.fromCharCode(102,114,101,105,114,95,113,95,51,54,0),false ], [String.fromCharCode(108,95,49,53,0),false ], [String.fromCharCode(109,102,113,101,95,119,95,55,57,0),true ]]);
         fullX.set(`${fullX.size}`, fullX.size >> (Math.min(Math.abs(fullX.size), 5)));
          let connectionC: Map<any, any> = new Map([[String.fromCharCode(101,115,101,110,100,95,104,95,57,53,0),496], [String.fromCharCode(102,105,108,101,102,117,110,99,95,108,95,52,55,0),994], [String.fromCharCode(99,95,53,53,95,98,105,110,115,0),29]]);
          let libcrashsdkk: Map<any, any> = new Map([[String.fromCharCode(111,95,52,57,95,120,105,112,104,108,97,99,105,110,103,0),575], [String.fromCharCode(116,116,108,95,116,95,54,48,0),980], [String.fromCharCode(101,95,53,53,95,99,111,108,100,0),464]]);
         fullX.set(`${libcrashsdkk.size}`, fullX.size);
         connectionC.set(`${connectionC.size}`, 1 - connectionC.size);
         libcrashsdkk.set(`${connectionC.size}`, connectionC.size);
      for (let w = 0; w < 1; w++) {
          let main_yM = String.fromCharCode(99,104,97,110,103,101,99,111,117,110,116,101,114,95,57,95,52,52,0);
          let streamingd: Map<any, any> = new Map([[String.fromCharCode(115,111,117,114,99,101,105,100,95,100,95,57,0),666], [String.fromCharCode(99,95,52,49,95,119,104,105,116,101,115,0),673], [String.fromCharCode(121,95,51,55,95,119,97,110,116,115,0),666]]);
          let logoU = String.fromCharCode(106,95,53,95,120,117,116,105,108,0);
          let textinputX = String.fromCharCode(101,95,54,49,95,118,111,114,98,105,115,99,111,109,109,101,110,116,0);
         fullX = new Map([[`${streamingd.size}`, main_yM.length]]);
         main_yM = `${logoU.length ^ textinputX.length}`;
         streamingd.set(textinputX, textinputX.length / 3);
         logoU += "3";
      }
      libimagepipelineT = (overlay4.length >> (Math.min(Math.abs(fullX.size), 1))) < 5;
   let scrollviewF = othert <= 7522763.0;
   do {
      othert *= 2;
      if (scrollviewF) {
         break;
      }
   } while (scrollviewF && (3.8 <= othert));
   while (1 < (styleJ.size >> (Math.min(Math.abs(3), 5)))) {
      styleJ.set(movies1, matchesX.length);
      break;
   }
   if (movies1 != String.fromCharCode(112,0)) {
      matchesX += `${3 % (Math.max(parseInt(`${othert}`), 9))}`;
   }

    setIsDialogOpen(!isDialogOpen);
  };

  const toggleHistory = (vod: yys_Bing) => {
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
          <TouchableOpacity
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
                  (item: yys_CountdownSubmit, index: number) => (
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
              {customHistoryEarly.map((item: yys_CountdownSubmit, index: number) => (
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
