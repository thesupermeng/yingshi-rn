import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, List, Switch } from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import { ProfileStackScreenProps } from '../../types/navigationTypes';
import LightMode from '../../../static/images/light_mode.svg';
import { useTheme } from '@react-navigation/native';
import { toggleDarkTheme, toggleTheme } from '../../redux/actions/themeAction';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { RootState } from '../../redux/store';
import { ThemeConstantsType } from '../../types/constantTypes';

export default ({ navigation }: ProfileStackScreenProps<'Profile'>) => {
    const { colors, textVariants, icons } = useTheme()
    const dispatch = useAppDispatch();
    const themeReducer = useAppSelector(({ themeReducer }: RootState) => themeReducer);
    const changeTheme = () => (
        {
            ...themeReducer,
            theme: !themeReducer.theme,
        }
    )

    return (
        <ScreenContainer>
            <View style={styles.topNav}>
                <Text style={textVariants.bigHeader}>我的</Text>
                <TouchableOpacity onPress={() => dispatch(toggleTheme(!themeReducer.theme))}>
                    <LightMode color={icons.iconColor} />
                </TouchableOpacity>
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