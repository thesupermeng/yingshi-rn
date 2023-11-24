import { ViewStyle } from "react-native";
import CountdownIndicator from "../button/countdownIndicator";
import { userModel } from "../../types/userType";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { screenModel } from "../../types/screenType";
import { ADULT_MODE_PREVIEW_DURATION } from "../../utility/constants";
import { showAdultModeVip } from "../../redux/actions/screenAction";

interface Props {
  containerStyle: ViewStyle;
}

const AdultModeCountdownIndicator = ({containerStyle}: Props) => {
  const userState: userModel = useAppSelector(
    ({ userReducer }) => userReducer
  );
  const screenState: screenModel = useAppSelector(
    ({screenReducer}) => screenReducer
  )
  const dispatch = useAppDispatch()

  const {adultVideoWatchTime, adultMode} = screenState
  const isVip = !(Number(userState.userMemberExpired) <=
                  Number(userState.userCurrentTimestamp) ||
                  userState.userToken === "")
  const countdownTimer = ADULT_MODE_PREVIEW_DURATION - adultVideoWatchTime

  if (adultMode && !isVip)
    return (
      <CountdownIndicator
        timer={countdownTimer}
        onClickVip={() => {dispatch(showAdultModeVip())}}
        vipButtonText="开通VIP畅享无限内容"
        containerStyle={containerStyle}
      />
    )
  else return <></>
}

export default AdultModeCountdownIndicator;