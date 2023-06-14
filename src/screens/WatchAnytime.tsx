import React, { useState, useCallback } from 'react';
import { 
    View, 
    TouchableOpacity,
    TouchableWithoutFeedback,
    FlatList,
    ViewToken,
    StatusBar,
    Dimensions,
    SafeAreaView,
    Text } from 'react-native';
import ScreenContainer from '../components/container/screenContainer';
import { useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import Video from 'react-native-video';
import { StyleSheet } from 'react-native';

export default ({ navigation }) => {

    const { colors } = useTheme();
    // const { data } = useQuery({
    //     queryKey: ["HomePage"],
    //     queryFn: () =>
    //         fetch(`https://api.yingshi.tv/page/v1/typepage`)
    //         .then(response => response.json())
    //         .then((json: VodCarousellResponseType) => {
    //             console.log(json.data.categories.map(x => [x.type_name, x.vod_list[0].vod_name]))
    //             return json.data
    //         })
    // });

    const [videos, setVideos] = useState([
        'https://www.douyin.com/aweme/v1/play/?video_id=v0200fg10000ci1c007og65tbcuhb9l0&line=0&file_id=fe6b1de145384eb9b4f21914187bd033&sign=d2b692db21369a60ed7e1c2fe4c616b5&is_play_url=1&source=PackSourceEnum_MIX_AWEME',
        'https://www.douyin.com/aweme/v1/play/?video_id=v0200fg10000ci1c007og65tbcuhb9l0&line=0&file_id=fe6b1de145384eb9b4f21914187bd033&sign=d2b692db21369a60ed7e1c2fe4c616b5&is_play_url=1&source=PackSourceEnum_MIX_AWEME',
        'https://www.douyin.com/aweme/v1/play/?video_id=v0200fg10000ci1c007og65tbcuhb9l0&line=0&file_id=fe6b1de145384eb9b4f21914187bd033&sign=d2b692db21369a60ed7e1c2fe4c616b5&is_play_url=1&source=PackSourceEnum_MIX_AWEME',
        'https://www.douyin.com/aweme/v1/play/?video_id=v0200fg10000ci1c007og65tbcuhb9l0&line=0&file_id=fe6b1de145384eb9b4f21914187bd033&sign=d2b692db21369a60ed7e1c2fe4c616b5&is_play_url=1&source=PackSourceEnum_MIX_AWEME',
        'https://www.douyin.com/aweme/v1/play/?video_id=v0200fg10000ci1c007og65tbcuhb9l0&line=0&file_id=fe6b1de145384eb9b4f21914187bd033&sign=d2b692db21369a60ed7e1c2fe4c616b5&is_play_url=1&source=PackSourceEnum_MIX_AWEME',
    ]);
    const [current, setCurrent] = useState<number | null>(null);
    const [isPaused, setIsPaused] = useState(false);
    const windowHeight = Dimensions.get('window').height;
    // const fullHeight = windowHeight + (StatusBar.currentHeight || 0);

    const handleViewableItemsChanged = useCallback(({ viewableItems }: { viewableItems: any }) => {
        if(typeof viewableItems[0] != 'undefined'){
            console.log("@@@@@@@@@@@PLAYING NUMBER@@@@@@@@@@@ : " + viewableItems[0].index);
            setCurrent(viewableItems[0].index);
        }
    }, []);
    return (
        <SafeAreaView>
            <FlatList 
                data={videos}
                renderItem={({item, index}: { item: string; index: number }) => {
                    const isCurrentVideo = index === current;
        
                    return (
                        <View style={{height: windowHeight - 50, width: '100%', backgroundColor: 'yellow'}}>
                        <TouchableWithoutFeedback onPress={() => {
                            setIsPaused(!isPaused);
                        }}>
                            {/* <Video resizeMode="contain" source={{ uri: item }} repeat={true} style={styles.video} paused={index === current ? isPaused : true}/> */}
                            <Video 
                                resizeMode="contain" 
                                source={{ uri: item }} 
                                repeat={true} 
                                style={styles.video} 
                                paused={!isCurrentVideo || isPaused} 
                                preload={isCurrentVideo ? 'auto' : 'metadata'} />
                        </TouchableWithoutFeedback>
                        </View>
                    )
                    }}
                horizontal={false}
                pagingEnabled={true}
                getItemLayout={(data: any, index: number) => {
                    return { length: windowHeight, offset: (windowHeight * index), index }
                }}
                keyExtractor={(item: any, index: any) => index.toString()}
                viewabilityConfig={{viewAreaCoveragePercentThreshold: 80}}
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={handleViewableItemsChanged}
                />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    video: {
        height: '100%',
        width: '100%',
        backgroundColor: '#000',
    },
})