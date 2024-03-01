import {
  View,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import BackButton from "../button/yys_render_cast_button";

interface yys_ConfigureUimanager {
  title?: string;
  onBack?: any;
  headerStyle?: ViewStyle;
  right?: React.ReactNode;
}

export default function TitleWithBackButtonHeader({
  title,
  onBack,
  headerStyle,
  right,
}: yys_ConfigureUimanager) {
  const { textVariants } = useTheme();

  return (
    <View style={styles.container}>
      <BackButton btnStyle={styles.button} onPress={onBack}/>
      <Text
        style={{
          ...textVariants.header,
          ...styles.title,
          ...headerStyle
        }}
        numberOfLines={1}
      >
        {title}
      </Text>
      { right &&     
        <View style={styles.rightButton}>
          {right}
        </View>
      }       
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex', 
    flexDirection: 'row', 
    height: 40, 
  }, 
  title: {
    display: 'flex', 
    flex: 1, 
    position: 'absolute', 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '100%', 
    height: 30, 
    textAlign: 'center', 
    lineHeight: 30, 
    marginVertical: 10
  }, 
  button: {
    position: 'absolute', 
    width: 30, 
    height: 30,
    alignItems: 'center', 
    justifyContent: 'center', 
    zIndex: 20,
    marginVertical: 10
  }, 
  rightButton: {
    position: "absolute", 
    height: 30, 
    alignItems: 'center', 
    justifyContent: 'center', 
    right: 0, 
    marginVertical: 10
  }
});
