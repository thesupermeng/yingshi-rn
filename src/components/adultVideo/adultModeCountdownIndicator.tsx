import { ViewStyle } from "react-native";
import CountdownIndicator from "../button/countdownIndicator";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/hooks";
import { screenModel } from "@type/screenType";
import { ADULT_MODE_PREVIEW_DURATION } from "@utility/constants";
import { incrementAdultVideoWatchTime, showAdultModeVip } from "@redux/actions/screenAction";
import { memo, useCallback, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { UserStateType } from "@redux/reducers/userReducer";
import { User } from "@models";

interface Props {
  containerStyle: ViewStyle;
}

const AdultModeCountdownIndicator = ({ containerStyle }: Props) => {
  const userState = useSelector<UserStateType>('userReducer');
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  )
  const dispatch = useAppDispatch()

  const { adultVideoWatchTime, adultMode } = screenState
  const isVip = true//User.isVip(userState.user);

  useFocusEffect(
    useCallback(() => {
      let interval: any;
      if (adultMode && !isVip) {
        interval = setInterval(() => {
          dispatch(incrementAdultVideoWatchTime());
        }, 1000);
      }
      return () => clearInterval(interval);
    }, [adultMode, isVip]),
  );

  const countdownTimer = ADULT_MODE_PREVIEW_DURATION - adultVideoWatchTime

  if (adultMode && !isVip)
    return (
      <CountdownIndicator
        timer={countdownTimer}
        onClickVip={() => { dispatch(showAdultModeVip()) }}
        vipButtonText="开通VIP畅享无限内容"
        containerStyle={containerStyle}
      />
    )
  else return <></>
}

export default memo(AdultModeCountdownIndicator);