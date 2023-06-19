import { useNavigation, useTheme } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity, Text, FlatList } from 'react-native';
import { SuggestedVodType } from '../../types/ajaxTypes'
import { useAppDispatch } from '../../hooks/hooks';
import { playVod } from '../../redux/actions/vodActions';
interface Props {
    searchResultList: Array<SuggestedVodType>;
}

type FlatListType = {
    item: SuggestedVodType
}

export default function SearchResultList({ searchResultList }: Props) {
    const { spacing, textVariants } = useTheme();
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    return (
        <FlatList
            data={searchResultList}
            renderItem={({ item }: FlatListType) => {
                return <TouchableOpacity style={{ ...styles.suggestion, marginBottom: spacing.l }} onPress={() => {
                    dispatch(playVod(item));
                    navigation.navigate('播放', { vod_id: item.vod_id })
                }}>
                    <Text style={textVariants.body}>{item.vod_name}</Text>
                </TouchableOpacity>
            }}
        />
    );
}

const styles = StyleSheet.create({
    suggestion: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    suggestionIndex: {
        marginRight: 10
    },
});