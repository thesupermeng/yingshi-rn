import React, { useCallback } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import VipIcon from '@static/images/vip-icon.svg'
import MoreArrow from '@static/images/more_arrow.svg'
import { useAppDispatch, useAppSelector } from "@hooks/hooks"
import { userModel } from "../../types/userType"
import { showAdultModeVip } from "@redux/actions/screenAction"
import { useNavigation } from "@react-navigation/native"


const VipRegisterBar = () => {
  const dispatch = useAppDispatch()
  const navigator = useNavigation()
  const handleOnPress = useCallback(() => {
    navigator.navigate('邀请');
  }, [])
  const userState: userModel = useAppSelector(
    ({ userReducer }) => userReducer
  );
  const isVip = !(Number(userState.userMemberExpired) <=
                  Number(userState.userCurrentTimestamp) ||
                  userState.userToken === "")
  if (!isVip)
    return (
      <LinearGradient
        colors={['#191F25', '#222528']}
        start={{x: 0.12, y: 0.12}}
        end={{x: 0.9, y: 0.9}}
        angle={269}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between', 
          alignItems: 'center',
          paddingHorizontal: 15,
          paddingVertical: 11,
        }}>
        <View style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
          <VipIcon width={24} height={24}/>
          <View>
            <Text style={{color: '#FFE6A5', textShadowColor: 'rgba(0, 0, 0, 0.15)', fontWeight: '600', fontSize: 14, textShadowOffset: {height:0, width: 4}, textShadowRadius: 4 }}>邀请好友获得VIP奖励，享更多权益</Text>
            {/* <Text style={{color: '#FFF', textShadowColor: 'rgba(0, 0, 0, 0.15)', fontWeight: '600', fontSize: 12, textShadowOffset: {height:0, width: 4}, textShadowRadius: 4 }}>$18.88/VIP会员180天</Text> */}
          </View>
        </View>
        <TouchableOpacity
          onPress={handleOnPress}
        >
          <LinearGradient
            colors={['#FAC33D', '#ECA700']}
            start={{x: 0.05, y: 0.05}}
            end={{x: 1, y: 1}}
            angle={126}
            style={{
              paddingHorizontal: 10, 
              paddingVertical: 6,
              borderRadius: 100, 
              flexDirection: 'row', 
              justifyContent: 'flex-start'

            }}
          >
            <Text
              style={{
                fontWeight: '600', 
                fontSize: 12, 
                color: '#1D2023', 
                paddingRight: 4
              }}
            >
              立刻邀请
            </Text>
            <MoreArrow color="#1D2023" width={8} />
          </LinearGradient>
        </TouchableOpacity>
      </LinearGradient>
  )
}

export default VipRegisterBar; 