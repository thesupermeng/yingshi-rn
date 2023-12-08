import {memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

interface Props {
  vodDescription: string;
}
const DescriptionBar = ({vodDescription}: Props) => {
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
        <TouchableOpacity>
          <Text
            style={{
              ...textVariants.small,
              color: colors.text,
              paddingBottom: 20,
            }}>
            {vodDescription}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(DescriptionBar);
