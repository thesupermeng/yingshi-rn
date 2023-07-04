import { useNavigation, useTheme } from '@react-navigation/native';
import { VodTopicType, VodType } from '../../types/ajaxTypes';
import { playVod, viewPlaylistDetails } from '../../redux/actions/vodActions';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import RightIcon from '../../../static/images/more_arrow.svg';
import VodCard from '../vod/vodCard';
import { useAppDispatch } from '../../hooks/hooks';

interface Props {
    playlist: VodTopicType,
    vodStyle?: typeof StyleSheet,
    titleStyle?: typeof StyleSheet
}

type FlatListType = {
    item: VodType
    index: number
}

export default function VodPlaylist({ playlist, titleStyle }: Props) {
    const { textVariants, spacing, colors, icons } = useTheme();
    const navigator = useNavigation();
    const dispatch = useAppDispatch();
    const viewMore = () => {
        dispatch(viewPlaylistDetails(playlist));
        navigator.navigate('PlaylistDetail', { topic_id: playlist.topic_id });
    }
    return (
        <View style={styles.playlist} gap={spacing.m}>
            <TouchableOpacity onPress={viewMore}>
                <View style={{
                    paddingLeft: spacing.sideOffset,
                    paddingRight: spacing.sideOffset,
                }} gap={spacing.s}>
                    <View style={styles.header}>
                        <Text style={{ ...textVariants.bigHeader, ...titleStyle }}>{playlist.topic_name}</Text>

                        <RightIcon color={colors.text} height={icons.sizes.l} width={icons.sizes.l} />

                    </View>
                    <Text numberOfLines={3} style={{ ...textVariants.small, color: colors.text, flex: 1 }}>
                        {playlist.topic_blurb}
                    </Text>
                </View>
            </TouchableOpacity>
            <View style={{ paddingLeft: spacing.sideOffset }}>
                <FlatList
                    data={playlist?.vod_list}
                    horizontal
                    renderItem={({ item, index }: FlatListType) => {
                        return <VodCard vod_name={item.vod_name}
                            vodImageStyle={{ width: 120, height: 180 }}
                            vod_pic={item.vod_pic} onPress={() => {
                                dispatch(playVod(item));
                                navigator.navigate('播放', {
                                    vod_id: item.vod_id,
                                })
                            }} />
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    playlist: {
        marginBottom: 12
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});