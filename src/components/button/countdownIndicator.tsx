import { Divider } from "@rneui/base";
import { View, Text, TouchableOpacity, ViewStyle, TextStyle } from "react-native";

interface Props {
  timer: number; //number of seconds left
  onClickVip: (...args: any) => void
  vipButtonText: string;
  containerStyle: ViewStyle;
}

const formatTimer = (numOfSeconds: number) => {
  
  const minutes = Math.floor(numOfSeconds / 60)
  const seconds = numOfSeconds % 60
  
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

const CountdownIndicator = ({timer, onClickVip, vipButtonText, containerStyle}:Props) =>{
  return (
    <View style={containerStyle}>
      <View style={styles.timerIndicatorContainer}>
        <Text numberOfLines={1} style={{...styles.indicatorText, color: '#FFFFFF'}}>
          {
            timer >= 0 ? 
            `试看${formatTimer(timer)}后结束` : 
            "试看结束"
          }
        </Text>
        <Divider color="#FFFFFF33" orientation="vertical" width={1} />
        <TouchableOpacity
          onPress={onClickVip}
        >
          <Text numberOfLines={1} style={{...styles.indicatorText, color: '#FAC33D'}}>
            {vipButtonText}
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles: Record<string, ViewStyle|TextStyle> = {
  timerIndicatorContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.60)', 
    borderRadius: 4, 
    display: 'flex', 
    flexDirection: 'row', 
    gap: 3, 
    paddingVertical: 4, 
    paddingHorizontal: 5, 
    flex: 1
  }, 
  indicatorText: {
    fontSize: 14, 
  }, 
}

export default CountdownIndicator;