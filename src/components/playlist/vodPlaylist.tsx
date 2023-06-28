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
}

type FlatListType = {
    item: VodType
}

export default function VodPlaylist({ playlist }: Props) {
    const { textVariants, spacing, colors, icons } = useTheme();
    const navigator = useNavigation();
    const dispatch = useAppDispatch();
    const viewMore = () => {
        dispatch(viewPlaylistDetails(playlist));
        navigator.navigate('PlaylistDetail', { topic_id: playlist.topic_id });
    }
    return (
        <View style={styles.playlist} gap={spacing.s}>
            <View style={{
                paddingLeft: spacing.sideOffset,
                paddingRight: spacing.sideOffset,
            }}>
                <View style={styles.header}>
                    <Text style={{ ...textVariants.bigHeader, color: colors.primary }}>{playlist.topic_name}</Text>
                    <TouchableOpacity onPress={viewMore}>
                        <RightIcon color={colors.text} height={icons.sizes.xl} width={icons.sizes.xl} />
                    </TouchableOpacity>
                </View>
                <Text numberOfLines={3} style={{ ...textVariants.body, color: colors.text, flex: 1 }}>
                    {playlist.topic_blurb}
                </Text>
            </View>
            <View style={{paddingLeft: spacing.sideOffset}}>
                <FlatList
                    data={playlist.vod_list}
                    horizontal
                    renderItem={({ item }: FlatListType) => {
                        return <VodCard vod_name={item.vod_name} vod_pic={item.vod_pic} onPress={() => {
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