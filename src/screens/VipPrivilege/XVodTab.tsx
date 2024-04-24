import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";

import { API_DOMAIN } from "@utility/constants";
import { VodData, XVodData } from "@type/ajaxTypes";
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';

import { acceptOverEighteen, setManualShowPopAds } from "@redux/actions/screenAction";
import EighteenPlusOverlay from "../../components/modal/overEighteenOverlay";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/hooks";
import ShowMoreVodButton from "../../components/button/showMoreVodButton";
import VodListVerticalVip from "./vodListVerticalVip";
import FastImage from "../../components/common/customFastImage";
import { AppsApi } from "@api";
import { User } from "@models/user";
import { UserStateType } from "@redux/reducers/userReducer";
interface Props {
  handleRejectEighteenPlus: any;
}

export default function XVodTab({
  handleRejectEighteenPlus = () => { },
}: Props) {
  const { colors, textVariants, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [showLoading, setShowLoading] = useState(false);
  const userState = useSelector<UserStateType>('userReducer');
  const isVip = User.fakeIsVip(userState.user);
  const [totalPage, setTotalPage] = useState(1);
  const [results, setResults] = useState<Array<XVodData>>([]);

  // const listItem = useCallback(
  //   ({ item, index }: { item: VodData; index: number }) => {
  //     if ((item?.vod_list?.length ?? 0) === 0) return <></>;

  //     return (
  //       <View
  //         key={`${item.type_name}-${index}`}
  //         style={{
  //           gap: spacing.m,
  //           paddingLeft: spacing.sideOffset,
  //           paddingRight: spacing.sideOffset,
  //           backgroundColor: "#0c0c0c",
  //           borderRadius: 15,
  //           marginBottom: 15,
  //           paddingTop: 4,
  //           paddingBottom: 4,
  //         }}
  //       >
  //         <ShowMoreVodButton
  //           text={item.type_name.trim()}
  //           onPress={() => {
  //             navigation.navigate("午夜场剧情", {
  //               class: item.vod_list[0].vod_class,
  //             });
  //           }}
  //         />
  //         {
  //           is 午夜场剧情
  //           item?.vod_list && (
  //             <VodListVerticalVip
  //               numOfRows={2}
  //               vods={item?.vod_list}
  //               minNumPerRow={2}
  //               heightToWidthRatio={1 / 1.814}
  //               playerMode="adult"
  //             />
  //           )
  //         }
  //       </View>
  //     );
  //   },
  //   []
  // );

  //without use callback  
  function listItem({ item, index }) {
    if ((item?.vod_list?.length ?? 0) === 0) return <></>;

    return (
      <View
        key={`${item.type_name}-${index}`}
        style={{
          gap: spacing.m,
          paddingLeft: spacing.sideOffset,
          paddingRight: spacing.sideOffset,
          backgroundColor: "#0c0c0c",
          borderRadius: 15,
          marginBottom: 15,
          paddingTop: 4,
          paddingBottom: 4,
        }}
      >
        <ShowMoreVodButton
          text={item.type_name.trim()}
          onPress={() => {
            navigation.navigate("午夜场剧情", {
              class: item.type_name,
              vod_source_name: item.vod_source_name
            });
          }}
        />
        {
          item?.vod_list && (
            <VodListVerticalVip
              numOfRows={2}
              vods={item?.vod_list}
              minNumPerRow={2}
              heightToWidthRatio={1 / 1.814}
              playerMode="adult"
            />
          )
        }
      </View>
    );
  }

  const fetchXCategories = (page: number) =>
    AppsApi.getXVodList(page).then((results: Array<XVodData>) => {
      setTotalPage(9);
      console.log("HEH");
      return Object.values(results);
    });

  const {
    data: xData,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    refetch,
  } = useInfiniteQuery(
    ['xvodPlayList'],
    ({ pageParam = 1 }) => fetchXCategories(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage === null) {
          return undefined;
        }
        const nextPage: any = allPages.length + 1;
        //if reach end
        if (nextPage > totalPage && totalPage != 0) {
          return undefined;
        }
        return nextPage;
      },
      onSuccess: data => {
        if (data && data?.pages) {
          setResults([...results, ...data.pages[data.pages.length - 1].flat()]);
        }
      },
    },
  );

  useEffect(() => {
    dispatch(setManualShowPopAds(true))
    if (results == undefined) {
      setShowLoading(true);
    }
  }, []);

  useEffect(() => {
    if (results.length == 0) {
      refetch();
    }
  }, [results])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {showLoading && (
        <View
          style={{
            position: "absolute",
            //backgroundColor: colors.background,
            backgroundColor: "#0c0c0c",
            zIndex: 1,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,

          }}
        >
          <FastImage
            source={require("@static/images/loading-spinner.gif")}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
        </View>
      )}

      <View style={{ paddingTop: 10 }}>
        <FlatList
          data={results}
          keyExtractor={(item: VodData, index: number) => index.toString() + item.type_name}
          initialNumToRender={0}
          windowSize={3}
          maxToRenderPerBatch={3}
          renderItem={listItem}
          contentContainerStyle={{ paddingBottom: 60 }}
          removeClippedSubviews={true}
          onEndReachedThreshold={0.5}
          scrollEnabled={isVip}
          onEndReached={() => {
            if (hasNextPage && !isFetchingNextPage && !isFetching) {
              fetchNextPage();
            }
          }}
          ListFooterComponent={
            <View style={{ ...styles.loading }}>
              {hasNextPage && (
                <FastImage
                  style={{
                    height: 80,
                    width: 80,

                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  source={require('@static/images/loading-spinner.gif')}
                  resizeMode={'contain'}
                />
              )}
              {!(isFetchingNextPage || isFetching) && !hasNextPage && (
                <Text
                  style={{
                    ...textVariants.subBody,
                    color: colors.muted,
                    paddingTop: 12,
                  }}>
                  已经到底了
                </Text>
              )}
            </View>
          }
        />
      </View>
      {/* <EighteenPlusOverlay
        isRadius={true}
        handleAccept={() => {
          dispatch(acceptOverEighteen());
        }}
        handleReject={handleRejectEighteenPlus}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loading: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
});
