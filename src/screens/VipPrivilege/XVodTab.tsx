import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";

import { API_DOMAIN } from "@utility/constants";
import { VodData } from "@type/ajaxTypes";
import { useQueries, useQuery } from "@tanstack/react-query";

import { acceptOverEighteen } from "@redux/actions/screenAction";
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
  const isVip = User.isVip(userState.user);

  const listItem = useCallback(
    ({ item, index }: { item: VodData; index: number }) => {
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
                class: item.vod_list[0].vod_class,
              });
            }}
          />
          {
            // is 午夜场剧情
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
    },
    []
  );

  let data = useQuery({
    queryKey: ["HomePage"],
    queryFn: () => AppsApi.getHomePages(99)
      .then((data) => {
        setShowLoading(false);
        return data;
      }),
  });

  useEffect(() => {
    if (data == undefined) {
      setShowLoading(true);
    }
  }, []);

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
          data={data?.data?.categories ? data?.data?.categories : []}
          keyExtractor={(item: VodData, index: number) => index.toString() + item.type_name}
          initialNumToRender={1}
          windowSize={3}
          maxToRenderPerBatch={3}
          renderItem={listItem}
          contentContainerStyle={{ paddingBottom: 60 }}
          removeClippedSubviews={true}
          onEndReachedThreshold={0.5}
          scrollEnabled={isVip}
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