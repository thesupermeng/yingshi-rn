import React, { useCallback, useEffect, useState } from "react";
import { View, FlatList, Text, StyleSheet, Linking } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";

import { mayi_EmptyGradle } from "@type/mayi_green";
import { useAppDispatch } from "@hooks/mayi_redirect";
import FavoriteVodCard from "./mayi_brightness_form";
import { playVod } from "@redux/actions/mayi_goallogo";

interface mayi_GoogleViews {
  vodList: Array<mayi_EmptyGradle>;
  onClickSearchResult?: () => void;
  onClickCatalogVideo?: () => void;
}

type mayi_EventLibnms = {
  item: mayi_EmptyGradle;
  index: number;
};

export default ({
  vodList,
  onClickSearchResult,
  onClickCatalogVideo,
}: mayi_GoogleViews) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const { spacing, textVariants, colors } = useTheme();

  const renderItem = useCallback(
    
    ({ item, index }: mayi_EventLibnms) => (
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
