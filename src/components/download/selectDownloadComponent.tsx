import React, { useState, useMemo, memo, useEffect, useRef, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated,
  FlatList,
  Platform
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { VodEpisodeStatusType } from "@type/ajaxTypes";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import DownloadIcon from '@static/images/download.svg'
import DlIcon from "@static/images/download_icon.svg";
import VipIcon from "@static/images/vip-icon.svg"
import FinishIcon from "@static/images/downloaded_icon.svg";
import { DownloadStatus, DownloadVideoReducerState } from "@type/vodDownloadTypes";
import { useAppSelector } from "@hooks/hooks";
import { RootState } from "@redux/store";
import DeviceInfo from "react-native-device-info";
import { Provider, Toast } from "@ant-design/react-native";
import { debounce, throttle } from "lodash";
import { CPopup } from "@utility/popup";
import { DOWNLOAD_FEATURE_MAX_QUEUE } from "@utility/constants";
import { VodEpisodeGroup } from "@models";
import { CLangKey } from "@constants";

const throttledToast = debounce((msg: string) => {
  CPopup.showToast(msg)
}, 1000)


interface Props {
  vodId?: number;
  isVip: boolean;
  source?: number;
  screen: string;
  episodes?: VodEpisodeGroup;
  handleClose: any;
  rangeSize?: number;
  activeEpisode?: number;
  onDownload: (nid: number) => void;
  setShowAdOverlay: (show: boolean) => void;
  onPressToDownload: () => void,
}
function SelectDownloadComponent({
  vodId,
  isVip,
  source,
  screen,
  episodes,
  handleClose,
  rangeSize = 50,
  activeEpisode = 0,
  onDownload,
  setShowAdOverlay,
  onPressToDownload,
}: Props) {
  const { colors, textVariants, spacing } = useTheme();
  const EPISODE_RANGE_SIZE = rangeSize;
  const insets = useSafeAreaInsets();
  const itemPerRow = 5;
  const gapSize = 8;
  const windowWidth = screen === 'landscape' ? Dimensions.get('window').width / 2 : Dimensions.get('window').width;
  const width = windowWidth - 15 - spacing.sideOffset * 4;
  const height = Dimensions.get('window').height / 2 * (screen === 'landscape' ? 0.8 : 0.55);
  const childWidth = (width - gapSize) / itemPerRow;
  const [episodeHeight, setHeight] = useState(0);
  const [episodeWidth, setWidth] = useState(0);
  const navigation = useNavigation();
  const downloadVideoReducer: DownloadVideoReducerState = useAppSelector(
    ({ downloadVideoReducer }: RootState) => downloadVideoReducer
  );
  const [iosCustomToastIsVisible, setIosCustomToastIsVisible] = useState(false)
  const [iosCustomToastText, setIosCustomToastText] = useState(CLangKey.alreadyDownloadCheckMyDownload.tr())

  const debouncedSetIosCustomToastIsVisibleTrue = debounce(() => { setIosCustomToastIsVisible(true) }, 1000)

  const ranges = [
    ...Array(
      episodes?.url_count === undefined
        ? 0
        : Math.ceil(episodes.url_count / EPISODE_RANGE_SIZE)
    ).keys(),
  ].map(
    (x) =>
      `${x * EPISODE_RANGE_SIZE + 1}-${Math.min(
        (x + 1) * EPISODE_RANGE_SIZE,
        episodes?.url_count === undefined
          ? (x + 1) * EPISODE_RANGE_SIZE - 1
          : episodes?.url_count
      )}`
  );

  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(activeEpisode / EPISODE_RANGE_SIZE)
  );
  const showEpisodeRangeStart = useMemo(
    () => currentIndex * EPISODE_RANGE_SIZE,
    [activeEpisode, currentIndex]
  );

  const showEpisodeRangeEnd = useMemo(
    () =>
      Math.min(
        showEpisodeRangeStart + EPISODE_RANGE_SIZE,
        episodes
          ? episodes.url_count
          : showEpisodeRangeStart + EPISODE_RANGE_SIZE
      ),
    [episodes, showEpisodeRangeStart]
  );

  const displayEpisodes = useMemo(() => {
    const eps = episodes?.urls?.slice(
      showEpisodeRangeStart,
      showEpisodeRangeEnd
    );

    return eps;
  }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes]);

  const handleContainerLayout = (e) => {
    const epHeight = e.nativeEvent.layout.height;
    const epWidth = e.nativeEvent.layout.width;
    setHeight(epHeight);
    setWidth(epWidth);
  }

  const displayEpisodesWithStatus = useMemo(() => {
    const vodInfo = downloadVideoReducer.downloads.find(
      (download) => download.vod.vod_id === vodId
    );

    if (!vodInfo) {
      return displayEpisodes as VodEpisodeStatusType[]
    }

    return displayEpisodes?.map((ep) => {
      const episodeInfo = vodInfo && !vodInfo.vodIsAdult ?
        vodInfo.episodes.find(
          (episode) => episode.vodUrlNid === ep.nid && episode.vodSourceId === source
        )
        :
        vodInfo.episodes.find(
          (episode) => episode.vodUrlNid === ep.nid
        )

      if (vodInfo && episodeInfo) {
        const isDownloading = episodeInfo.status === DownloadStatus.DOWNLOADING;
        const isDownloaded = episodeInfo.status === DownloadStatus.COMPLETED;

        return {
          ...ep,
          isDownloading: !!isDownloading,
          isDownloaded: !!isDownloaded,
          progress: episodeInfo.progress,
        } as VodEpisodeStatusType;
      }

      return {
        ...ep,
        isDownloading: false,
        isDownloaded: false,
        progress: { percentage: 0, bytes: 0 }
      } as VodEpisodeStatusType;
    });
  }, [displayEpisodes, downloadVideoReducer.downloads, vodId]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [vodId]);

  const renderItem = useCallback(({ item, index }: { item: string; index: number }) => {
    return (
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setCurrentIndex(index)}
      >
        <Text
          style={{
            textAlign: "center",
            ...textVariants.header,
            color: index === currentIndex ? colors.primary : colors.muted,
            fontSize: index === currentIndex ? 18 : 15,
          }}
        >
          {`${item}${CLangKey.episodes.tr()}`}
        </Text>
      </TouchableOpacity>
    );
  }, [ranges])

  useEffect(() => {
    if (iosCustomToastIsVisible) {
      setTimeout(() => {
        setIosCustomToastIsVisible(false)
      }, 2000);
    }
  }, [iosCustomToastIsVisible])

  return (
    <>
      {iosCustomToastIsVisible && screen === 'landscape' && Platform.OS === 'ios' && <View style={{
        opacity: 0.8,
        backgroundColor: 'black',
        position: 'absolute',
        top: '50%',
        left: '-50%',
        padding: 8,
        borderRadius: 4
      }}>
        <Text style={{ color: 'white', fontSize: 16 }}>
          {iosCustomToastText}
        </Text>
      </View>}
      {/* {screen === 'potrait' && (
        <View
          style={{
            ...styles.header, marginHorizontal: 30,
          }}>
          <Text
            style={[
              styles.title,
              textVariants.header
            ]}>
            {CLangKey.download.tr()}
          </Text>
        </View>
      )} */}

      <FlatList
        horizontal
        data={ranges}
        renderItem={renderItem}
      />

      {displayEpisodesWithStatus && (
        <>
          <ScrollView
            style={{
              height: height,
              marginBottom: 15,
              marginHorizontal: spacing.sideOffset,
            }}
            contentContainerStyle={{
              ...styles.episodeList,
              paddingTop: 10,
              paddingBottom: insets.bottom,
              paddingHorizontal: 5,
            }}
            nestedScrollEnabled={true}
          >
            {displayEpisodesWithStatus?.map((ep, idx) => (
              <TouchableOpacity
                key={`expand-${idx}`}
                onPress={() => {
                  if (!isVip) {
                    handleClose();
                    setShowAdOverlay(true);
                  } else {
                    if (downloadVideoReducer.queue.length + downloadVideoReducer.currentDownloading.length >= DOWNLOAD_FEATURE_MAX_QUEUE) {
                      setIosCustomToastText(CLangKey.maximumOnlyDownloadXVideo.tr({ x: DOWNLOAD_FEATURE_MAX_QUEUE }))
                      if (screen === 'landscape' && Platform.OS === 'ios') debouncedSetIosCustomToastIsVisibleTrue() // if ios landscape, dont show toast 
                      else CPopup.showToast(CLangKey.maximumOnlyDownloadXVideo.tr({ x: DOWNLOAD_FEATURE_MAX_QUEUE }))
                    } else {
                      setIosCustomToastText(CLangKey.alreadyDownloadCheckMyDownload.tr())
                      onDownload(ep.nid);
                      // Toast.info({
                      //   content: <Text style={{color: 'white', top:-100, backgroundColor: '#00000080', padding: 5}}>{CLangKey.alreadyDownloadCheckMyDownload.tr()}</Text>, 
                      //   duration: 1, 
                      //   mask: false
                      // })
                      if (screen === 'landscape' && Platform.OS === 'ios') debouncedSetIosCustomToastIsVisibleTrue() // if ios landscape, dont show toast 
                      else throttledToast(CLangKey.alreadyDownloadCheckMyDownload.tr())
                    }
                  }
                }}
                disabled={ep.isDownloaded || ep.isDownloading}
              >
                <View
                  style={{
                    backgroundColor: colors.search,
                    padding: spacing.s,
                    minWidth: childWidth,
                    marginBottom: spacing.s,
                    borderRadius: 8,
                    position: "relative",
                  }}
                  onLayout={episodeHeight === 0 || episodeWidth === 0 ? handleContainerLayout : undefined}
                >
                  {ep.isDownloading && (
                    <Animated.View style={{
                      backgroundColor: ep.isDownloading ? colors.primary : colors.search,
                      position: "absolute",
                      bottom: 0,
                      height: ep.progress.percentage / 100 * episodeHeight,
                      width: episodeWidth,
                      borderRadius: 8,
                    }}>
                    </Animated.View>
                  )}

                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 13,
                      textAlign: "center",
                      fontWeight: "500",
                      color: colors.muted,
                    }}
                  >
                    {`${ep.name}`}
                  </Text>

                  {ep.isDownloading && (
                    <DlIcon
                      style={{
                        position: "absolute",
                        right: -8,
                        top: -5
                      }}
                    />
                  )}

                  {ep.isDownloaded && (
                    <View style={{
                      ...styles.legend,
                      backgroundColor: colors.primary + '29',
                      borderTopRightRadius: 8,
                      borderBottomLeftRadius: 8
                    }}>
                      <FinishIcon
                        width={10}
                        height={10}
                        color={colors.success}
                      />
                    </View>
                  )}

                  {!isVip && !ep.isDownloaded && (
                    <View style={{ ...styles.legend }}>
                      <VipIcon
                        color={colors.yellow}
                        width={14}
                        height={14}
                      />
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {isVip ? (
            <TouchableOpacity
              style={{
                backgroundColor: colors.search,
                marginHorizontal: spacing.sideOffset + 5,
                padding: spacing.s,
                borderRadius: 8,
                flexDirection: "row",
                justifyContent: "center",
                gap: 5,
                marginBottom: insets.bottom,
              }}
              onPress={() => {
                onPressToDownload();
              }}
            >
              <DownloadIcon width={24} height={24} />
              <Text
                style={{
                  ...styles.title,
                  ...textVariants.header,
                  fontSize: 15,
                  color: colors.muted,
                  paddingBottom: 3,
                }}
              >
                {CLangKey.myDownload.tr()}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: colors.yellow,
                marginHorizontal: spacing.sideOffset + 5,
                padding: spacing.s,
                borderRadius: 8,
                marginBottom: insets.bottom,
              }}
              onPress={() => {
                handleClose();
                setShowAdOverlay(true);
              }}
            >
              <Text
                style={{
                  ...styles.title,
                  ...textVariants.header,
                  fontSize: 15,
                  color: !isVip ? colors.selected : colors.muted,
                }}
              >
                {CLangKey.downloadOnlyForVip.tr()}
              </Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </>
  );
}

export default memo(SelectDownloadComponent);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  title: {
    alignSelf: 'center',
    textAlign: "center",
  },
  episodeList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 10,
    marginBottom: 14,
  },
  legend: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingVertical: 3,
    paddingHorizontal: 6,
    overflow: 'hidden'
  },
  btn: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
});
