import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import { ProfileStackScreenProps } from '../../types/navigationTypes';
import { useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';

import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';
import { VodReducerState } from '../../redux/reducers/vodReducer';
import FavoriteVodCard from '../../components/vod/favoriteVodCard';
import CollectionHeader from '../../components/header/myCollectionHeader';
import FavoritePlaylist from '../../components/playlist/favoritePlaylist';
import { addVodToHistory, clearHistory, playVod } from '../../redux/actions/vodActions';
import VodHistoryCard from '../../components/vod/vodHistoryCard';
import CheckBoxSelected from '../../../static/images/checkbox_selected.svg';
import CheckBoxUnselected from '../../../static/images/checkbox_unselected.svg';
import { VodType } from '../../types/ajaxTypes';

export default ({ navigation }: ProfileStackScreenProps<'播放历史'>) => {
    const { colors, textVariants, icons, spacing } = useTheme()
    const dispatch = useAppDispatch();
    const vodReducer: VodReducerState = useAppSelector(({ vodReducer }: RootState) => vodReducer);
    const history = vodReducer.history;
    const [isEditing, setIsEditing] = useState(false);
    const [removeHistory, setRemoveHistory] = useState<Set<VodType['vod_id']>>(new Set())
    // const toggleHistory = (id: VodType['vod_id']) => {
    //     if (id in removeHistory) {
    //         removeHistory.delete(id);
    //     } else {
    //         removeHistory.add(id);
    //     }
    //     se
    // }
    return (
        <ScreenContainer>
            <TitleWithBackButtonHeader title='播放历史' right={
                <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
                    <Text style={{ ...textVariants.body, padding: 8 }}>{isEditing ? '取消' : '编辑'}</Text>
                </TouchableOpacity>
            }
                headerStyle={{ marginBottom: spacing.m }}
            />
            {
                history && history.map((vod, idx) => (
                    <View style={styles.card}>
                        {
                            isEditing && <TouchableOpacity style={styles.checkbox} >
                                {
                                    vod.vod_id in removeHistory
                                    ? <CheckBoxSelected height={icons.sizes.l} width={icons.sizes.l} />
                                    : <CheckBoxUnselected height={icons.sizes.l} width={icons.sizes.l} />
                                }
                            </TouchableOpacity>
                        }
                        <VodHistoryCard vod={vod} key={`playlist-${idx}`} onPress={() =>  {
                            dispatch(playVod(vod)); 
                            navigation.navigate('播放', { vod_id: vod.vod_id });
                        }} />
                    </View>
                ))
            }
            <Text style={{ ...textVariants.body, color: colors.muted, ...styles.noMore }}>没有更多了</Text>
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
    },
    noMore: {
        textAlign: 'center',
        marginTop: 30
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        padding: 5
    }
});