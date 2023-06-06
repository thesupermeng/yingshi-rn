import Logo from '../../../static/images/logo.svg';
import { useTheme } from '@react-navigation/native';
import { TextInput, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { SuggestType } from '../../types/ajaxTypes'
import { YingshiDarkTheme } from '../../theme';
interface Props {
    searchResults: Array<SuggestType>;
}

export default function SearchBar({ searchResults }: Props) {
    const theme = useTheme();
    return (
        <View>
            {
                searchResults && searchResults.map((result, id) => (
                    <TouchableOpacity id={`search-result-${id}`} style={styles.suggestion}>
                        <Text style={{ color: 
                            id === 0 ? theme.colors.yellow : 
                            id === 1 ? theme.colors.orange : 
                            id === 2 ? theme.colors.darkYellow : 
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