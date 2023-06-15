import React from 'react';
import { ListItem } from '@rneui/themed';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import { RootStackScreenProps } from '../../types/navigationTypes';
import LightMode from '../../../static/images/light_mode.svg';
import { useTheme } from '@react-navigation/native';
import { toggleTheme } from '../../redux/actions/themeAction';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';
import ShowMoreButton from '../../components/button/showMoreButton';

import CollectionIcon from '../../../static/images/collection.svg';
import HistoryIcon from '../../../static/images/history.svg';
import FeedbackIcon from '../../../static/images/feedback.svg';
import SettingsIcon from '../../../static/images/settings.svg';
import InfoIcon from '../../../static/images/info.svg';
import ShareIcon from '../../../static/images/share.svg';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
export default ({ navigation }: BottomTabScreenProps<any>) => {
    const { colors, textVariants, icons } = useTheme();
    const dispatch = useAppDispatch();
    const themeReducer = useAppSelector(({ themeReducer }: RootState) => themeReducer);

    return (
        <ScreenContainer>
            <View style={styles.topNav}>
                <Text style={textVariants.bigHeader}>我的</Text>
                <TouchableOpacity onPress={() => dispatch(toggleTheme(!themeReducer.theme))}>
                    <LightMode color={icons.iconColor} />
                </TouchableOpacity>
            </View>
            <View>
                <ShowMoreButton text='我的收藏' leftIcon={<CollectionIcon style={{ color: colors.button }} />} onPress={()=>navigation.navigate('视频收藏')}/>
                <ShowMoreButton text='播放历史' leftIcon={<HistoryIcon style={{ color: colors.button }} />} onPress={()=>navigation.navigate('播放历史')} />
                <ShowMoreButton text='我要反馈' leftIcon={<FeedbackIcon style={{ color: colors.button }} />} onPress={()=>navigation.navigate('反馈')} />
                <ShowMoreButton text='设置' leftIcon={<SettingsIcon style={{ color: colors.button }} />} />
                <ShowMoreButton text='关于我们' leftIcon={<InfoIcon style={{ color: colors.button }} />} onPress={()=>navigation.navigate('关于我们')} />
                <ShowMoreButton text='分享App' leftIcon={<ShareIcon style={{ color: colors.button }} />} />
            </View>
        </ScreenContainer >
    )
}

const styles = StyleSheet.create({
    topNav: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});