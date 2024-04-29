import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ttNewsLogin} from '@type/tt_temperature';

interface ttSmall {
  selectedTab: String;
  setSelectedTab: Function;
}

export default function CollectionHeader({selectedTab, setSelectedTab}: ttSmall) {
  const {textVariants, spacing, colors} = useTheme();

  const btnStyle = (tabName: '视频收藏' | '播单收藏' | '合集收藏') => {
    if (tabName === selectedTab) {
      return {...textVariants.header, color: colors.primary};
    }
    return {...textVariants.body, color: colors.muted};
  };

  const underlineStyle = (tabName: '视频收藏' | '播单收藏' | '合集收藏') => {
    if (tabName === selectedTab) {
      return {backgroundColor: colors.primary, ...styles.underline};
    }
    return {};
  };

  function setSelectedTabHandler(tab: string) {
    setSelectedTab(tab);
  }

  return (
    <View style={{...styles.container, gap: spacing.l}}>
      <TouchableOpacity activeOpacity={0.85}
        onPress={() => {
          setSelectedTab('视频收藏');
        }}>
        <Text style={btnStyle('视频收藏')}>视频</Text>
        <View style={underlineStyle('视频收藏')} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.85}
        onPress={() => {
          setSelectedTab('播单收藏');
        }}>
        <Text style={btnStyle('播单收藏')}>播单</Text>
        <View style={underlineStyle('播单收藏')} />
      </TouchableOpacity>
      {/* <TouchableOpacity activeOpacity={0.85} onPress={navigate('合集收藏')}>
                <Text style={btnStyle('合集收藏')}>合集</Text>
                <View style={underlineStyle('合集收藏')}></View>
            </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'baseline',
    paddingBottom: 10,
  },
  underline: {
    marginTop: 7,
    height: 4,
    width: '60%',
    borderRadius: 20,
    alignSelf: 'center',
  },
});
