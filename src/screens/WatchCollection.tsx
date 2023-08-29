import React, { useEffect, useState, useCallback, useMemo, memo } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    FlatList,
    ViewToken,
    Dimensions,
    SafeAreaView,
    Text,
    Pressable
} from 'react-native';

import {RootStackScreenProps} from '../types/navigationTypes';
import ScreenContainer from '../components/container/screenContainer';
import { useTheme, useFocusEffect } from '@react-navigation/native';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { MiniVideo } from '../types/ajaxTypes';
import MiniVideoList from '../components/videoPlayer/miniVodList';
import { API_DOMAIN, API_DOMAIN_TEST, API_DOMAIN_LOCAL } from '../utility/constants';
import { StyleSheet } from 'react-native';
import TitleWithBackButtonHeader from '../components/header/titleWithBackButtonHeader';
import BackIcon from '../../static/images/back_arrow.svg';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import { selectMiniVodCollection } from '../redux/actions/miniVodActions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootState } from '../redux/store';
import { MiniVodReducerState } from '../redux/reducers/miniVodReducer';

type PlayContextValue = {
    value: string;
    updateValue: (newValue: string) => void;
};

const definedValue = (val: any) => {
    if (val === undefined || val === null) {
        return '';
    }
    return val + ' ';
};

type MiniVideoResponseType = {
    data: {
        List: Array<MiniVideo>
    }
}

export default ({ navigation, route }: RootStackScreenProps<'合集播放'>) => {
    const dispatch = useAppDispatch();
    const insets = useSafeAreaInsets();
    
    const miniVodReducer: MiniVodReducerState = useAppSelector(
        ({miniVodReducer}: RootState) => miniVodReducer,
    );

    const { colors, spacing, textVariants, icons } = useTheme();
    const [isPaused, setIsPaused] = useState(false);
    
    const [title, setTitle] = useState('');
    const [currentEpisode, setCurrentEpisode] = useState(route.params.collection_video_display_position);

    const goBack = () => {
        dispatch(selectMiniVodCollection(miniVodReducer.fromMiniVodCollectionItemIndex));
        navigation.goBack();
    }

    useEffect(() => {
        let miniTitle =
            route.params.collection_title.length > 8
            ? route.params.collection_title.substring(0, 8) + '...'
            : route.params.collection_title;

        setTitle(miniTitle);
        // setCurrentPosition(route.params.collection_video_position + 1)
    }, [route])

    return (
        <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0, paddingBottom: insets.bottom }}>
            <View style={{ position: 'absolute', left: 0, top: 0, zIndex: 100, width: '100%', height: 50 }}>
                <TouchableOpacity style={{ zIndex: 101 }} onPress={goBack}>
                    <View style={{ left: 0, top: 0, position: 'relative', justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: 40, height: 50 }}>
                        <BackIcon height={15} width={20} style={{
                            color: colors.text,justifyContent: 'center', alignContent: 'center', alignItems: 'center',
                        }}></BackIcon>
                    </View>
                </TouchableOpacity>
                <View style={{ left: 0, top: 0, position: 'absolute', justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: '100%', height: 50 }}>
                    <Text style={{  ...textVariants.header, color: colors.text,justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>{title}({currentEpisode}/{route.params.collection_video_total_items})</Text>
                </View>
            </View>
            <MiniVideoList 
                videos={route.params.collection_videos}
                fetchNextPage={false}
                hasNextPage={false}
                isFetching={false}
                isFetchingNextPage={false}
                isPaused={isPaused}
                inCollectionView={true}
                setCollectionEpisode={(index: number) => setCurrentEpisode(index + 1)}
            />
        </ScreenContainer>
    );
};

const styles = StyleSheet.create({

});
