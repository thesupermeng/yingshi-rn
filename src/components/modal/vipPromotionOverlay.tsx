import React, { useCallback } from "react";
import { Modal, TouchableWithoutFeedback, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import VipPromotionModal from "./vipPromotionModal";
import { UMENG_CHANNEL } from "@utility/constants";

const commonModels = require('@static/images/vip_promotion_models.png');
const sportBg = require('@static/images/vip_promotion_background.png');

interface Props {
  showCondition: boolean;
  onClose: any;
}

export const VipPromotionOverlay = ({ showCondition, onClose }: Props) => {
  const navigator = useNavigation();

  const handleOnPurchase = useCallback(() => {
    onClose();

    if (UMENG_CHANNEL == 'GOOGLE_PLAY') {
      navigator.navigate("付费Google");
    } else {
      navigator.navigate("付费VIP");
    }
  }, []);

  return (
    <Modal
      visible={showCondition}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <VipPromotionModal
            coverBackground={sportBg}
            coverImage={commonModels}
            onPurchase={handleOnPurchase}
            onClose={onClose}
            showCondition={showCondition}
          />
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
