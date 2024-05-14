import { RootStackScreenProps } from "@type/navigationTypes";
import ScreenContainer from "../../components/container/screenContainer";
import TitleWithBackButtonHeader from "../../components/header/titleWithBackButtonHeader";
import { useQuery } from "@tanstack/react-query";
import { VodApi } from "@api";
import { useCallback, useState } from "react";
import HomeNav from "../../components/tabNavigate/homeNav";
import { CLangKey } from "@constants";

export default ({ navigation, route }: RootStackScreenProps<'XVodCatalog'>) => {
    const typeId = route.params?.type_id?.toString();

    const [navId, setNavId] = useState(0);

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
        queryKey: ["XVodCatalogVod"],
        queryFn: () => VodApi.getList({
            xMode: true,
        }),
    });

    const onTabPress = (target?: string) => {
        const targetStr = target?.substring(0, target.indexOf("-"));
        const found = vodCategories?.find((e) => e.name === targetStr);

        if (found) {
            setNavId(found.id);
        }
    }

    const onTabFocus = (target?: string) => {
        const targetStr = target?.substring(0, target.indexOf("-"));
        const found = vodCategories?.find((e) => e.name === targetStr);

        if (found) {
            setNavId(found.id);
        }

    }

    const onTabSwipe = useCallback((index: number, tab: any) => {
        setNavId(tab.id);
    }, []);

    return <ScreenContainer>
        <TitleWithBackButtonHeader title={'18+'} />


        <HomeNav
            // hideContent={hideContent}
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
                width: 90,
            }}
            tabItemTextStyle={{
                width: 90,
            }}
            tabChildren={(tab, i) => (
                <>
                    {/* {(!data || isRefreshing) && (
                        <View
                            style={{
                                ...styles.loading,
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                position: "absolute",
                                left: "50%",
                                marginLeft: -40, // Half of the element's width
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
                    {showHomeLoading && !isOffline && (
                        <View
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "rgb(20,22,25)",
                            }}
                        >
                            <FastImage
                                source={require("@static/images/home-loading.gif")}
                                style={{
                                    width: 150,
                                    height: 150,
                                    position: "relative",
                                    bottom: 50,
                                    zIndex: -1,
                                }}
                                resizeMode={"contain"}
                                useFastImage={true}
                            />
                        </View>
                    )}
                    {data &&
                        !isOffline &&
                        getContent({ item: data[i], index: tab.id })} */}
                </>
            )}
        />
    </ScreenContainer>
}