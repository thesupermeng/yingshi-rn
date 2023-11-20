
import { Divider } from "@rneui/base";
import { ReactNode, useState } from "react";
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import { Switch } from "react-native-switch"
import VipIndicator from "./vipIndicator";
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

  const [test, setTest] = useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.switch}>
        <Switch
          value={test}
          onValueChange={e => setTest(e)}
          backgroundInactive="transparent"
          activeText=""
          inActiveText=""
          switchBorderRadius={20}
          renderInsideCircle={() => <EighteenPlusText />}
          containerStyle={{
            borderWidth: 2,
            borderColor: !test ? 'white' : '#0000009E',
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
      <VipIndicator/>
    </View>
  );

}

const styles: Record<string, ViewStyle|TextStyle> = {
  container: {
    zIndex: 100, 
    
  }, 
  switch: {
    position: 'absolute',
    top: 25, 
    right: 20
  }
}

export default eighteenPlusControls; 