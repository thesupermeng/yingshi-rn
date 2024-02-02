import { useNavigation } from "@react-navigation/native";
import VipPromotionModal from "./vipPromotionModal"
import { useCallback } from "react";
import { UMENG_CHANNEL } from "@utility/constants";

const commonModels = require('@static/images/vip_promotion_models.png');
const sportBg = require('@static/images/vip_promotion_background.png');

interface Props {
  showCondition: boolean;
  onClose: any;
}

export const VipPromotionOverlay = ({ showCondition, onClose, }: Props) => {

  const navigator = useNavigation()

  const handleOnPurchase = useCallback(() => {
    if (UMENG_CHANNEL == 'GOOGLE_PLAY')
    {
      navigator.navigate("付费Google");
    }
    else
    {
      navigator.navigate("付费VIP");
    }
  }, [])

  return (
    <VipPromotionModal
      coverBackground={sportBg}
      coverImage={commonModels}
      onPurchase={handleOnPurchase}
      onClose={onClose}
      showCondition={showCondition}
    />
  )
}