import { Platform, StyleSheet, Text, View } from 'react-native';
import { VipMember } from './vipMember';
import { promoMembershipModel, zfModel } from '@type/membershipType';
import { VipZf } from './vipZf';
import { useEffect, useState } from 'react';
import { User } from '@models/user';
import { FlatList } from 'react-native-gesture-handler';
import { IS_IOS, UMENG_CHANNEL } from '@utility/constants';

interface Props {
  userState: User;
  membershipProduct: Array<promoMembershipModel>;
  selectedMembership: promoMembershipModel;
  onMembershipSelect: (selected: promoMembershipModel) => void;
  zfOptions: Array<zfModel>;
  selectedZf: string;
  onZfSelect: (zf: string) => void;
}

export const VipCard = ({
  userState,
  membershipProduct,
  selectedMembership,
  onMembershipSelect,
  zfOptions,
  selectedZf,
  onZfSelect,
}: Props) => {

  return (
    <View
      style={{
        flexDirection: 'column',
      }}>

      {/* membership plan */}
      <FlatList
        horizontal={true}
        contentContainerStyle={styles.membershipContainer}
        showsHorizontalScrollIndicator={false}
        data={membershipProduct}
        keyExtractor={(product) => product.productId}
        renderItem={({ item, index }) => (
          <VipMember
            key={index}
            membershipPlan={item}
            isSelected={selectedMembership && selectedMembership.productId === item.productId}
            onSelect={onMembershipSelect} />
        )}
      />

      {/* zf method */}
      {(UMENG_CHANNEL !== "GOOGLE_PLAY" || IS_IOS) && zfOptions.length > 0 &&
        <View
          style={{
            marginBottom: 15,
            gap: 15,
          }}>
          <Text
            style={styles.label}>
            支付方式
          </Text>
          <View style={{ gap: 10 }}>
            {zfOptions.map((option) => (
              <VipZf
                key={option.payment_type_code}
                zfOption={option}
                isSelected={selectedZf === option.payment_type_code}
                onZfSelect={onZfSelect} />
            ))}
          </View>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: "PingFang SC",
    fontSize: 18,
    fontWeight: "900",
    color: "#D3AC7B",
  },
  membershipContainer: {
    gap: 15,
    marginBottom: 15,
    flexDirection: 'row',
  }
})
