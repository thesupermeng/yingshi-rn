import { RootStackScreenProps } from "@type/navigationTypes";
import ScreenContainer from "../../../components/container/screenContainer";
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import TitleWithBackButtonHeader from "../../../components/header/titleWithBackButtonHeader";
import React, { useCallback, useState } from "react";
import DownloadEpisodeDetailCard from "../../../components/download/downloadEpisodeDetailCard";
import { DownloadStatus, EpisodeDownloadType } from "@type/vodDownloadTypes";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { RootState } from "@redux/store";
import MoreArrow from '@static/images/more_arrow.svg'
import DownloadIconYellow from '@static/images/download_yellow.svg'
import { VodType } from "@type/ajaxTypes";
import CheckBoxSelected from "@static/images/checkbox_selected.svg";
import CheckBoxUnselected from "@static/images/checkbox_unselected.svg";
import ConfirmationModal from "../../../components/modal/confirmationModal";
import { Button } from "@rneui/themed";
import { pauseVideoDownloadThunk, removeVideoFromDownloadThunk, removeVodFromDownloadThunk, restartVideoDownloadThunk, resumeVideoDownloadThunk } from "@redux/actions/videoDownloadAction";
import { addVodToHistory, playVod } from "@redux/actions/vodActions";

const DownloadDetails = ({ navigation, route }: RootStackScreenProps<"下载详情">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const { vodId } = route.params
  const [removeHistory, setRemoveHistory] = useState<EpisodeDownloadType[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dispatch = useAppDispatch();


  const download = useAppSelector(({downloadVideoReducer}: RootState) => downloadVideoReducer.downloads.find(dl => dl.vod.vod_id === vodId))

  if (!download) return <></>

  const allEpisodes = download.episodes

  const getEpisodeName = useCallback((sourceId: number, urlNid: number) => {
    if (download.vodIsAdult){
      return download.vod.vod_play_list.urls
        .find(url => url.nid === urlNid)
        ?.name
    } else {
      return download.vod.vod_sources
      .find(source => source.source_id === sourceId)?.vod_play_list.urls
      .find(url => url.nid === urlNid)
      ?.name
    }
  }, [download] )

  const getSourceName = useCallback((sourceId: number, vodIsAdult: boolean) => {
    if (vodIsAdult){
      return '夜来香'
    } else {
      return download.vod.vod_sources.find(source => source.source_id === sourceId)?.source_name
    }
  }, [download])

  const toggleHistory = (episode: EpisodeDownloadType) => {
    const filtered = removeHistory.filter((x) => !(x.vodUrlNid === episode.vodUrlNid && x.vodSourceId === episode.vodSourceId));
    if (filtered.length === removeHistory.length) {
      setRemoveHistory([episode, ...removeHistory]);
    } else {
      setRemoveHistory(filtered);
    }
  }

  const toggleOverlay = useCallback(() => {
    setIsDialogOpen(!isDialogOpen);
  }, [isDialogOpen])

  const isDeleteAll = removeHistory.length === allEpisodes.length

  const deleteAlertText = isDeleteAll ? `您是否确定清楚《${download.vod.vod_name}》?` : "您是否确定清除？"

  const renderItem = useCallback(({item, index}: {item: EpisodeDownloadType, index: number}) => {
    return <View style={styles.downloadItem}>
      {isEditing && (
        <TouchableOpacity
        style={styles.checkbox}
        onPress={() => toggleHistory(item)}
        >
        {removeHistory.some(x => (x.vodUrlNid === item.vodUrlNid && x.vodSourceId === item.vodSourceId) ) ? (
          <CheckBoxSelected height={icons.sizes.m} width={icons.sizes.m} />
        ) : (
          <CheckBoxUnselected
            height={icons.sizes.m}
            width={icons.sizes.m}
          />
        )}
      </TouchableOpacity>
      )
      }
      <DownloadEpisodeDetailCard
        title={`${getEpisodeName(item.vodSourceId, item.vodUrlNid)} - ${getSourceName(item.vodSourceId, download.vodIsAdult)}`}
        progressPercentage={+item.progress.percentage.toFixed(0)}
        status={item.status}
        activeOpacity={isEditing ? 1 : 0.2}
        onPress={() => {
          if (isEditing){
            toggleHistory(item)
          } else {
            if (item.status === DownloadStatus.ERROR){
              dispatch(restartVideoDownloadThunk(download.vod, item.vodSourceId, item.vodUrlNid))
            } else if (item.status === DownloadStatus.COMPLETED){
              dispatch(playVod(download.vod, 0, item.vodUrlNid, item.vodSourceId))
              navigation.navigate('播放', {
                vod_id: download.vod.vod_id,
                player_mode: download.vodIsAdult ? 'adult' : 'normal'
              });
            } else if (item.status === DownloadStatus.DOWNLOADING) {
              dispatch(pauseVideoDownloadThunk(download.vod, item.vodSourceId, item.vodUrlNid))
            } else if (item.status === DownloadStatus.PAUSED) {
              dispatch(resumeVideoDownloadThunk(download.vod, item.vodSourceId, item.vodUrlNid))
            }
          }
        }}
      />
    </View> 

  }, [removeHistory, isEditing]) 

  const totalDownloadSize = download.episodes.reduce((prev, curr) => {return prev + curr.sizeInBytes}, 0) / 1024 / 1024 


  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title={download.vod.vod_name}
        right={
          <Pressable
            onPress={() => {
              setIsEditing(!isEditing);
            }}>
            <Text
              style={{
                ...textVariants.body,
                opacity:
                  download.episodes && download.episodes.length > 0 ? 100 : 0,
              }}>
              {isEditing ? '取消' : '编辑'}
            </Text>
          </Pressable>
        }
      />
      <View style={styles.contentContainer}>
        <View style={styles.moreControlsContainer}>
          <View style={styles.moreControlsLeftContainer}>
            {/* <Pressable style={styles.downloadControlButton}>
              <Text style={{color: colors.muted, fontSize: 13, }}>
                全部下载
              </Text>
              <DownloadIconYellow/>
            </Pressable> */}
            <Text
              style={{
                color: colors.muted,
                fontWeight: '400', 
                fontFamily: 'PingFang SC', 
              }}>
              已用{totalDownloadSize.toFixed(0)}MB
            </Text>
          </View>
          <Pressable style={styles.downloadMoreButton}>
            <Text
              style={{
                color: colors.muted,
                fontWeight: '400', 
                fontFamily: 'PingFang SC', 
                lineHeight: icons.sizes.m
              }}
            >下载更多</Text>
            <MoreArrow style={{height: icons.sizes.m, width: icons.sizes.m}} color={colors.muted} />
          </Pressable>
        </View>
        <FlatList
          data={download.episodes.sort(
            (a, b) =>
              a.vodUrlNid - b.vodUrlNid || a.vodSourceId - b.vodSourceId,
          )}
          renderItem={renderItem}
          keyExtractor={item => {
            return `${download.vod.vod_id}-${item.vodSourceId}-${item.vodUrlNid}`;
          }}
          showsVerticalScrollIndicator={false}
        />

        <ConfirmationModal
          onConfirm={() => {
            if (isDeleteAll) {
              // remove vod
              dispatch(removeVodFromDownloadThunk(download.vod, 0, 0))
              navigation.goBack()
            } else {
              // remove episode
              for (const item of removeHistory) {
                dispatch(removeVideoFromDownloadThunk(download.vod, item.vodSourceId, item.vodUrlNid))
              }
            }
            setIsEditing(false);
            setRemoveHistory([]);
            toggleOverlay();
          }}
          onCancel={toggleOverlay}
          isVisible={isDialogOpen}
          title="清除提示"
          subtitle={deleteAlertText}
        />
        {isEditing && (
          <View style={styles.deleteConfirmationModal}>
            <Button
              onPress={() => {
                if (
                  removeHistory.length === 0 ||
                  removeHistory.length !== allEpisodes.length
                ) {
                  setRemoveHistory(allEpisodes.map(episodes => episodes));
                } else {
                  setRemoveHistory([]);
                }
              }}
              containerStyle={styles.confirmationBtn}
              color={colors.card2}
              titleStyle={{ ...textVariants.body, color: colors.muted }}
            >
              {removeHistory.length === 0 ||
                removeHistory.length !== allEpisodes.length
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
      </View>
    </ScreenContainer>
  );

}

export default DownloadDetails; 

const styles = StyleSheet.create({
  downloadMoreButton: {
    flexDirection: "row", 
    alignItems: 'center', 
    display: 'none'
  }, 
  moreControlsContainer: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    paddingVertical: 6
  }, 
  moreControlsLeftContainer: {
    flexDirection: 'row', 
    gap: 12, 
    alignItems: 'center'
  }, 
  downloadControlButton: {
    borderRadius: 22, 
    borderColor: '#9C9C9C', 
    borderWidth: 1, 
    borderStyle: 'solid', 
    gap: 5, 
    paddingHorizontal: 12, 
    paddingVertical: 3, 
    flexDirection: 'row', 
    alignContent: 'center', 
  }, 
  checkbox: {
    padding: 5,
  },
  downloadItem: {
    flexDirection: "row", 
    alignItems: 'center', 
    gap: 14
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
  contentContainer: {
    flex: 1
  }
})