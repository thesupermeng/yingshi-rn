import {Text, TouchableOpacity, View} from 'react-native';
import ExpandUpIcon from '@static/images/saveIconfeedbackUnselected.svg';
import HejiIcon from '@static/images/libswresampleSuggestion.svg';
import {useTheme} from '@react-navigation/native';

interface mayi_GoogleViews {
  handleOnPress: any;
  collectionTitle: string;
}

const HejiButton = ({handleOnPress, collectionTitle}: mayi_GoogleViews) => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        backgroundColor: '#171717',
        paddingBottom: 18,
        paddingTop: 12,
        paddingLeft: 20,
        paddingRight: 20,
      }}>
      <TouchableOpacity style={{flex: 1}} onPress={handleOnPress}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <HejiIcon height={24} width={24} />
            <Text
              style={{
                paddingLeft: 6,
                alignSelf: 'center',
                fontSize: 14,
                color: colors.text,
                fontWeight: '700',
              }}>
              {collectionTitle}
            </Text>
          </View>
          <View style={{}}>
            <ExpandUpIcon height={24} width={24} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HejiButton;
