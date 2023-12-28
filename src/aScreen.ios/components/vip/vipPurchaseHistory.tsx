import { Text, View } from "react-native";
import EmptyList from "../common/emptyList";
import { VipHistoryCard } from "./vipHistoryCard";
import { useTheme } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { userModel } from "@type/userType";
import { useEffect, useState } from "react";
import { vipHistoryResponseType } from "@type/membershipType";

interface Props {
  userState: userModel;
}

export const VipPurchaseHistory = ( {userState,}: Props ) => {
  const { textVariants, colors } = useTheme();
  const [purchaseList, setPurchaseList] = useState([]);

  useEffect(() => {
    const historyData = userState.userPaidVipList.history;
    let historyList;
    let displayText;
    if(historyData){
      historyList = historyData.map((history: any) => {
        displayText = '购买成功' + history.product_name + 'VIP (¥ ' + history.product_price + ')'
        return {
          displayText: displayText,
          createdDate: history.start_date,
          vipDays: history.num_days,
        };
      });
      console.log('historyList');
      console.log(historyList);
      setPurchaseList(historyList);
    }
  },[]);
  
  return (
    <>
      {purchaseList.length > 0  ? 
        <ScrollView
          style={{ 
            marginHorizontal: 5,
            marginBottom: 20,
            borderRadius: 15,
            flexGrow: 0,
            overflow: 'hidden',
          }}
          contentContainerStyle={{borderRadius: 15, overflow: 'hidden'}}
          showsVerticalScrollIndicator={false}
        >
          {purchaseList.map((item, index) => {
            return <VipHistoryCard key={index} historyItem={item}/>
          })}
        </ScrollView> :
        <EmptyList description="暂无购买记录" />
      }
    </>
  )
}
