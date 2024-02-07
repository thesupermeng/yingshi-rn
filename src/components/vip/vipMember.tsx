import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useTheme } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
import { promoMembershipModel } from "@type/membershipType";
import Tick from "@static/images/splash/tick.svg";

interface Props {
  membershipPlan: promoMembershipModel;
  isSelected: boolean;
  onSelect: (selected: promoMembershipModel) => void;
}

export const VipMember = ({
  membershipPlan,
  isSelected,
  onSelect,
}: Props) => {
  const { textVariants, colors } = useTheme();
  const handleClick = () => {
    onSelect(membershipPlan);
  }

  return (
    <LinearGradient
      colors={isSelected ? ['#BB9468', '#D4AE7F'] : ['rgba(217, 174, 127, 0)', 'rgba(0, 0, 255, 0)']}
      style={styles.gradientBorder}
    >
      <TouchableOpacity
        style={styles.innerContainer}
        onPress={handleClick}
      >
        <LinearGradient
          colors={isSelected ? ['rgba(160, 110, 60, 0.2)', 'rgba(255, 226, 188, 0.2)'] : ['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.02)']}
          start={{ x: 0.5, y: isSelected ? 0.5 : 0 }}
          style={styles.contentContainer}>
          {membershipPlan.title === '12个月' && isSelected &&
            <View style={{ ...styles.legend }}>
              <Text style={{ ...textVariants.small, fontWeight: '600' }}>最多人选择</Text>
            </View>
          }

          {isSelected && (
            <View style={styles.tick}>
              <Tick width={18} height={18} />
            </View>
          )}

          {/* middle product details */}
          <View style={styles.productContainer}>
            <Text
              style={{ ...textVariants.bodyBold, textAlignVertical: 'center' }}>
              {membershipPlan.title}
            </Text>
            <Text
              style={styles.promoPriceText}>
              {membershipPlan.promoPrice}
            </Text>
            <Text
              style={styles.oriPriceText}>
              {membershipPlan.localizedPrice}
            </Text>
          </View>

          {/* bottom product description */}
          <View style={{
            ...styles.descriptionContainer,
            backgroundColor: isSelected ? '#F9EBDB' : "#393939",
          }}>
            <Text style={{
              ...styles.descriptionText,
              color: isSelected ? '#351B04' : '#fff',
            }}>
              {membershipPlan.description}
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient >
  )
}

const styles = StyleSheet.create({
  legend: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingTop: 4,
    paddingBottom: 6,
    paddingHorizontal: 6,
    backgroundColor: '#FA3E3E',
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 7,
    overflow: 'hidden'
  },
  tick: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  gradientBorder: {
    borderRadius: 10,
    marginTop: 10,
  },
  innerContainer: {
    margin: 2,
    backgroundColor: '#14161A',
    borderRadius: 8,
  },
  contentContainer: {
    flex: 1,
    width: 120,
    height: 160,
    borderRadius: 8,
  },
  productContainer: {
    gap: 5,
    flex: 0.8,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  descriptionContainer: {
    flex: 0.2,
    width: '100%',
    justifyContent: "center",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  promoPriceText: {
    textAlign: "center",
    fontWeight: "900",
    fontSize: 17,
    color: "#F4DBBA",
  },
  oriPriceText: {
    textAlign: "center",
    color: "#9C9C9C",
    textDecorationLine: "line-through",
    fontSize: 16,
  },
  descriptionText: {
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 3,
  }
})