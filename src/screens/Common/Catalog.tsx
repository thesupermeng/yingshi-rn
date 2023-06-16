import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, FlatList, Image } from 'react-native';
import Video from 'react-native-video';
import { YingshiDarkTheme } from '../../theme';
import FavoriteButton from '../../components/button/favoriteVodButton';
import FavoriteIcon from '../../../static/images/favorite.svg'
import ScreenContainer from '../../components/container/screenContainer';
import { useTheme } from '@react-navigation/native';

import { RootStackScreenProps } from '../../types/navigationTypes';
import { VodType } from '../../types/ajaxTypes';
import { useOrientation } from '../../hooks/useOrientation';
import PlayFullScreenGesture from '../../components/gestures/vod/PlayFullScreenGesture';
import { addVodToHistory, toggleVodFavorites } from '../../redux/actions/vodActions';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';
import { VodReducerState } from '../../redux/reducers/vodReducer';
import BackButton from '../../components/button/backButton';
import MainHeader from '../../components/header/homeHeader';
import { useQuery } from '@tanstack/react-query';
import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';

export default ({ navigation, route }: RootStackScreenProps<'片库'>) => {
    const { textVariants, colors, spacing } = useTheme();
    const { data: navOptions } = useQuery({
        queryKey: ["HomePageNavOptions"],
        queryFn: () => {}
        //   fetch('https://testapi.yingshi.tv/nav/v1/navItems', {})
        //     .then(response => response.json())
        //     .then((json: VodCarousellResponseType) => {
        //       return json.data
        //     })
      });
    return (
        <ScreenContainer>
            <TitleWithBackButtonHeader title='片库' headerStyle={{ marginBottom: spacing.s }} />
            {/* <FlatList
                data={playlists}
                
                renderItem={({ item }: FlatListType) => <VodPlaylist playlist={item} /> }
            /> */}
        </ScreenContainer>
    )

}

const styles = StyleSheet.create({

});
