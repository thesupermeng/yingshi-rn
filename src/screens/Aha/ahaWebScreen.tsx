import React from "react";
import { memo, useEffect, useState } from "react";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import NetInfo from "@react-native-community/netinfo";

import ScreenContainer from '../../components/container/yys_executor_expand';
import TitleWithBackButtonHeader from '../../components/header/yys_anner_header';
import NoConnection from "../../components/common/yys_armva_classes";

import AhaWebView from "./ahaWebView";

function AhaWebScreen({ navigation, route }: BottomTabScreenProps<any>) {

  const [isOffline, setIsOffline] = useState(false);
  const routeWebUrl = route.params?.url;
  const routeWebHtml = route.params?.html;
  const navBack = `${route.params?.navBack}` === '1';
  const [webTitle, setWebTitle] = useState('');
  const webName = route.name;

  const checkConnection = async () => {
    const state = await NetInfo.fetch();
    // state.isInternetReachable === null set true is for default value
    const offline = !(
      state.isConnected &&
      (state.isInternetReachable === true || state.isInternetReachable === null
        ? true
        : false)
    );
    setIsOffline(offline);
    if (!offline) {
      handleRefresh();
    }
  };

  const handleRefresh = async (showloading: boolean = false) => {
    if (showloading) {
      // setIsRefreshing(true);
    }
    try {
      // await queryClient.resetQueries(["HomePage", id]);
      // setIsRefreshing(false);
      // setNavId(id);
      // setShowHomeLoading(false);
      // return;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {

    console.log("=======> ahawebview ", routeWebUrl, routeWebHtml)
  }, [])

  return (
    <>
      <ScreenContainer
        containerStyle={{ paddingLeft: 0, paddingRight: 0 }}
        isHome={false} // solve home tab tabsize different issue
      >
        {navBack && <TitleWithBackButtonHeader title={webTitle} />}
        <AhaWebView 
          name={webName}
          url={routeWebUrl} 
          html={routeWebHtml}
          setWebTitle={setWebTitle}
          pageOpen={(url, navBack) => {
            console.log('navigate to web page', url);
            navigation.navigate('AhaWebScreen', { url: url, navBack: navBack ?? 0 });
          }}
          pageClose={() => {
            navigation.goBack();
          }}
          pageRoute={(name, params) => {
            console.log('navigate to route page', name, params);
            navigation.navigate(name, params);
          }}
        />
      </ScreenContainer>
      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </>
  );
}

export default memo(AhaWebScreen);
