import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ScreenContainer from "../../components/container/screenContainer";
import { useTheme, useFocusEffect } from "@react-navigation/native";

import { RootStackScreenProps } from "../../types/navigationTypes";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";

import { Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// import FastImage from 'react-native-fast-image';
import FastImage from "../../components/common/customFastImage";
import VodLiveStationListVertical from "../../components/vod/vodLiveStationListVertical";
import VodPlayer from "../../components/videoPlayer/vodPlayer";
import { SettingsReducerState } from "@redux/reducers/settingsReducer";
import { RootState } from "@redux/store";
import { lockAppOrientation } from "@redux/actions/settingsActions";
import useInterstitialAds from "../../hooks/useInterstitialAds";
import { screenModel } from "../../types/screenType";
import { disableAdultMode } from "@redux/actions/screenAction";

let insetsTop = 0;
let insetsBottom = 0;

export default ({ navigation, route }: RootStackScreenProps<"电视台播放">) => {
  const { liveStationItemList, liveStationItem } = route.params;
  const insets = useSafeAreaInsets();

  const { colors, spacing, textVariants, icons } = useTheme();
  const dispatch = useAppDispatch();

  const [dismountPlayer, setDismountPlayer] = useState(false);

  const settingsReducer: SettingsReducerState = useAppSelector(
    ({ settingsReducer }: RootState) => settingsReducer
  );

  const outerRowPadding = 0;
  const minNumPerRow = 2;
  const heightToWidthRatio = 0.7;

  const windowDim =
    Dimensions.get("window").width -
    insets.left -
    insets.right -
    outerRowPadding -
    2 * spacing.sideOffset; // usable space
  const minWidth = windowDim / minNumPerRow - 8;
  const cardWidth = Math.min(210, Math.floor(minWidth));
  const cardHeight = heightToWidthRatio * cardWidth;
  const CARDS_PER_ROW = Math.floor(windowDim / cardWidth);
  const BTN_MARGIN_RIGHT =
    (windowDim - CARDS_PER_ROW * cardWidth) / (CARDS_PER_ROW - 1);

  useFocusEffect(
    useCallback(() => {
      return () => {
        setDismountPlayer(true);
        // Orientation.unlockAllOrientations();
      };
    }, [])
  );

  const lockOrientation = (orientation: string) => {
    dispatch(lockAppOrientation(orientation));
  };
  useInterstitialAds();

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: RootState) => screenReducer
  );

  useEffect(() => {
    dispatch(disableAdultMode())
  }, [])

  insetsTop = insetsTop == 0 ? insets.top : insetsTop;
  insetsBottom = insetsBottom == 0 ? insets.bottom : insets.bottom;

  return (
    // <ScreenContainer
    //   isPlay={true}
    //   containerStyle={{
    //     flex: 1,
    //     paddingTop: screenState.isPlayerFullScreen ? 0 : insetsTop,
    //     paddingBottom: screenState.isPlayerFullScreen ? 0 : insetsBottom,
    //   }}
    // >

    <ScreenContainer
      isPlay={true}
      containerStyle={{
        flex: 1,
        paddingRight: 0,
        paddingLeft: 0,
        paddingTop: screenState.isPlayerFullScreen ? 0 : insetsTop,
        paddingBottom: screenState.isPlayerFullScreen ? 0 : insetsBottom,
      }}
    >
      {liveStationItem !== undefined && !dismountPlayer && (
        <VodPlayer
          vod_url={liveStationItem.live_station_url}
          vodTitle={liveStationItem.live_station_name}
          videoType={"live"}
          streams={liveStationItemList}
          showMoreType="streams"
          appOrientation={settingsReducer.appOrientation}
          devicesOrientation={settingsReducer.devicesOrientation}
          lockOrientation={lockOrientation}
        />
      )}
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={{ marginTop: spacing.m }}
        contentInsetAdjustmentBehavior="automatic"
      >
        <View
          style={{
            ...styles.descriptionContainer,
            gap: spacing.m,
            paddingLeft: 12,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              height: 100,
              margin: 5,
            }}
          >
            <View style={{ flex: 4 }}>
              <FastImage
                source={{ uri: liveStationItem.live_station_img_url }}
                resizeMode={"cover"}
                style={{ ...styles.descriptionImage, ...styles.imageContainer }}
              />
            </View>
            <View style={{ flex: 7, paddingLeft: 10, paddingTop: 10 }}>
              <Text
                numberOfLines={1}
                style={{
                  ...textVariants.header,
                  color: colors.text,
                  flex: 1,
                }}
              >
                {liveStationItem.live_station_name}
              </Text>
            </View>
          </View>
        </View>

        <Text
          numberOfLines={1}
          style={{
            ...textVariants.header,
            color: colors.text,
            flex: 1,
            padding: 12,
          }}
        >
          相关电视台
        </Text>
        <View
          style={{
            ...styles.descriptionContainer,
            paddingHorizontal: 15,
            marginBottom: 60,
          }}
        >
          <VodLiveStationListVertical
            itemList={liveStationItemList}
            selectedItem={liveStationItem}
            numOfRows={100}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    flex: 1,
  },
  liveStationCardListContainer: {
    display: "flex",
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  videoHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    zIndex: 50,
  },
  videoDescription: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginBottom: 10,
  },
  imageContainer: {},
  descriptionImage: {
    width: "100%",
    aspectRatio: 130 / 75,
    borderRadius: 10,
    resizeMode: "cover",
  },
  // descriptionContainer: {
  //     flex: 5,
  //     flexDirection: 'column',
  //     justifyContent: 'space-evenly',
  //     paddingLeft: 10
  // },
  descriptionContainerText: {
    fontSize: 17,
  },
  descriptionContainer2: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  descriptionContainer2Text: {
    color: "#9C9C9C",
    fontSize: 14,
  },
  share: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  spaceApart: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  episodeBtn: {
    borderRadius: 8,
  },
  episodeList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
});
