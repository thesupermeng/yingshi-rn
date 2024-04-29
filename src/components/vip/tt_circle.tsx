import { ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import EmptyList from "../common/tt_logo_desc";
import { VipHistoryCard } from "./tt_drag";
import { ttFast } from "@models/tt_stations_right";

interface ttSmall {
  userState: ttFast;
}

export const VipInviteHistory = ({ userState, }: ttSmall) => {
  const [inviteList, setInviteList] = useState([]);

  useEffect(() => {
    
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
        displayText = item.title;
      }

      return {
        displayText: displayText,
        createdDate: item.created_at,
        vipDays: item.invited_vip_reward_day,
        status: 1,
      };
    });
    console.log('mergedArray');
    console.log(mergedArray);
    setInviteList(mergedArray);
  }, []);

  return (
    <>
      {inviteList.length > 0 ?
        <ScrollView
          style={{
            marginHorizontal: 5,
            marginBottom: 30,
            borderRadius: 15,
            flexGrow: 0,
            overflow: 'hidden',
          }}
          contentContainerStyle={{ borderRadius: 15, overflow: 'hidden' }}
          showsVerticalScrollIndicator={false}
        >
          {inviteList.map((item, index) => {
            return <VipHistoryCard key={index} historyItem={item} />
          })}
        </ScrollView> :
        <EmptyList description="暂无邀请记录" />
      }
    </>
  );
};