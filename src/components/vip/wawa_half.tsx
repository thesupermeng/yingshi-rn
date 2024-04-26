import EmptyList from "../common/wawa_othermatchdetailbg_videocommon";
import { VipHistoryCard } from "./wawa_telegram";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { wawaBasketballiconPenaltyshootnogoal } from "../../../wawa_shareblack_orientation";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";

interface wawaAwayShow {
  userState: wawaLibglog;
}

export const VipHistoryList = ({ userState }: wawaAwayShow) => {
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    const historyData = userState.userPaidVipList.history;
    let historyList;
    let displayText;
    if (historyData) {
      historyList = historyData.map((history: any) => {
        displayText = history.product_name_2 
        return {
          displayText: displayText,
          createdDate: history.start_date,
          vipDays: history.num_days,
          status: history.transaction_status,
          transactionNo: history.transaction_no,
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
          {wawaBasketballiconPenaltyshootnogoal.instance.showBecomeVip ? (
            <EmptyList description="暂无VIP记录" />
          ) : (
            <EmptyList description="暂无购买记录" />
          )}
        </>
      )}
    </>
  );
};
