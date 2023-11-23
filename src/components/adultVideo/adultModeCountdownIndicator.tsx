import { ViewStyle } from "react-native";
import CountdownIndicator from "../button/countdownIndicator";
import { useAdultVideoContext } from "../../contexts/AdultVideoContext";
import { userModel } from "../../types/userType";
import { useAppSelector } from "../../hooks/hooks";

interface Props {
  containerStyle: ViewStyle;
}

const AdultModeCountdownIndicator = ({containerStyle}: Props) => {
  const userState: userModel = useAppSelector(
    ({ userReducer }) => userReducer
  );
  const {countdownTimer, toggleShowVipModal, adultMode} = useAdultVideoContext();
  const isVip = !(Number(userState.userMemberExpired) <=
                  Number(userState.userCurrentTimestamp) ||
                  userState.userToken === "")

  // if (adultMode && !isVip)
  if (false)
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