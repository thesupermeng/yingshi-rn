import { useNavigation } from "@react-navigation/native";
import VipPrivilegeModal from "./vipPrivilegeModal"
import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/hooks";
import { hideAdultVipPrivilegeMiniVideoAction, showAdultVipPrivilegeMiniVideoAction, showLoginAction } from "@redux/actions/screenAction";
import { View } from "react-native";
import { screenModel } from "@type/screenType";
import { User } from "@models";
import { UserStateType } from "@redux/reducers/userReducer";

const adultModels = require('@static/images/vip_adult_models.png');
const adultBg = require('@static/images/vip_adult_background.png');

interface Props {
  showCondition: boolean;
  onClose: any;
  showBlur?: boolean;
  addPaddingTop?: boolean;
  showDarkBackdrop?: boolean;
}

export const AdultVipPrivilegeOverlay = ({ showCondition, onClose, showBlur, addPaddingTop = false, showDarkBackdrop = false }: Props) => {

  const navigator = useNavigation()
  const dispatch = useAppDispatch()
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );
  const userState = useSelector<UserStateType>('userReducer');


  const handleOnPurchase = useCallback(() => {
    onClose()
    navigator.navigate('付费VIP');
  }, [])

  const handleOnInvite = useCallback(() => {
    onClose()
    navigator.navigate('邀请');
  }, [])


  return (

    <VipPrivilegeModal
      showDarkBackdrop={showDarkBackdrop}
      addPaddingTop={addPaddingTop}
      titleText={"VIP升级权益"}
      benefitsTextsArray={['高清体育赛事  零时差感受赛场激情', '海量福利视频 你想要的这里都有', '高清画质 无广告观影体验']}
      imageGradientColors={['#FF9AD000', '#EB59A7']}
      contentGradientColors={['#EA58A7', '#DE2575']}
      coverBackground={adultBg}
      coverImage={adultModels}
      onPurchase={handleOnPurchase}
      onInvite={handleOnInvite}
      onClose={onClose}
      showBlur={showBlur}
      showCondition={showCondition}
    />

  )
}