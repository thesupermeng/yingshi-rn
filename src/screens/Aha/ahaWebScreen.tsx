
import {
  BottomTabScreenProps
} from "@react-navigation/bottom-tabs";
import ScreenContainer from "../../components/container/screenContainer";
import { memo, useEffect, useState } from "react";
import React from "react";
import NoConnection from "../../components/common/noConnection";
import NetInfo from "@react-native-community/netinfo";
import AhaWebView from "./ahaWebView";
import TitleWithBackButtonHeader from "@iosScreen/components/header/titleWithBackButtonHeader";

function AhaWebScreen({ navigation, route }: BottomTabScreenProps<any>) {

  const routeWebUrl = route.params?.url;
  const routeWebHtml = route.params?.html;
  const navBack = `${route.params?.navBack}` === '1';
  const [webTitle, setWebTitle] = useState('');
  const webName = route.name;

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
            navigation.navigate('AhaWebScreen', { url: url, navBack: navBack ?? 0 });
          }}
          pageClose={() => {
            navigation.goBack();
          }}
          pageRoute={(name, params) => {
            navigation.navigate(name, params);
          }}
        />
      </ScreenContainer>
    </>
  );
}

export default memo(AhaWebScreen);
