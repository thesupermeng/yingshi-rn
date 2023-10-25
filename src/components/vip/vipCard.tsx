import { StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { VipBenefit } from './vipBenefit';
import { useTheme } from '@react-navigation/native';
import { VipMember } from './vipMember';

interface Props {
  locations: number[];
  setMemberSelected: (selected: string) => void;
  memberSelected: string;
}
export default function VipCard({
  locations,
  setMemberSelected,
  memberSelected,
}: Props) {
  const { textVariants} = useTheme();
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
            VIP 0天
          </Text>
          <Text style={{ ...textVariants.small, color: '#9C9C9C' }}>
            您还不是会员,开通VIP享受权益
          </Text>
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
      <VipBenefit locations={locations} />
      <View
        style={{marginBottom: 10}}>
        <Text
          style={{...textVariants.bodyBold, marginLeft: 25}}>
            开通会员
        </Text>
        <VipMember
          setMemberSelected={setMemberSelected}
          memberSelected={memberSelected}
        />
        <VipMember
          setMemberSelected={setMemberSelected}
          memberSelected={memberSelected}
        />
        <VipMember
          setMemberSelected={setMemberSelected}
          memberSelected={memberSelected}
        />
      </View>
      
      <View>
        {/* <VipContent locations={locations} /> */}
      </View>
    </View>
  );
}
