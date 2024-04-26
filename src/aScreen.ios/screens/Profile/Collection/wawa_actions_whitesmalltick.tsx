import React, { useCallback } from 'react';
import { View, FlatList, Text, StyleSheet, Linking } from 'react-native';
import ScreenContainer from '../../../components/container/wawa_nterstitial_iconpipexpand';
import { useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks/wawa_root';
import { wawaIconsubssuccess } from '@redux/wawa_bgvipsport_spinner';

import TitleWithBackButtonHeader from '../../../components/header/wawa_matchinactive_header';
import { wawaDistHook, wawaAgreementFlag } from '@redux/reducers/wawa_quest_ping';
import FavoriteVodCard from '../../../components/vod/wawa_share_libreactperfloggerjni';
import CollectionHeader from '../../../components/header/wawa_apps_sina_header';
import { playVod } from '@redux/actions/wawa_indicator';
import { wawaSellProfileinactive } from '@type/wawa_gradlew';
import { RootStackScreenProps } from '@type/wawa_iconnewchat';
import EmptyIcon from '@static/images/gesturesLibfabricjni.svg';
import EmptyList from '../../../components/common/wawa_othermatchdetailbg_videocommon';

type wawaBellreminderDisconnected = {
    item: wawaSellProfileinactive
}

export default ({ navigation }: RootStackScreenProps<'合集收藏'>) => {
    const { colors, textVariants, icons } = useTheme()
    const dispatch = useAppDispatch();
    const favs: wawaDistHook = useAppSelector(({ vodFavouritesReducer }: wawaIconsubssuccess) => vodFavouritesReducer);
    const favorites = favs.favorites;

    const renderItem = useCallback(({ item }: wawaBellreminderDisconnected) => {
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