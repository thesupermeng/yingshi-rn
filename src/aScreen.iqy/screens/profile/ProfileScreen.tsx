import React, {
  memo,
  useCallback,
} from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import ScreenContainer from "../../../components/container/screenContainer";
import BgImageView from "../../components/BgImage";
import { SafeAreaView } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";
import ProfileHeaderView from "./ProfileHeader";
import ProfileSignInUpView from "./ProfileSignInUp";
import ProfilePayVipView from "./ProfilePayVip";
import ProfileActionsView from "./ProfileAction";

import ProfileActionIcon1 from "../../assets/images/profile_action_1.svg";
import ProfileActionIcon2 from "../../assets/images/profile_action_2.svg";
import ProfileActionIcon3 from "../../assets/images/profile_action_3.svg";
import ProfileActionIcon4 from "../../assets/images/profile_action_4.svg";
import ProfileActionIcon5 from "../../assets/images/profile_action_5.svg";
import ProfileActionIcon6 from "../../assets/images/profile_action_6.svg";
import ProfileActionIcon7 from "../../assets/images/profile_action_7.svg";
import ProfileActionIcon8 from "../../assets/images/profile_action_8.svg";
import ProfileActionIcon9 from "../../assets/images/profile_action_9.svg";
import ProfileActionIcon10 from "../../assets/images/profile_action_10.svg";
import ProfileActionIcon11 from "../../assets/images/profile_action_11.svg";
import ProfileActionIcon12 from "../../assets/images/profile_action_12.svg";


function ProfileScreen({ navigation }: BottomTabScreenProps<any>) {

  const renderDatas = [
    {type: "signInUp"},
    {type: "payForVip"},
    {type: "profileAction", items: [
      {title: "观看历史 / 下载", detail: true, icon: ()=>(<ProfileActionIcon1 height={24}/>)},
      {title: "收藏 / 预约 / 书架", detail: true, icon: ()=>(<ProfileActionIcon2 height={24}/>)},
    ]},
    {type: "profileAction", items: [
      {title: "钱包", value: "免费领2个月VIP", tag: "vip", detail: true, icon: ()=>(<ProfileActionIcon3 height={24}/>)},
      {title: "借钱额度", detail: true, icon: ()=>(<ProfileActionIcon4 height={24}/>)},
      {title: "票夹", detail: true, icon: ()=>(<ProfileActionIcon5 height={24}/>)},
    ]},
    {type: "profileAction", items: [
      {title: "免流量服务", detail: true, icon: ()=>(<ProfileActionIcon6 height={24}/>)},
      {title: "创作中心", detail: true, icon: ()=>(<ProfileActionIcon7 height={24}/>)},
      {title: "一起聊", detail: true, icon: ()=>(<ProfileActionIcon8 height={24}/>)},
      {title: "微服务", detail: true, icon: ()=>(<ProfileActionIcon9 height={24}/>)},
    ]},
    {type: "profileAction", items: [
      {title: "设置", detail: true, icon: ()=>(<ProfileActionIcon10 height={24}/>)},
      {title: "帮助与反馈", detail: true, icon: ()=>(<ProfileActionIcon11 height={24}/>)},
      {title: "关于我们", detail: true, icon: ()=>(<ProfileActionIcon12 height={24}/>)},
    ]},
    {type: "version"},
  ]

  const renderListItem = useCallback(
    ({ item, index }: { item: any; index: number }) => {
      console.log("==>", `home-list-item-${index}-${item.id}`)
      return (
        <View key={`home-list-item-${index}`} style={{width: "100%", alignItems:"stretch"}}> 
          {item.type === 'signInUp' && <ProfileSignInUpView/>}
          {item.type === 'payForVip' && <ProfilePayVipView/>}
          {item.type === 'profileAction' && <ProfileActionsView data={item}/>}
          {item.type === 'version' && <View style={{alignItems: "center", paddingTop: 50, paddingBottom: 20}}>
            <Text>爱奇艺V15.7.1</Text>
          </View>}
        </View>
      )
    },
    [],
  );

  const renderSeparator = useCallback(
    (props:any) => {
      console.log(`==> separator-${props.leadingItem.key}`)
      return (<View key={`separator-${props.leadingItem.key}`} style={{height: 14}}></View>)
    },
    [],
  );

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
        colors={['#ffffff', '#f2f2f2']}
      >
        <BgImageView source={require("../../assets/images/profile_bg.png")} height={151} zIndex={1}/>
        <SafeAreaView style={{height: "100%", display: 'flex', padding: 0, zIndex: 2}} edges={{
          top: "additive", bottom: "off"
        }}>
          <ProfileHeaderView/>
          <FlatList
            data={renderDatas}
            initialNumToRender={5}
            windowSize={3}
            maxToRenderPerBatch={10}
            renderItem={renderListItem}
            contentContainerStyle={{paddingTop: 10, paddingBottom: 20}}
            removeClippedSubviews={false}
            ItemSeparatorComponent={renderSeparator}
            keyExtractor={(item, index) => `home-list-item-${index}`}
          />
        </SafeAreaView>
      </LinearGradient>
    </ScreenContainer>
  );
}

export default memo(ProfileScreen);

const styles = StyleSheet.create({
  
});
