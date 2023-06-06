import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { SearchBar } from '@rneui/base';
import { useTheme } from '@react-navigation/native';
import { YingshiDarkTheme } from '../theme';
import OrderedSearchResultsList from '../components/search/orderedSearchResultList';

import SearchIcon from '../../static/images/search.svg';
import ClearIcon from '../../static/images/cross.svg';
import BackButton from '../../static/images/back_arrow.svg';

import { SuggestType } from '../types/ajaxTypes';
type Props = {
    defaultInput?: string,
    navigation?: any
}
export default ({ navigation, defaultInput = '' }: Props) => {
    const [search, setSearch] = useState("");
    const [searchTimer, setSearchTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
    const [searchResults, setSearchResults] = useState<Array<SuggestType>>([]);
    const { colors } = useTheme();

    async function fetchData(text: string) {
        fetch(`https://www.yingshi.tv/index.php/ajax/suggest.html?wd=${text}&mid=1&limit=10`)
            .then(response => response.json())
            .then(json => {
                console.log(json.list)
                setSearchResults(json.list)
            })
            .catch(error => {
                console.error(error);
            });
    }

    const updateSearch = (input: string) => {
        if (searchTimer) {
            clearTimeout(searchTimer);
        }
        setSearch(input);
        setSearchTimer(
            setTimeout(() => {
                fetchData(input);
            }, 100),
        );
    };
    return (
        <View>
            <View style={styles.nav}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackButton></BackButton>
                </TouchableOpacity>
                <SearchBar
                    platform="default"
                    containerStyle={styles.inputContainer}
                    inputContainerStyle={styles.input}
                    leftIconContainerStyle={{}}
                    rightIconContainerStyle={{}}
                    loadingProps={{}}
                    onChangeText={newVal => updateSearch(newVal)}
                    placeholder="输入搜索关键词"
                    placeholderTextColor="#888"
                    round
                    searchIcon={<SearchIcon />}
                    value={search}
                    clearIcon={
                        <TouchableOpacity onPress={() => {
                            setSearchResults([]);
                            setSearch('');
                        }} >
                            <ClearIcon />
                        </TouchableOpacity>}
                />
            </View>
            <OrderedSearchResultsList searchResults={searchResults} />
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        paddingTop: 4,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    inputContainer: {
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: 'transparent',
        textAlign: 'left',
        width: '100%'
    },
    input: {
        backgroundColor: YingshiDarkTheme.colors.search
    },
});