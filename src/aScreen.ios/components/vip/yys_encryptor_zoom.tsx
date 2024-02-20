import EmptyList from "../common/yys_benefit";
import { VipHistoryCard } from "./yys_basketballplayerplaceholder_downarrow";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { yysFloaterIconsubssuccess } from "../../../../yys_yellowscoreball_topon";
import { yysIconstar } from "@models";

interface yysIconarrowrightorangeStation {
  userState: yysIconstar;
}

export const VipHistoryList = ({ userState }: yysIconarrowrightorangeStation) => {
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
          {yysFloaterIconsubssuccess.instance.showBecomeVip ? (
            <EmptyList description="暂无购买记录" />
          ) : (
            <EmptyList description="暂无VIP记录" />
          )}
        </>
      )}
    </>
  );
};