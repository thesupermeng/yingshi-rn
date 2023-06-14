import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import { ProfileStackScreenProps } from '../../types/navigationTypes';
import { useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';

import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';
import { VodRecordType, VodReducerState } from '../../redux/reducers/vodReducer';
import FavoriteVodCard from '../../components/vod/favoriteVodCard';
import CollectionHeader from '../../components/header/myCollectionHeader';
import FavoritePlaylist from '../../components/playlist/favoritePlaylist';
import { removeVodsFromHistory, playVod } from '../../redux/actions/vodActions';
import VodHistoryCard from '../../components/vod/vodHistoryCard';
import CheckBoxSelected from '../../../static/images/checkbox_selected.svg';
import CheckBoxUnselected from '../../../static/images/checkbox_unselected.svg';
import { VodType } from '../../types/ajaxTypes';
import { Button } from '@rneui/themed';

type FlatListType = {
    item: VodRecordType
}
export default ({ navigation }: ProfileStackScreenProps<'播放历史'>) => {
    const { colors, textVariants, icons, spacing } = useTheme()
    const dispatch = useAppDispatch();
    const vodReducer: VodReducerState = useAppSelector(({ vodReducer }: RootState) => vodReducer);
    const history = vodReducer.history;
    const [isEditing, setIsEditing] = useState(false);
    const [removeHistory, setRemoveHistory] = useState<Array<VodType>>([])
    const toggleHistory = (vod: VodType) => {
        const filtered = removeHistory.filter(x => x.vod_id !== vod.vod_id);
        if (filtered.length === removeHistory.length) {
            setRemoveHistory([vod, ...removeHistory]);
        } else {
            setRemoveHistory(filtered);
        }
    }
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
                history && <FlatList
                    data={history}
                    ListFooterComponent={<Text style={{ ...textVariants.body, color: colors.muted, ...styles.noMore }}>没有更多了</Text>}
                    contentContainerStyle={{ paddingBottom: 30 }}
                    renderItem={({ item }: FlatListType) => {
                        return <View style={styles.card}>
                            {
                                isEditing && <TouchableOpacity style={styles.checkbox} onPress={() => toggleHistory(item)}>
                                    {
                                        removeHistory.some(x => x.vod_id === item.vod_id)
                                            ? <CheckBoxSelected height={icons.sizes.l} width={icons.sizes.l} />
                                            : <CheckBoxUnselected height={icons.sizes.l} width={icons.sizes.l} />
                                    }
                                </TouchableOpacity>
                            }
                            <VodHistoryCard vod={item} onPress={() => {
                                dispatch(playVod(item));
                                navigation.navigate('播放', { vod_id: item.vod_id });
                            }} />
                        </View>
                    }}
                />
            }
            {
                isEditing && removeHistory.length > 0 && <View style={styles.deleteConfirmationModal}>
                    <Button
                        onPress={() => {
                            setIsEditing(false);
                            setRemoveHistory([]);
                        }}
                        containerStyle={styles.confirmationBtn}
                        color={colors.card2}
                        titleStyle={{  ...textVariants.body, color: colors.muted }}>
                        取消全选
                    </Button>
                    <Button
                        onPress={() => {
                            dispatch(removeVodsFromHistory(removeHistory));
                            setIsEditing(false);
                            setRemoveHistory([]);
                        }}
                        containerStyle={styles.confirmationBtn}
                        color={colors.primary}
                        titleStyle={{ ...textVariants.body, color: colors.background }}>
                        删除
                    </Button>
                </View>
            }
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
    },
    deleteConfirmationModal: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    confirmationBtn: {
        flex: 1,
        margin: 10,
        borderRadius: 10
    }
});