import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
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
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';
import { addSearchHistory, clearSearchHistory } from '../../redux/actions/searchActions';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';
import ClearHistoryIcon from '../../../static/images/clear.svg'

export default ({ navigation }: RootStackScreenProps<'搜索'>) => {
    const [search, setSearch] = useState("");
    const [searchTimer, setSearchTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
    const [searchResults, setSearchResults] = useState<Array<SuggestedVodType>>([]);
    const [showResults, setShowResults] = useState(false);
    const dispatch = useAppDispatch();
    const searchHistory = useAppSelector(({ searchHistoryReducer }: RootState) => searchHistoryReducer)

    const { colors, textVariants, spacing, icons } = useTheme();
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

    const onSubmit = () => {
        dispatch(addSearchHistory(search));
        setShowResults(!showResults);
    }

    const clearHistory = () => {
        dispatch(clearSearchHistory());
    }

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
                    inputStyle={textVariants.small}
                    loadingProps={{}}
                    onChangeText={(newVal: string) => {
                        setShowResults(false);
                        updateSearch(newVal)
                    }}
                    placeholder="输入搜索关键词"
                    placeholderTextColor={colors.muted}
                    round
                    onSubmitEditing={onSubmit}
                    searchIcon={<SearchIcon color={colors.muted} height={23} width={23}/>}
                    value={search}
                    clearIcon={
                        search ?
                            <TouchableOpacity onPress={() => {
                                setSearchResults([]);
                                setSearch('');
                                setShowResults(false);
                            }} >
                                <ClearIcon height={12} width={12}/>
                            </TouchableOpacity>
                            : <></>
                    }
                />
            </View>
            <View style={styles.searchResult}>
                {
                    showResults
                        ? <VodWithDescriptionList vodList={searchResults} />
                        : <View style={{ marginLeft: 10 }}>
                            {
                                search.length === 0
                                    ? <View gap={spacing.m}>
                                        {
                                            searchHistory.history.length > 0 &&
                                            <Animated.View
                                                gap={spacing.m}
                                                entering={FadeInUp}
                                                exiting={FadeOutUp}
                                            >
                                                <View style={styles.rowApart}>
                                                    <Text style={{ ...textVariants.header }}>历史搜索</Text>
                                                    <TouchableOpacity style={styles.rowApart} onPress={clearHistory}>
                                                        <Text style={{ ...textVariants.small, marginRight: 5, color: colors.muted }}>清除</Text>
                                                        <ClearHistoryIcon height={textVariants.small.fontSize} width={textVariants.small.fontSize} />
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={styles.searchContainer}>
                                                    {
                                                        searchHistory.history.map((hst, idx) => <TouchableOpacity
                                                            key={`search-${idx}`} style={{ backgroundColor: colors.search, ...styles.hst }}
                                                            onPress={() => {
                                                                setSearch(hst);
                                                                updateSearch(hst);
                                                            }}
                                                        >
                                                            <Text style={{ ...textVariants.body, color: colors.muted }}>{hst}</Text>
                                                        </TouchableOpacity>)
                                                    }
                                                </View>
                                            </Animated.View>
                                        }
                                        <OrderedSearchResultsList recommendationList={recommendations} />
                                    </View>
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
        marginTop: 10,
    },
    rowApart: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    searchContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    hst: {
        paddingTop: 7,
        paddingBottom: 9,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 8,
        marginBottom: 4,
        marginRight: 10
    }
});