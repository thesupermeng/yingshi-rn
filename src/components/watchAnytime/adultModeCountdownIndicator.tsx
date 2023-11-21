import { ViewStyle } from "react-native";
import CountdownIndicator from "../button/countdownIndicator";
import { useVip } from "./VipContext";

interface Props {
  containerStyle: ViewStyle;
}

const AdultModeCountdownIndicator = ({containerStyle}: Props) => {
  const {countdownTimer, toggleShowVipModal, adultMode} = useVip();

  if (adultMode)
    return (
      <CountdownIndicator
        timer={countdownTimer}
        onClickVip={() => toggleShowVipModal(true)}
        vipButtonText="开通VIP畅享无限内容"
        containerStyle={containerStyle}
      />
    )
  else return <></>
}

export default AdultModeCountdownIndicator;