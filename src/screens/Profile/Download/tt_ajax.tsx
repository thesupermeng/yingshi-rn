import { RootStackScreenProps } from "@type/tt_temperature"
import ScreenContainer from "../../../components/container/tt_backward"
import TitleWithBackButtonHeader from "../../../components/header/tt_typing_tail_header"
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useCallback, useState } from "react"
import { useTheme } from "@react-navigation/native"
import { useAppDispatch, useAppSelector } from "@hooks/tt_spec_download"
import { ttOrange } from "@redux/tt_updates_bottom"
import { ttTumbnail } from "@type/tt_const_videocommon"
import EmptyList from "../../../components/common/tt_logo_desc"
import DownloadVodCard from "../../../components/download/tt_mbnative_carousel"
import CheckBoxSelected from "@static/images/indicatorCast.svg";
import CheckBoxUnselected from "@static/images/foundWindRecommendation.svg";
import { ttAppsOther } from "@type/tt_line_borderless"
import ConfirmationModal from "../../../components/modal/tt_styles"
import { Button } from "@rneui/themed"
import { removeVodFromDownloadThunk } from "@redux/actions/tt_delegate_google"
import { IS_OTHER_SKIN } from "@utility/tt_trophy_cross"

const DownloadCatalog = ({ navigation }: RootStackScreenProps<"我的下载">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [removeHistory, setRemoveHistory] = useState<ttAppsOther[]>([]);
  const allDownloads = useAppSelector(({ downloadVideoReducer }: ttOrange) => downloadVideoReducer.downloads)
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dispatch = useAppDispatch();


  const toggleHistory = (vod: ttAppsOther) => {
    const filtered = removeHistory.filter((x) => x.vod_id !== vod.vod_id);
    if (filtered.length === removeHistory.length) {
      setRemoveHistory([vod, ...removeHistory]);
    } else {
      setRemoveHistory(filtered);
    }
  };

  const toggleOverlay = useCallback(() => {
       let singapore5: Map<any, any> = new Map([[String.fromCharCode(110,95,50,95,106,97,99,99,97,114,100,100,105,115,116,0),true ], [String.fromCharCode(116,95,55,48,95,116,117,108,115,105,0),false ]]);
    let trash5 = 5.0;
    let dragh = String.fromCharCode(118,105,116,97,108,105,107,108,105,122,101,95,51,95,50,57,0);
    let form6 = String.fromCharCode(117,110,105,110,115,116,97,108,108,95,114,95,56,57,0);
    let combineI = String.fromCharCode(103,95,54,56,95,115,116,114,105,115,116,97,114,116,0);
    let hooksa = 3;
    let backh = false;
       let klevind = 5;
      for (let l = 0; l < 2; l++) {
         klevind %= Math.max(5, klevind & 2);
      }
      let logout7 = 5955195 >= klevind;
      do {
         klevind -= 1;
         if (logout7) {
            break;
         }
      } while ((3 >= (klevind * klevind)) && logout7);
      while (2 == (klevind * 1)) {
         klevind += klevind;
         break;
      }
      form6 = `${parseInt(`${trash5}`) % (Math.max(dragh.length, 3))}`;
   if (singapore5.size <= 3) {
      singapore5 = new Map([[`${trash5}`, form6.length]]);
   }
   let pauseF = 7933236.0 >= trash5;
   do {
      trash5 /= Math.max(2, ((backh ? 1 : 5) - hooksa));
      if (pauseF) {
         break;
      }
   } while (((singapore5.size - 3) < 4 || (2.49 - trash5) < 1.54) && pauseF);
   if ((combineI.length >> (Math.min(4, Math.abs(hooksa)))) < 3 || (combineI.length >> (Math.min(Math.abs(3), 4))) < 5) {
      combineI = `${((backh ? 1 : 2) % 1)}`;
   }
      backh = String.fromCharCode(100,0) == combineI;
      dragh = `${(String.fromCharCode(75,0) == dragh ? dragh.length : hooksa)}`;
   for (let a = 0; a < 2; a++) {
       let lightZ = String.fromCharCode(109,111,110,116,104,95,121,95,50,49,0);
         lightZ += "2";
      let rankd = 5711296 <= lightZ.length;
      do {
         lightZ = `${lightZ.length}`;
         if (rankd) {
            break;
         }
      } while ((4 <= lightZ.length) && rankd);
         lightZ = `${1 % (Math.max(9, lightZ.length))}`;
      dragh += `${singapore5.size % 3}`;
   }
      singapore5.set(`${backh}`, ((backh ? 5 : 4) - 2));
   for (let e = 0; e < 3; e++) {
      trash5 += combineI.length;
   }
       let buildS = 0.0;
         buildS += 3 ^ parseInt(`${buildS}`);
         buildS *= parseInt(`${buildS}`) + 3;
         buildS /= Math.max(3, 3);
      combineI = "3";
   let leftd = 7883769 <= hooksa;
   do {
      hooksa |= ((backh ? 3 : 3) - 3);
      if (leftd) {
         break;
      }
   } while (leftd && ((hooksa / 5) >= 1 || 4 >= (5 / (Math.max(7, combineI.length)))));
      dragh = `${(hooksa - (backh ? 4 : 4))}`;
      hooksa += 1;
      form6 += `${2 * parseInt(`${trash5}`)}`;
       let stara = String.fromCharCode(104,121,115,99,97,108,101,95,98,95,50,51,0);
       let expiredT = String.fromCharCode(109,95,55,53,95,100,105,99,116,105,111,110,97,114,121,0);
       let anytimev: Array<any> = [425, 168, 474];
      if (!expiredT.includes(`${stara.length}`)) {
          let redirectD: Map<any, any> = new Map([[String.fromCharCode(111,95,54,54,95,105,100,115,0),false ], [String.fromCharCode(116,95,55,51,95,99,117,109,117,108,97,116,105,118,101,0),false ], [String.fromCharCode(110,111,116,95,113,95,55,55,0),true ]]);
          let sortH = String.fromCharCode(112,95,51,95,116,101,115,116,99,111,110,102,105,103,0);
          let downf = 2.0;
         expiredT += "3";
         redirectD = new Map([[sortH, 2]]);
         sortH += `${parseInt(`${downf}`) << (Math.min(sortH.length, 4))}`;
         downf *= sortH.length >> (Math.min(1, Math.abs(redirectD.size)));
      }
          let applicationJ = 0.0;
          let dialogA = 3;
          let footballv = 4;
         stara = `${(expiredT == String.fromCharCode(104,0) ? footballv : expiredT.length)}`;
         applicationJ /= Math.max(2, parseInt(`${applicationJ}`) - 3);
         dialogA <<= Math.min(3, Math.abs(3));
         footballv += dialogA;
      let gesturesF = 7090964 <= stara.length;
      do {
          let networkl = 5;
          let leftc = 4.0;
          let gestureO = 2;
          let whiteJ: Array<any> = [764, 825, 236];
          let step5 = String.fromCharCode(104,101,97,114,116,95,119,95,49,50,0);
         stara = `${parseInt(`${leftc}`) ^ gestureO}`;
         networkl %= Math.max(5, networkl);
         leftc += parseFloat(`${whiteJ.length % (Math.max(2, step5.length))}`);
         gestureO += 3 & whiteJ.length;
         step5 += `${(step5 == String.fromCharCode(112,0) ? whiteJ.length : step5.length)}`;
         if (gesturesF) {
            break;
         }
      } while ((expiredT.length < 3 && stara.length < 3) && gesturesF);
      for (let l = 0; l < 1; l++) {
          let favoriteZ: Map<any, any> = new Map([[String.fromCharCode(100,95,51,52,95,111,110,97,118,99,0),949], [String.fromCharCode(105,95,51,57,95,117,112,115,104,105,102,116,101,100,0),100]]);
          let lessp = String.fromCharCode(105,115,108,101,97,112,95,111,95,49,57,0);
         anytimev.push(stara.length & expiredT.length);
         favoriteZ.set(`${lessp}`, favoriteZ.size);
         lessp += `${3 << (Math.min(3, lessp.length))}`;
      }
      let strQ = stara == String.fromCharCode(111,50,54,54,51,120,118,116,0);
      do {
         stara += `${stara.length + 1}`;
         if (strQ) {
            break;
         }
      } while (strQ && (stara.length > 3));
      singapore5.set(`${backh}`, 2 | stara.length);
      combineI += `${dragh.length}`;
   for (let w = 0; w < 2; w++) {
      backh = !backh;
   }
      singapore5.set(`${trash5}`, parseInt(`${trash5}`) & 2);

    setIsDialogOpen(!isDialogOpen);
  }, [isDialogOpen])

  const renderItem = useCallback(({ item, index }: { item: ttTumbnail, index: number }) => {
    return (
      <View style={styles.downloadItem}>
        {isEditing && (
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => toggleHistory(item.vod)}>
            {removeHistory.some(x => x.vod_id === item.vod.vod_id) ? (
              <CheckBoxSelected height={icons.sizes.m} width={icons.sizes.m} color={IS_OTHER_SKIN ? colors.success : colors.primary} fill={'white'} />
            ) : (
              <CheckBoxUnselected
                height={icons.sizes.m}
                width={icons.sizes.m}
              />
            )}
          </TouchableOpacity>
        )}
        <DownloadVodCard
          activeOpacity={isEditing ? 1 : 0.2}
          download={item}
          index={index}
          vod_pic_list={[]}
          imgOrientation="horizontal"
          onPress={() => {
            if (isEditing) {
              toggleHistory(item.vod)
            } else {
              navigation.navigate('下载详情', { vodId: item.vod.vod_id })
            }
          }}
        />
      </View>
    );


  }, [isEditing, removeHistory])

  const handleSeeMore = useCallback(() => {
       let shrinkR: Array<any> = [994, 440];
    let toponF = String.fromCharCode(100,97,118,100,0);
    let disconnectedW: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,119,97,114,100,115,95,99,95,56,51,0),244], [String.fromCharCode(101,120,116,114,97,112,111,108,97,116,101,95,110,95,54,49,0),801], [String.fromCharCode(108,105,98,121,117,118,0),645]]);
    let fill0 = false;
    let usernamek = String.fromCharCode(105,109,97,103,101,95,102,95,50,48,0);
    let register_x4d = 3;
    let private_4e = String.fromCharCode(119,109,97,112,114,111,0);
    let fastd = false;
    let matchF: Map<any, any> = new Map([[String.fromCharCode(106,95,54,54,95,97,100,97,112,116,97,116,105,111,110,115,101,116,0),229], [String.fromCharCode(105,110,116,101,114,97,116,105,111,110,0),731], [String.fromCharCode(110,101,97,114,108,121,95,57,95,55,49,0),506]]);
    let uploadv = String.fromCharCode(121,95,55,52,95,115,118,101,99,116,111,114,0);
    let lightS: Array<any> = [196, 351, 179];
    let whitet = true;
    let targetR = String.fromCharCode(97,100,100,101,114,95,120,95,54,56,0);
    let untickl = true;
    let reactL = String.fromCharCode(119,95,51,53,95,100,101,99,111,100,101,109,118,0);
    let countrya: Array<any> = [515, 263, 238];
   let backwardE = 6107109 >= disconnectedW.size;
   do {
      disconnectedW = new Map([[toponF, register_x4d / (Math.max(toponF.length, 5))]]);
      if (backwardE) {
         break;
      }
   } while (((disconnectedW.size % (Math.max(9, usernamek.length))) == 4 || 4 == (usernamek.length % 4)) && backwardE);
      toponF = "3";
       let package_8P = true;
       let greyw: Array<any> = [788, 604];
         package_8P = (19 >= ((!package_8P ? greyw.length : 19) ^ greyw.length));
          let updatesd = String.fromCharCode(115,116,117,102,102,105,110,103,95,54,95,51,48,0);
          let yellowe: Array<any> = [225, 268];
          let downloadF = String.fromCharCode(102,95,51,48,95,117,110,115,111,108,118,101,100,0);
         package_8P = downloadF == String.fromCharCode(111,0) || greyw.length <= 9;
         updatesd = `${(updatesd == String.fromCharCode(121,0) ? updatesd.length : yellowe.length)}`;
         yellowe.push(yellowe.length);
         downloadF += `${yellowe.length}`;
       let viewsn = String.fromCharCode(102,95,56,57,95,116,121,112,101,0);
       let screen8 = String.fromCharCode(102,99,117,110,112,117,98,108,105,115,104,95,114,95,53,51,0);
         package_8P = !package_8P;
      while (3 == screen8.length) {
         screen8 += `${screen8.length % 2}`;
         break;
      }
      while (5 == (viewsn.length % (Math.max(5, 6))) || 1 == (viewsn.length % (Math.max(5, 4)))) {
         greyw.push(((package_8P ? 2 : 2) << (Math.min(Math.abs(3), 5))));
         break;
      }
      matchF.set(`${package_8P}`, ((package_8P ? 5 : 3) - (fastd ? 1 : 1)));
      shrinkR.push(toponF.length * 1);
   for (let j = 0; j < 1; j++) {
      fastd = matchF.size > shrinkR.length;
   }
      register_x4d <<= Math.min(1, Math.abs(disconnectedW.size & shrinkR.length));
      toponF = `${((fastd ? 4 : 2) - 1)}`;
   for (let h = 0; h < 1; h++) {
      uploadv += `${toponF.length}`;
   }
      fastd = matchF.size > private_4e.length;
   while (fastd) {
      uploadv += `${shrinkR.length % (Math.max(2, 5))}`;
      break;
   }
      toponF += `${((fill0 ? 5 : 5))}`;
      toponF += `${((fastd ? 3 : 1) ^ 3)}`;
   let dicew = 6583334 >= toponF.length;
   do {
      toponF = `${toponF.length}`;
      if (dicew) {
         break;
      }
   } while (dicew && (private_4e == toponF));
   while (!uploadv.startsWith(private_4e)) {
      uploadv += `${register_x4d}`;
      break;
   }
      fill0 = usernamek.length > 8;
   while (fill0 || !whitet) {
      fill0 = matchF.size > register_x4d;
      break;
   }
      usernamek += `${disconnectedW.size}`;
   while (usernamek.includes(`${fastd}`)) {
      fastd = (private_4e.length | shrinkR.length) > 22;
      break;
   }
      whitet = 49 <= register_x4d;

    navigation.navigate("Home", { screen: '首页' })
  }, [])

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title="我的下载"
        right={
          <Pressable
            onPress={() => {
              setIsEditing(!isEditing);
            }}
          >
            <Text
              style={{
                ...textVariants.body,
                
                opacity: allDownloads && allDownloads.length > 0 ? 100 : 0,
              }}
            >
              {isEditing ? "取消" : "编辑"}
            </Text>
          </Pressable>
        }
      />
      <View style={styles.contentContainer}>
        {
          allDownloads.length > 0 ?
            <>
              <FlatList
                data={allDownloads.sort((a, b) => a.vod.vod_id - b.vod.vod_id)}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.vod.vod_id.toString()}
                showsVerticalScrollIndicator={false}
              />
              <ConfirmationModal
                onConfirm={() => {
                  for (const item of removeHistory) {
                    dispatch(removeVodFromDownloadThunk(item, 0, 0))
                  }
                  setIsEditing(false);
                  setRemoveHistory([]);
                  toggleOverlay();
                }}
                onCancel={toggleOverlay}
                isVisible={isDialogOpen}
                title="清除提示"
                subtitle="您是否确定清除？"
              />
              {isEditing && (
                <View style={styles.deleteConfirmationModal}>
                  <Button
                    onPress={() => {
                      if (
                        removeHistory.length === 0 ||
                        removeHistory.length !== allDownloads.length
                      ) {
                        setRemoveHistory(allDownloads.map(download => download.vod));
                      } else {
                        setRemoveHistory([]);
                      }
                    }}
                    containerStyle={styles.confirmationBtn}
                    color={colors.card2}
                    titleStyle={{ ...textVariants.body, color: colors.muted }}
                  >
                    {removeHistory.length === 0 ||
                      removeHistory.length !== allDownloads.length
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
                    color={removeHistory.length === 0 ? colors.card2 : (IS_OTHER_SKIN ? colors.error : colors.primary)}
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
            </>
            :
            <View style={styles.emptyListContainer}>
              <EmptyList
                description="暂无下载视频"
                additionalElement={
                  <Pressable style={{ ...styles.seeMoreBtn, backgroundColor: IS_OTHER_SKIN ? 'white' : colors.primary }} onPress={handleSeeMore}>
                    <Text style={styles.seeMoreBtnText}>查看精彩视频</Text>
                  </Pressable>
                } />
            </View>
        }
      </View>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  emptyListContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  seeMoreBtn: {
    backgroundColor: '#FAC33D',
    borderRadius: 22,
    paddingHorizontal: 12,
    paddingVertical: 6
  },
  seeMoreBtnText: {
    color: '#1D2023',
    fontSize: 12,
    fontWeight: '500',
    height: 16,
    lineHeight: 16
  },
  checkbox: {
    padding: 5,
  },
  downloadItem: {
    flexDirection: "row",
    alignItems: 'center'
  },
  confirmationBtn: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    marginTop: 8,
  },
  deleteConfirmationModal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
})

export default DownloadCatalog