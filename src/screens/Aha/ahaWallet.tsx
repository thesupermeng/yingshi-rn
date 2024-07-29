
import React from "react";
import { memo } from "react";
import AhaWebView from "./ahaWebView";
import { View } from "react-native";
import { screenModel } from "@type/screenType";
import { useAppSelector } from "@hooks/hooks";

interface AhaWalletProps {
  loadingSize?: number;
  pageOpen?: (url:string, navBack?:number) => void,
  pageClose?: () => void,
}

function AhaWalletView({ loadingSize, pageOpen, pageClose }: AhaWalletProps) {

  const webUrl = "/user/wallet?hasGame=true&bgColor=1A1E21"

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );
  
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <AhaWebView 
        name="Wallet"
        url={webUrl} 
        uniqueToken={screenState.ahaUniqueToken}
        loadingSize={loadingSize}
        whitelist="/user/wallet"
        blacklist="*"
        errorType="banner"
        backgroundColor="#1A1E21"
        pageOpen={pageOpen} 
        pageClose={pageClose}
      />
    </View>
  );
}

export default memo(AhaWalletView);