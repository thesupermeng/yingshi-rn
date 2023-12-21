import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useTheme } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
import FastImage from 'react-native-fast-image';
// import FastImage from "../common/customFastImage";
import { zfModel } from "@type/membershipType";
import React from "react";
import AlipayIcon from "@static/images/vip/wechat_pay.svg";

interface Props {
  zfOption: zfModel,
  isSelected: boolean;
  onZfSelect: (zf: string) => void;
}

export const VipZf = ({
  zfOption,
  isSelected,
  onZfSelect,
}: Props) => {
  const { textVariants, colors } = useTheme();
  const handleClick = () => {
    onZfSelect(zfOption.payment_type_code);
  }

  return (
    <TouchableOpacity onPress={handleClick}>
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={isSelected ? ['#1D2023', '#2E3134'] : ['#1F2224', '#1F2224']}
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          marginHorizontal: 15,
          marginTop: 10,
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          borderWidth: isSelected ? 2 : 0, // Add border when selected
          borderColor: colors.primary, // Set your desired border color
        }}>
        <View
          style={{
            gap: 10,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <FastImage
            source={{
              uri: zfOption.payment_type_icon,
            }}
            style={{ width: 40, height: 30, borderRadius: 5, }}
            resizeMode={"contain"}
          />
          <Text
            style={{ ...textVariants.bodyBold }}>
            {zfOption.payment_type_name}
          </Text>
        </View>
        {isSelected ?
          <View style={{ ...styles.outerBorder, borderColor: colors.primary }}>
            <View style={{ ...styles.innerCircle, backgroundColor: colors.primary }} />
          </View> : null
        }
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  outerBorder: {
    height: 18,
    width: 18,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  innerCircle: {
    height: 10,
    width: 10,
    borderRadius: 6,
  }
})