import React from "react";
import { memo } from "react";
import AhaWebView from "./ahaWebView";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import ScreenContainer from "../../components/container/screenContainer";
import { useAppSelector } from "@hooks/hooks";
import { screenModel } from "@type/screenType";

function AhaGamesScreen({ navigation }: BottomTabScreenProps<any>) {

  const webUrl = "/games?hasGame=true"

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );

  return (
    <ScreenContainer
      containerStyle={{ paddingLeft: 0, paddingRight: 0 }}
      isHome={false} // solve home tab tabsize different issue
    >
      <AhaWebView 
        name="AhaGames"
        url={webUrl} 
        uniqueToken={screenState.ahaUniqueToken}
        whitelist="/games;https://secure.livechatinc.com"
        blacklist="*"
        errorType="page"
        backgroundColor="#161616"
        pageOpen={(url, navBack) => {
          console.log('navigate to web page', url);
          navigation.navigate('AhaWebScreen', { url: url, navBack: navBack ?? 0 });
        }}
        pageRoute={(name, params) => {
          console.log('navigate to route page', name, params);
          navigation.navigate(name, params);
        }}
      />
    </ScreenContainer>
  );
}

export default memo(AhaGamesScreen);
