import { useTheme } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { SuggestType } from '../../types/ajaxTypes'
interface Props {
    searchResultList: Array<SuggestType>;
}

export default function SearchResultList({ searchResultList }: Props) {
    const theme = useTheme();
    return (
        <View>
            {
                searchResultList && searchResultList.map((result, id) => (
                    <TouchableOpacity key={`search-result-${id}`} style={styles.suggestion}>
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