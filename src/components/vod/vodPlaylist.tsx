import { useTheme } from '@react-navigation/native';
import { VodTopicType, VodType } from '../../types/ajaxTypes';
import { playVod, viewPlaylistDetails } from '../../redux/actions/vodActions';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import RightIcon from '../../../static/images/more_arrow.svg';
import VodCard from './vodCard';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PlaylistStackParamList } from '../../types/navigationTypes';
import { useAppDispatch } from '../../hooks/hooks';

interface Props {
    playlist: VodTopicType,
    vodStyle?: typeof StyleSheet,
    navigator: NativeStackNavigationProp<PlaylistStackParamList, keyof PlaylistStackParamList, undefined>
}

export default function VodPlaylist({ playlist, navigator }: Props) {
    const { textVariants, spacing, colors, icons } = useTheme();
    const dispatch = useAppDispatch();
    const viewMore = () => {
        dispatch(viewPlaylistDetails(playlist));
        navigator.navigate('PlaylistDetail', { topic_id: playlist.topic_id });
    }
    return (
        <View style={styles.playlist} gap={spacing.s}>
            <View style={styles.header}>
                <Text style={{ ...textVariants.bigHeader, color: colors.primary }}>{playlist.topic_name}</Text>
                <TouchableOpacity onPress={viewMore}>
                    <RightIcon color={colors.text} height={icons.sizes.xl} width={icons.sizes.xl} />
                </TouchableOpacity>
            </View>
            <Text numberOfLines={3} style={{ ...textVariants.body, color: colors.text, flex: 1 }}>
                {playlist.topic_blurb}
            </Text>
            <ScrollView style={styles.list} horizontal>
                {
                    playlist.vod_list.map((vod, id) => (
                        <VodCard key={`${playlist.topic_id}-${id}`} vod={vod} onPress={() => navigator.navigate('播放', {
                            vod_id: vod.vod_id,
                        })} />
                    ))
                }
            </ScrollView>
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