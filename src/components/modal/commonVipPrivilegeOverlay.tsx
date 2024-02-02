import { useNavigation } from "@react-navigation/native";
import VipPrivilegeModal from "./vipPrivilegeModal"
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { screenModel } from "@type/screenType";
import { UMENG_CHANNEL } from "@utility/constants";

const commonModels = require('@static/images/vip_common_models.png');
const sportBg = require('@static/images/vip_common_background.png');

interface Props {
  showCondition: boolean;
  onClose: any;
  showBlur?: boolean;
}

export const CommonVipPrivilegeOverlay = ({ showCondition, onClose, showBlur }: Props) => {

  const navigator = useNavigation()

  const handleOnPurchase = useCallback(() => {
    onClose()
    if (UMENG_CHANNEL == 'GOOGLE_PLAY')
    {
      navigator.navigate("付费Google");
    }
    else
    {
      navigator.navigate("付费VIP");
    }
  }, [])

  const handleOnInvite = useCallback(() => {
    onClose()
    navigator.navigate('邀请');
  }, [])


  return (

    <VipPrivilegeModal
      titleText={"VIP升级权益"}
      benefitsTextsArray={['高清体育赛事  零时差感受赛场激情', '海量福利视频 你想要的这里都有', '高清画质 无广告观影体验']}
      imageGradientColors={['#D80E0E00', '#E80B0B']}
      contentGradientColors={['#E80B0B', '#740000']}
      coverBackground={sportBg}
      coverImage={commonModels}
      onPurchase={handleOnPurchase}
      onInvite={handleOnInvite}
      onClose={onClose}
      showBlur={showBlur}
      showCondition={showCondition}
      showDarkBackdrop={true}
    />

  )
}