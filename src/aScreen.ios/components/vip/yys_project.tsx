import EmptyList from "../common/yys_goal_utils";
import { VipHistoryCard } from "./yys_alert";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { yys_MinivodPangle } from "../../../../yys_mimo_vignette";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";

interface yys_ConfigureUimanager {
  userState: yys_RelatedTooltips;
}

export const VipHistoryList = ({ userState }: yys_ConfigureUimanager) => {
  const [purchaseList, setPurchaseList] = useState([]);

  useEffect(() => {
    const historyData = userState.userPaidVipList.history;
    let historyList;
    let displayText;
    if (historyData) {
      historyList = historyData.map((history: any) => {
        displayText =
          "购买成功" +
          history.product_name +
          "VIP (¥ " +
          history.product_price +
          ")";
        return {
          displayText: displayText,
          createdDate: history.start_date,
          vipDays: history.num_days,
        };
      });
      console.log("historyList");
      console.log(historyList);
      setPurchaseList(historyList);
    }
  }, []);

  return (
    <>
      {purchaseList.length > 0 ? (
        <ScrollView
          style={{
            marginHorizontal: 5,
            marginBottom: 20,
            borderRadius: 15,
            flexGrow: 0,
            overflow: "hidden",
          }}
          contentContainerStyle={{ borderRadius: 15, overflow: "hidden" }}
          showsVerticalScrollIndicator={false}
        >
          {purchaseList.map((item, index) => {
            return <VipHistoryCard key={index} historyItem={item} />;
          })}
        </ScrollView>
      ) : (
        <>
          {yys_MinivodPangle.instance.showBecomeVip ? (
            <EmptyList description="暂无购买记录" />
          ) : (
            <EmptyList description="暂无VIP记录" />
          )}
        </>
      )}
    </>
  );
};
