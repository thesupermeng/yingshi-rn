import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import ScreenContainer from "../../../components/container/screenContainer";
import SVodHeaderView from "./SVodHeader";
import { MiniVideo } from "@type/ajaxTypes";
import { useIsFocused } from "@react-navigation/native";
import { AppState } from "react-native";
import SVodList from "./SVodList";

type MiniVodRef = {
  setPause: (pause: boolean) => void;
};

function SVodScreen({ navigation, route }: BottomTabScreenProps<any>) {

  const svodDatas = useMemo(() => {
    return route.params?.List; 
  }, [route.params])

  useEffect(() => {
    console.debug("==> SVod screen datas", svodDatas);
  }, [svodDatas]);

  const isFocused = useIsFocused();
  // New state to keep track of app's background/foreground status
  const [isInBackground, setIsInBackground] = useState(false);
  const miniVodRef = useRef<MiniVodRef>();
  const miniVodListRef = useRef<any>();
  const [flattenedVideos, setFlattenedVideos] = useState(Array<MiniVideo>);
  const isFocusLogin = useRef(false);

  const handleAppStateChange = (nextAppState: any) => {
    setIsInBackground(nextAppState !== 'active');
  };

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      subscription.remove();
    };
  }, []);

  const handleRefresh = useCallback(async () => {
    
  }, []);

  useEffect(() => {
    if (svodDatas != undefined) {
      let filtered = svodDatas.flat().filter((x:any) => x)

      // vip -> filter ads
      // guest -> filter first 10
      filtered = filtered.filter((x: any) => !x.is_ads)
      
      setFlattenedVideos(filtered); // remove null values
      if (filtered.length > 0) {
        miniVodListRef.current?.scrollToOffset({
          index: 0,
          animated: false,
        });
      }
    }
  }, [svodDatas]);

  return (
    <ScreenContainer
      containerStyle={{ 
        paddingLeft: 0, 
        paddingRight: 0, 
        backgroundColor: "#000", 
        position: "relative",
      }}
      isHome={false} // solve home tab tabsize different issue
      isPlay={true}
      isTranslucent={true}
      isLightContent={true}
    >
      <SVodHeaderView/>
      <SVodList
        ref={miniVodRef as any}
        miniVodListRef={miniVodListRef}
        videos={flattenedVideos}
        fetchNextPage={undefined}
        hasNextPage={false}
        isFetching={false}
        isFetchingNextPage={false}
        isActive={isFocused && !isInBackground}
        handleRefreshMiniVod={handleRefresh}
        isRefreshing={false}
        isPressTabScroll={false}
        key="iqiyiSVodMiniVideo"
        isFocusLogin={isFocusLogin}
        onPressAds={()=> {}}
      />
    </ScreenContainer>
  );
}

export default memo(SVodScreen);
