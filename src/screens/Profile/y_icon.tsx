import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import ScreenContainer from "../../components/container/ypy_fast";
import { RootStackScreenProps } from "@type/vrm_thailand";
import { useTheme } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "@hooks/kg_index";
import { PSmall } from "@redux/fj_prediction_thailand";

import TitleWithBackButtonHeader from "../../components/header/cio_news_types_header";
import {
  VFMode,
  QQCenterChart,
} from "@redux/reducers/pxk_lang_quest";
import { removeVodsFromHistory, playVod } from "@redux/actions/xif_layout";
import VodHistoryCard from "../../components/vod/sps_layout";
import CheckBoxSelected from "@static/images/foundPauseCircle.svg";
import CheckBoxUnselected from "@static/images/middlewareGoalStation.svg";
import { XVSScoreDark } from "@type/wpk_long";
import { Button } from "@rneui/themed";
import ConfirmationModal from "../../components/modal/nw_topic";
import EmptyList from "../../components/common/jip_next_bell";
import { disableAdultMode, enableAdultMode } from "@redux/actions/a_switch";

type MEYMode = {
  item: VFMode;
};

export default ({ navigation }: RootStackScreenProps<"播放历史">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const vodReducer: QQCenterChart = useAppSelector(
    ({ vodReducer }: PSmall) => vodReducer
  );
  const history = vodReducer.history;
  const [isEditing, setIsEditing] = useState(false);
  const [removeHistory, setRemoveHistory] = useState<Array<XVSScoreDark>>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const textStyles = isEditing
    ? [styles.text, textVariants.body, { marginLeft: 30 }]
    : [styles.text, textVariants.body];
  const toggleOverlay = () => {
       let shirtm = true;
    let hoveru = 3;
    let taiwans = false;
    let carouselb = 2.0;
    let friendsl = 0.0;
    let injuryy = String.fromCharCode(99,111,111,107,0);
    let favicon1 = String.fromCharCode(97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,0);
    let collectionE: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,102,111,114,109,97,116,116,105,110,103,0),453], [String.fromCharCode(100,116,111,97,0),428], [String.fromCharCode(99,111,108,100,0),321]]);
    let footballG = 4;
    let starv: Map<any, any> = new Map([[String.fromCharCode(102,101,97,116,117,114,101,0),String.fromCharCode(101,110,116,105,114,101,0)], [String.fromCharCode(109,120,112,101,103,0),String.fromCharCode(108,111,99,105,0)]]);
    let analyticsI = 3.0;
    let l_centerE: Map<any, any> = new Map([[String.fromCharCode(114,97,100,98,0),String.fromCharCode(100,105,115,99,111,118,101,114,121,0)], [String.fromCharCode(104,118,99,99,0),String.fromCharCode(99,111,109,109,97,110,100,115,0)], [String.fromCharCode(105,116,111,97,0),String.fromCharCode(104,116,99,112,0)]]);
    let eighteens: Array<any> = [666, 566, 470];
    let placementP = String.fromCharCode(100,113,99,111,101,102,102,0);
    let megaphoneL = String.fromCharCode(112,114,105,111,114,105,116,121,113,0);
       let leagueZ = 2;
      if (1 > leagueZ) {
          let privileget: Map<any, any> = new Map([[String.fromCharCode(99,104,105,110,0),182], [String.fromCharCode(100,101,102,105,110,101,0),313]]);
          let typesi = String.fromCharCode(112,117,116,115,0);
          let vertical7 = String.fromCharCode(112,111,112,0);
         leagueZ *= vertical7.length;
         privileget.set(`${typesi}`, 2);
         typesi = `${(typesi == String.fromCharCode(67,0) ? privileget.size : typesi.length)}`;
         vertical7 = `${privileget.size * 3}`;
      }
      let s_imagee = 6108938 <= leagueZ;
      do {
         leagueZ %= Math.max(3, leagueZ);
         if (s_imagee) {
            break;
         }
      } while ((5 > (3 * leagueZ)) && s_imagee);
      while (4 >= leagueZ) {
          let singaporea = 0.0;
          let helperd: Array<any> = [691, 828];
          let catagoryq = String.fromCharCode(98,97,99,107,116,114,97,99,101,0);
         leagueZ /= Math.max(1, parseInt(`${singaporea}`));
         singaporea /= Math.max(4, parseFloat(`${catagoryq.length << (Math.min(Math.abs(2), 3))}`));
         helperd.push(catagoryq.length);
         break;
      }
      hoveru -= 1;
      starv = new Map([[`${collectionE.size}`, collectionE.size]]);
      shirtm = (collectionE.size >> (Math.min(favicon1.length, 3))) <= 12;
      carouselb -= parseFloat(`${favicon1.length & injuryy.length}`);
      carouselb -= parseFloat(`${footballG}`);
       let windS = String.fromCharCode(102,114,97,109,101,108,101,115,115,0);
       let resulto = String.fromCharCode(114,101,108,97,116,101,100,0);
         resulto += `${windS.length - 2}`;
      let trophyU = windS == String.fromCharCode(108,113,98,55,101,53,100,0);
      do {
         windS = `${resulto.length - windS.length}`;
         if (trophyU) {
            break;
         }
      } while ((resulto == windS) && trophyU);
       let bootsplash_ = 3;
      if (resulto == String.fromCharCode(109,0)) {
         windS += "1";
      }
          let currentR: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,115,116,97,109,112,0),141], [String.fromCharCode(115,117,98,98,97,110,100,0),108]]);
          let appleF: Map<any, any> = new Map([[String.fromCharCode(97,114,116,105,99,108,101,115,0),427], [String.fromCharCode(118,114,101,103,105,111,110,0),765], [String.fromCharCode(113,115,111,114,116,0),429]]);
         windS = `${resulto.length * 2}`;
         currentR = new Map([[`${currentR.size}`, 1]]);
         appleF = new Map([[`${currentR.size}`, 2 - currentR.size]]);
      if ((5 << (Math.min(2, windS.length))) >= 2 && (bootsplash_ << (Math.min(Math.abs(5), 3))) >= 3) {
          let confirmationP = String.fromCharCode(108,111,111,112,0);
         windS += `${(String.fromCharCode(88,0) == confirmationP ? bootsplash_ : confirmationP.length)}`;
      }
      analyticsI /= Math.max(1, parseFloat(`${injuryy.length}`));
   if (favicon1.startsWith(`${collectionE.size}`)) {
      favicon1 += `${(parseInt(`${analyticsI}`) * (shirtm ? 1 : 5))}`;
   }
      hoveru ^= collectionE.size;
   for (let m = 0; m < 3; m++) {
      carouselb /= Math.max(1, parseFloat(`${collectionE.size}`));
   }
      carouselb *= parseFloat(`${hoveru}`);
       let selectedo = 2;
       let profileW = 1.0;
       let ewardedV: Array<any> = [String.fromCharCode(115,105,103,110,105,102,105,99,97,110,99,101,0), String.fromCharCode(112,114,111,112,111,114,116,105,111,110,97,108,0)];
          let listG = 2.0;
          let placementO = 5;
         profileW /= Math.max(2, 3);
         listG -= parseFloat(`${2 - placementO}`);
         placementO ^= placementO - 2;
      while (3 == (parseInt(`${profileW}`) - selectedo) && 4.52 == (profileW - selectedo)) {
         profileW /= Math.max(parseInt(`${profileW}`) | selectedo, 3);
         break;
      }
      let register_4L = 5842250 <= ewardedV.length;
      do {
         ewardedV.push(selectedo);
         if (register_4L) {
            break;
         }
      } while ((ewardedV.includes(selectedo)) && register_4L);
         profileW -= 3;
         profileW /= Math.max(parseInt(`${profileW}`), 3);
         selectedo <<= Math.min(Math.abs(ewardedV.length & 2), 5);
          let descV = String.fromCharCode(98,97,110,100,105,110,103,0);
          let corner4: Map<any, any> = new Map([[String.fromCharCode(116,111,107,101,110,115,0),274], [String.fromCharCode(114,101,112,111,115,105,116,105,111,110,0),914], [String.fromCharCode(110,117,108,108,97,98,108,101,114,101,115,111,108,118,101,100,0),165]]);
          let settingC: Map<any, any> = new Map([[String.fromCharCode(113,112,98,105,116,115,0),903], [String.fromCharCode(114,101,113,117,105,114,101,0),687]]);
         ewardedV = [ewardedV.length];
         descV = `${1 - settingC.size}`;
         corner4.set(`${settingC.size}`, settingC.size + 1);
      if (ewardedV.includes(profileW)) {
         profileW += ewardedV.length;
      }
       let servicec = 1.0;
      hoveru /= Math.max(1, selectedo / (Math.max(favicon1.length, 5)));
      footballG |= 1;
   if (4 > (injuryy.length * hoveru)) {
      injuryy += `${injuryy.length}`;
   }
   for (let w = 0; w < 1; w++) {
      favicon1 += `${1 | starv.size}`;
   }
      friendsl += parseFloat(`${injuryy.length ^ 2}`);
   let floatingJ = 8401201 >= starv.size;
   do {
       let placementx: Array<any> = [28, 676];
       let become3 = 3;
       let analyticsm = true;
      if ((placementx.length >> (Math.min(4, Math.abs(become3)))) < 4 && 2 < (4 >> (Math.min(2, Math.abs(become3))))) {
         placementx.push(become3);
      }
      if ((2 >> (Math.min(2, Math.abs(become3)))) > 4 || analyticsm) {
         analyticsm = become3 <= 20 && analyticsm;
      }
          let overB = String.fromCharCode(115,112,111,105,108,101,114,115,0);
         analyticsm = (overB.length << (Math.min(1, placementx.length))) == 77;
       let roomy = String.fromCharCode(115,116,114,111,110,103,0);
         become3 &= 1 * become3;
      while (placementx.includes(become3)) {
          let tumbnaila = String.fromCharCode(115,101,109,105,0);
          let condensedO = String.fromCharCode(114,101,101,110,99,114,121,112,116,0);
          let splash2 = 3.0;
          let customZ = String.fromCharCode(111,112,101,110,115,101,97,0);
          let homeC = true;
         become3 |= customZ.length - 1;
         tumbnaila = `${parseInt(`${splash2}`)}`;
         condensedO = "2";
         splash2 *= 1;
         customZ = `${tumbnaila.length}`;
         homeC = condensedO == tumbnaila;
         break;
      }
         roomy += `${become3}`;
       let bootsplashs = String.fromCharCode(108,111,116,116,105,101,109,111,100,101,108,0);
      let smallL = roomy.length >= 5736669;
      do {
         roomy = "3";
         if (smallL) {
            break;
         }
      } while (smallL && (analyticsm));
      starv.set(`${analyticsm}`, ((analyticsm ? 5 : 5) / (Math.max(footballG, 7))));
      if (floatingJ) {
         break;
      }
   } while (floatingJ && (starv.size == 1));
   for (let t = 0; t < 2; t++) {
      starv.set(`${shirtm}`, ((shirtm ? 4 : 1) >> (Math.min(Math.abs(hoveru), 2))));
   }
   for (let p = 0; p < 1; p++) {
      hoveru -= 3;
   }
   for (let v = 0; v < 3; v++) {
      carouselb -= parseFloat(`${footballG / (Math.max(parseInt(`${carouselb}`), 3))}`);
   }
      analyticsI *= parseFloat(`${footballG << (Math.min(5, Math.abs(2)))}`);
   if (4 > (1 / (Math.max(2, footballG)))) {
      carouselb /= Math.max(parseFloat(`${parseInt(`${analyticsI}`)}`), 1);
   }
   while (5 >= (injuryy.length - parseInt(`${carouselb}`)) || 3 >= (5 | injuryy.length)) {
       let rewindS = String.fromCharCode(100,97,97,108,97,0);
       let fieldz = String.fromCharCode(105,100,101,110,116,105,102,121,0);
       let paginationI = String.fromCharCode(115,101,101,100,101,100,0);
      let shareN = String.fromCharCode(113,115,95,52,109,48,48,0) == paginationI;
      do {
         paginationI += `${rewindS.length + fieldz.length}`;
         if (shareN) {
            break;
         }
      } while ((rewindS != String.fromCharCode(107,0)) && shareN);
         fieldz = `${rewindS.length & 3}`;
          let fullR = 5.0;
          let sportsS = 3;
         rewindS += `${2 ^ paginationI.length}`;
         fullR -= parseInt(`${fullR}`);
         sportsS *= 3;
      while (rewindS != String.fromCharCode(107,0) || 4 < paginationI.length) {
         rewindS += "1";
         break;
      }
         fieldz = `${fieldz.length}`;
       let recommendationZ = String.fromCharCode(115,99,114,117,98,98,101,114,0);
       let questK = String.fromCharCode(114,101,103,101,120,112,0);
          let penaltyh: Array<any> = [153, 537, 980];
          let casting2 = String.fromCharCode(101,120,112,110,97,100,101,100,0);
         recommendationZ = `${rewindS.length / (Math.max(2, casting2.length))}`;
         penaltyh.push(1);
         casting2 = `${penaltyh.length >> (Math.min(Math.abs(2), 4))}`;
         questK = `${questK.length >> (Math.min(fieldz.length, 2))}`;
         recommendationZ += `${rewindS.length}`;
      injuryy = "2";
      break;
   }
   while (4 < (injuryy.length + starv.size) && (4 + injuryy.length) < 1) {
      starv = new Map([[`${friendsl}`, parseInt(`${friendsl}`) - parseInt(`${analyticsI}`)]]);
      break;
   }
   if (starv.get(`${l_centerE.size}`) == null) {
      starv = new Map([[`${hoveru}`, (String.fromCharCode(84,0) == favicon1 ? favicon1.length : hoveru)]]);
   }
   if (5.9 >= (analyticsI + parseFloat(`${starv.size}`))) {
       let volumej: Array<any> = [684, 507];
       let feedbackm: Map<any, any> = new Map([[String.fromCharCode(104,101,118,109,97,115,107,0),558], [String.fromCharCode(116,104,114,111,119,0),563]]);
         feedbackm = new Map([[`${feedbackm.size}`, 1 - volumej.length]]);
      for (let f = 0; f < 3; f++) {
          let benefitt = 0.0;
          let termsP = 1;
          let shootP = String.fromCharCode(121,95,49,50,95,100,111,119,110,108,111,97,100,115,0);
         volumej = [1 % (Math.max(9, shootP.length))];
         benefitt += parseFloat(`${termsP}`);
         termsP *= 2;
         shootP = `${3 % (Math.max(10, termsP))}`;
      }
      for (let y = 0; y < 2; y++) {
          let optionsF: Array<any> = [388, 24];
          let forward2 = false;
          let notificationm = String.fromCharCode(104,101,120,99,104,97,114,105,110,116,0);
          let sortu: Map<any, any> = new Map([[String.fromCharCode(102,108,116,117,105,110,116,0),false ], [String.fromCharCode(100,105,102,102,101,114,0),true ], [String.fromCharCode(116,105,116,110,116,0),true ]]);
          let trophyf: Map<any, any> = new Map([[String.fromCharCode(121,117,118,103,98,114,112,0),898], [String.fromCharCode(112,101,114,115,105,115,116,97,98,108,101,0),187]]);
         feedbackm.set(`${volumej.length}`, volumej.length);
         optionsF.push(optionsF.length << (Math.min(Math.abs(1), 2)));
         forward2 = 90 < sortu.size;
         notificationm = `${trophyf.size}`;
         sortu.set(`${trophyf.size}`, 1);
      }
       let injuryv = false;
         injuryv = volumej.length >= 34;
       let tickR = 2.0;
       let modelsI = 5.0;
      starv = new Map([[`${footballG}`, parseInt(`${carouselb}`)]]);
   }
       let active6 = String.fromCharCode(115,109,105,108,105,101,115,0);
         active6 += `${(active6 == String.fromCharCode(80,0) ? active6.length : active6.length)}`;
      while (active6.length > 4) {
         active6 = "1";
         break;
      }
       let policyZ = false;
       let forwardm = true;
      starv.set(injuryy, injuryy.length >> (Math.min(Math.abs(2), 2)));

    setIsDialogOpen(!isDialogOpen);
  };

  const toggleHistory = (vod: XVSScoreDark) => {
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
                  (item: VFMode, index: number) => (
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
              {customHistoryEarly.map((item: VFMode, index: number) => (
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
