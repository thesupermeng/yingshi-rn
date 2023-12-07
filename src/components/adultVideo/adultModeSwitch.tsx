import React, { useCallback, useState } from "react";
import { Text, View, ViewStyle } from "react-native";
import { Switch } from "react-native-switch"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { screenModel } from "../../types/screenType";
import { acceptOverEighteen, disableAdultMode, disableWatchAnytimeAdultMode, enableAdultMode, enableWatchAnytimeAdultMode, hideAdultModeVip, showAdultModeDisclaimer, showAdultModeVip } from "@redux/actions/screenAction";

interface Props{
  switchStyle: ViewStyle;
}

const EighteenPlusText = () => 
  <Text
    style={{
      fontWeight: '900', 
      fontSize: 10, 
      color: 'black'
    }}
  >18+</Text>

const AdultModeSwitch = ({switchStyle}: Props) => {

  const screenState: screenModel = useAppSelector(
    ({screenReducer}) => screenReducer
  )
  const dispatch = useAppDispatch()

  const {adultMode, adultModeDisclaimerShow, isOverEighteenAccepted, watchAnytimeAdultMode} = screenState

  const handleToggle = useCallback((e:boolean) => {
    if (e){ //if swtiching to true
      if (isOverEighteenAccepted){
        dispatch(enableAdultMode())
        dispatch(hideAdultModeVip())
        dispatch(enableWatchAnytimeAdultMode())
      } else {
        dispatch(showAdultModeDisclaimer())
      }

    } else {
      dispatch(disableAdultMode())
      dispatch(hideAdultModeVip())
      dispatch(disableWatchAnytimeAdultMode())
    }
  }, [isOverEighteenAccepted])

  return (
    <View style={switchStyle}>
      <Switch
            value={adultMode && watchAnytimeAdultMode}
            onValueChange={handleToggle}
            backgroundInactive={"transparent"}
            activeText=""
            inActiveText=""
            switchBorderRadius={20}
            renderInsideCircle={() => <EighteenPlusText />}
            containerStyle={{
              borderWidth: 2,
              borderColor: !adultMode ? 'white' : '#0000009E',
            }}
            barHeight={27}
            switchLeftPx={5}
            switchRightPx={5}
            backgroundActive="#0000009E"
            circleActiveColor="#FAC33D"
            circleBorderWidth={0}
            circleSize={20}
          />

    </View>
  )
}

export default AdultModeSwitch
