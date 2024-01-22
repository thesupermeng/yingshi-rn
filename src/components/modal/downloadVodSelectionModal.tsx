import React, { useState, useMemo, memo, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated,
  FlatList
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { VodEpisodeListType, VodEpisodeStatusType } from "@type/ajaxTypes";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import BottomSheet from "../bottomSheet/bottomSheet";
import DownloadIcon from '@static/images/download.svg'
import DlIcon from "@static/images/download_icon.svg";
import VipIcon from "@static/images/vip-icon.svg"
import FinishIcon from "@static/images/downloaded_icon.svg";
import { DownloadStatus, DownloadVideoReducerState } from "@type/vodDownloadTypes";
import { useAppSelector } from "@hooks/hooks";
import { RootState } from "@redux/store";
import { ProgressAnimation } from "../vod/progressAnimation";

interface Props {
  onDownload: (nid: number) => void;
  episodes?: VodEpisodeListType;
  activeEpisode?: number;
  rangeSize?: number;
  isVisible: boolean;
  handleClose: any;
  vodId?: number;
  isVip: boolean;
  setShowAdOverlay: (show: boolean) => void
}
function DownloadVodSelectionModal({
  onDownload,
  episodes,
  isVisible,
  handleClose,
  activeEpisode = 0,
  rangeSize = 50,
  vodId,
  isVip,
  setShowAdOverlay
}: Props) {
  const { colors, textVariants, spacing } = useTheme();
  const EPISODE_RANGE_SIZE = rangeSize;
  const insets = useSafeAreaInsets();
  const itemPerRow = 5;
  const gapSize = 8;
  const width = Dimensions.get('window').width - 15 - spacing.sideOffset * 4;
  const height = Dimensions.get('window').height * 0.3;
  const childWidth = (width - gapSize) / itemPerRow;
  const navigation = useNavigation();
  const downloadVideoReducer: DownloadVideoReducerState = useAppSelector(
    ({ downloadVideoReducer }: RootState) => downloadVideoReducer
  );

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

  const [episodeHeight, setHeight] = useState(0);
  const handleContainerLayout = (e) => {
    const height = e.nativeEvent.layout.height;
    setHeight(height);
  }

  const displayEpisodesWithStatus = useMemo(() => {
    const vodInfo = downloadVideoReducer.downloads.find(
      (download) => download.vod.vod_id === vodId
    );

    if (!vodInfo) {
      return displayEpisodes as VodEpisodeStatusType[]
    }

    return displayEpisodes?.map((ep) => {
      const episodeInfo = vodInfo && vodInfo.episodes.find(
        (episode) => episode.vodUrlNid === ep.nid
      );

      if (vodInfo && episodeInfo) {
        const isDownloading = episodeInfo.status === DownloadStatus.DOWNLOADING;
        const isDownloaded = episodeInfo.status === DownloadStatus.COMPLETED;
        // console.log(episodeInfo)
        // console.log(episodeHeight)

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

  return (
    <BottomSheet
      isVisible={isVisible}
      onBackdropPress={handleClose}
      containerStyle={{
        paddingLeft: spacing.sideOffset,
        paddingRight: spacing.sideOffset,
        gap: spacing.m,
        alignItems: "center"
      }}
      height="50%"
    >
      <View style={{
        ...styles.header, marginHorizontal: 30,
      }}>
        <Text
          style={[
            styles.title,
            textVariants.header
          ]}>
          下载
        </Text>
      </View>
      <FlatList
        horizontal
        data={ranges}
        renderItem={({ item, index }: { item: string; index: number }) => {
          return (
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setCurrentIndex(index)}
            >
              <Text
                style={{
                  textAlign: "center",
                  ...textVariants.header,
                  color: index === currentIndex ? colors.text : colors.muted,
                  fontSize: index === currentIndex ? 18 : 15,
                }}
              >
                {`${item}集`}
              </Text>
            </TouchableOpacity>
          );
        }}
      />

      {displayEpisodesWithStatus && isVisible && (
        <>
          <ScrollView
            style={{
              height: height,
              marginBottom: 20,
              marginHorizontal: spacing.sideOffset,
            }}
            contentContainerStyle={{
              ...styles.episodeList,
              paddingTop: 10,
              paddingBottom: insets.bottom,
              paddingHorizontal: 5,
            }}
          >
            {displayEpisodesWithStatus?.map((ep, idx) => (
              <TouchableOpacity
                key={`expand-${idx}`}
                onPress={() => {
                  onDownload(ep.nid);
                }}
                disabled={!isVip}
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
                  onLayout={episodeHeight === 0 ? handleContainerLayout : undefined}
                >
                  {/* Todo: add progress animation when is downloading */}
                  {ep.isDownloading && (
                    <Animated.View style={{
                      backgroundColor: ep.isDownloading ? '#FAC33D' : colors.search,
                      position: "absolute",
                      bottom: 0,
                      height: ep.progress.percentage / 100 * episodeHeight,
                      width: childWidth,
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
                      backgroundColor: '#FAC33D29',
                      borderTopRightRadius: 8,
                      borderBottomLeftRadius: 8
                    }}>
                      <FinishIcon
                        width={10}
                        height={10}
                      />
                    </View>
                  )}

                  {!isVip && !ep.isDownloaded && (
                    <View style={{ ...styles.legend }}>
                      <VipIcon
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
              }}
              onPress={() => navigation.navigate("我的下载")}
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
                我的下载
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: colors.primary,
                marginHorizontal: spacing.sideOffset + 5,
                padding: spacing.s,
                borderRadius: 8,
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
                下载功能仅对VIP会员开放
              </Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </BottomSheet>
  );
}

export default memo(DownloadVodSelectionModal);

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
  selAllBtn: {
    position: 'absolute',
    right: 0,
    alignSelf: 'center',
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
    paddingLeft: 10,
    paddingRight: 10,
  },
});
