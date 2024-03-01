import { Divider } from "@rneui/base"
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native"

interface yys_ConfigureUimanager {
  text1: string; 
  text2: string; 
  onPress: any; 
  containerStyle: ViewStyle;
}

export const VipPrivilegeFloatingIndicator = ({
  text1,
  text2,
  onPress,
  containerStyle,
}: yys_ConfigureUimanager) => {
  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.timerIndicatorContainer}>
          <Text
            numberOfLines={1}
            style={{...styles.indicatorText, color: '#FAC33D'}}>
            {text1}
          </Text>
          <Divider color="#FFFFFF33" orientation="vertical" width={1} />
          <Text
            numberOfLines={1}
            style={{...styles.indicatorText, color: '#FFFFFF'}}>
            {text2}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles= StyleSheet.create({
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
})