import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ScreenContainer from "../../components/container/screenContainer";
import { RootStackScreenProps } from "@type/navigationTypes";
import { useTheme } from "@react-navigation/native";
import { RootState } from "@redux/store";

import TitleWithBackButtonHeader from "../../components/header/titleWithBackButtonHeader";
import { Button } from "@rneui/themed";
import ShowMoreButton from "../../components/button/showMoreButton";
import Logo2 from "@static/images/logo2.svg";
import NotificationModal from "../../components/modal/notificationModal";
import {
  APP_EMAIL_CONST,
  APP_NAME_CONST,
  APP_VERSION,
} from "@utility/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNRestart from 'react-native-restart';

export default ({ navigation }: RootStackScreenProps<"关于我们">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [countToggleB, setCountToggleB] = useState(0);

  const toggleOverlay = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const spamToggleB = () => {
    setCountToggleB(countToggleB + 1);
  }

  const switchToggle = async () => {
    await AsyncStorage.setItem("access", "11111111");
    RNRestart.Restart();
  }

  useEffect(() => {
    if(countToggleB == 8){
      switchToggle();
    }
  }, [countToggleB])

  return (
    // footer={
    //   <Text
    //     style={{
    //       textAlign: 'center',
    //       ...textVariants.body,
    //       marginBottom: spacing.m,
    //     }}>
    //     contact.movie9@gmail.com
    //   </Text>
    // }
    <ScreenContainer>
      <View style={{ gap: spacing.m }}>
        <TitleWithBackButtonHeader title="关于我们" />
        <View style={styles.logo}>
          <Logo2 height={icons.sizes.xxl} width={icons.sizes.xxl} />
        </View>
        <TouchableOpacity activeOpacity={0.85} onPress={spamToggleB}>
          <Text style={{ textAlign: "center", ...textVariants.body }}>
            {APP_VERSION}
          </Text>
        </TouchableOpacity>
        <NotificationModal
          onConfirm={toggleOverlay}
          isVisible={isDialogOpen}
          title="版权声明"
          subtitle1={`如果该APP提供内容侵犯了您的版权, 请发送电子邮件说明, 我们将立即删除内容, 保护版权所有者的权益。`}
          subtitle2="联系邮箱:"
          subtitle3={APP_EMAIL_CONST}
        />
        <View>
          <ShowMoreButton
            text="隐私政策"
            onPress={() => navigation.navigate("隐私政策")}
          />
          <ShowMoreButton
            text="用户协议"
            onPress={() => navigation.navigate("用户协议")}
          />
          {/* <ShowMoreButton
            text="版权声明"
            onPress={() => setIsDialogOpen(!isDialogOpen)}
          /> */}
        </View>
      </View>
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
  logo: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  submitBtn: {
    borderRadius: 10,
  },
});
