
import { Divider } from "@rneui/base";
import { ReactNode, useCallback, useState } from "react";
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import { Switch } from "react-native-switch"
import VipIndicator from "./vipIndicator";
import WatchAnytimeVipModal from "./watchAnytimeVipModal";
import { useVip } from "./VipContext";
import EighteenPlusOverlay from "../modal/overEighteenOverlay";
import CountdownIndicator from "../button/countdownIndicator";
interface Props {
  
}

const EighteenPlusText = () => 
  <Text
    style={{
      fontWeight: '900', 
      fontSize: 10
    }}
  >18+</Text>

const eighteenPlusControls = ({}: Props) => {
  const {showModal, adultMode, toggleAdultMode, countdownTimer} = useVip();
  const [promptDisclaimer, setPromptDisclaimer] = useState(false);


  const handleToggle = useCallback((e:boolean) => {
    if (e){ //if swtiching to true
      setPromptDisclaimer(true)
    } else {
      toggleAdultMode(false)
    }
  }, [])

  return (
    <View style={{...styles.container, height: (showModal || promptDisclaimer ? '100%' : 'auto')}}>
      {showModal &&
        <WatchAnytimeVipModal/>    
      }
      <View style={styles.switch}>
        <Switch
          value={adultMode && !promptDisclaimer}
          onValueChange={handleToggle}
          backgroundInactive="transparent"
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
      <CountdownIndicator
        timer={countdownTimer}
        onClickVip={() => {}}
        vipButtonText="开通VIP畅享无限内容"
        containerStyle={{
          position: 'absolute', 
          top: 70, 
          right: 20, 
          flex: 1
        }}
      />
      {promptDisclaimer && 
        <EighteenPlusOverlay
          handleAccept={() => {
            console.debug('accepted 18+')
            setPromptDisclaimer(false)
            toggleAdultMode(true)
            }}
          handleReject={() => {
            console.debug('rejected 18+')
            toggleAdultMode(false)
            setPromptDisclaimer(false)
          }}
        />
      }
    </View>
  );

}

const styles: Record<string, ViewStyle|TextStyle> = {
  container: {
    zIndex: 100, 
    width: '100%',
    position: 'absolute'
  }, 
  switch: {
    position: 'absolute',
    top: 25, 
    right: 20
  }
}

export default eighteenPlusControls; 