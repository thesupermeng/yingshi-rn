import React, {memo} from "react";
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import MoreArrow from '@static/images/toponLang.svg';
import {useTheme} from '@react-navigation/native';
interface yys_ConfigureUimanager {
  onPress?: any;
  text: string;
  params?: any[];
  isPlayScreen?: boolean;
  showMoreButton?: boolean;
}
function ShowMoreVodButton({
  text,
  onPress,
  isPlayScreen = false,
  showMoreButton = true,
  ...params
}: yys_ConfigureUimanager) {
  const {colors, textVariants, icons} = useTheme();
  return (
    <View style={{...styles.banner, marginBottom: isPlayScreen ? -5 : 5}}>
      <Text style={isPlayScreen ? textVariants.body : textVariants.header}>
        {text}
      </Text>

      {showMoreButton == true &&
        <TouchableOpacity onPress={onPress} style={{...styles.banner}}>
          <Text
            style={{
              color: colors.muted,
              fontSize: isPlayScreen ? 15 : textVariants.small.fontSize,
            }}>
            更多
          </Text>
          <MoreArrow
            style={{color: colors.muted}}
            height={icons.sizes.m}
            width={icons.sizes.m}
          />
        </TouchableOpacity>
      }
    </View>
  );
}

export default memo(ShowMoreVodButton);

const styles = StyleSheet.create({
  banner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
