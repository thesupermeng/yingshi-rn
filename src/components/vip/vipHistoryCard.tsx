import { useTheme } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { vipHistoryResponseType } from "@type/membershipType";

interface Props {
  historyItem: vipHistoryResponseType;
}

export const VipHistoryCard = ({ historyItem }: Props) => {
  const {colors, spacing, textVariants} = useTheme();
  return (
    <View 
      style={{
        ...styles.card, 
        alignContent: 'center',
        backgroundColor: colors.card2, 
      }}>
      <View
        style={{
          ...styles.description,
          gap: spacing.xxs,
        }}>
        <Text
          style={{
            ...textVariants.subBody,
          }}>
          {historyItem.displayText}
        </Text>
        <Text
          style={{...textVariants.small, color: colors.muted}}>
          {historyItem.createdDate}
        </Text>
      </View>
      <View
        style={{flex: 1, alignSelf: 'center'}}>
        {historyItem.status === 2 ? 
          <Text
            style={{...textVariants.subBody, color: '#FF8A00', alignSelf: 'flex-end'}}>
            处理中
          </Text> : 
          <Text
            style={{...textVariants.subBody, color: historyItem.status === 1 ? colors.primary : colors.muted , alignSelf: 'flex-end'}}>
            {historyItem.status === 1 ? '+' : '' }{historyItem.vipDays}天
          </Text>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  description: {
    flexGrow: 1,
    paddingTop: 5,
    display: 'flex',
    justifyContent: 'space-evenly',
  },
});
