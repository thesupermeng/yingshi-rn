import { useState } from "react"
import { Pressable, Text, View } from "react-native"
import { useTheme } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";

interface Props {
  setMemberSelected: (selected: string) => void;
  memberSelected: string;
}

export const VipMember = ({setMemberSelected, memberSelected}:Props) => {
  const { textVariants, colors } = useTheme();
  const handleClick = () => {
    setMemberSelected('member type A');
    console.log('hhihihihihihi',memberSelected);
  }
  return (
    <LinearGradient
      colors={['#1F2224', '#1F2224']}
      // colors={['#1D2023', '#2E3134']} // An array of gradient colors
      style={{
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginHorizontal: 15,
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
      }}>
      <View
        style={{
          gap: 5,
          flex: 1,
        }}>
        <Text
          style={{...textVariants.bodyBold}}>
          1个月
        </Text>
        <Text
          style={{...textVariants.fine}}>
          VIP会员30天
        </Text>
      </View>
      <View>
        <Text
          style={{...textVariants.bodyBold, alignSelf: 'flex-end', color: colors.title}}>
          $ 3.88
        </Text>
      </View>
    </LinearGradient>
  )
}