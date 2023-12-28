import { useNavigation } from "@react-navigation/native";
import VipPrivilegeModal from "./vipPrivilegeModal"
import { useCallback } from "react";

const adultModels = require('@static/images/vip_adult_models.png');
const adultBg = require('@static/images/vip_adult_background.png');

export const AdultVipPrivilegeOverlay = () => {

  const navigator = useNavigation()

  const handleOnPurchase = useCallback(() => {
    navigator.navigate('付费VIP');
  }, [])

  const handleOnInvite = useCallback(() => {
    navigator.navigate('邀请');
  }, [])

  return (
    <VipPrivilegeModal
      titleText={"VIP升级权益"}
      benefitsTextsArray={['高清体育赛事  零时差感受赛场激情', '海量福利视频 你想要的这里都有', '高清画质 无广告观影体验']}
      imageGradientColors = {['#FF9AD000', '#EB59A7'] }
      contentGradientColors = {['#EA58A7', '#DE2575']}
      coverBackground={adultBg}
      coverImage={adultModels}
      onPurchase={handleOnPurchase}
      onInvite={handleOnInvite}
    />
  )
}