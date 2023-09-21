import { useTheme } from "@react-navigation/native";
import { Dialog } from "@rneui/themed";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";


interface Props {
    onAccept: () => any;
    onReject: () => any;
    title: string;
    description: any;
    isVisible: boolean;
}

export default function PrivacyPolicyDialog({
    title,
    description,
    isVisible,
    onAccept,
    onReject,
}: Props){
  const { spacing, textVariants, colors } = useTheme();

  return <Dialog
    isVisible={isVisible}
    overlayStyle={{backgroundColor: 'rgba(34, 34, 34, 1)', ...styles.overlay}}
    backdropStyle={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
  >
    <View style={{gap: spacing.l}}>
      <Text style={{...textVariants.header, textAlign: 'center'}}>{title}</Text>
      <Text
        style={{
          ...textVariants.subBody,
          textAlign: 'center',
        }}>
          {description}
      </Text>
      <View style={styles.btns}>
        <TouchableOpacity style={styles.btn} onPress={onReject}>
          <Text
            style={{
              ...textVariants.body,
              ...styles.head,
            }}>
            暂不同意
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={onAccept}>
          <Text
            style={{
              ...textVariants.body,
              ...styles.head,
              color: colors.primary,
            }}>
            同意并接受
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    
  </Dialog>
}

const styles = StyleSheet.create({
  overlay: {
    borderRadius: 14,
  },
  head: {
    textAlign: 'center',
  },
  body: {
    color: 'white',
  },
  link: {
    display: 'flex',
  },
  btns: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    flex: 1,
  },
});