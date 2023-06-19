import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../../components/container/screenContainer';
import { useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { RootState } from '../../../redux/store';

import TitleWithBackButtonHeader from '../../../components/header/titleWithBackButtonHeader';
import { VodReducerState } from '../../../redux/reducers/vodReducer';
import FavoriteVodCard from '../../../components/vod/favoriteVodCard';
import CollectionHeader from '../../../components/header/myCollectionHeader';
import { playVod } from '../../../redux/actions/vodActions';
import { VodType } from '../../../types/ajaxTypes';
import { RootStackScreenProps } from '../../../types/navigationTypes';

type FlatListType = {
    item: VodType
}

export default ({ navigation }: RootStackScreenProps<'视频收藏'>) => {
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
                    favorites && <FlatList
                        data={favorites}
                        contentContainerStyle={{ paddingBottom: 120 }}
                        ListFooterComponent={<Text style={{ ...textVariants.body, color: colors.muted, ...styles.noMore }}>没有更多了</Text>}
                        renderItem={({ item }: FlatListType) => <FavoriteVodCard vod={item} onPress={() => {
                            dispatch(playVod(item));
                            navigation.navigate('播放', {
                                vod_id: item.vod_id
                            });
                        }} />}
                    />
                }
            </View>
        </ScreenContainer >
    )
}

const styles = StyleSheet.create({
    noMore: {
        textAlign: 'center',
        marginTop: 30
    }
});