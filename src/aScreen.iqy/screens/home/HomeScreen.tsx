import React, {
  memo,
  useEffect
} from "react";
import { StatusBar, StyleSheet } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import ScreenContainer from "../../../components/container/screenContainer";
import BgImageView from "../../components/BgImage";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeaderView from "./HomeHeader";
import HomeTabView from "./HomeTab";
import HomeListView from "./HomeList";
import LinearGradient from "react-native-linear-gradient";


function HomeScreen({ navigation, route }: BottomTabScreenProps<any>) {

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
          <HomeHeaderView/>
          <HomeTabView/>
          <HomeListView data={route.params}/>
        </SafeAreaView>
      </LinearGradient>
    </ScreenContainer>
  );
}

export default memo(HomeScreen);

const styles = StyleSheet.create({
 
});
