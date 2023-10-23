import React, { useState, useMemo, RefObject, memo, useCallback, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground, Image } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { VodEpisodeListType, VodEpisodeType } from '../../types/ajaxTypes';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomSheet, { BottomSheetBackdrop, BottomSheetFlatList, BottomSheetModalProvider, BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { GestureHandlerRootView, FlatList } from 'react-native-gesture-handler';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import SortAscIcon from '../../../static/images/sortAsc.svg';
import SortDescIcon from '../../../static/images/sortDesc.svg';
import FastImage from 'react-native-fast-image';
import { useQuery } from '@tanstack/react-query';
import { selectMiniVodCollection, setFromMiniVodCollection } from '../../redux/actions/miniVodActions';
import { API_DOMAIN, API_DOMAIN_TEST, API_DOMAIN_LOCAL } from '../../utility/constants';
import { CollectionResponseType, MiniVideoCollectionItem } from '../../types/ajaxTypes';
import { getMinuteSecond } from '../../utility/helper';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import { RootState } from '../../redux/store';
import { MiniVodReducerState } from '../../redux/reducers/miniVodReducer';

interface Props {
    sheetRef?: RefObject<BottomSheetMethods>;
    collectionId: number;
    collectionVideoList?: any;
    collectionVideoId?: number;
    collectionName?: string;
    inCollectionView?: boolean;
    changeEpisode: any;
    currentVodIndex?: number;
    changeCurrentVodIndex?: any;
}

interface TrimResType {
    toPlayPosition: number;
    trimmedItems: MiniVideoCollectionItem[];
}

function CollectionBottomSheet({ changeEpisode, sheetRef, collectionName, collectionVideoId = 0, collectionId, inCollectionView = false, currentVodIndex = 0 } : Props) {
    
    const scrollRef = useRef<any>();
    const miniVodReducer: MiniVodReducerState = useAppSelector(
        ({miniVodReducer}: RootState) => miniVodReducer,
    );
    
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const [enabledUseQuery, setEnabledUseQuery] = useState(false);
    const [totalCollectionEpisodes, setTotalCollectionEpisodes] = useState(0);
    const [itemIndex, setItemIndex] = useState(0);
    const [imageError, setImageError] = useState(false);

    const {
        isLoading,
        isError,
        error,
        data: collectionData,
        isFetching,
        isPreviousData,
    } = useQuery(
        ['collection', collectionId],
        () =>
        fetch(`${API_DOMAIN}miniVod/v2/collections/${collectionVideoId}?limit=30`)
            .then(response => response.json())
            .then((json: CollectionResponseType) => {
                return json.data.List
            }),
        {
            enabled: enabledUseQuery,
        }
    );

    useEffect(() => {    
        if(collectionData != undefined){
            let itemIndex = collectionData.findIndex(obj => {
                return obj.mini_video_id === collectionVideoId;
            });
            
            if(itemIndex < 0 || itemIndex == undefined){
                itemIndex = -1;
            }

            setItemIndex(itemIndex);
            
            dispatch(setFromMiniVodCollection(itemIndex));
            dispatch(selectMiniVodCollection(itemIndex));
            setTotalCollectionEpisodes(collectionData.length);
            if (scrollRef) {
                scrollRef?.current?.scrollTo({y: (itemIndex) * 130, animated: true});
            }
        }
    }, [collectionData])
    
    const { colors, textVariants, spacing } = useTheme();
    const snapPoints = useMemo(() => ["25%", "80%"], []);
    const renderBackdrop = useCallback(
        (props: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => <BottomSheetBackdrop {...props} />,
        []);

    const handleSheetChanges = useCallback((index: number) => {
        if (index === 0 && sheetRef?.current) {
            sheetRef?.current.close();
        }

        if(index == 1){
            setEnabledUseQuery(true);
        }else{
            setEnabledUseQuery(false);
        }
    }, [sheetRef]);

    const goToCollection = useCallback((item: MiniVideoCollectionItem, index: number) => {
        if(collectionData !== undefined){
            dispatch(selectMiniVodCollection(index));

            if(inCollectionView == true){
                changeEpisode(item, index)
            }else{
                navigation.navigate('合集播放', {
                    collection_title: item.mini_video_collection_title + '合集',
                    collection_videos: collectionData == undefined ? collectionData : [collectionData[index]],
                    collection_video_display_position: index + 1,
                    collection_video_total_items: collectionData == undefined ? 0 : collectionData.length,
                });
            }
        }
    }, [collectionData]);

    let selectedIndex = miniVodReducer.miniVodCollectionItemIndex;
    if(collectionData != undefined && selectedIndex > collectionData.length - 1){
        selectedIndex = 0;
    }
    return (
        <BottomSheet
            ref={sheetRef}
            index={-1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            backdropComponent={renderBackdrop}
            backgroundStyle={{
                backgroundColor: '#171717',
            }}
            handleIndicatorStyle={{
                backgroundColor: '#414040',
                width: 50
            }}
        >   
            <View
                style={{
                    ...styles.container,
                    // backgroundColor: colors.card,
                    backgroundColor: '#171717',
                    paddingLeft: spacing.sideOffset,
                    paddingRight: spacing.sideOffset,
                    gap: spacing.m
                }}
            >
                <View style={{ paddingTop: 12, paddingBottom: 8 }}>
                    <Text style={{ ...textVariants.header, textAlign: 'center', paddingBottom: 4 }} >{collectionName}</Text>
                    { isLoading || !isFetching &&
                        <Text style={{ ...textVariants.subBody, textAlign: 'center', color: colors.sliderDot }} >更新至{totalCollectionEpisodes}集</Text>
                    }
                </View>

                { (isLoading || isFetching || !enabledUseQuery) &&
                    <View style={{ flex: 1, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            style={{ height: 80, width: 80 }}
                            source={require('../../../static/images/loading-spinner.gif')}
                            resizeMode={'contain'}
                        />
                    </View>
                }
                { !isLoading && !isFetching && collectionData != undefined && enabledUseQuery && 
                    <View style={{ flex: 1, marginRight: 8 }}>
                        <BottomSheetScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
                            {collectionData?.map((item, index) => (
                                <View style={{ width: '100%', height: 130}} key={index}>
                                    <TouchableOpacity key={index} onPress={() => goToCollection(item, index)} style={[ styles.bottomSheetItem, index == selectedIndex ? styles.selectedBottomSheetItem : styles.notSelected ]}>
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <View style={{ flex: 2, backgroundColor: 'black', borderRadius: 6 }}>
                                                <Image
                                                    style={{ borderRadius: 6, height: '100%' }}
                                                    source={{
                                                        uri: imageError == false ? item.mini_video_origin_cover : 'https://static.wixstatic.com/media/5dca26_0052ca4edcc94049a9115dea94e6616d~mv2.png',
                                                    }}
                                                    onError={() => setImageError(true)}
                                                    resizeMode={'contain'}
                                                />
                                            </View>
                                            <View style={{ flex: 6, flexDirection: 'column', alignSelf: 'center' }}>
                                                <View style={{ paddingLeft: 12 }}>
                                                    <Text numberOfLines={3} style={{...textVariants.unselected, paddingBottom: 10}}>{item.mini_video_title}</Text>
                                                    <Text style={{...textVariants.subBody, color: colors.sliderDot}}>{getMinuteSecond(item.mini_video_duration)}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </BottomSheetScrollView>
                    </View>
                }
            </View>
        </BottomSheet>
    )
};

const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flex: 1,
        height: '100%'
    },
    episodeList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // alignItems: 'flex-start',
        paddingLeft: 10
    },
    bottomSheetItem: {
        width: '100%',
        marginVertical: 1,
        padding: 7,
        // paddingVertical: 8,
        borderRadius: 6,
        flex: 1,
    },
    selectedBottomSheetItem: {
        backgroundColor: '#303030'
    },
    notSelected: {
    }
})

export default memo(CollectionBottomSheet);