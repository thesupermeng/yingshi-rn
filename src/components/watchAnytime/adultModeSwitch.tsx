import React, { useCallback } from "react";
import { Text, View, ViewStyle } from "react-native";
import { useVip } from "./VipContext";
import { Switch } from "react-native-switch"

interface Props{
  switchStyle: ViewStyle;
}

const EighteenPlusText = () => 
  <Text
    style={{
      fontWeight: '900', 
      fontSize: 10
    }}
  >18+</Text>

const AdultModeSwitch = ({switchStyle}: Props) => {
  const {adultMode, toggleAdultMode, toggleShowVipModal, showDisclaimer, toggleShowDisclaimer} = useVip();

  const handleToggle = useCallback((e:boolean) => {
    if (e){ //if swtiching to true
      toggleShowDisclaimer(true)
    } else {
      toggleAdultMode(false)
      toggleShowVipModal(false)
    }
  }, [])

  return (
    <View style={switchStyle}>
      <Switch
            value={adultMode && !showDisclaimer}
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
