import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { VodType } from '../../types/ajaxTypes';
import { useAppDispatch } from '../../hooks/hooks';
import FavoriteVodCard from './favoriteVodCard';
import { playVod } from '../../redux/actions/vodActions';

interface Props {
    vodList: Array<VodType>
}

type FlatListType = {
    item: VodType
}

export default ({ vodList }: Props) => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation()
    return (
        <View>
            {
                vodList.length > 0 &&
                <FlatList
                    data={vodList}
                    contentContainerStyle={{ paddingBottom: 200 }}
                    renderItem={({ item }: FlatListType) => <FavoriteVodCard
                        hideFavoriteButton={true} vod={item} onPress={() => {
                            dispatch(playVod(item));
                            navigation.navigate('播放', { vod_id: item.vod_id });
                        }} />}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    noMore: {
        textAlign: 'center',
        marginTop: 30
    }
});