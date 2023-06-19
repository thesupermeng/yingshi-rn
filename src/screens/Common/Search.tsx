import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { SearchBar } from '@rneui/base';
import { useTheme } from '@react-navigation/native';
import OrderedSearchResultsList from '../../components/search/RecommendationList';
import SearchResultList from '../../components/search/SearchResultList';
import ScreenContainer from '../../components/container/screenContainer';
import BackButton from '../../components/button/backButton';
import SearchIcon from '../../../static/images/search.svg';
import ClearIcon from '../../../static/images/cross.svg';
import { useQuery } from '@tanstack/react-query'

import { SuggestResponseType, SuggestedVodType } from '../../types/ajaxTypes';
import { RootStackScreenProps } from '../../types/navigationTypes';
import { API_DOMAIN } from '../../constants';
import VodWithDescriptionList from '../../components/vod/vodWithDescriptionList';

export default ({ navigation }: RootStackScreenProps<'搜索'>) => {
    const [search, setSearch] = useState("");
    const [searchTimer, setSearchTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
    const [searchResults, setSearchResults] = useState<Array<SuggestedVodType>>([]);
    const [showResults, setShowResults] = useState(false);

    const { colors, textVariants } = useTheme();
    const { data: recommendations } = useQuery({
        queryKey: ["recommendationList"],
        queryFn: () =>
            fetch(`${API_DOMAIN}vod/v1/vod?by=hits_day`)
                .then(response => response.json())
                .then((json: SuggestResponseType) => {
                    return json.data.List
                }),
        initialData: [],
    });
    async function fetchData(text: string) {
        fetch(`${API_DOMAIN}vod/v1/vod?wd=${text}`)
            .then(response => response.json())
            .then((json: SuggestResponseType) => {
                setSearchResults(json.data.List);
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
                <BackButton onPress={() => navigation.goBack()} />
                <SearchBar
                    platform="default"
                    containerStyle={styles.containerStyle}
                    inputContainerStyle={{ backgroundColor: colors.search, ...styles.inputContainerStyle, }}
                    leftIconContainerStyle={{}}
                    rightIconContainerStyle={{}}
                    inputStyle={textVariants.body}
                    loadingProps={{}}
                    onChangeText={(newVal: string) => {
                        setShowResults(false);
                        updateSearch(newVal)
                    }}
                    placeholder="输入搜索关键词"
                    placeholderTextColor={colors.muted}
                    round
                    onSubmitEditing={() => setShowResults(!showResults)}
                    searchIcon={<SearchIcon color={colors.muted} />}
                    value={search}
                    clearIcon={
                        search ?
                            <TouchableOpacity onPress={() => {
                                setSearchResults([]);
                                setSearch('');
                                setShowResults(false);
                            }} >
                                <ClearIcon />
                            </TouchableOpacity>
                            : <></>
                    }
                />
            </View>
            <View style={styles.searchResult}>
                {
                    showResults
                        ? <VodWithDescriptionList vodList={searchResults} />
                        : <View style={{marginLeft: 20}}>
                            {
                                search.length === 0
                                    ? <OrderedSearchResultsList recommendationList={recommendations} />
                                    : <SearchResultList searchResultList={searchResults} />
                            }
                        </View>

                }

            </View>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    nav: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginTop: 5
    },
    containerStyle: {
        paddingLeft: 10,
        backgroundColor: 'transparent',
        textAlign: 'left',
        flexGrow: 1,
        borderRadius: 100,
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    inputContainerStyle: {
        borderRadius: 100,
        height: 35
    },
    searchResult: {
        marginTop: 20,
    }
});