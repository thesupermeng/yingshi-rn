import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../../components/container/screenContainer';
import { ProfileStackScreenProps } from '../../../types/navigationTypes';
import { useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { RootState } from '../../../redux/store';

import TitleWithBackButtonHeader from '../../../components/header/titleWithBackButtonHeader';
import { VodReducerState } from '../../../redux/reducers/vodReducer';
import FavoriteVodCard from '../../../components/vod/favoriteVodCard';
import CollectionHeader from '../../../components/header/myCollectionHeader';
import { playVod } from '../../../redux/actions/vodActions';

export default ({ navigation }: ProfileStackScreenProps<'视频收藏'>) => {
    const { colors, textVariants, icons } = useTheme()
    const dispatch = useAppDispatch();
    const vodReducer: VodReducerState = useAppSelector(({ vodReducer }: RootState) => vodReducer);
    const favorites = vodReducer.favorites;
    return (
        <ScreenContainer>
            <TitleWithBackButtonHeader title='我的收藏' />
            <CollectionHeader route='视频收藏' navigator={navigation} />
            <View>
                {
                    favorites.map((vod, idx) => (
                        <FavoriteVodCard vod={vod} key={`fav-${idx}`} onPress={() => {
                            dispatch(playVod(vod));
                            navigation.navigate('播放', {
                                vod_id: vod.vod_id
                            });
                        }} />
                    ))
                }
            </View>
            <Text style={{ ...textVariants.body, color: colors.muted, ...styles.noMore }}>没有更多了</Text>
        </ScreenContainer >
    )
}

const styles = StyleSheet.create({
    noMore: {
        textAlign: 'center',
        marginTop: 30
    }
});