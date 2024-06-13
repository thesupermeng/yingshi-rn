import { memo, useCallback, useContext, useEffect, useState } from "react";
import ScreenContainer from "../components/container/screenContainer";
import HomeHeader from "../components/header/homeHeader";
import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { CLangKey } from "@constants";
import { useTheme } from "@react-navigation/native";
import { AppsApi } from "@api";
import { useQuery } from "@tanstack/react-query";
import { Dimensions, FlatList, RefreshControl, View } from "react-native";
import ShowMoreVodButton from "../components/button/showMoreVodButton";
import VodListVertical from "../components/vod/vodListVertical";
import DeviceInfo from "react-native-device-info";
import { AdsBannerContext } from "../contexts/AdsBannerContext";
import { screenModel } from "@type/screenType";
import { useAppSelector } from "@hooks/hooks";

const TvShows = ({ navigation }: BottomTabScreenProps<any>) => {
  const { colors } = useTheme();

  const isVip = true;

  //top on  banner ads
  const { setNavbarHeight, reloadBanner } = useContext(AdsBannerContext);
  const [deviceName, setDeviceName] = useState("");
  const bottomTabHeight = useBottomTabBarHeight();
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );
  DeviceInfo.getDeviceName().then((d) => {
    setDeviceName(d.toLowerCase());
  });
  useEffect(() => {
    Dimensions.addEventListener("change", (e) => {
      const includesKeywords = [
        "flip",
        "fold",
        "mate x3",
        "mate xs",
      ].some((keyword) => deviceName.includes(keyword));
      if (DeviceInfo.isTablet() || includesKeywords) {
        reloadBanner();
      }
    });
  }, []);

  useEffect(() => {
    const isSamsungDevice = DeviceInfo.getBrand() === "samsung";
    //setNavbarHeight(bottomTabHeight);
    setTimeout(
      () => {
        // add delay to solve galaxy phone banner overlay nav on first start
        setNavbarHeight(bottomTabHeight);
      },
      isSamsungDevice ? 1000 : 500
    );
  }, [bottomTabHeight, screenState.interstitialShow]);

  //end topon  banner ads

  const fetchData = useCallback(
    (id: number) => AppsApi.getHomePages(id, isVip).then((result) => {
      result.categories = result.categories.filter((vod) => vod.vod_list.length >= 6)

      if (result.categories.length > 0) {
        const firstCategory = result.categories.slice(0, 1)[0]
        const otherCategory = result.categories.slice(1).sort(() => Math.random() - Math.random())
        result.categories = [
          firstCategory,
          ...otherCategory
        ]
      }

      return result
    }),
    [isVip]
  );

  const { data, refetch, isFetching } = useQuery({
    queryKey: ["HomePage", 2, isVip],
    queryFn: () => fetchData(2),
  });

  const handleRefresh = async () => {
    await refetch();
  };

  const renderItems = useCallback(
    ({ item, index }: { item: any; index: number }) => {
      return (
        <View
          key={`category-${index}`}
          style={{
            paddingTop: 5,
          }}
        >
          <View
            style={{
              paddingBottom: 5,
            }}
          >
            <ShowMoreVodButton
              text={item.type_name}
              onPress={() => {
                navigation.navigate("片库", {
                  type_id: item.type_id,
                  class: item.type_name,
                });
              }}
            />
          </View>
          <VodListVertical vods={item.vod_list} />
        </View>
      );
    },
    []
  );

  return (
    <ScreenContainer>
      <HomeHeader
        title={CLangKey.tvShowsTab.tr()}
        navigator={navigation}
        searchIcon={true}
        navIcon={true}
        typeId="2"
      />

      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isFetching}
            onRefresh={handleRefresh}
            tintColor={colors.primary}
          />
        }
        data={data?.categories ?? []}
        renderItem={renderItems}
        ListFooterComponent={<View style={{ marginBottom: 60 }}></View>}
      />
    </ScreenContainer>
  );
};

export default memo(TvShows);
