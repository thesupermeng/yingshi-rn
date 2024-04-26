import React, { useCallback, useState } from "react";
import { Text, View, ViewStyle } from "react-native";
import { Switch } from "react-native-switch"
import { useAppDispatch, useAppSelector } from "@hooks/wawa_root";
import { screenModel } from "@type/wawa_rules";
import { acceptOverEighteen, disableAdultMode, disableWatchAnytimeAdultMode, enableAdultMode, enableWatchAnytimeAdultMode, hideAdultModeVip, showAdultModeDisclaimer, showAdultModeVip } from "@redux/actions/wawa_related";
import AdultSwitchON from '@static/images/dangerFinal_8hPredictionwin.svg'
import AdultSwitchOFF from '@static/images/airbnbstarselectedShareSingapore.svg'

interface wawaAwayShow{
  switchStyle: ViewStyle;
}



const AdultModeSwitch = ({switchStyle}: wawaAwayShow) => {

  const screenState: screenModel = useAppSelector(
    ({screenReducer}) => screenReducer
  )
  const dispatch = useAppDispatch()

  const {adultMode, adultModeDisclaimerShow, isOverEighteenAccepted, watchAnytimeAdultMode} = screenState

  const handleToggle = useCallback((e:boolean) => {
    if (e){ 
      dispatch(enableWatchAnytimeAdultMode()) 
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
            value={watchAnytimeAdultMode}
            onValueChange={handleToggle}
            backgroundInactive={"transparent"}
            activeText=""
            inActiveText=""
            switchBorderRadius={20}
            renderInsideCircle={() => {
              if (watchAnytimeAdultMode) return <AdultSwitchON />
              else return <AdultSwitchOFF />
            }}
            containerStyle={{
              borderWidth: 2,
              borderColor: !watchAnytimeAdultMode ? 'white' : '#0000009E',
            }}
            barHeight={27}
            switchLeftPx={5}
            switchRightPx={5}
            backgroundActive="#0000009E"
            
            circleBorderWidth={0}
            circleSize={22}
            innerCircleStyle={{backgroundColor: '#ff000000', alignItems: "center", justifyContent: "center"}}
          />

    </View>
  )
}

export default AdultModeSwitch
