import React, {
  memo,
  useState,
} from "react";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import ScreenContainer from "../../../components/container/screenContainer";
import BgImageView from "../../components/BgImage";
import { Dimensions, FlatList, View} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import DiscoveryHeaderView from "./DiscoveryHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import DiscoveryTabView from "./DiscoveryTab";
import DiscoveryListView from "./DiscoveryList";

function DiscoveryScreen({ navigation }: BottomTabScreenProps<any>) {
  const [width] = useState(Dimensions.get('window').width);
  
  return (
    <ScreenContainer
      containerStyle={{ paddingLeft: 0, paddingRight: 0 }}
      isHome={false} // solve home tab tabsize different issue
      isPlay={true}
      isBgHide={true}
      isTranslucent={true}
      isLightContent={false}
    >
      <LinearGradient 
        style={{
          width: '100%', 
          height: '100%', 
          backgroundColor: '#ffffff'
        }}
        colors={['#ffffff', '#f2f5fa']}
      >
        <BgImageView source={require("../../assets/images/home_bg.png")} height={151} zIndex={1}/>
        <SafeAreaView style={{height: "100%", display: 'flex', padding: 0, zIndex: 2}} edges={{
          top: "additive", bottom: "off"
        }}>
          <DiscoveryHeaderView/>
          <DiscoveryTabView/>
          <DiscoveryListView/>
        </SafeAreaView>
      </LinearGradient>
    </ScreenContainer>
  );
}

export default memo(DiscoveryScreen);
