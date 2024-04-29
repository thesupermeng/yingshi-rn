import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenContainer from "../../components/container/tt_backward";
import { RootStackScreenProps } from "@type/tt_temperature";
import TitleWithBackButtonHeader from "../../components/header/tt_typing_tail_header";

import { useTheme } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { APP_NAME_CONST } from "@utility/tt_trophy_cross";

export default ({ navigation }: RootStackScreenProps<"续费服务">) => {
  const { textVariants, spacing } = useTheme();

  return (
    <ScreenContainer>
      <View style={{ gap: spacing.m, height: '100%' }}>
        <TitleWithBackButtonHeader title="自动续费服务规则" />
        <ScrollView>
          <Text
            style={{
              ...textVariants.header,
              textAlign: "center",
              paddingBottom: 10,
            }}
          >
            {APP_NAME_CONST}自动续费服务规则
          </Text>
          <Text style={textVariants.body}>
            {`《${APP_NAME_CONST}自动续费服务规则》\n\n` +
              `本规则被视为《${APP_NAME_CONST}用户服务协议》的补充协议，是其不可分割的组成部分，与其构成统一整体。如本规则与《${APP_NAME_CONST}用户服务协议》存在冲突的，以本规则为准。\n` +
              `您点击订阅、开通及使用${APP_NAME_CONST}会员自动续费服务（以下称“本自动续费服务”），则视为您同意本规则。\n` +
              `您理解并同意：\n` +
              `1. 如您开通本自动续费服务，且在订阅期内未主动明确取消本自动续费服务，则相关主体将在每个订阅期到期当天和到期后，从您开通本自动续费服务时绑定的自有充值账户、绑定的第三方支付账户（如微信支付、QQ钱包）等账户（以下统称“账户”）余额中自动代扣下一个订阅期服务费，从而延长该订阅期对应的会员有效期。部分订阅（如苹果应用内支付（IAP: in-app purchase）、手机话费支付等）由运营商或苹果公司根据实际情况自行决定扣费周期，请以实际扣费时间为准。您应关注上述账户及可扣款余额状况，如因账户问题或余额不足导致续费失败等风险及/或损失将由您自行承担。\n` +
              `2. 订阅期：1个月、3个月、1年等（以订阅页面设置为准），会员可自行选择。\n` +
              `3. 开通自动续费服务后，会在每个计费周期到期前24小时，自动在绑定账户扣费并延长该计费周期对应的会员有效期。一旦扣款成功，则来画有权即时收取该费用，并不提供退费服务。\n` +
              `4. 苹果应用内支付（IAP支付，in-app purchase）自动续费用户退订方法如下：\n` +
              `打开苹果手机“设置” --> 进入“iTunes Store 与 App Store”-->点击 “Apple ID”，选择"查看Apple ID"，进入"账户设置"页面，点击“订阅”，选择来画视频取消订阅即可。如未在计费周期到期前至少24小时前取消自动续费功能，将会自动续订及扣款。\n` +
              `5. Google Pay 的自动续费用户退订方法如下：\n` +
              `在 Android 设备上，进入Play Store，前往 Google Play的订阅部分，选择要取消的订阅，点按取消订阅，最后按照说明操作。重要提示：卸载应用后，您的订阅不会取消。\n` +
              `6. 安卓第三方支付（微信支付、支付宝支付）自动续费用户退订方法如下：\n` +
              `微信支付自动续费用户退订方法：在“微信”APP中，点击“我”，选择“支付”，点击右上角“设置”图标，选择“自动扣费”，选择“来画视频VIP自动续费”进行关闭服务，关闭后服务到期将不再自动续费。支付宝支付自动续费用户退订方法：在“支付宝”APP中，选择“我的”选择“设置”选择“支付设置”选择“免密支付/自动扣款”中选择来画视频关闭自动续费，关闭后服务到期将不再自动续费。\n` +
              `7. 取消自动续费服务后，在下一个计费周期将不再自动扣费。如您系未在计费周期到期前24小时取消自动续费功能的，系统将会自动续费一个月及扣款。\n`
            }
          </Text>
        </ScrollView>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  text: {},
});
