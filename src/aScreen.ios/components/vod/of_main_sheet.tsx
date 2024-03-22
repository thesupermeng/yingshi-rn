import React, { useCallback, useEffect, useState } from "react";
import { View, FlatList, Text, StyleSheet, Linking } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";

import { XVSScoreDark } from "@type/wpk_long";
import { useAppDispatch } from "@hooks/kg_index";
import FavoriteVodCard from "./tw_agreement_description";
import { playVod } from "@redux/actions/xif_layout";

interface XFillButton {
  vodList: Array<XVSScoreDark>;
  onClickSearchResult?: () => void;
  onClickCatalogVideo?: () => void;
}

type MEYMode = {
  item: XVSScoreDark;
  index: number;
};

export default ({
  vodList,
  onClickSearchResult,
  onClickCatalogVideo,
}: XFillButton) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const { spacing, textVariants, colors } = useTheme();

  const renderItem = useCallback(
    
    ({ item, index }: MEYMode) => (
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
};

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