import { RootStackScreenProps } from "@type/navigationTypes";
import ScreenContainer from "../../../components/container/screenContainer";
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import TitleWithBackButtonHeader from "../../../components/header/titleWithBackButtonHeader";
import React, { useCallback, useEffect, useState } from "react";
import DownloadEpisodeDetailCard from "../../../components/download/downloadEpisodeDetailCard";
import { DownloadStatus, EpisodeDownloadType } from "@type/vodDownloadTypes";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { RootState } from "@redux/store";
import MoreArrow from '@static/images/more_arrow.svg'
import DownloadYellowMiniIcon from '@static/images/download_yellow_mini.svg'
import DownloadPauseYellowMiniIcon from '@static/images/download_pause_yellow_mini.svg'
import { VodType } from "@type/ajaxTypes";
import CheckBoxSelected from "@static/images/checkbox_selected.svg";
import CheckBoxUnselected from "@static/images/checkbox_unselected.svg";
import ConfirmationModal from "../../../components/modal/confirmationModal";
import { Button } from "@rneui/themed";
import { pauseVideoDownloadThunk, removeVideoFromDownloadThunk, removeVodFromDownloadThunk, restartVideoDownloadThunk, resumeVideoToDownloadThunk } from "@redux/actions/videoDownloadAction";
import { addVodToHistory, playVod } from "@redux/actions/vodActions";
import { debounce, throttle } from "lodash";
import FastImage from '../../../components/common/customFastImage'

const LoadingGif = require('@static/images/loading-spinner.gif')

const DownloadDetails = ({ navigation, route }: RootStackScreenProps<"下载详情">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const { vodId } = route.params
  const [removeHistory, setRemoveHistory] = useState<EpisodeDownloadType[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);


  const download = useAppSelector(({downloadVideoReducer}: RootState) => downloadVideoReducer.downloads.find(dl => dl.vod.vod_id === vodId))
  const state = useAppSelector(({downloadVideoReducer}: RootState) => downloadVideoReducer)


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

  const handleDownloadCardPress = useCallback(
    debounce(item => {
      if (isEditing) {
        toggleHistory(item);
      } else {
        if (item.status === DownloadStatus.ERROR) {
          dispatch(
            restartVideoDownloadThunk(
              download.vod,
              item.vodSourceId,
              item.vodUrlNid,
            ),
          );
        } else if (item.status === DownloadStatus.COMPLETED) {
          dispatch(playVod(download.vod, 0, item.vodUrlNid, item.vodSourceId));
          navigation.navigate('播放', {
            vod_id: download.vod.vod_id,
            player_mode: download.vodIsAdult ? 'adult' : 'normal',
          });
        } else if (item.status === DownloadStatus.DOWNLOADING) {
            if (item.ffmpegSession !== null || !(state.currentDownloading.find(x => x.vod.vod_id === download.vod.vod_id && x.vodSourceId === item.vodSourceId && x.vodUrlNid === item.vodUrlNid))){
              //* if not null or not in currently downloading 
              dispatch(
                pauseVideoDownloadThunk(
                  download.vod,
                  item.vodSourceId,
                  item.vodUrlNid,
                ),
              );
            }
        } else if (item.status === DownloadStatus.PAUSED) {
          dispatch(
            resumeVideoToDownloadThunk(
              download.vod,
              item.vodSourceId,
              item.vodUrlNid,
              download.vodIsAdult,
            ),
          );
        }
      }
    }, 200),
    [isEditing, state],
  );

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
        title={`${getEpisodeName(item.vodSourceId, item.vodUrlNid)} - ${getSourceName(item.vodSourceId, download.vodIsAdult)} - (${item.ffmpegSession})`}
        progressPercentage={+item.progress.percentage.toFixed(0)}
        status={item.status}
        activeOpacity={isEditing ? 1 : 0.2}
        onPress={() => handleDownloadCardPress(item)}
      />
    </View> 

  }, [removeHistory, isEditing, state]) 


  const totalDownloadSize = download.episodes.reduce((prev, curr) => {return prev + curr.sizeInBytes}, 0) / 1024 / 1024 
  
  let allButtonText = ''
  let isButtonVisible = false
  let buttonIcon = <DownloadPauseYellowMiniIcon/>
  if (download.episodes.every(x => x.status === DownloadStatus.COMPLETED)){
    isButtonVisible = false
  } else if (download.episodes.some(x => x.status === DownloadStatus.DOWNLOADING)){
    isButtonVisible = true
    allButtonText = "全部暂停"
    buttonIcon = <DownloadPauseYellowMiniIcon/>
  } else if (download.episodes.every(x => [DownloadStatus.PAUSED, DownloadStatus.ERROR, DownloadStatus.COMPLETED].includes(x.status))){
    isButtonVisible = true
    allButtonText = "全部下载"
    buttonIcon = <DownloadYellowMiniIcon/>
  }


  const handleButtonPress = useCallback(
    debounce(() => {
      if (allButtonText === '全部暂停') {
        download.episodes
          .filter(x => x.status === DownloadStatus.DOWNLOADING)
          .forEach((episodeDownload) => {
            if (episodeDownload.ffmpegSession !== null || !(state.currentDownloading.find( x => x.vod.vod_id === download.vod.vod_id && x.vodSourceId === episodeDownload.vodSourceId && x.vodUrlNid === episodeDownload.vodUrlNid))){
              //* if not null or not in currently downloading 
              dispatch(
                pauseVideoDownloadThunk(
                  download.vod,
                  episodeDownload.vodSourceId,
                  episodeDownload.vodUrlNid,
                ),
              );
            }
          });
      } else if (allButtonText === '全部下载') {
        download.episodes
          .filter(x => x.status === DownloadStatus.PAUSED)
          .forEach((episodeDownload) => {
            dispatch(
              resumeVideoToDownloadThunk(
                download.vod,
                episodeDownload.vodSourceId,
                episodeDownload.vodUrlNid,
                download.vodIsAdult,
              ),
            );
          });
      } else {
      }
      setIsLoading(false)
    }, 200),
    [allButtonText, download],
  );

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
            <TouchableOpacity 
            style={isButtonVisible ? styles.downloadControlButton : styles.downloadControlButtonHidden} 
            onPress={() => {
              setIsLoading(true)
              handleButtonPress()
            }} 
            >
              <Text style={{color: colors.muted, fontSize: 13, }}>
                {allButtonText}
              </Text>
              {buttonIcon}
            </TouchableOpacity>
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
        <View>
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
          {isLoading && <View style={styles.loadingOverlayContainer}>
            <FastImage
              source={LoadingGif}
              style={{
                width: 150, 
                height: 150, 
              }}
            />
          </View>}
        </View>

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
  downloadControlButtonHidden: {
    display: "none"
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
  }, 
  loadingOverlayContainer: {
    flex: 1, 
    backgroundColor: '#161616A0', 
    width: '100%',
    height: '100%',
    position: 'absolute', 
    alignItems: 'center',
    justifyContent: 'center'
  }
})