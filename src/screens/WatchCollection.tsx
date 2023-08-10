import React, { useEffect, useState, useCallback, useMemo, memo } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    FlatList,
    ViewToken,
    StatusBar,
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
import Orientation from 'react-native-orientation-locker';
import { StyleSheet } from 'react-native';
import TitleWithBackButtonHeader from '../components/header/titleWithBackButtonHeader';
import BackIcon from '../../static/images/back_arrow.svg';

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

    const { colors, spacing, textVariants, icons } = useTheme();
    const [isPaused, setIsPaused] = useState(false);
    
    const [title, setTitle] = useState('');
    const [currentEpisode, setCurrentEpisode] = useState(route.params.collection_video_display_position);

    const goBack = () => {
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
        <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
            {/* <View style={{ position: 'absolute', top: 0, left: 0, padding: 20, zIndex: 50, width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#FFF', fontSize: 20 }}>返回随心看</Text>
            </View> */}
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
                enterPosition={route.params.collection_enter_position}
                collection_ori_all_videos={route.params.collection_ori_all_videos}
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
