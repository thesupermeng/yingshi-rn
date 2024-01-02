import { ScrollView, View } from "react-native";
import { userModel } from "@type/userType";
import { useEffect, useState } from "react";
import EmptyList from "../common/emptyList";
import { VipHistoryCard } from "./vipHistoryCard";

interface Props {
  userState: userModel;
}

export const VipInviteHistory = ( {userState,}: Props ) => {
  const [inviteList, setInviteList] = useState([]);

  useEffect(() => {
    // Merge the two arrays
    let mergedArray;

    if (userState.userUpline.created_at != '') {
      mergedArray = userState.userInvitedUserList.concat(userState.userUpline);
    } else {
      mergedArray = userState.userInvitedUserList;
    }

    mergedArray.sort((a: any, b: any) => {
      let dateA: any;
      dateA = new Date(a.created_at);
      let dateB: any;

      dateB = new Date(b.created_at);
      return dateB - dateA;
    });

    mergedArray = mergedArray.map((item: any) => {
      let displayText = '';
      if (item.text) {
        displayText = item.text;
        item.invited_vip_reward_day = item.vip_reward_day;
      } else {
        displayText = item.user_name + '接受了您的邀请';
      }

      return {
        displayText: displayText, 
        createdDate: item.created_at, 
        vipDays: item.invited_vip_reward_day
      };
    });
    console.log('mergedArray');
    console.log(mergedArray);
    setInviteList(mergedArray);
  }, []);

  return (
    <>
      {inviteList.length > 0  ? 
        <ScrollView
          style={{ 
            marginHorizontal: 5,
            marginBottom: 30,
            borderRadius: 15,
            flexGrow: 0,
            overflow: 'hidden',
          }}
          contentContainerStyle={{borderRadius: 15, overflow: 'hidden'}}
          showsVerticalScrollIndicator={false}
        >
          {inviteList.map((item, index) => {
            return <VipHistoryCard key={index} historyItem={item}/>
          })}
        </ScrollView> :
        <EmptyList description="暂无邀请记录" />
      }
    </>
  );
};