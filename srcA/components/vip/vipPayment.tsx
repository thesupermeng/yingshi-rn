import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useTheme } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";

interface Props {
  paymentOption: string,
  icon?: React.ReactNode,
  isSelected: boolean;
  onPaymentSelect: (payment: string) => void;
}

export const VipPayment = ({
  paymentOption,
  icon,
  isSelected,
  onPaymentSelect,
}: Props) => {
  const { textVariants, colors } = useTheme();
  const handleClick = () => {
    onPaymentSelect(paymentOption);
  }

  return (
    <TouchableOpacity onPress={handleClick}>
      <LinearGradient
        start={{x:1, y:0}}
        end={{x:0, y:1}}
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
          {icon && 
            <View 
              style={{
                backgroundColor: '#ffffff', 
                paddingLeft: 5, 
                paddingRight: 5,
                borderRadius: 5
              }}>
              {icon}
            </View>}
          <Text
            style={{...textVariants.bodyBold}}>
            {paymentOption}
          </Text>
        </View>
        {isSelected ?
          <View style={{...styles.outerBorder, borderColor: colors.primary}}>
            <View style={{...styles.innerCircle, backgroundColor: colors.primary}}/>
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