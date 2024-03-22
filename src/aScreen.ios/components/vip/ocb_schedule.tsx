import LinearGradient from "react-native-linear-gradient";
import { RootStackScreenProps } from "@type/vrm_thailand";
import ScreenContainer from "../container/ypy_fast";
import TitleWithBackButtonHeader from "../header/cio_news_types_header";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { VipNav } from "../tabNavigate/ppg_phone_country_view";
import { useEffect, useState } from "react";
import { VipHistoryList } from "./m_whistle";
import { VipInviteHistory } from "./bwz_type_phone";
import { SHOW_ZF_CONST } from "@utility/n_subs_interstitial";
import { KLongNext } from "../../../../z_search";

export const VipDetails = ({
  route,
  navigation,
}: RootStackScreenProps<"VIP明细">) => {
  const { textVariants, colors } = useTheme();
  const locations = [0, 1];

  let navOptions = [
    { id: 0, name: "邀请记录" },
    { id: 1, name:  KLongNext.instance.showBecomeVip ? "VIP记录" : "购买记录" },
  ];
  if (SHOW_ZF_CONST == false) {
    navOptions = [{ id: 0, name: "邀请记录" }];
  }

  const { userState } = route.params;
  const [accumulatedVipDays, setAccumulatedVipDays] = useState(0);

  useEffect(() => {
    let totalVipDays;
    totalVipDays =
      userState.userAccumulateRewardDay +
      userState.userPaidVipList.total_purchased_days;
    setAccumulatedVipDays(totalVipDays);
  }, []);

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader title="VIP明细" />
      <LinearGradient
        colors={["#323638", "#1a1d20"]} 
        locations={locations}
        style={styles.card}
      >
        <View style={styles.featureItem}>
          <Text style={{ ...textVariants.bigHeader }}>
            {accumulatedVipDays ? `${accumulatedVipDays}天` : "-"}
          </Text>
          <Text style={{ ...textVariants.small, color: colors.muted }}>
            累计VIP天数
          </Text>
        </View>

        <View style={styles.featureItem}>
          <Text style={{ ...textVariants.bigHeader }}>
            {userState.userTotalInvite ? userState.userTotalInvite : "-"}
          </Text>
          <Text style={{ ...textVariants.small, color: colors.muted }}>
            已邀请人数
          </Text>
        </View>

        {SHOW_ZF_CONST && (
          <View style={styles.featureItem}>
            <Text style={{ ...textVariants.bigHeader }}>
              {userState.userPaidVipList.total_purchased_amount
                ? userState.userPaidVipList.total_purchased_amount
                : "-"}
            </Text>
            <Text style={{ ...textVariants.small, color: colors.muted }}>
              购买总额 （CNY）
            </Text>
          </View>
        )}
      </LinearGradient>
      <VipNav
        tabList={navOptions.map((e) => ({
          id: e.id,
          title: e.name,
          name: e.name,
        }))}
        tabChildren={(tab) => (
          <>
            {tab.id === 1 ? (
              <VipHistoryList userState={userState} />
            ) : (
              <VipInviteHistory userState={userState} />
            )}
          </>
        )}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingLeft: 20,
    paddingRight: 0,
    paddingVertical: 15,
    marginHorizontal: 5,
    marginTop: 30,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  featureItem: {
    flex: 1,
    alignItems: "flex-start",
    gap: 5,
    marginBottom: 10,
    marginTop: 10,
  },
});
