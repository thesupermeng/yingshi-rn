import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import ScreenContainer from '../components/container/screenContainer';
import MainHeader from '../components/header/homeHeader';
import { useTheme } from '@react-navigation/native';
import { PlaylistStackScreenProps } from '../types/navigationTypes';
export default ({ navigation }: PlaylistStackScreenProps<'Playlist'>) => {
    const { textVariants, colors } = useTheme();
    return (
        <ScreenContainer>
            <MainHeader logo={
                <Text style={{ ...textVariants.bigHeader, color: colors.primary }}>播单</Text>
            } navigator={navigation} />
        </ScreenContainer>
    )
}