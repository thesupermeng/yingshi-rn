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
import { VodEpisodeListType } from "@type";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SortAscSvg, SortDescSvg } from "@static";
import BottomSheet from "../bottomSheet/bottomSheet";
import { VodRecordType } from "@redux";

interface Props {
  onConfirm: any;
  onCancel: any;
  episodes?: VodEpisodeListType;
  activeEpisode?: number;
  rangeSize?: number;
  isVisible: boolean;
  handleClose: any;
  vodId?: number;
}
function VodEpisodeSelectionModal({
  onConfirm,
  onCancel,
  episodes,
  isVisible,
  handleClose,
  activeEpisode = 0,
  rangeSize = 50,
  vodId,
}: Props) {
  const { colors, textVariants, spacing } = useTheme();
  const EPISODE_RANGE_SIZE = rangeSize;
  const insets = useSafeAreaInsets();
  const [sortBy, setSortBy] = useState("asc");
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
    if (sortBy === "desc") {
      eps?.reverse();
    }
    return eps;
  }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy]);

  // set current index to 0 when vod changes
  // useEffect(() => {
  //   setCurrentIndex(0);
  // }, [episodes]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [vodId]);

  const sort = () => {
    if (sortBy === "asc") {
      setSortBy("desc");
    } else {
      setSortBy("asc");
    }
  };

  return (
    <BottomSheet
      isVisible={isVisible}
      onBackdropPress={handleClose}
      containerStyle={{
        paddingLeft: spacing.sideOffset,
        paddingRight: spacing.sideOffset,
        gap: spacing.m,
        alignItems: "center",
      }}
      height="50%"
    >
      <View style={styles.episodeList}>
        {/* <Text
          style={[
            styles.btn,
            textVariants.header
          ]}>
          {`${showEpisodeRangeStart+1}-${showEpisodeRangeEnd} 集`}
        </Text> */}
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
        <TouchableOpacity style={styles.sortBtn} onPress={sort}>
          <View style={{ paddingTop: 4 }}>
            {sortBy === "asc" ? <SortAscSvg /> : <SortDescSvg />}
          </View>
          <Text
            style={{
              textAlign: "center",
              ...textVariants.header,
              color: colors.muted,
              fontSize: 15,
            }}
          >
            顺序
          </Text>
        </TouchableOpacity>
      </View>
      {displayEpisodes && isVisible && (
        <ScrollView
          contentContainerStyle={{
            ...styles.episodeList,
            paddingBottom: insets.bottom,
            marginHorizontal: spacing.sideOffset,
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
                  minWidth: 60,
                  marginRight: "auto",
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
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </BottomSheet>
  );
}

export default memo(VodEpisodeSelectionModal);

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  text: {
    color: "white",
    textAlign: "center",
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
  episodeList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "flex-start",
    paddingLeft: 8,
    marginBottom: 14,
    paddingHorizontal: 20,
  },
  sortBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
