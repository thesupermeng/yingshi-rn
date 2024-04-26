import React, { useCallback, useEffect, useState, memo, useRef } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";

import { wwControl } from "@type/ww_dycreator_result";
import { useAppDispatch } from "@hooks/ww_catagory_neon";
import FavoriteVodCard from "./ww_gifgoal";
import { playVod } from "@redux/actions/ww_floater";

interface wwIndexDice {
  vodList: Array<wwControl>;
  onClickSearchResult?: () => void;
  onClickCatalogVideo?: () => void;
}

type wwCasting = {
  item: wwControl;
  index: number;
};

function vodWithDescriptionListRank({
  vodList,
  onClickSearchResult,
  onClickCatalogVideo,
}: wwIndexDice) {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const { spacing, textVariants, colors } = useTheme();
  const flatListRef = useRef<FlatList>(null);

  const renderItem = useCallback(
    ({ item, index }: wwCasting) => (
      <View style={{ flexDirection: "row", justifyContent: "center", paddingLeft: 20 }}>
        <View style={{ width: 40, justifyContent: 'center' }}>
          <Text style={{
            paddingLeft: 10,
            fontSize: 26,
            fontWeight: '700',
            color: index === 0 ? '#FF5C00' :
              index === 1 ? '#FF8A00' :
                index === 2 ? '#FFB800' :
                  index === 3 ? '#9C9C9C' : '#9C9C9C'
          }}> {index + 1}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <FavoriteVodCard
            hideFavoriteButton={true}
            vod={item}
            onPress={() => {
              dispatch(playVod(item));
              navigation.navigate("播放IOS", { vod_id: item.vod_id });

              if (onClickSearchResult !== undefined) onClickSearchResult();
              if (onClickCatalogVideo !== undefined) onClickCatalogVideo();
            }}
            index={index}
            vod_pic_list={item?.vod_pic_list}
          />
        </View>
      </View>
    ),
    []
  );

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: 0, animated: true });
    }
  }, [vodList]);

  if (vodList.length > 0) {
    return (
      <View>
        <FlatList
          ref={flatListRef}
          data={vodList}
          contentContainerStyle={{ paddingBottom: 30 }}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <View style={{ ...styles.loading, marginBottom: 30 }}>
              <Text
                style={{
                  ...textVariants.subBody,
                  color: colors.muted,
                  paddingTop: 12,
                  paddingBottom: 20,
                }}
              >
                没有更多了
              </Text>
            </View>
          }
          keyExtractor={(item, index) => item?.vod_name}
          initialNumToRender={5}
          removeClippedSubviews={true}
        />
      </View>
    );
  } else {
    return <></>;
  }
}

export default memo(vodWithDescriptionListRank);

const styles = StyleSheet.create({
  noMore: {
    textAlign: "center",
    marginTop: 30,
  },
  loading: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
});
