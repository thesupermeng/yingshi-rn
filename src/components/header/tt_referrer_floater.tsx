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

  const btnStyle = (tabName: '专题' | '排行榜' ) => {
    if (tabName === selectedTab) {
      return {...textVariants.header, color: colors.primary};
    }
    return {...textVariants.body, color: colors.muted};
  };

  const underlineStyle = (tabName: '专题' | '排行榜' ) => {
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
      <TouchableOpacity
        onPress={() => {
          setSelectedTab('专题');
        }}>
        <Text style={btnStyle('专题')}>专题</Text>
        <View style={underlineStyle('专题')} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSelectedTab('排行榜');
        }}>
        <Text style={btnStyle('排行榜')}>排行榜</Text>
        <View style={underlineStyle('排行榜')} />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position:'relative',
    bottom:4,
    paddingTop: 0,
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
