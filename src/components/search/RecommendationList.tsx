import { useNavigation, useTheme } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity, Text, FlatList } from 'react-native';
import { SuggestedVodType } from '../../types/ajaxTypes'
import { useAppDispatch } from '../../hooks/hooks';
import { playVod } from '../../redux/actions/vodActions';
interface Props {
    recommendationList: Array<SuggestedVodType>;
}
type FlatListType = {
    item: SuggestedVodType
    index: number
}
export default function RecommendationList({ recommendationList }: Props) {
    const { colors, textVariants, spacing } = useTheme();
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    return (
        <View>
            {
                recommendationList &&
                < FlatList
                    data={recommendationList}
                    renderItem={({ item, index }: FlatListType) => (
                        <View style={{ ...styles.suggestion, marginBottom: spacing.l }} gap={spacing.s}>
                            <TouchableOpacity style={styles.suggestionName} onPress={() => {
                                dispatch(playVod(item));
                                navigation.navigate('播放', { vod_id: item.vod_id })
                            }}>
                                <Text style={{
                                    color:
                                        index === 0 ? colors.title :
                                            index === 1 ? colors.recommendation2 :
                                                index === 2 ? colors.recommendation3 :
                                                    colors.muted,
                                    ...styles.suggestionIndex
                                }}>{index + 1}</Text>
                                <Text style={textVariants.body}>{item.vod_name}</Text>
                            </TouchableOpacity>
                            <Text style={{ ...textVariants.small, color: colors.muted, }}>{item.vod_class}</Text>
                        </View>
                    )}
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    suggestionName: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexShrink: 1,
    },
    suggestionIndex: {
        marginRight: 10
    },
    suggestion: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});