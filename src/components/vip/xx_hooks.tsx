import { Dialog } from "@rneui/themed";
import FastImage from "react-native-fast-image";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";

export const VipDialog = ({
  isDialogOpen, 
  isOffline, 
  isSuccess, 
  handleConfirm,
  dialogText,
}: {
  isDialogOpen: boolean, 
  isOffline:boolean, 
  isSuccess:boolean,
  handleConfirm: () => void,
  dialogText: string[],
  }) => {
    const { colors, textVariants, spacing } = useTheme();

    return (
        <Dialog
          isVisible={isDialogOpen && !isOffline}
          overlayStyle={{
            backgroundColor: "rgba(34, 34, 34, 1)",
            gap: 10,
            ...styles.overlay,
          }}
          backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        >
          <FastImage
            style={{
              height: 80,
              width: 80,
              marginRight: 5,
              position: "relative",
              top: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
            resizeMode={FastImage.resizeMode.contain}
            source={
              isSuccess
                ? require("@static/images/profile/description_oClubSingle.gif")
                : require("@static/images/profile/plashBootsplash.png")
            }
          />
          <View
            style={{
              alignItems: "center",
            }}
          >
            {dialogText.map((item, index) => (
                <Text key={index} style={{ ...styles.dialogText }}>
                  {item}
                </Text>
              ))}
            {/* {isSuccess ? (
              successDialogText.map((item, index) => (
                <Text key={index} style={{ ...styles.dialogText }}>
                  {item}
                </Text>
              ))
            ) : (
              failedDialogText.map((item, index) => (
                <Text key={index} style={{ ...styles.dialogText }}>
                  {item}
                </Text>
              ))
            )} */}
          </View>

          <TouchableOpacity
            style={{
              width: "80%",
              padding: 10,
              margin: 10,
              alignItems: "center",
              borderRadius: 10,
              backgroundColor: colors.primary,
            }}
            onPress={handleConfirm}
          >
            <Text style={{ ...styles.btnText }}>确定</Text>
          </TouchableOpacity>
        </Dialog>
    )
    }

const styles = StyleSheet.create({
  overlay: {
    borderRadius: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  dialogText: {
    color: "#fff",
    fontFamily: "PingFang SC",
    fontSize: 16,
    fontWeight: "400",
    textAlign: 'center',
  },
  btnText: {
    fontFamily: "PingFang SC",
    fontSize: 14,
    fontWeight: "700",
    color: "black",
  },
})