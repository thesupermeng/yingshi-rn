import React, { useCallback, useEffect, useState, memo } from "react";
import {
  StyleSheet,
  View,
  Text,
  RefreshControl,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useQueryClient } from "@tanstack/react-query";
import ScreenContainer from "../../components/container/screenContainer";
import MainHeader from "../../components/header/homeHeader";
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from "@react-navigation/native";
import { useInfiniteQuery } from "@tanstack/react-query";
import { VodPlayListType, VodTopicType } from "@type/ajaxTypes";
import VodPlaylist from "../../components/playlist/vodPlaylist";
import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { API_DOMAIN } from "@utility/constants";
// import FastImage from 'react-native-fast-image';
import FastImage from "../../components/common/customFastImage";
import { useIsFocused } from "@react-navigation/native";
// import {FlatList, PanGestureHandler} from 'react-native-gesture-handler';
import NoConnection from "./../../components/common/noConnection";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { SettingsReducerState } from "@redux/reducers/settingsReducer";
import { RootState } from "@redux/store";
import { useAppSelector } from "@hooks/hooks";
import UmengAnalytics from "../../../../Umeng/UmengAnalytics";
import { PlaylistApi } from "@api";
import VodWithDescriptionList from "../../../components/vod/vodWithDescriptionList";

type FlatListType = {
  item: any;
  index: number;
};

function Rank() {
  const navigation = useNavigation();
  const { textVariants, colors, spacing } = useTheme();
  const LIMIT_PER_PAGE = 10;

  const [totalPage, setTotalPage] = useState(0);

  const isFocused = useIsFocused();
  const [isOffline, setIsOffline] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [selectedRankIndex, setSelectedRankIndex] = useState(0);
  const [rankVodList, setRankVodList] = useState([]);

  const [tabList, setTabList] = useState([]);
  const settingsReducer: SettingsReducerState = useAppSelector(
    ({ settingsReducer }: RootState) => settingsReducer
  );

  // ========== for analytics - start ==========
  useFocusEffect(
    useCallback(() => {
      console.log("rank");
      UmengAnalytics.playlistViewsAnalytics();
    }, [])
  );
  // ========== for analytics - end ==========

  // Function to handle the refresh action
  const handleTabPress = () => {
    if (isFocused) {
      handleRefresh();
    }
  };

  const checkConnection = useCallback(async () => {
    const state = await NetInfo.fetch();
    const offline = !(state.isConnected && state.isInternetReachable);
    setIsOffline(offline);
    if (!offline) {
      handleRefresh();
    }
  }, []);

  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
    console.log("rank ");
    handleRefresh();
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (
        !settingsReducer.isOffline &&
        settingsReducer.isOffline !== isOffline
      ) {
        setIsOffline(settingsReducer.isOffline);
        handleRefresh();
      } else if (settingsReducer.isOffline) {
        return () => {
          setIsOffline(settingsReducer.isOffline);
        };
      }
    }, [settingsReducer.isOffline])
  );

  // Add an event listener to the navigation object for the tab press event
  useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", handleTabPress);

    // Clean up the event listener when the component unmounts
    return () => unsubscribe();
  }, [navigation, isFocused]);

  const fetchPlaylist = useCallback(
    (page: number) =>
      PlaylistApi.getTopicIosRank().then((json: VodPlayListType) => {
        setTotalPage(Number(json.TotalPageCount));
        return Object.values(json);
      }),
    []
  );

  const {
    data: playlists,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery(
    ["vodPlaylist"],
    ({ pageParam = 1 }) => fetchPlaylist(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage === null) {
          return undefined;
        }
        const nextPage = allPages.length + 1;
        //if reach end
        if (nextPage > totalPage && totalPage != 0) {
          return undefined;
        }
        return nextPage;
      },
      onSettled: (data, error) => {
        if (isRefreshing && data && !error) {
          setIsRefreshing(false);
          console.log("got data");
          console.log(data);

          setTabList(data?.pages?.flat());
          setSelectedRankIndex(0);
        }

        if (isSwipeRefreshing && data && !error) {
          setIsSwipeRefreshing(false);
        }
      },
      // onSuccess: (data) => {
      //     if (data && data?.pages) {
      //         setResults([...results, ...data.pages[data.pages.length - 1].flat()])
      //     }
      // }
    }
  );

  const renderItem = ({ item }: FlatListType) => (
    <VodPlaylist playlist={item} titleStyle={{ color: colors.text }} />
  );

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isSwipeRefreshing, setIsSwipeRefreshing] = useState(false);
  const queryClient = useQueryClient();
  // Function to reset variables and refresh data

  const handleRefresh = useCallback(async (isSwipe: boolean = false) => {
    if (isSwipe) {
      setIsSwipeRefreshing(true);
    } else {
      setIsRefreshing(true);
    }
    // Reset your variables here (e.g., setTotalPage(0))
    // You may also need to reset other states related to data fetching.

    // Reset the playlists by clearing the cache and refetching data
    await queryClient.resetQueries(["vodPlaylist"]); // Pass the query key as an array of strings

    // return setIsRefreshing(false);
  }, []);

  useEffect(() => {
    // Trigger loading spinner when the component mounts
    // setIsLoading(true);
    setIsRefreshing(true);

    // Fetch data or perform actions here
    // For example:
    // fetchPlaylistData();

    // For now, let's simulate a delay to mimic data loading
    setTimeout(() => {
      // Once the simulated data fetching/loading is complete, set isLoading to false
      // setIsLoading(false);
      setIsRefreshing(false);
    }, 2000); // Adjust the delay time according to your data fetching logic
  }, []);

  useEffect(() => {
    console.log("selectedRankIndex");

    console.log("setRankVodList");
    console.log(playlists?.pages[0][selectedRankIndex]?.list);
    setRankVodList(playlists?.pages[0][selectedRankIndex]?.list);
  }, [selectedRankIndex]);

  return (
    <>
      {isRefreshing && !isOffline && (
        <View
          style={{
            ...styles.loading,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {
            <FastImage
              style={{ height: 80, width: 80 }}
              source={require("@static/images/loading-spinner.gif")}
              resizeMode={"contain"}
            />
          }
        </View>
      )}
      {!isOffline && (
        <>
          {/*top tab */}
          <View style={{ flexDirection: "row", gap: 10, paddingLeft: 20 }}>
            {tabList.map((tab, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  setSelectedRankIndex(i);
                }}
                style={{
                  backgroundColor: "#000000",
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: "#9C9C9C" }}>{tab?.type}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* end  top tab */}

          {rankVodList.length > 0 && (
            <VodWithDescriptionList
              vodList={rankVodList}
              onClickCatalogVideo={() => {}}
            />
          )}

          {/* <FlatList
              showsVerticalScrollIndicator={false}
              data={playlists?.pages[selectedRankIndex]?.list}
              onEndReached={() => {
                if (hasNextPage) {
                  fetchNextPage();
                }
              }}
              onEndReachedThreshold={0.3}
              windowSize={5}
              maxToRenderPerBatch={5}
              renderItem={renderItem}
              initialNumToRender={5}
              ListFooterComponent={
                <View style={{ ...styles.loading, marginBottom: spacing.xl }}>
                  {hasNextPage && (
                    <FastImage
                      style={{ height: 80, width: 80 }}
                      source={require('@static/images/loading-spinner.gif')}
                      resizeMode={"contain"}
                    />
                  )}
                  {!(isFetchingNextPage || isFetching) && !hasNextPage && (
                    <Text style={{ ...textVariants.body, color: colors.muted }}>
                      没有更多了
                    </Text>
                  )}
                </View>
              }
              refreshControl={
                <RefreshControl
                  refreshing={isSwipeRefreshing}
                  onRefresh={() => handleRefresh(true)}
                  tintColor="#FAC33D" // Customize the color of the loading spinner
                />
              }
            /> */}
        </>
      )}

      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </>
  );
}

export default memo(Rank);

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
