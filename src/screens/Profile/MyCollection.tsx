import React from 'react';
import { ListItem } from '@rneui/themed';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import { ProfileStackScreenProps } from '../../types/navigationTypes';
import LightMode from '../../../static/images/light_mode.svg';
import { useTheme } from '@react-navigation/native';
import { toggleTheme } from '../../redux/actions/themeAction';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { RootState } from '../../redux/store';
import ShowMoreButton from '../../components/button/showMoreButton';

import CollectionIcon from '../../../static/images/collection.svg';
import HistoryIcon from '../../../static/images/history.svg';
import FeedbackIcon from '../../../static/images/feedback.svg';
import SettingsIcon from '../../../static/images/settings.svg';
import InfoIcon from '../../../static/images/info.svg';
import ShareIcon from '../../../static/images/share.svg';

import BackButton from '../../components/button/backButton';
import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';

export default ({ navigation }: ProfileStackScreenProps<'收藏'>) => {
    const { colors, textVariants, icons } = useTheme()
    const dispatch = useAppDispatch();
    const themeReducer = useAppSelector(({ themeReducer }: RootState) => themeReducer);

    return (
        <ScreenContainer>
            <TitleWithBackButtonHeader title='我的收藏'/>
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