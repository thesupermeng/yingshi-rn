import { useTheme } from '@react-navigation/native';
import { VodTopicType, VodType } from '../../types/ajaxTypes';
import { playVod, togglePlaylistFavorites, viewPlaylistDetails } from '../../redux/actions/vodActions';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import RightIcon from '../../../static/images/more_arrow.svg';
import VodCard from '../vod/vodCard';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppDispatch } from '../../hooks/hooks';
import FavoriteIcon from '../../../static/images/favorite.svg';

interface Props {
    playlist: VodTopicType,
    vodStyle?: typeof StyleSheet,
    navigator: NativeStackNavigationProp<any, any, undefined>
}
type FlatListType = {
    item: VodType
}
export default function FavoritePlaylist({ playlist, navigator }: Props) {
    const { textVariants, spacing, colors, icons } = useTheme();
    const dispatch = useAppDispatch();
    return (
        <View style={styles.playlist} gap={spacing.s}>
            <View style={styles.header}>
                <Text style={{ ...textVariants.header, color: colors.primary }}>{playlist.topic_name}</Text>
                <TouchableOpacity onPress={() => dispatch(togglePlaylistFavorites(playlist))} style={{ marginLeft: spacing.xs }}>
                    <FavoriteIcon width={icons.sizes.m} height={icons.sizes.m} style={{ color: colors.primary, marginRight: spacing.m }} />
                </TouchableOpacity>
            </View>
            <Text numberOfLines={3} style={{ ...textVariants.small, color: colors.text, flex: 1 }}>
                {playlist.topic_blurb}
            </Text>
            <FlatList
                data={playlist.vod_list}
                horizontal
                renderItem={({ item }: FlatListType) => {
                    return <VodCard
                        vod_name={item.vod_name}
                        vod_pic={item.vod_pic}
                        vodImageStyle={{ width: 120, height: 180 }}
                        onPress={() => {
                            dispatch(playVod(item));
                            navigator.navigate('播放', {
                                vod_id: item.vod_id,
                            })
                        }} />
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    playlist: {
        marginTop: 30
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});