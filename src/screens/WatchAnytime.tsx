import React, { useEffect, useState, useCallback, useMemo } from 'react';
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
import { MiniVideo } from '../types/ajaxTypes';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type MiniVideoResponseType = {
    data: {
        List: Array<MiniVideo>
    }
}

export default ({ navigation } : BottomTabScreenProps<any>) => {

    const { colors } = useTheme();

    const [current, setCurrent] = useState<number | null>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [page, setPage] = useState(1)

    const [videos, setVideos] = useState<MiniVideo[]>([]);
    const miniVideos = useQuery({
        queryKey: ["WatchAnytime"],
        queryFn: async () => {
            console.log('=======*&*&(^(&^^(^*^&(%%(%)_++@)#(!+(#+(!+#(+!(+#+')
            const abortController = new AbortController();
            const signal = abortController.signal;
            try {
                const response = await fetch(
                    `https://testapi.yingshi.tv/miniVod/v1/miniVod?page=` + page,{ signal }
                );
                const json: MiniVideoResponseType = await response.json();
                // console.log(json.data.List);
                setVideos((prevVideos: any) => [...prevVideos, ...json.data.List]);
                setPage((prevPage: any) => {
                    return prevPage + 1;
                });
                return json.data.List;
            } catch (error: any) {
                if (error.name === "AbortError") {
                    console.log("Aborted");
                }
            }
        }
    });
    useEffect(() => {
        console.log("IOOOOOOOOOOOOOOOOOOOOOOOO")
        miniVideos;

        return () => {
            miniVideos.remove();
        };
    }, [])

    const windowHeight = Dimensions.get('window').height;
    // const fullHeight = windowHeight + (StatusBar.currentHeight || 0);

    const handleViewableItemsChanged = useCallback(({ viewableItems }: { viewableItems: any }) => {
        console.log("VIEWABLE : " + viewableItems);
        if(viewableItems.length == 1 && typeof viewableItems[0] != 'undefined'){
            const curr = viewableItems[0].index;

            console.log("Currently Playing : " + curr);
            console.log(viewableItems[0].item.mini_video_title + " - " + viewableItems[0].item.mini_video_origin_video_url);
            setCurrent(curr);
        }
    }, []);

    const loadMoreVideos = async () => {
        fetch(`https://testapi.yingshi.tv/miniVod/v1/miniVod?page=` + page)
            .then(response => response.json())
            .then((json: MiniVideoResponseType) => {
                console.log("JOOOOS")
                setVideos((prevVideos: any) => [...prevVideos, ...json.data.List]);
                setPage((prevPage: any) => {
                    return prevPage + 1;
                });
            })
    }

    const renderFlatListItem = useCallback(({item, index}: { item: MiniVideo; index: number }) => {
        const isCurrentVideo = index === current;
        console.log(item.mini_video_origin_video_url);
        return (
            // Note : Will change to windowHeight - "NavBarHeight" instead
            <View style={{flex: 1}}>
                <View style={{height: windowHeight - 50.2, width: '100%', flex: 1}}> 
                    <TouchableWithoutFeedback style={{ backgroundColor: "blue", width: "100", height: "100", zIndex: "2000" }} onPress={() => {
                        console.log(isPaused);
                        setIsPaused(!isPaused);
                    }}>
                        <Video 
                            resizeMode="contain"
                            // source={{ uri: item.mini_video_origin_video_url }}
                            source={{ uri: "https://m3u.haiwaikan.com/xm3u8/407446996534684cddf4218fc0510c8447c8adbd35097c06b906388343423d949921f11e97d0da21.m3u8" }}
                            repeat={true} 
                            style={styles.video}
                            paused={!isCurrentVideo || isPaused} 
                            preload={isCurrentVideo ? 'auto' : 'metadata'} />
                    </TouchableWithoutFeedback>
                    <View column style={{position:'absolute', marginTop: (windowHeight - 50.2) / 2, height: (windowHeight - 50.2) / 2, width: '100%', justifyContent:'flex-end', padding: 20, marginBottom: 30}}>
                        <View style={{marginTop:10}}>
                            {/* <Text style={{fontSize:14,color:'red',marginTop:10}}>{item.mini_video_title}</Text> */}
                            <TouchableOpacity row style={{backgroundColor:'#4d4d4d',borderRadius:17,padding:10,alignItems:'center',width:270}}>
                                <Text style={{fontSize:14,color:'#fff',marginLeft:10}}>为什么这个不在视觉框里面为什么这个不在视觉框里面为什么这个不在视觉框里</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{height: 1, width: '100%', backgroundColor: 'red'}}>

                </View>
            </View>
        )
    }, [videos, current, isPaused])

    return (
        <SafeAreaView>
            {videos.length != 0 &&
                <FlatList
                    data={videos}
                    renderItem={renderFlatListItem}
                    horizontal={false}
                    pagingEnabled={true}
                    getItemLayout={(data: any, index: number) => {
                        return { length: windowHeight, offset: ((windowHeight) * index), index }
                    }}
                    keyExtractor={(item: any, index: any) => item.mini_video_id.toString()}
                    viewabilityConfig={{viewAreaCoveragePercentThreshold: 70}}
                    showsHorizontalScrollIndicator={false}
                    onViewableItemsChanged={handleViewableItemsChanged}
                    onEndReached={loadMoreVideos}
                    onEndReachedThreshold={0.4}
                    />
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    video: {
        height: '100%',
        width: '100%',
        backgroundColor: '#FFF',
        border: '1px solid red'
    },
    bottomRightText:{
        fontSize: 14,
        color: 'red',
        marginTop: 5,
    }
})