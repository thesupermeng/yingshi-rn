import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
} from "react-native";
import ScreenContainer from "../../components/container/ww_collection";
import { RootStackScreenProps } from "@type/ww_tempnodatagif_description";
import { useTheme } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "@hooks/ww_catagory_neon";
import { wwEighteenShirt } from "@redux/ww_small";

import TitleWithBackButtonHeader from "../../components/header/ww_react_predictionwin_header";
import {
  wwYellowredcardRelease,
  wwMbjscommon,
} from "@redux/reducers/ww_shared";
import { removeVodsFromHistory, playVod } from "@redux/actions/ww_floater";
import VodHistoryCard from "../../components/vod/ww_iconarrowright_point";
import CheckBoxSelected from "@static/images/auto_eMemberSwitch_lx.svg";
import CheckBoxUnselected from "@static/images/twitterNbatrophy.svg";
import { wwControl } from "@type/ww_dycreator_result";
import { Button } from "@rneui/themed";
import ConfirmationModal from "../../components/modal/ww_upgrade";
import EmptyList from "../../components/common/ww_reducer_libreact";

type wwCasting = {
  item: wwYellowredcardRelease;
};

export default ({ navigation }: RootStackScreenProps<"播放历史">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const vodReducer: wwMbjscommon = useAppSelector(
    ({ vodReducer }: wwEighteenShirt) => vodReducer
  );
  const history = vodReducer.history;
  const [isEditing, setIsEditing] = useState(false);
  const [removeHistory, setRemoveHistory] = useState<Array<wwControl>>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const textStyles = isEditing
    ? [styles.text, textVariants.body, { marginLeft: 30 }]
    : [styles.text, textVariants.body];
  const toggleOverlay = () => {
       let iconbackwhitex = 5;
    let handlerH = String.fromCharCode(122,111,110,101,115,95,121,95,53,55,0);
    let libpangleflippedn = false;
    let thailandF = 5.0;
    let sidet = 0.0;
    let stationW = 3.0;
    let philippines0 = String.fromCharCode(97,115,107,105,110,103,95,120,95,52,48,0);
    let maths = String.fromCharCode(119,95,53,55,95,101,114,97,0);
    let exampleimageP = String.fromCharCode(109,95,53,48,95,103,101,111,98,116,97,103,0);
    let redirectT = String.fromCharCode(118,95,53,57,95,112,101,114,105,111,100,105,99,0);
      libpangleflippedn = iconbackwhitex == maths.length;
   if (!libpangleflippedn) {
      libpangleflippedn = !handlerH.startsWith(`${libpangleflippedn}`);
   }
   while (iconbackwhitex == maths.length) {
      iconbackwhitex |= 3 ^ parseInt(`${thailandF}`);
      break;
   }
      philippines0 += `${parseInt(`${stationW}`) + parseInt(`${thailandF}`)}`;
   while (5 == (parseInt(`${thailandF}`) * philippines0.length) || 2.51 == (thailandF * 1.95)) {
      thailandF *= 2;
      break;
   }
      iconbackwhitex += (maths == String.fromCharCode(107,0) ? (libpangleflippedn ? 2 : 1) : maths.length);
   while (maths.includes(philippines0)) {
      philippines0 = `${2 | iconbackwhitex}`;
      break;
   }
      thailandF /= Math.max(parseInt(`${stationW}`), 3);
   while (!handlerH.includes(`${exampleimageP.length}`)) {
      exampleimageP += `${(parseInt(`${stationW}`) | (libpangleflippedn ? 3 : 2))}`;
      break;
   }
      libpangleflippedn = thailandF == 4.44 || !libpangleflippedn;
       let thailandl = 0.0;
       let rounde = String.fromCharCode(101,95,51,48,95,109,97,107,101,116,97,114,98,97,108,108,0);
      if (3.23 >= (thailandl + 1.11) || (1.11 + thailandl) >= 1.0) {
          let robotoi = String.fromCharCode(101,95,53,50,95,98,102,114,97,99,116,105,111,110,0);
          let tailt: Array<any> = [965, 743, 428];
          let macauS = 0.0;
          let ksadi = 0.0;
         rounde = `${(robotoi == String.fromCharCode(99,0) ? robotoi.length : tailt.length)}`;
         tailt = [parseInt(`${ksadi}`) << (Math.min(5, Math.abs(1)))];
         macauS -= parseFloat(`${parseInt(`${macauS}`) ^ parseInt(`${ksadi}`)}`);
      }
          let reviewM = 5.0;
          let hongkongB = String.fromCharCode(118,114,97,115,116,101,114,95,110,95,53,56,0);
         thailandl *= parseFloat(`${1 - parseInt(`${reviewM}`)}`);
         reviewM -= 1;
         hongkongB = `${hongkongB.length + hongkongB.length}`;
       let canvask = 4.0;
       let dangerU = 0.0;
         canvask -= parseFloat(`${rounde.length}`);
          let libavdeviceW = false;
          let defaultroombgr = false;
         canvask += (parseFloat(`${3 >> (Math.min(2, Math.abs((defaultroombgr ? 4 : 4))))}`));
         libavdeviceW = (!libavdeviceW ? !libavdeviceW : !libavdeviceW);
         defaultroombgr = (libavdeviceW ? libavdeviceW : libavdeviceW);
         rounde += "1";
      philippines0 = "2";
   for (let j = 0; j < 3; j++) {
      handlerH = `${2 << (Math.min(3, redirectT.length))}`;
   }
      redirectT += `${1 << (Math.min(3, Math.abs(iconbackwhitex)))}`;
       let halffieldimagey = false;
       let hongkongt = String.fromCharCode(112,111,108,105,99,105,101,115,95,118,95,49,52,0);
          let logom = 0.0;
         hongkongt = `${((halffieldimagey ? 3 : 3))}`;
         logom += parseInt(`${logom}`) | 1;
      for (let a = 0; a < 2; a++) {
         hongkongt += `${((halffieldimagey ? 1 : 2))}`;
      }
          let skipU: Map<any, any> = new Map([[String.fromCharCode(115,117,109,97,114,121,95,56,95,57,50,0),false ], [String.fromCharCode(97,109,98,105,101,110,116,95,99,95,49,56,0),true ], [String.fromCharCode(115,121,110,116,104,101,115,105,115,95,122,95,55,56,0),true ]]);
          let nexte: Array<any> = [199, 641, 553];
          let chartj = String.fromCharCode(102,117,122,122,101,114,95,105,95,53,49,0);
         halffieldimagey = !halffieldimagey;
         skipU.set(chartj, 3);
         nexte = [chartj.length & nexte.length];
      let moonx = halffieldimagey ? !halffieldimagey : halffieldimagey;
      do {
         halffieldimagey = hongkongt.length < 6 || !halffieldimagey;
         if (moonx) {
            break;
         }
      } while ((halffieldimagey) && moonx);
      for (let w = 0; w < 1; w++) {
         hongkongt = `${((halffieldimagey ? 3 : 1) >> (Math.min(hongkongt.length, 2)))}`;
      }
         hongkongt = "2";
      sidet -= philippines0.length - 3;
   let libffmpegkitf = 8561959 <= iconbackwhitex;
   do {
      iconbackwhitex /= Math.max(1, (String.fromCharCode(99,0) == handlerH ? redirectT.length : handlerH.length));
      if (libffmpegkitf) {
         break;
      }
   } while (libffmpegkitf && ((iconbackwhitex / 1) <= 3 && (iconbackwhitex / (Math.max(1, 7))) <= 2));
       let kuaishouH: Array<any> = [String.fromCharCode(121,95,57,51,95,100,98,105,115,0), String.fromCharCode(97,117,116,111,109,97,116,105,99,95,119,95,57,48,0), String.fromCharCode(98,95,49,51,95,98,97,115,105,99,97,108,108,121,0)];
      if ((kuaishouH.length % 2) == 3 || 4 == (kuaishouH.length % (Math.max(2, 7)))) {
         kuaishouH = [1];
      }
       let iconwatchnowc = String.fromCharCode(99,117,114,114,101,110,116,95,57,95,57,50,0);
       let routerA = String.fromCharCode(106,95,55,56,95,115,111,105,115,99,111,110,110,101,99,116,105,110,103,0);
         kuaishouH.push(1 * iconwatchnowc.length);
      philippines0 = `${1 - parseInt(`${sidet}`)}`;
       let relatedW = 1.0;
       let baseline6 = String.fromCharCode(100,100,114,97,110,103,101,95,101,95,54,54,0);
          let bangk = String.fromCharCode(115,97,118,101,100,95,52,95,51,48,0);
          let appsC: Array<any> = [924, 275];
          let dycreatorf: Array<any> = [String.fromCharCode(118,95,54,57,95,104,101,118,99,100,115,112,0), String.fromCharCode(104,95,49,48,95,119,114,97,112,112,101,100,0), String.fromCharCode(100,101,99,111,114,95,52,95,55,48,0)];
         baseline6 = `${(baseline6 == String.fromCharCode(49,0) ? baseline6.length : parseInt(`${relatedW}`))}`;
         bangk += `${appsC.length / (Math.max(dycreatorf.length, 1))}`;
         appsC = [(bangk == String.fromCharCode(82,0) ? bangk.length : appsC.length)];
         dycreatorf.push(dycreatorf.length * appsC.length);
      if (4 >= (baseline6.length - parseInt(`${relatedW}`))) {
         baseline6 = "1";
      }
         relatedW -= parseFloat(`${1}`);
      let heartY = 5682779.0 >= relatedW;
      do {
         relatedW -= parseFloat(`${baseline6.length}`);
         if (heartY) {
            break;
         }
      } while ((4 >= (3 - baseline6.length) || (baseline6.length % (Math.max(3, 9))) >= 5) && heartY);
      if (4.46 == relatedW) {
         baseline6 = `${parseInt(`${relatedW}`) * baseline6.length}`;
      }
       let configureF: Map<any, any> = new Map([[String.fromCharCode(112,97,116,99,104,115,101,116,95,109,95,57,55,0),String.fromCharCode(105,95,53,95,116,105,110,105,116,0)], [String.fromCharCode(102,105,116,122,95,119,95,49,57,0),String.fromCharCode(105,110,100,105,99,97,116,111,114,95,105,95,54,55,0)], [String.fromCharCode(102,114,101,101,116,121,112,101,95,97,95,51,49,0),String.fromCharCode(101,95,54,57,95,105,112,108,105,109,97,103,101,0)]]);
      sidet += parseInt(`${relatedW}`) + 3;
      philippines0 = "1";
   for (let p = 0; p < 2; p++) {
       let schedulerv: Array<any> = [229, 607, 113];
       let detailn = String.fromCharCode(119,95,52,57,95,104,105,103,104,119,97,116,101,114,0);
       let fcdaebecbcbafcdfceaaeccfeacdbP = String.fromCharCode(114,116,99,95,111,95,53,53,0);
      if ((schedulerv.length + detailn.length) >= 4) {
         detailn = `${3 & detailn.length}`;
      }
      while (detailn != String.fromCharCode(50,0) || 4 < fcdaebecbcbafcdfceaaeccfeacdbP.length) {
         detailn += "2";
         break;
      }
      if (!fcdaebecbcbafcdfceaaeccfeacdbP.endsWith(detailn)) {
         fcdaebecbcbafcdfceaaeccfeacdbP += "1";
      }
      for (let t = 0; t < 1; t++) {
         detailn += `${schedulerv.length}`;
      }
      for (let x = 0; x < 2; x++) {
         fcdaebecbcbafcdfceaaeccfeacdbP += `${fcdaebecbcbafcdfceaaeccfeacdbP.length / (Math.max(detailn.length, 4))}`;
      }
         fcdaebecbcbafcdfceaaeccfeacdbP = `${schedulerv.length | fcdaebecbcbafcdfceaaeccfeacdbP.length}`;
          let tramini8: Array<any> = [String.fromCharCode(116,95,53,48,95,108,111,99,107,0), String.fromCharCode(99,117,114,116,97,105,110,115,95,98,95,53,50,0), String.fromCharCode(116,95,56,53,95,101,120,116,101,110,100,105,110,103,0)];
          let bggradient8 = true;
          let hoverS = String.fromCharCode(99,111,108,108,97,116,105,110,103,95,122,95,49,53,0);
         fcdaebecbcbafcdfceaaeccfeacdbP += `${2 & detailn.length}`;
         tramini8 = [(tramini8.length << (Math.min(3, Math.abs((bggradient8 ? 2 : 2)))))];
         bggradient8 = hoverS.length == 26;
         hoverS += `${tramini8.length << (Math.min(Math.abs(3), 5))}`;
      let halffieldimagei = 7744960 >= detailn.length;
      do {
         detailn = `${schedulerv.length}`;
         if (halffieldimagei) {
            break;
         }
      } while ((detailn.length > fcdaebecbcbafcdfceaaeccfeacdbP.length) && halffieldimagei);
         detailn += `${fcdaebecbcbafcdfceaaeccfeacdbP.length * schedulerv.length}`;
      maths = "2";
   }
      redirectT += `${2 + redirectT.length}`;

    setIsDialogOpen(!isDialogOpen);
  };

  const toggleHistory = (vod: wwControl) => {
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
                  (item: wwYellowredcardRelease, index: number) => (
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
              {customHistoryEarly.map((item: wwYellowredcardRelease, index: number) => (
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
