import EmptyList from "../common/tt_logo_desc";
import { VipHistoryCard } from "./tt_drag";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { ttConfigRecommendation } from "../../../../tt_copy_floater";
import { ttFast } from "@models/tt_stations_right";

interface ttSmall {
  userState: ttFast;
}

export const VipHistoryList = ({ userState }: ttSmall) => {
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
          {ttConfigRecommendation.instance.showBecomeVip ? (
            <EmptyList description="暂无购买记录" />
          ) : (
            <EmptyList description="暂无VIP记录" />
          )}
        </>
      )}
    </>
  );
};
