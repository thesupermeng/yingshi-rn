import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useTheme } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
import { membershipModel } from "../../types/membershipType";

interface Props {
  membershipPlan : membershipModel;
  isSelected: boolean;
  onSelect: (selected: membershipModel) => void;
}

export const VipMember = ({
  membershipPlan,
  isSelected,
  onSelect,
}:Props) => {
  const { textVariants, colors } = useTheme();
  const handleClick = () => {
    onSelect(membershipPlan);
  }

  return (
    <TouchableOpacity onPress={handleClick}>
      <LinearGradient
        start={{x:1, y:0}}
        end={{x:0, y:1}}
        colors={isSelected ? ['#1D2023', '#2E3134'] : ['#1F2224', '#1F2224']}
        style={{
          paddingHorizontal: 20,
          paddingVertical: 15,
          marginHorizontal: 15,
          marginTop: 10,
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          borderWidth: isSelected ? 2 : 0, // Add border when selected
          borderColor: colors.primary, // Set your desired border color
        }}>
        {membershipPlan.title === '12个月' && isSelected &&
          <View style={{...styles.legend}}>
            <Text style={{...textVariants.fine, fontWeight: '500'}}>超值会员</Text>
          </View>
        }
        
        <View
          style={{
            gap: 5,
            flex: 1,
          }}>
          <Text
            style={{...textVariants.bodyBold}}>
            {/* {title} */}
            {membershipPlan.title}
          </Text>
          <Text
            style={{...textVariants.fine}}>
            {membershipPlan.description}
          </Text>
        </View>
        <View>
          <Text
            style={{...textVariants.bodyBold, alignSelf: 'flex-end', color: colors.title}}>
            {membershipPlan.localizedPrice}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({  
  legend: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingVertical: 2,
    paddingHorizontal: 5,
    backgroundColor: '#FA3D3D',
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden'
  }
})