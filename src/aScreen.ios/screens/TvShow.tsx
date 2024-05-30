import { memo, useCallback } from "react";
import ScreenContainer from "../components/container/screenContainer";
import HomeHeader from "../components/header/homeHeader";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CLangKey } from "@constants";
import { useTheme } from "@react-navigation/native";
import { AppsApi } from "@api";
import { useQuery } from "@tanstack/react-query";
import { FlatList, RefreshControl, View } from "react-native";
import ShowMoreVodButton from "../components/button/showMoreVodButton";
import VodListVertical from "../components/vod/vodListVertical";

const TvShows = ({ navigation }: BottomTabScreenProps<any>) => {
    const { colors } = useTheme();

    const isVip = true;

    const fetchData = useCallback(
        (id: number) => AppsApi.getHomePages(id, isVip),
        [isVip]
    );

    const { data, refetch, isFetching } = useQuery({
        queryKey: ["HomePage", 2, isVip],
        queryFn: () => fetchData(2),
    });


    const handleRefresh = async () => {
        await refetch();
    };

    const renderItems = useCallback(({ item, index }: {
        item: any,
        index: number,
    }) => {
        return <View
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
    }, []);

    return <ScreenContainer>
        <HomeHeader
            title={CLangKey.tvShowsTab.tr()}
            navigator={navigation}
            searchIcon={true}
            navIcon={true}
            typeId='2'
        />

        <FlatList
            refreshControl={
                <RefreshControl
                    refreshing={isFetching}
                    onRefresh={handleRefresh}
                    tintColor={colors.primary}
                />
            }
            data={data?.categories.filter((vod) => vod.vod_list.length > 0) ?? []}
            renderItem={renderItems}
        />
    </ScreenContainer>
}

export default memo(TvShows);