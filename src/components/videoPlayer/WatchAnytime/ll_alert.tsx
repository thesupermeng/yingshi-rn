import {memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

interface XFillButton {
  vodDescription: string;
}
const DescriptionBar = ({vodDescription}: XFillButton) => {
  const {colors, textVariants} = useTheme();

  return (
    <View style={{marginTop: 10, flexDirection: 'row'}}>
      {/* <View style={{ flex: 10, flexDirection: 'column', justifyContent: 'flex-end', marginRight: 35 }}> */}
      <View
        style={{
          flex: 10,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <Text
          style={{
            ...textVariants.body,
            color: colors.text,
            paddingBottom: 20,
            lineHeight: 23
          }}>
          {vodDescription}
        </Text>
      </View>
    </View>
  );
};

export default memo(DescriptionBar);
