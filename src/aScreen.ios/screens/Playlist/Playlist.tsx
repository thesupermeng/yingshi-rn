import React, { useCallback, useEffect, useState, memo } from "react";
import { StyleSheet, View, Text, RefreshControl, FlatList } from "react-native";
import ScreenContainer from "../../components/container/screenContainer";
import MainHeader from "../../components/header/homeHeader";

import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import Topic from "./Topic";
import Rank from "./Rank";
import MainCollectionHeaderPlaylist from "../../../components/header/mainCollectionHeaderPlaylist";
import { useTheme } from "@react-navigation/native";

function Playlist({ navigation }: BottomTabScreenProps<any>) {
  const [selectedTab, setSelectedTab] = useState("专题"); // 排行榜

  const { textVariants, colors, spacing } = useTheme();
  return (
    <>
      <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
        <MainHeader
          headerStyle={{
            paddingLeft: spacing.sideOffset,
            paddingRight: spacing.sideOffset,
          }}
          logo={
            <Text
              style={{
                ...textVariants.bigHeader,
                color: colors.text,
                fontSize: 22,
              }}
            >
              发现
            </Text>
          }
          navigator={navigation}
        />

        <MainCollectionHeaderPlaylist
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        {selectedTab == "专题" && <Topic />}

        {selectedTab == "排行榜" && 
        <Rank />}
      </ScreenContainer>
    </>
  );
}

export default memo(Playlist);

const styles = StyleSheet.create({
  header: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  loading: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
});
