import React, { useCallback } from "react";
import { Modal, TouchableWithoutFeedback, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import VipPromotionModal from "./vipPromotionModal";
import { UMENG_CHANNEL } from "@utility";
import { useDispatch } from "react-redux";
import { vipPromotionModalShown } from "@redux";

const commonModels = require('../../../static/images/vip_promotion_models.png');
const sportBg = require('../../../static/images/vip_promotion_background.png');

interface Props {
  showCondition: boolean;
  onClose: any;
}

export const VipPromotionOverlay = ({ showCondition, onClose }: Props) => {
  const navigator = useNavigation();
  const dispatch = useDispatch();

  const onCloseModal = () => {
    onClose();
    dispatch(vipPromotionModalShown());
    navigator.navigate("Home", { screen: '首页' })
  }

  const handleOnPurchase = useCallback(() => {
    onClose();
    dispatch(vipPromotionModalShown());

    navigator.navigate("付费VIP");
    // if (UMENG_CHANNEL == 'GOOGLE_PLAY') {
    //   navigator.navigate("付费Google");
    // } else {
    //   navigator.navigate("付费VIP");
    // }
  }, []);

  return (
    <Modal
      visible={showCondition}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
          <VipPromotionModal
            coverBackground={sportBg}
            coverImage={commonModels}
            onPurchase={handleOnPurchase}
            onClose={onCloseModal}
            showCondition={showCondition}
          />
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
