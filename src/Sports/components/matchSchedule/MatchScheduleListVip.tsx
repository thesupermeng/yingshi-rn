import React, { memo, useState, useRef, useEffect, useCallback } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import styles from "./style";
import { TouchableOpacity } from "react-native";
import { formatMatchDate } from "../../utility/utils";
import { RootState } from "@redux/store";
// import FollowMatchAction from '@redux/actions/followMatchAction';
import { MatchDetailsType } from "../../types/matchTypes";
// import {showToast} from '../../utility/toast';
import { Url } from "../../middleware/url";
import { useInfiniteQuery } from "@tanstack/react-query";
import Api from "../../middleware/api";
import MatchScheduleVip from "./MatchScheduleVip";
// import FastImage from 'react-native-fast-image';
import FastImage from "../../../components/common/customFastImage";
import { TOPON_BANNER_HEIGHT } from "@utility/constants";
import { BannerAdType } from "@type/ajaxTypes";
import { CApi } from "@utility/apiService";
import { CEndpoint } from "@constants";
import { YSConfig } from "../../../../ysConfig";
import { BannerContainer } from "../../../components/container/bannerContainer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppSelector, useSelector } from "@hooks/hooks";
import UmengAnalytics from "../../../../Umeng/UmengAnalytics";
import { AdsApi } from "../../../api/ads";
import { UserStateType } from "@redux/reducers/userReducer";
import { User } from "@models/user";

interface Props {
  matchTypeID: number;
  status?: number;
  setShowBecomeVIPOverlay: any;
  bgDark?: boolean;
  isLive?: boolean;
}

type MatchType = {
  date: string | undefined;
  data: MatchDetailsType | undefined;
};

type Matches = {
  headers: number[];
  data: MatchType[];
};

const MatchScheduleList = ({
  matchTypeID,
  status = -1,
  setShowBecomeVIPOverlay,
  bgDark = false,
  isLive = false,
}: Props) => {
  const { colors, textVariants, spacing } = useTheme();
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const latestListDate = useRef<Date | undefined>();
  let flatlistRef = useRef();

  const [isFetchNext, setFetchNext] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showLoading2, setShowLoading2] = useState(false);
  const [bannerAd, setBannerAd] = useState<BannerAdType>();
  const userState = useSelector<UserStateType>('userReducer');
  const isVip = User.isVip(userState.user);


  const [matches, setMatches] = useState<Matches>({
    headers: [],
    data: [],
  });

  const getUrl = () => {
    let url = "";
    if (matchTypeID !== -1) {
      url += `?sports_type=${matchTypeID}`;
    }
    if (url === "") {
      url = "?";
    }
    if (status !== -1) {
      url += `&status=${status}`;
    } else {
      url += `&is_live=${true}`;
    }
    // if (latestListDate.current !== undefined) {
    //   try {
    //     url += `&date=${latestListDate.current.toISOString().split('T')[0]}`;
    //   } catch (e) {
    //     console.log('ERRORRR!!', e, latestListDate.current.toISOString());
    //   }
    // }
    return Url.matches11 + url;
  };

  const url = getUrl();

  const fetchData = useCallback(async () => {
    const data = (await Api.call(url, {}, "GET")).data;

    if (data !== undefined) {
      const dates = Object.keys(data);
      let lst: MatchType[] = isFetchNext ? matches.data : [];
      let headers = isFetchNext ? matches.headers : [];
      let count = lst.length;
      if (latestListDate.current === undefined) {
        latestListDate.current = new Date(dates[dates.length - 1]);
      }
      if (status <= 2) {
        latestListDate.current = new Date(
          latestListDate.current.getTime() + 86400000
        );
      } else {
        latestListDate.current = new Date(
          latestListDate.current.getTime() - 86400000
        );
      }
      for (const date of dates) {
        const dateDate = new Date(date);
        const now = new Date();
        const sevenDaysBefore = new Date(
          now.valueOf() - 7 * 24 * 60 * 60 * 1000
        );
        const sevenDaysAfter = new Date(
          now.valueOf() + 7 * 24 * 60 * 60 * 1000
        );

        if (dateDate < sevenDaysBefore || dateDate > sevenDaysAfter) continue;

        lst.push({ date: formatMatchDate(date), data: undefined });
        headers.push(count);
        count += 1;
        data[date].forEach((element: MatchDetailsType) => {
          lst.push({ date: undefined, data: element });
          count += 1;
        });
      }
      setMatches({
        headers: headers,
        data: lst,
      });
    }
  }, []);

  const fetchBannerAd = async () => {
    const banner = await AdsApi.getBannerAd(110);

    if (banner) {
      setBannerAd(banner);
    } else {
      setBannerAd(undefined);
    }
  }

  useEffect(() => {
    fetchData().then();
  }, []);

  const shouldShowAds = async () => {
    if (!isVip) {
      fetchBannerAd();
    } else {
      setBannerAd(undefined);
    }
  };

  useFocusEffect(
    useCallback(() => {
      shouldShowAds();
    }, [isVip])
  );

  const Content = ({
    item,
    index,
  }: {
    item: { date: string | undefined; data: MatchDetailsType | undefined };
    index: number;
  }) => {
    return (
      <View style={{ width: "100%" }}>
        {item?.date !== undefined ? (
          <View
            style={{
              backgroundColor: bgDark ? "#0c0c0c" : colors.card2,
              padding: spacing.xs,
              paddingLeft: spacing.sideOffset,
              borderTopLeftRadius: index == 0 && !isLive ? 0 : 15,
              borderTopRightRadius: index == 0 && !isLive ? 0 : 15,
              marginTop: index == 0 ? 0 : 20,
              position: "relative",
            }}
          >
            <Text style={textVariants.header}>{item?.date}</Text>
          </View>
        ) : (
          item?.data !== undefined && (
            <>
              {/* <Text>{String((matches?.data.length > (index + 1) && matches?.data[index+1]?.date !== undefined ) || (matches?.data.length == index+1 ) )}</Text> */}
              <MatchScheduleVip
                borderFlag={String(
                  (matches?.data.length >= index + 1 &&
                    matches?.data[index + 1]?.date !== undefined) ||
                  matches?.data.length == index + 1
                )}
                bgDark={true}
                setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                key={index}
                matchSche={item?.data}
              />

              {(index + 1) % 5 === 0 && bannerAd && (
                <View style={{
                  paddingVertical: 5
                }}>
                  <BannerContainer
                    bannerAd={bannerAd}
                    onMount={({ id, name, slot_id, title }) => {
                      UmengAnalytics.sportBannerViewAnalytics({
                        ads_id: id,
                        ads_name: name,
                        ads_slot_id: slot_id,
                        ads_title: title,
                      });
                    }}
                    onPress={({ id, name, slot_id, title }) => {
                      UmengAnalytics.sportBannerClickAnalytics({
                        ads_id: id,
                        ads_name: name,
                        ads_slot_id: slot_id,
                        ads_title: title,
                      });
                    }}
                  />
                </View>

              )}
            </>
          )
        )}
      </View>
    );
  };

  const handleRefresh = () => {
    setShowLoading(true);
    flatlistRef?.current?.scrollToOffset({ animated: false, offset: 0 });

    setTimeout(() => {
      //   setShowLoading(false);
      setShowLoading(false);
    }, 1200);
  };

  // useEffect(() => {
  //   if (matches?.data == undefined) {
  //     setShowLoading(true);
  //     setTimeout(() => {
  //       //   setShowLoading(false);
  //       setShowLoading(false);
  //     }, 1000);
  //   }
  // }, []);

  const handleInitialLoading = useCallback(() => {

    setShowLoading2(true);
    setTimeout(() => {
      setShowLoading2(false);
    }, 1200);

  }, []);

  useEffect(() => {
    handleInitialLoading();
  }, [handleInitialLoading]);

  return (
    <View style={{ flex: 1 }}>

      {showLoading2 && (
        <View
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: 1000,
            backgroundColor: "#0c0c0c",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <FastImage
            style={{ height: 150, width: 150 }}
            source={require("@static/images/home-loading.gif")}
            resizeMode={"contain"}
          />
        </View>

      )}


      {matches?.data !== undefined && matches.data.length > 0 ? (
        <View>
          <FlatList
            ref={flatlistRef}
            data={matches.data}
            windowSize={3}
            //  style={{ backgroundColor: "transparent" }}
            maxToRenderPerBatch={10}
            initialNumToRender={10}
            renderItem={Content}
            // onEndReached={() => {
            //   if (hasNextPage) {
            //     setFetchNext(true);
            //     fetchNextPage();
            //   }
            // }}
            onEndReachedThreshold={0.9}
            //  stickyHeaderIndices={matches.headers}
            ListFooterComponent={
              <View style={{ paddingTop: TOPON_BANNER_HEIGHT + 20 }} />
            }
          />
        </View>
      ) : (
        <></>
      )}

      {matches?.data !== undefined && matches.data.length == 0 && (
        <View
          style={{
            height: 100,
            backgroundColor: "#0c0c0c",
            justifyContent: "center",
            alignItems: "center",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
        >
          <Text style={{ color: "#9c9c9c", fontStyle: "italic" }}>
            暂无赛事
          </Text>
        </View>
      )}

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

      <TouchableOpacity
        style={styles.refresh}
        onPress={() => {
          fetchData();
          handleRefresh();
        }}
      >
        <FastImage
          source={require("../../assets/images/IconRefresh.png")}
          style={{ width: 35, height: 35 }}
          resizeMode={"contain"}
        />
      </TouchableOpacity>
    </View>
  );
};
export default memo(MatchScheduleList);
