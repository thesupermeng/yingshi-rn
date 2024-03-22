import React, { useCallback, useEffect, useState, memo } from "react";
import { StyleSheet, View, Text, RefreshControl, FlatList } from "react-native";
import ScreenContainer from "../../components/container/mayi_save";
import MainHeader from "../../components/header/mayi_iconwatch_other_header";

import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import Topic from "./mayi_football_iconclosewhitebg";
import Rank from "./mayi_corner_mbnative";
import MainCollectionHeaderPlaylist from "../../../components/header/mayi_frame_member";
import { useTheme } from "@react-navigation/native";

function Playlist({ navigation }: BottomTabScreenProps<any>) {
  const [selectedTab, setSelectedTab] = useState("专题"); 

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
