import React, { useCallback } from "react";
import { Modal, TouchableWithoutFeedback, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import VipLoginAlertModal from "./vipLoginAlertModal";
import { UMENG_CHANNEL } from "@utility/constants";
import { showLoginAction } from "@redux/actions/screenAction";
import { useAppDispatch } from "@hooks/hooks";
import { loginModalShown } from "@redux/actions/backgroundAction";

const commonModels = require('@static/images/vip_promotion_models.png');
const sportBg = require('@static/images/vip_promotion_background.png');

interface Props {
  showCondition: boolean;
  onClose: any;
}

export const VipLoginAlertOverlay = ({ showCondition, onClose }: Props) => {
  const navigator = useNavigation();
  const dispatch = useAppDispatch();

  const onCloseModal = () => {
    onClose();
    dispatch(loginModalShown());
  }

  const handleOnPurchase = useCallback(() => {
    onClose();
    dispatch(loginModalShown());
    dispatch(showLoginAction());
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
      onRequestClose={onCloseModal}
    >
      <TouchableWithoutFeedback onPress={onCloseModal}>
        <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
          <VipLoginAlertModal
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
