import React, { useCallback, useState } from "react";
import { Text, View, ViewStyle } from "react-native";
import { Switch } from "react-native-switch"
import { useAppDispatch, useAppSelector } from "@hooks/ww_catagory_neon";
import { screenModel } from "@type/ww_jingdong_libavfilter";
import { acceptOverEighteen, disableAdultMode, disableWatchAnytimeAdultMode, enableAdultMode, enableWatchAnytimeAdultMode, hideAdultModeVip, showAdultModeDisclaimer, showAdultModeVip } from "@redux/actions/ww_hash";
import AdultSwitchON from '@static/images/unlockEmptyLibjsinspector.svg'
import AdultSwitchOFF from '@static/images/update_0PlusKuaishou.svg'

interface wwIndexDice{
  switchStyle: ViewStyle;
}



const AdultModeSwitch = ({switchStyle}: wwIndexDice) => {

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
