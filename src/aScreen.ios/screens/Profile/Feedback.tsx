import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Platform } from "react-native";
import ScreenContainer from "../../components/container/screenContainer";
import { RootStackScreenProps } from "@type/navigationTypes";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { RootState } from "@redux/store";
// import NetInfo from '@react-native-community/netinfo';
import TitleWithBackButtonHeader from "../../components/header/titleWithBackButtonHeader";
import { Button, Dialog } from "@rneui/themed";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import FeedbackSuccessIcon from "@static/images/feedback_success.svg";
import axios from "axios";
import { SubmitFeedbackRequest } from "@type/ajaxTypes";
import { Keyboard } from "react-native";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
  UMENG_CHANNEL,
  YING_SHI_PRODUCT_IOS,
  YING_SHI_PRODUCT_ANDROID,
  IS_OTHER_SKIN,
} from "@utility/constants";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { SettingsReducerState } from "@redux/reducers/settingsReducer";
import { useAppSelector } from "@hooks/hooks";
import { YSConfig } from "../../../../ysConfig";
import { FeedbackApi } from "@api";
import FastImage from "../../components/common/customFastImage";
import { CLangKey } from "@constants";

export default ({ navigation }: RootStackScreenProps<"反馈">) => {
  const { colors, textVariants, icons } = useTheme();
  const [text, setTextInput] = React.useState("");
  const [feedbackCategory, setFeedbackCategory] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [dialogText, setDialogText] = React.useState(CLangKey.feedbackSuccessSent.tr());
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const [platformId, setPlatformId] = React.useState(0);

  const [isOffline, setIsOffline] = useState(false);

  const settingsReducer: SettingsReducerState = useAppSelector(
    ({ settingsReducer }: RootState) => settingsReducer
  );

  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);

    if (Platform.OS === "ios") {
      setPlatformId(YING_SHI_PRODUCT_IOS);
    } else {
      setPlatformId(YING_SHI_PRODUCT_ANDROID);
    }
  }, []);

  useFocusEffect(useCallback(() => {
    if (!settingsReducer.isOffline) {
      setIsOffline(settingsReducer.isOffline);
    } else {
      return () => {
        setIsOffline(settingsReducer.isOffline);
      }
    }
  }, [settingsReducer.isOffline]));

  const submitFeedback = async (data: SubmitFeedbackRequest) => {
    if (!isOffline) {
      const result = FeedbackApi.postFeedback(data);

      setDialogText(CLangKey.feedbackSuccessSent.tr());
      Keyboard.dismiss();
      setIsDialogOpen(true);

      return result;
    } else {
      setDialogText(CLangKey.noNetworkDetect.tr());
      Keyboard.dismiss();
      setIsDialogOpen(true);
    }
  };

  function sendFeedbackHandler() {
    const body: SubmitFeedbackRequest = {
      email: email,
      feedback_category: feedbackCategory,
      feedback: text,
      platform_id: platformId,
      ip_address: YSConfig.instance.ip
    };

    submitFeedback(body);
  }

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader title={CLangKey.iWantFeedback.tr()} />
      <View style={{ marginTop: 30, marginBottom: 20 }}>
        <Text style={{ ...textVariants.header, marginBottom: 20 }}>
          {CLangKey.problemFeedback.tr()}:
        </Text>
        <TextInput
          style={{
            ...styles.input,
            backgroundColor: colors.card2,
            ...textVariants.body,
          }}
          onChangeText={setTextInput}
          placeholder={CLangKey.describeYourProblemAndSuggess.tr()}
          editable
          multiline
          placeholderTextColor={colors.muted}
          value={text}
          rows={8}
          maxLength={1000}
          textAlignVertical="top"
          blurOnSubmit
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          setTextInput("");
          sendFeedbackHandler();
        }}
      >
        <View
          style={{
            ...styles.submitBtn,
            backgroundColor: text ? colors.primary : colors.card2,
          }}
        >
          <Text
            style={{
              ...textVariants.body,
              fontWeight: "600",
              color: text ? colors.primaryContrast : colors.muted,
            }}
          >
            {CLangKey.submit.tr()}
          </Text>
        </View>
      </TouchableOpacity>
      <Dialog
        isVisible={isDialogOpen}
        overlayStyle={{
          backgroundColor: "rgba(34, 34, 34, 1)",
          ...styles.overlay,
        }}
        backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        onBackdropPress={() => setIsDialogOpen(false)}
      >
        {!isOffline && IS_OTHER_SKIN
          ? <FastImage
            source={require("@static/images/feedback_success.gif")}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
          : <FeedbackSuccessIcon />
        }

        <Text style={{ ...textVariants.bigHeader, textAlign: 'center' }}>{dialogText}</Text>
      </Dialog>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  topNav: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    // borderBottomWidth: 1,
    height: 200,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 10,
  },
  submitBtn: {
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    borderRadius: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
