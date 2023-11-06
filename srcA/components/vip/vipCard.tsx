import { Platform, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { VipBenefit } from './vipBenefit';
import { useTheme } from '@react-navigation/native';
import { VipMember } from './vipMember';
import { membershipModel } from '../../types/membershipType';
import { VipPayment } from './vipPayment';
import GPayIcon from "../../../static/images/vip/gpay.svg";
import ApplePayIcon from "../../../static/images/vip/apple_pay.svg"
import { useEffect, useState } from 'react';
import { userModel } from '../../types/userType';

interface Props {
  userState: userModel;
  membershipProduct: Array<membershipModel>;
  selectedMembership: membershipModel;
  onMembershipSelect: (selected: membershipModel) => void;
  selectedPayment: string;
  onPaymentSelect: (payment: string) => void;
}

export const VipCard = ({
  userState,
  membershipProduct,
  selectedMembership,
  onMembershipSelect,
  selectedPayment,
  onPaymentSelect,
}: Props) => {
  const { textVariants} = useTheme();
  const [vipRemainingDay, setVipRemainingDay] = useState(0);
  useEffect(() => {
    // Assuming you have the two timestamps
    const date1Timestamp = userState.userCurrentTimestamp;
    const date2Timestamp = userState.userMemberExpired;

    // Convert Unix timestamps to milliseconds (multiply by 1000)
    const date1Milliseconds = Number(date1Timestamp) * 1000;
    const date2Milliseconds = Number(date2Timestamp) * 1000;

    // Calculate the time difference in milliseconds
    const timeDifferenceMilliseconds = date2Milliseconds - date1Milliseconds;

    // Calculate the time difference in days
    const timeDifferenceDays =
      timeDifferenceMilliseconds / (1000 * 60 * 60 * 24);

    // Round the time difference to the nearest whole number
    // const roundedTimeDifferenceDays = Math.round(timeDifferenceDays);
    // Round up the time difference to the nearest whole number
    const roundedTimeDifferenceDays = Math.ceil(timeDifferenceDays);

    // If the rounded difference is less than 0, set it to 0; otherwise, keep the rounded difference
    const result =
      roundedTimeDifferenceDays <= 0 ? 0 : roundedTimeDifferenceDays;

    setVipRemainingDay(result);
  }, [userState.userCurrentTimestamp]);
  
  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: '#1a1d20',
        margin: 10,
        borderRadius: 15,
        overflow: 'hidden', // Add this line to clip the FastImage
      }}>

      {/* top component  */}
      <View style={{ width: '100%', height: 170 }}>
        <View
          style={{
            paddingTop: 45,
            gap: 10,
            position: 'absolute',
            top: 0,
            left: 20,
            right: 0,
            bottom: 0,
          }}>
          <Text style={{ color: '#ffffff', fontSize: 28, fontWeight: '700' }}>
            VIP {vipRemainingDay.toLocaleString()} 天
          </Text>
          {vipRemainingDay === 0 ? 
            <Text style={{ ...textVariants.small, color: '#9C9C9C' }}>
              您还不是会员,开通VIP享受权益
            </Text> :
            <Text style={{ ...textVariants.small, color: '#9C9C9C' }}>
              剩余天数
          </Text>
          }
        </View>
        <FastImage
          source={require('../../../static/images/vip/crown_vip.png')}
          style={{
            alignSelf: 'flex-end',
            height: '100%',
            width: '80%',
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>

      {/* benefit component  */}
      <VipBenefit />

      {/* membership plan */}
      <View
        style={{marginBottom: 10}}>
        <Text
          style={{...textVariants.bodyBold, fontSize: 15, marginLeft: 25}}>
            开通会员
        </Text>
        {membershipProduct.map((item) => (
          <VipMember 
            key={item.productId} 
            membershipPlan={item}
            isSelected={ selectedMembership && selectedMembership.productId === item.productId}
            onSelect={onMembershipSelect} />
        ))}
      </View>
      
      {/* payment method */}
      <View
        style={{marginBottom: 15}}>
        <Text
          style={{...textVariants.bodyBold, fontSize: 15, marginLeft: 25}}>
            支付方式
        </Text>
        {Platform.OS === "android" && 
          <VipPayment
            paymentOption='Google Pay'
            icon={<GPayIcon width={30} height={30} />}
            isSelected={ selectedPayment === 'Google Pay'}
            onPaymentSelect={onPaymentSelect}/>
        }

        {Platform.OS === "ios" &&
          <VipPayment
            paymentOption='Apple Pay'
            icon={<ApplePayIcon width={30} height={30} />}
            isSelected={ selectedPayment === 'Apple Pay'}
            onPaymentSelect={onPaymentSelect}  />
        }
      </View>
    </View>
  );
}
