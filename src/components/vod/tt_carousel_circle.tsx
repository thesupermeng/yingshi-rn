import React, { useCallback, useEffect, useState, memo } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";

import { ttAppsOther } from "@type/tt_line_borderless";
import { useAppDispatch } from "@hooks/tt_spec_download";
import FavoriteVodCard from "./tt_internet";
import { playVod } from "@redux/actions/tt_activity";

interface ttSmall {
  vodList: Array<ttAppsOther>;
  onClickSearchResult?: () => void;
  onClickCatalogVideo?: () => void;
}

type ttBing = {
  item: ttAppsOther;
  index: number;
};

function VodWithDescriptionList({
  vodList,
  onClickSearchResult,
  onClickCatalogVideo,
}: ttSmall) {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const { spacing, textVariants, colors } = useTheme();

  const renderItem = useCallback(
    
    ({ item, index }: ttBing) => (
      <FavoriteVodCard
        hideFavoriteButton={true}
        vod={item}
        onPress={() => {
          dispatch(playVod(item));
          navigation.navigate("播放", { vod_id: item.vod_id });

          if (onClickSearchResult !== undefined) onClickSearchResult();
          if (onClickCatalogVideo !== undefined) onClickCatalogVideo();
        }}
        index={index}
        vod_pic_list={item?.vod_pic_list}
      />
    ),
    []
  );

  if (vodList.length > 0) {
    
    return (
      <View>
        <FlatList
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
          keyExtractor={(item, index) => index.toString()} 
          initialNumToRender={5} 
          removeClippedSubviews={true} 
        />
      </View>
    );
  } else {
    
    return <></>;
  }
}

export default memo(VodWithDescriptionList);

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