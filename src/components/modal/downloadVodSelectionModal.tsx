import React, { useState, useMemo, memo, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { VodEpisodeListType } from "@type/ajaxTypes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SortAscIcon from "@static/images/sortAsc.svg";
import SortDescIcon from "@static/images/sortDesc.svg";
import BottomSheet from "../bottomSheet/bottomSheet";
import { VodRecordType } from "@redux/reducers/vodReducer";
import VipIcon from "@static/images/vip-icon.svg";

interface Props {
  onConfirm: any;
  onCancel: any;
  episodes?: VodEpisodeListType;
  activeEpisode?: number;
  rangeSize?: number;
  isVisible: boolean;
  handleClose: any;
  vodId?: number;
  isVip: boolean;
}
function DownloadVodSelectionModal({
  onConfirm,
  onCancel,
  episodes,
  isVisible,
  handleClose,
  activeEpisode = 0,
  rangeSize = 50,
  vodId,
  isVip
}: Props) {
  const { colors, textVariants, spacing } = useTheme();
  const EPISODE_RANGE_SIZE = rangeSize;
  const insets = useSafeAreaInsets();
  const itemPerRow = 5;
  const gapSize = 8;
  const width = Dimensions.get('window').width - 10 - spacing.sideOffset * 4;
  const height = Dimensions.get('window').height * 0.32;
  const childWidth = (width - gapSize) / itemPerRow;

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
        borderWidth: 1,
        borderColor: 'white',
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
        <TouchableOpacity style={styles.selAllBtn}>
          <Text
            style={{
              ...textVariants.header,
              color: colors.muted,
              fontSize: 15,
            }}
          >
            全选
          </Text>
        </TouchableOpacity>
      </View>

      {displayEpisodes && isVisible && (
        <>
          <ScrollView
            style={{
              flexGrow: 0,
              overflow: 'hidden',
              height: height,
              marginBottom: 10,
              marginHorizontal: 5,
            }}
            contentContainerStyle={{
              ...styles.episodeList,
              paddingBottom: insets.bottom,
              marginHorizontal: spacing.sideOffset,
              overflow: 'hidden'
            }}
          >
            {displayEpisodes?.map((ep, idx) => (
              <TouchableOpacity
                key={`expand-${idx}`}
                onPress={() => {
                  onConfirm(ep.nid);
                  onCancel();
                }}
              >
                <View
                  style={{
                    backgroundColor:
                      ep.nid === activeEpisode ? colors.primary : colors.search,
                    padding: spacing.s,
                    width: childWidth,
                    marginBottom: spacing.s,
                    borderRadius: 8,
                  }}
                >
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 13,
                      textAlign: "center",
                      fontWeight: "500",
                      color:
                        ep.nid === activeEpisode ? colors.selected : colors.muted,
                    }}
                  >
                    {`${ep.name}`}
                  </Text>
                  {!isVip && (
                    <View style={{ ...styles.legend }}>
                      <VipIcon
                        width={14}
                        height={14}
                      />
                    </View>
                  )
                  }
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {!isVip ? (
            <View style={{
              marginHorizontal: spacing.sideOffset,
              paddingHorizontal: 5,
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              gap: 15,
            }}>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.search,
                  padding: spacing.s,
                  borderRadius: 8,
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    ...styles.title,
                    ...textVariants.header,
                    fontSize: 15,
                    color: colors.muted,
                  }}
                >
                  全选
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.search,
                  padding: spacing.s,
                  borderRadius: 8,
                  flex: 1
                }}
              >
                <Text
                  style={{
                    ...styles.title,
                    ...textVariants.header,
                    fontSize: 15,
                    color: colors.muted,
                  }}
                >
                  我的下载
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: !isVip ? colors.primary : colors.search,
                marginHorizontal: spacing.sideOffset + 5,
                padding: spacing.s,
                borderRadius: 8,
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
    marginBottom: 14,
  },
  title: {
    alignSelf: 'center',
    textAlign: "center",
  },
  episodeList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 9,
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
    paddingVertical: 2,
    paddingHorizontal: 5,
    overflow: 'hidden'
  },
});
