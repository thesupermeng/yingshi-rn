import { useNavigation } from "@react-navigation/native";
import VipPrivilegeModal from "./vipPrivilegeModal"
import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { hideAdultVipPrivilegeMiniVideoAction, showAdultVipPrivilegeMiniVideoAction } from "@redux/actions/screenAction";
import { View } from "react-native";
import { screenModel } from "@type/screenType";

const sportModels = require('@static/images/vip_sport_models.png');
const sportBg = require('@static/images/vip_sport_background.png');

interface Props {
  showCondition: boolean;
  onClose: any;
  showBlur?: boolean; 
}

export const SportVipPrivilegeOverlay = ({showCondition, onClose, showBlur}: Props) => {

  const navigator = useNavigation()
  const dispatch = useAppDispatch()
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );


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
      imageGradientColors = {['#0E5ED800', '#0B6AE4'] }
      contentGradientColors = {['#0B6CE8', '#001A74']}
      coverBackground={sportBg}
      coverImage={sportModels}
      onPurchase={handleOnPurchase}
      onInvite={handleOnInvite}
      onClose={onClose}
      showBlur={showBlur}
      showCondition={showCondition}
    />

  )
}