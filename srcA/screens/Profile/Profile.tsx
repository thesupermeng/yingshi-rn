import React, {useCallback, memo} from 'react';
import {ListItem} from '@rneui/themed';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import {useTheme, useFocusEffect} from '@react-navigation/native';
import {toggleTheme} from '../../redux/actions/themeAction';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {RootState} from '../../redux/store';
import ShowMoreButton from '../../components/button/showMoreButton';

import CollectionIcon from '../../../static/images/collection.svg';
import HistoryIcon from '../../../static/images/history.svg';
import FeedbackIcon from '../../../static/images/feedback.svg';
import SettingsIcon from '../../../static/images/settings.svg';
import InfoIcon from '../../../static/images/info.svg';
import ShareIcon from '../../../static/images/share.svg';
import LightMode from '../../../static/images/light_mode.svg';
import DarkMode from '../../../static/images/dark_mode.svg';
import Orientation from 'react-native-orientation-locker';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
function Profile ({navigation}: BottomTabScreenProps<any>) {
  const {colors, textVariants, icons, spacing} = useTheme();
  const dispatch = useAppDispatch();
  const themeReducer = useAppSelector(
    ({themeReducer}: RootState) => themeReducer,
  );

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();
      return () => {
        Orientation.unlockAllOrientations();
      };
    }, []),
  );

  return (
    <ScreenContainer>
      <View style={{...styles.topNav}}>
        <Text
          style={{...textVariants.bigHeader, color: colors.text, fontSize: 22}}>
          我的
        </Text>
        {/* <TouchableOpacity onPress={() => dispatch(toggleTheme(!themeReducer.theme))}>
                    {
                        themeReducer.theme
                            ? <LightMode color={icons.iconColor} height={26} width={26} />
                            : <DarkMode color={icons.iconColor}  height={26} width={26} />

                    }
                </TouchableOpacity> */}
      </View>
      <View>
        <ShowMoreButton
          text="我的收藏"
          leftIcon={<CollectionIcon style={{color: colors.button}} />}
          onPress={() => navigation.navigate('我的收藏')}
        />
        <ShowMoreButton
          text="播放历史"
          leftIcon={<HistoryIcon style={{color: colors.button}} />}
          onPress={() => navigation.navigate('播放历史')}
        />
        <ShowMoreButton
          text="我要反馈"
          leftIcon={<FeedbackIcon style={{color: colors.button}} />}
          onPress={() => navigation.navigate('反馈')}
        />
        <ShowMoreButton
          text="设置"
          leftIcon={<SettingsIcon style={{color: colors.button}} />}
          onPress={() => navigation.navigate('设置')}
        />
        <ShowMoreButton
          text="关于我们"
          leftIcon={<InfoIcon style={{color: colors.button}} />}
          onPress={() => navigation.navigate('关于我们')}
        />
        {/* <ShowMoreButton text='分享App' disabled={true} leftIcon={<ShareIcon style={{ color: colors.button }} />} /> */}
      </View>
    </ScreenContainer>
  );
};

export default memo(Profile);

const styles = StyleSheet.create({
  topNav: {
    paddingTop: 8,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});
