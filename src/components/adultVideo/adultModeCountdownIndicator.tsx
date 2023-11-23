import { ViewStyle } from "react-native";
import CountdownIndicator from "../button/countdownIndicator";
import { useAdultVideoContext } from "../../contexts/AdultVideoContext";

interface Props {
  containerStyle: ViewStyle;
}

const AdultModeCountdownIndicator = ({containerStyle}: Props) => {
  const {countdownTimer, toggleShowVipModal, adultMode} = useAdultVideoContext();

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