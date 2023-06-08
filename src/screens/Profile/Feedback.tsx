import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import { ProfileStackScreenProps } from '../../types/navigationTypes';
import { useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { RootState } from '../../redux/store';

import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';

export default ({ navigation }: ProfileStackScreenProps<'反馈'>) => {
    const { colors, textVariants, icons } = useTheme()
    const dispatch = useAppDispatch();
    const themeReducer = useAppSelector(({ themeReducer }: RootState) => themeReducer);

    return (
        <ScreenContainer>
            <TitleWithBackButtonHeader title='我要反馈'/>
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