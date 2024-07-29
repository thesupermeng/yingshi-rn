import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SearchIcon from '../../assets/images/profile_search.svg';
import ProfileCanlendarIcon from "../../assets/images/profile_calendar.svg";
import ProfileScanIcon from "../../assets/images/profile_scan.svg";
import ProfileAlarmIcon from "../../assets/images/profile_alarm.svg";
import { spacing } from "../../const/layout";

interface ProfileHeaderProps {
}

export default function ProfileHeaderView({
}: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <ProfileCanlendarIcon height={24} />
      </TouchableOpacity>
      <View style={styles.space}>
      </View>
      <TouchableOpacity style={styles.btn}>
        <ProfileAlarmIcon height={24} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <ProfileScanIcon height={24} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <SearchIcon height={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 44,
    paddingHorizontal: spacing.sideOffset-10,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
  },
  space: {
    flex: 1,
  },
  btn: {
    padding: 5
  }
});