import { RootStackScreenProps } from "@type/navigationTypes";
import ScreenContainer from "../../components/container/screenContainer";
import TitleWithBackButtonHeader from "../../components/header/titleWithBackButtonHeader";
import { useQuery } from "@tanstack/react-query";
import { VodApi } from "@api";
import { useCallback, useState } from "react";
import HomeNav from "../../components/tabNavigate/homeNav";
import { CLangKey } from "@constants";
import VodListVerticalVip from "../VipPrivilege/vodListVerticalVip";
import { View } from "react-native";
import CustomFastImage from "../../components/common/customFastImage";
import EmptyList from "../../components/common/emptyList";

export default ({ navigation, route }: RootStackScreenProps<'XVodCatalog'>) => {
    const typeId = route.params?.type_id ?? -1;

    const [navId, setNavId] = useState(typeId);

    const { data: vodCategories, isFetching: isCategoryFetching } = useQuery({
        queryKey: ["XVodCatalogCategory"],
        queryFn: () => VodApi.getXVodCategories().then((result) => [
            {
                id: -1,
                name: CLangKey.all.tr(),
            },
            ...result,
        ]),
    });

    const { data: vods, isFetching: isVodFetching } = useQuery({
        queryKey: ["XVodCatalogVod", navId],
        queryFn: () => VodApi.getList({
            xMode: true,
            category: navId === -1 ? undefined : vodCategories?.find((category) => category.id === navId)?.name
        }),
    });

    const onTabPress = useCallback((target?: string) => {
        const targetStr = target?.substring(0, target.indexOf("-"));
        const found = vodCategories?.find((e) => e.name === targetStr);

        if (found) setNavId(found.id);
    }, [vodCategories]);

    const onTabFocus = useCallback((target?: string) => {
        const targetStr = target?.substring(0, target.indexOf("-"));
        const found = vodCategories?.find((e) => e.name === targetStr);

        if (found) setNavId(found.id);
    }, [vodCategories]);

    const onTabSwipe = useCallback((index: number, tab: any) => {
        setNavId(tab.id);
    }, []);

    return <ScreenContainer
        containerStyle={{
            alignItems: 'center',
        }}
    >
        <TitleWithBackButtonHeader title={'18+'} />

        <View>
            <HomeNav
                navId={navId}
                onTabPress={onTabPress}
                onTabFocus={onTabFocus}
                onTabSwipe={onTabSwipe}
                tabList={vodCategories?.map((e) => ({
                    id: e.id,
                    title: e.name,
                    name: e.name,
                })) ?? []}
                tabItemStyle={{
                    width: 110,
                }}
                tabItemTextStyle={{
                    width: 100,
                }}
                tabChildren={(tab, i) => (
                    <>
                        {(isCategoryFetching || isVodFetching) && (
                            <View
                                style={{
                                    // ...styles.loading,
                                    flex: 1,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "absolute",
                                    left: "50%",
                                }}
                            >
                                {
                                    <CustomFastImage
                                        style={{ height: 80, width: 80 }}
                                        source={require("@static/images/loading-spinner.gif")}
                                        resizeMode={"contain"}
                                    />
                                }
                            </View>
                        )}

                        {(vods?.List.length ?? 0) > 0 &&
                            <VodListVerticalVip
                                numOfRows={2}
                                vods={vods?.List ?? []}
                                minNumPerRow={2}
                                heightToWidthRatio={1 / 1.814}
                                playerMode="adult"
                            />
                        }

                        {!(isCategoryFetching || isVodFetching) && (vods?.List.length ?? 0) === 0 &&
                            <EmptyList description="qwe" />
                        }
                    </>
                )}
            />
        </View>
    </ScreenContainer>
}