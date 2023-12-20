import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";

import { API_DOMAIN } from "@utility/constants";
import {
  NavOptionsResponseType,
  VodCarousellResponseType,
  VodData,
} from "@type/ajaxTypes";
import { useQueries, useQuery } from "@tanstack/react-query";

import {
  acceptOverEighteen,
  enableAdultMode,
  hideAdultModeDisclaimer,
  showAdultModeDisclaimer,
} from "@redux/actions/screenAction";
import EighteenPlusOverlay from "../../components/modal/overEighteenOverlay";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useAppDispatch } from "@hooks/hooks";
import ShowMoreVodButton from "../../components/button/showMoreVodButton";
import VodListVerticalVip from "./vodListVerticalVip";

interface Props {
  handleRejectEighteenPlus: any;
}

export default function XVodTab({
  handleRejectEighteenPlus = () => {},
}: Props) {
  const { colors, textVariants, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  // const { data: navOptions, refetch } = useQuery({
  //   queryKey: ["HomePageNavOptions"],
  //   queryFn: () =>
  //     fetch(`${API_DOMAIN}nav/v1/navItems`, {})
  //       .then((response) => response.json())
  //       .then((json: NavOptionsResponseType) => {
  //         return json.data;
  //       }),
  // });

  const listItem = useCallback(
    ({ item, index }: { item: VodData; index: number }) => (
      <View
        key={`${item.type_name}-${index}`}
        style={{
          gap: spacing.m,
          paddingLeft: spacing.sideOffset,
          paddingRight: spacing.sideOffset,
          backgroundColor: "#0c0c0c",
          borderRadius: 15,
          marginBottom: 15,
          paddingTop:8,
          paddingBottom:4
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
    ),
    []
  );

  // const listItem = ({ item, index }: { item: VodData; index: number }) => (
  //   <View
  //     key={`${item.type_name}-${index}`}
  //     style={{
  //       gap: spacing.m,
  //       paddingLeft: spacing.sideOffset,
  //       paddingRight: spacing.sideOffset,
  //       backgroundColor: "#0c0c0c",
  //       borderRadius: 15,
  //       marginBottom: 15,
  //     }}
  //   >
  //     <ShowMoreVodButton
  //       text={item.type_name.trim()}
  //       onPress={() => {
  //         navigation.navigate("午夜场剧情", {
  //           class: item.vod_list[0].vod_class,
  //         });
  //       }}
  //     />
  //     {
  //       is 午夜场剧情
  //       item?.vod_list && (
  //         <VodListVerticalVip
  //           numOfRows={2}
  //           vods={item?.vod_list}
  //           minNumPerRow={2}
  //           heightToWidthRatio={1 / 1.814}
  //           playerMode="adult"
  //         />
  //       )
  //     }
  //   </View>
  // );

  const data = useQuery({
    queryKey: ["HomePage"],
    queryFn: () =>
      fetch(`${API_DOMAIN}page/v2/typepage?id=99`)
        .then((response) => response.json())
        .then((json: VodCarousellResponseType) => {
          return json;
        }),
  });
  const [width, setWidth] = useState(Dimensions.get("window").width);
  console.log("data");
  console.log(data.data?.data);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={data?.data?.data?.categories ? data?.data?.data?.categories : []}
        initialNumToRender={1}
        windowSize={3}
        maxToRenderPerBatch={3}
        renderItem={listItem}
        contentContainerStyle={{ paddingBottom: 60 }}
        removeClippedSubviews={true}
        // ListFooterComponent={
        //   <View style={{ ...styles.loading }}>
        //     <Text
        //       style={{
        //         ...textVariants.subBody,
        //         color: colors.muted,
        //         paddingTop: 12,
        //       }}>
        //       已经到底了
        //     </Text>
        //   </View>
        // }
        onEndReachedThreshold={0.5}
      />

      <EighteenPlusOverlay
        handleAccept={() => {
          dispatch(acceptOverEighteen());
        }}
        handleReject={handleRejectEighteenPlus}
      />
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
