import React, {
  memo,
  useCallback,
  useState,
} from "react";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import ScreenContainer from "../../../components/container/screenContainer";
import MemberHeaderView from "./MemberHeader";
import BgImageView from "../../components/BgImage";
import { Dimensions, FlatList, View} from "react-native";
import MemberTabView from "./MemberTab";
import MemberPurchaseView from "./MemberPurchase";
import MemberVodsView from "./MemberVods";
import MemberExternalView from "./MemberExternal";
import MemberRewardView from "./MemberReward";
import MemberWelFareView from "./MemberWelfare";
import MemberSalesView from "./MemberSales";

const memberBg1 = require("../../assets/images/member_bg1.png");

function MemberScreen({ navigation }: BottomTabScreenProps<any>) {
  const [width] = useState(Dimensions.get('window').width);
  const [headOpacity, setHeadOpacity] = useState(0)

  const renderListItem = useCallback(
    ({ item, index }: { item: any; index: number }) => {
      console.log("==>", `home-list-item-${index}-${item.id}`)
      return (
        <View key={`home-list-item-${index}`} style={{width: "100%", alignItems:"stretch"}}> 
          { index === 0 && <MemberPurchaseView/> }
          { index === 1 && <MemberExternalView/> }
          { index === 2 && <MemberVodsView/> }
          { index === 3 && <MemberRewardView/> }
          { index === 4 && <MemberWelFareView/> }
          { index === 5 && <MemberSalesView/> }
          { index > 5 && <View style={{width: "100%", height: 500, backgroundColor: "#f2f5fa"}}/> }
        </View>
      )
    },
    [],
  );

  return (
    <ScreenContainer
      containerStyle={{ 
        paddingLeft: 0, 
        paddingRight: 0, 
        backgroundColor: "#f2f5fa", 
        position: "relative",
      }}
      isHome={false} // solve home tab tabsize different issue
      isPlay={true}
      isBgHide={true}
      isTranslucent={true}
      isLightContent={true}
    >
      <BgImageView source={memberBg1} height={width} zIndex={-5}/>
      <View style={{width: "100%", height: "100%", position: 'absolute', left: 0, top: 0, zIndex: 5}}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          initialNumToRender={5}
          windowSize={3}
          maxToRenderPerBatch={10}
          renderItem={renderListItem}
          contentContainerStyle={{paddingTop: 120, paddingBottom: 10}}
          removeClippedSubviews={false}
          keyExtractor={(item) => `home-list-item-${item}`}
          onScroll={e => {
            const opacityOffset = 120;
            let opacity = (opacityOffset - e.nativeEvent.contentOffset.y) / opacityOffset;
            if (opacity < 0) {
              opacity = 0
            }
            if (opacity > 1) {
              opacity = 1
            }
            setHeadOpacity(1 - opacity)
          }}
        />
      </View>
      <View style={{width: "100%", alignItems: "stretch", overflow: "hidden", position: "absolute", zIndex: 10}}>
        <BgImageView source={memberBg1} height={width*0.89} opacity={headOpacity}/>
        <MemberHeaderView/>
        <MemberTabView/>
      </View>
    </ScreenContainer>
  );
}

export default memo(MemberScreen);
