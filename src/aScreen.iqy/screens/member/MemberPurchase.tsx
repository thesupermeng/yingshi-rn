import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MemberHeadIcon from "../../assets/images/member_head.svg";
import MemberFeatureIcon1 from "../../assets/images/member_feature_1.svg";
import MemberFeatureIcon2 from "../../assets/images/member_feature_2.svg";
import MemberFeatureIcon3 from "../../assets/images/member_feature_3.svg";
import MemberFeatureIcon4 from "../../assets/images/member_feature_4.svg";
import FastImage from "react-native-fast-image";


const memberPurchase = require("../../assets/images/member_purchase.png");

interface MemberPurchaseProps {
}

export default function MemberPurchaseView({
}: MemberPurchaseProps) {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <MemberHeadIcon height={18.5}/>
        <Text style={styles.headText}>开通会员畅享VIP内容/广告特权等</Text>
      </View>
      <View style={styles.box}>
        <View style={styles.products}>
          <FastImage style={{...styles.bgImage, zIndex: -2}} 
            source={require("../../assets/images/member_bg2.png")}
          />
          <FastImage style={{...styles.bgImage, zIndex: -1}} 
            source={require("../../assets/images/member_bg3.png")}
          />
          <View style={styles.tab}>
            <View style={styles.tabItem}>
              <Text style={styles.tabTitle}>黄金VIP</Text>
              <Text style={styles.tabDesc}>入门款会员</Text>
            </View>
            <View style={styles.tabItem}>
              <Text style={styles.tabTitle}>白金VIP</Text>
              <Text style={styles.tabDesc}>电视也能看</Text>
            </View>
            <View style={styles.tabItem}>
              <Text style={styles.tabTitle}>星钻VIP</Text>
              <Text style={styles.tabDesc}>多端多会员</Text>
            </View>
          </View>
          <View style={styles.feature}>
            <View style={styles.featureItem}>
              <MemberFeatureIcon1 height={40}/>
              <Text style={styles.featureText}>手机/平板/电脑</Text>
            </View>
            <View style={styles.featureItem}>
              <MemberFeatureIcon2 height={40}/>
              <Text style={styles.featureText}>同时播放2台</Text>
            </View>
            <View style={styles.featureItem}>
              <MemberFeatureIcon3 height={40}/>
              <Text style={styles.featureText}>720积分/年</Text>
            </View>
            <View style={styles.featureItem}>
              <MemberFeatureIcon4 height={40}/>
              <Text style={{...styles.featureText, color: "#92a5c2"}}>体育/FUN/VR</Text>
            </View>
          </View>
          <View style={styles.submit}>
            <FastImage style={styles.submitButton} 
              source={require("../../assets/images/member_submit.png")}
              resizeMode="contain"
            />
            <FastImage style={styles.submitButtonTag} 
              source={require("../../assets/images/member_submit_tag.png")}
              resizeMode="contain"
            />
          </View>
          
        </View>
        
      </View>
      
      <View style={styles.tail}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: 'flex-start',
    alignItems: "stretch",
  },
  head: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
  },
  headText: {
    color: "#ddffffff",
    fontSize: 13,
    fontWeight: '400',
  },
  box: {
    width: '100%',
    paddingHorizontal: 16
  },
  products: {
    position: "relative",
    width: '100%',
    aspectRatio: 1.81,
    borderRadius: 16,
    overflow: "hidden",
    marginTop: 20
  },
  bgImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  tab: {
    width: "100%",
    aspectRatio: 6.5,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
  },
  tabItem: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
  },
  tabTitle: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: '600',
  },
  tabDesc: {
    color: "#ffffff",
    fontSize: 11,
    fontWeight: '400',
  },
  feature: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
  },
  featureItem: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
    gap: 5
  },
  featureText: {
    color: "#fff3c7",
    fontSize: 10,
    fontWeight: '400',
  },
  submit: {
    position: "relative",
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 14,
    alignItems: "stretch",
  },
  submitButton: {
    aspectRatio: 8.6
  },
  submitButtonTag: {
    position: "absolute",
    right: 16,
    top: -8,
    height: 15,
    aspectRatio: 3.4,
  },
  tail: {
    width: "100%",
    height: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: 20,
    backgroundColor: '#f2f5fa'
  }

});