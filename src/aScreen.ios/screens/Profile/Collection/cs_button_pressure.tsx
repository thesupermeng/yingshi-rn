import React, { useCallback } from 'react';
import { View, FlatList, Text, StyleSheet, Linking } from 'react-native';
import ScreenContainer from '../../../components/container/ypy_fast';
import { useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks/kg_index';
import { PSmall } from '@redux/fj_prediction_thailand';

import TitleWithBackButtonHeader from '../../../components/header/cio_news_types_header';
import { NNEBing, QQCenterChart } from '@redux/reducers/pxk_lang_quest';
import FavoriteVodCard from '../../../components/vod/tw_agreement_description';
import CollectionHeader from '../../../components/header/j_native_hover_header';
import { playVod } from '@redux/actions/xif_layout';
import { XVSScoreDark } from '@type/wpk_long';
import { RootStackScreenProps } from '@type/vrm_thailand';
import EmptyIcon from '@static/images/lineShow.svg';
import EmptyList from '../../../components/common/jip_next_bell';

type MEYMode = {
    item: XVSScoreDark
}

export default ({ navigation }: RootStackScreenProps<'合集收藏'>) => {
    const { colors, textVariants, icons } = useTheme()
    const dispatch = useAppDispatch();
    const favs: NNEBing = useAppSelector(({ vodFavouritesReducer }: PSmall) => vodFavouritesReducer);
    const favorites = favs.favorites;

    const renderItem = useCallback(({ item }: MEYMode) => {
        return (
            <FavoriteVodCard vod={item} onPress={() => {
                const url = `https://m.iqiyi.com/search.html?key=${item.vod_name}`
                dispatch(playVod(item));
                navigation.navigate('播放IOS', {
                    vod_id: item.vod_id
                });
            }} />
        )
    }, [])

    return (
        <ScreenContainer>
            <TitleWithBackButtonHeader title='我的收藏' />
            <CollectionHeader route='合集收藏' navigator={navigation} />
            <View>
                {
                    favorites && favorites.length > 0 &&
                    <FlatList
                        data={favorites}
                        contentContainerStyle={{ paddingBottom: 120 }}
                        ListFooterComponent={<Text style={{ ...textVariants.body, color: colors.muted, ...styles.noMore }}>没有更多了</Text>}
                        renderItem={renderItem}
                    />
                }
            </View>
            {
                favorites && favorites.length === 0 &&
                <EmptyList description='暂无合集收藏' />
            }
        </ScreenContainer >
    )
}

const styles = StyleSheet.create({
    noMore: {
        textAlign: 'center',
        marginTop: 30
    }
});