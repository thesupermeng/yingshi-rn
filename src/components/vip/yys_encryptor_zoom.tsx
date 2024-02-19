import EmptyList from "../common/yys_benefit";
import { VipHistoryCard } from "./yys_basketballplayerplaceholder_downarrow";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { yysFloaterIconsubssuccess } from "../../../yys_yellowscoreball_topon";
import { yysIconstar } from "@models";

interface yysIconarrowrightorangeStation {
  userState: yysIconstar;
}

export const VipHistoryList = ({ userState }: yysIconarrowrightorangeStation) => {
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    const historyData = userState.userPaidVipList.history;
    let historyList;
    let displayText;
    if (historyData) {
      historyList = historyData.map((history: any) => {
        displayText =
          "购买" +
          history.transaction_status_string.replace("支付", "") +
          history.product_name +
          "VIP (¥ " +
          history.product_price +
          ")";
        return {
          displayText: displayText,
          createdDate: history.start_date,
          vipDays: history.num_days,
          status: history.transaction_status,
        };
      });
      console.log("historyList");
      console.log(historyList);
      setHistoryList(historyList);
    }
  }, []);

  return (
    <>
      {historyList.length > 0 ? (
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
          {historyList.map((item, index) => {
            return <VipHistoryCard key={index} historyItem={item} />;
          })}
        </ScrollView>
      ) : (
        <>
          {yysFloaterIconsubssuccess.instance.showBecomeVip ? (
            <EmptyList description="暂无VIP记录" />
          ) : (
            <EmptyList description="暂无购买记录" />
          )}
        </>
      )}
    </>
  );
};
