import { Divider } from "@rneui/base"
import { View, TouchableOpacity, Text, TextStyle, ViewStyle } from "react-native"

const VipIndicator = () => {
  return (
    <TouchableOpacity style={styles.timerIndicatorContainer}>
      <Text numberOfLines={1} style={{...styles.indicatorText, color: '#FFFFFF'}}>
        试看01:00后结束
      </Text>
      <Divider color="#FFFFFF33" orientation="vertical" width={1} />
      <Text numberOfLines={1} style={{...styles.indicatorText, color: '#FAC33D'}}>
        开通VIP畅享无限内容
      </Text>
    </TouchableOpacity>
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
    position: 'absolute', 
    top: 70, 
    right: 20, 
    flex: 1
  }, 
  indicatorText: {
    fontSize: 14, 
  }, 
}

export default VipIndicator;