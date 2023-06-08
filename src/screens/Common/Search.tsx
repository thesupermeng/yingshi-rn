import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { SearchBar } from '@rneui/base';
import { useTheme } from '@react-navigation/native';
import OrderedSearchResultsList from '../../components/search/RecommendationList';
import SearchResultList from '../../components/search/SearchResultList';
import ScreenContainer from '../../components/container/screenContainer';
import BackButton from '../../components/button/backButton';
import SearchIcon from '../../../static/images/search.svg';
import ClearIcon from '../../../static/images/cross.svg';
import { useQuery } from '@tanstack/react-query'
import { useNavigation } from '@react-navigation/native';

import { SuggestType } from '../../types/ajaxTypes';
type Props = {
    defaultInput?: string,
}
export default ({ defaultInput = '' }: Props) => {
    const [search, setSearch] = useState("");
    const navigation = useNavigation();
    const [searchTimer, setSearchTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
    const [searchResults, setSearchResults] = useState<Array<SuggestType>>([]);
    const { colors } = useTheme();
    const { data:recommendations } = useQuery({
        queryKey: ["recommendationList"],
        queryFn: () =>
            fetch(`https://www.yingshi.tv/index.php/ajax/suggest.html?wd=a&mid=1&limit=10`)
                .then(response => response.json())
                .then(json => {
                    return json.list
                })
    });
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
        <ScreenContainer>
            <View style={styles.nav}>
                <BackButton />
                <SearchBar
                    platform="default"
                    containerStyle={styles.containerStyle}
                    inputContainerStyle={{ backgroundColor: colors.search, ...styles.inputContainerStyle }}
                    leftIconContainerStyle={{}}
                    rightIconContainerStyle={{}}
                    loadingProps={{}}
                    onChangeText={(newVal:string) => updateSearch(newVal)}
                    placeholder="输入搜索关键词"
                    placeholderTextColor={colors.muted}
                    round
                    searchIcon={<SearchIcon color={colors.muted} />}
                    value={search}
                    clearIcon={
                        search ? 
                            <TouchableOpacity onPress={() => {
                                setSearchResults([]);
                                setSearch('');
                            }} >
                                <ClearIcon />
                            </TouchableOpacity>
                            : <></>
                        }
                />
            </View>
            <View style={styles.searchResult}>
                {
                    search.length === 0
                        ? <OrderedSearchResultsList recommendationList={recommendations} />
                        : <SearchResultList searchResultList={searchResults} />
                }
            </View>
        </ScreenContainer>
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
    containerStyle: {
        paddingLeft: 10,
        paddingRight: 30,
        backgroundColor: 'transparent',
        textAlign: 'left',
        flexGrow: 1,
        borderRadius: 100,
        borderTopWidth: 0,
        borderBottomWidth: 0
    },
    inputContainerStyle: {
        borderRadius: 100
    },
    searchResult: {
        marginTop: 20,
        marginLeft: 20
    }
});