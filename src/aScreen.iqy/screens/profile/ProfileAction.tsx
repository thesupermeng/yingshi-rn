import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { spacing } from "../../const/layout";
import ProfileVipTagIcon from "../../assets/images/profile_vip_tag.svg";
import ProfileActionDetailIcon from "../../assets/images/profile_action_detail.svg";

interface ProfileActionsProps {
  data:any
}

export default function ProfileActionsView({data}: ProfileActionsProps) {
  return <View style={styles.container}>
    <View style={styles.actionBox}>
      {data.items.map((e:any) => (<View style={styles.actionItem}>
        <View style={styles.actionTitle}>
          {e.icon && e.icon()}
          <Text style={styles.actionTitleText}>{e.title}</Text>
        </View>
        <View style={styles.actionValue}>
          {e.value && <Text style={styles.actionValueText}>{e.value}</Text>}
          {e.tag === 'vip' && <ProfileVipTagIcon height={18}/>}
        </View>
        {e.detail && <ProfileActionDetailIcon height={30}/>}
      </View>))}
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.sideOffset,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: 'center',
    alignItems: "center",
    gap: 10,
    position: 'relative'
  },
  actionBox: {
    flex: 1,
    paddingHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "stretch",
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    overflow: "hidden"
  },
  actionItem: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    gap: 10
  },
  actionTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    gap: 10
  },
  actionTitleText: {
    color: "#262626",
    fontSize: 16,
    fontWeight: '400',
  },
  actionValue: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'flex-end',
    alignItems: "center",
    gap: 5
  },
  actionValueText: {
    color: "#85868a",
    fontSize: 13,
    fontWeight: '400',
    textAlign: "right"
  },
});