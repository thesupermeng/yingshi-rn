import { RootStackScreenProps } from "@type/navigationTypes"
import ScreenContainer from "../../../components/container/screenContainer"
import TitleWithBackButtonHeader from "../../../components/header/titleWithBackButtonHeader"
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useCallback, useState } from "react"
import { useTheme } from "@react-navigation/native"
import { useAppDispatch, useAppSelector } from "@hooks/hooks"
import { RootState } from "@redux/store"
import { VodDownloadType } from "@type/vodDownloadTypes"
import EmptyList from "../../../components/common/emptyList"
import DownloadVodCard from "../../../components/download/downloadVodCard"
import CheckBoxSelected from "@static/images/ticked.svg";
import CheckBoxUnselected from "@static/images/checkbox_unselected.svg";
import ConfirmationModal from "../../../components/modal/confirmationModal"
import { Button } from "@rneui/themed"
import { removeVodFromDownloadThunk } from "@redux/actions/videoDownloadAction"
import { IS_OTHER_SKIN } from "@utility/constants"
import { Vod } from "@models"
import { CLangKey } from "@constants"

const DownloadCatalog = ({ navigation }: RootStackScreenProps<"我的下载">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [removeHistory, setRemoveHistory] = useState<Vod[]>([]);
  const allDownloads = useAppSelector(({ downloadVideoReducer }: RootState) => downloadVideoReducer.downloads)
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dispatch = useAppDispatch();


  const toggleHistory = (vod: Vod) => {
    const filtered = removeHistory.filter((x) => x.vod_id !== vod.vod_id);
    if (filtered.length === removeHistory.length) {
      setRemoveHistory([vod, ...removeHistory]);
    } else {
      setRemoveHistory(filtered);
    }
  };

  const toggleOverlay = useCallback(() => {
    setIsDialogOpen(!isDialogOpen);
  }, [isDialogOpen])

  const renderItem = useCallback(({ item, index }: { item: VodDownloadType, index: number }) => {
    return (
      <View style={styles.downloadItem}>
        {isEditing && (
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => toggleHistory(item.vod)}>
            {removeHistory.some(x => x.vod_id === item.vod.vod_id) ? (
              <CheckBoxSelected height={icons.sizes.m} width={icons.sizes.m} color={IS_OTHER_SKIN ? colors.success : colors.primary} />
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
    navigation.navigate("Home", { screen: '首页' })
  }, [])

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title={CLangKey.myDownload.tr()}
        right={
          <Pressable
            onPress={() => {
              setIsEditing(!isEditing);
            }}
          >
            <Text
              style={{
                ...textVariants.body,
                // padding: 8,
                opacity: allDownloads && allDownloads.length > 0 ? 100 : 0,
              }}
            >
              {isEditing ? CLangKey.cancel.tr() : CLangKey.edit.tr()}
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
                title={CLangKey.clearXInform.tr({
                  x: CLangKey.downloadedVideo.tr().toLowerCase()
                })}
                subtitle={CLangKey.confirmToClearX.tr({
                  x: CLangKey.downloadedVideo.tr().toLowerCase()
                })}
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
                      ? CLangKey.selectAll.tr()
                      : CLangKey.unselectAll.tr()}
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
                        removeHistory.length === 0 ? colors.muted : (IS_OTHER_SKIN ? 'white' : colors.primaryContrast),
                    }}
                  >
                    {CLangKey.delete.tr()}
                  </Button>
                </View>
              )}
            </>
            :
            <View style={styles.emptyListContainer}>
              <EmptyList
                description={CLangKey.noX.tr({ x: CLangKey.downloadedVideo.tr() })}
                additionalElement={
                  <Pressable style={{ ...styles.seeMoreBtn, backgroundColor: IS_OTHER_SKIN ? 'white' : colors.primary }} onPress={handleSeeMore}>
                    <Text style={styles.seeMoreBtnText}>{CLangKey.viewGreatVideos.tr()}</Text>
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