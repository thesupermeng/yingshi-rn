import { useTheme } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { SuggestType } from '../../types/ajaxTypes'
interface Props {
    recommendationList: Array<SuggestType>;
}

export default function RecommendationList({ recommendationList }: Props) {
    const theme = useTheme();
    return (
        <View>
            {
                recommendationList && recommendationList.map((result, id) => (
                    <TouchableOpacity key={`search-result-${id}`} style={styles.suggestion}>
                        <Text style={{ color: 
                            id === 0 ? theme.colors.title : 
                            id === 1 ? theme.colors.recommendation2 : 
                            id === 2 ? theme.colors.recommendation3 : 
                            theme.colors.text,
                            ...styles.suggestionIndex }}>{id + 1}</Text>
                        <Text style={{ color: theme.colors.text }}>{result.name}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    suggestion: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    suggestionIndex: {
        marginRight: 10
    },
});