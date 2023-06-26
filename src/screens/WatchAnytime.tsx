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
import Wechat from '../../static/images/wechat.svg';
import PYQ from '../../static/images/pyq.svg';
import Weibo from '../../static/images/weibo.svg';
import QQ from '../../static/images/qq.svg';
import Search from '../../static/images/search.svg';

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
    const getMiniVideos = useQuery({
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
        getMiniVideos;

        return () => {
            console.log('aa');
            getMiniVideos.remove();
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
        console.log('AAAAAJJJ');
        return (
            // Note : Will change to windowHeight - "NavBarHeight" instead
            <View style={{flex: 1}}>
                <View style={{height: windowHeight - 51.1, width: '100%', flex: 1}}> 
                    <TouchableWithoutFeedback style={{ backgroundColor: "blue", width: "100", height: "100", zIndex: "2000" }} onPress={() => {
                        console.log(isPaused);
                        setIsPaused(!isPaused);
                    }}>
                        <Video 
                            resizeMode="contain"
                            source={{ uri: item.mini_video_origin_video_url }}
                            // source={{ uri: "https://m3u.haiwaikan.com/xm3u8/407446996534684cddf4218fc0510c8447c8adbd35097c06b906388343423d949921f11e97d0da21.m3u8" }}
                            repeat={true} 
                            style={styles.video}
                            muted={true}
                            paused={!isCurrentVideo || isPaused} 
                            preload={isCurrentVideo ? 'auto' : 'metadata'} />
                    </TouchableWithoutFeedback>
                    <View column style={{position:'absolute', left: 0, top: 0, marginTop: (windowHeight - 51.1) / 2, height: (windowHeight - 51.1) / 2, width: '100%', justifyContent:'flex-end', padding: 20, paddingBottom: 30}}>
                        <View style={{marginTop:10, flexDirection: 'row'}}>
                            <View style={{ flex: 10, flexDirection: 'column', justifyContent: 'flex-end', marginRight: 35 }}>
                                {/* <Text style={{fontSize:14,color:'red',marginTop:10}}>{item.mini_video_title}</Text> */}
                                <TouchableOpacity row style={{background: 'rgba(255, 255, 255, 0.16)', borderRadius:17 }}>
                                    <Text style={{fontSize:14,color:'#fff'}}>{item.mini_video_title}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', justifyContent:'flex-end', alignItems:'center' }}>
                                <TouchableOpacity column right style={styles.bottomRightBn} >
                                    <Wechat width={40} height={40} style={{ color: 'white' }} />
                                    <Text style={styles.bottomRightText}>微信</Text>
                                </TouchableOpacity>
                                <TouchableOpacity column cerightnter style={styles.bottomRightBn}>
                                    <PYQ width={40} height={40} style={{ color: 'white' }} />
                                    <Text style={styles.bottomRightText}>朋友圈</Text>
                                </TouchableOpacity>
                                <TouchableOpacity column right style={styles.bottomRightBn}>
                                    <Weibo width={40} height={40} style={{ color: 'white' }} />
                                    <Text style={styles.bottomRightText}>微博</Text>
                                </TouchableOpacity>
                                <TouchableOpacity column right style={styles.bottomRightBn}>
                                    <QQ width={40} height={40} style={{ color: 'white' }} />
                                    <Text style={styles.bottomRightText}>QQ</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {/* <View column style={{position:'absolute', marginTop: (windowHeight - 50.1) / 2, height: (windowHeight - 50.1) / 2, width: '100%', justifyContent:'flex-end', padding: 20, marginBottom: 30}}>
                        <View style={{marginTop:10, flexDirection: 'row'}}>
                            <View>
                                <TouchableOpacity row style={{background: 'rgba(255, 255, 255, 0.16)',borderRadius:17,padding:10,alignItems:'center',width:270}}>
                                    <Text style={{fontSize:14,color:'#fff',marginLeft:10}}>{item.mini_video_title}</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text>K</Text>
                            </View>
                        </View>
                    </View>
                    <View column style={{position:'absolute', width: '100%', marginTop: (windowHeight - 50.1) / 2, height: (windowHeight - 50.1) / 2,justifyContent:'flex-end',alignItems:'flex-end' }}>
                        <TouchableOpacity column center style={styles.bottomRightBn} >
                            <Wechat width={24} height={24} style={{ color: 'white' }} />
                            <Text style={styles.bottomRightText}>我拍</Text>
                        </TouchableOpacity>
                        <TouchableOpacity column center style={styles.bottomRightBn}>
                            <PYQ width={24} height={24} style={{ color: 'white' }} />
                            <Text style={styles.bottomRightText}>2.1万</Text>
                        </TouchableOpacity>
                        <TouchableOpacity column center style={styles.bottomRightBn}>
                            <Weibo width={24} height={24} style={{ color: 'white' }} />
                            <Text style={styles.bottomRightText}>300</Text>
                        </TouchableOpacity>
                        <TouchableOpacity column center style={[styles.bottomRightBn,{marginBottom:50}]}>
                            <QQ width={24} height={24} style={{ color: 'white' }} />
                            <Text style={styles.bottomRightText}>分享</Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
            </View>
        )
    }, [videos, current, isPaused])

    return (
        <SafeAreaView>
            <View style={{ position: 'absolute', top: 0, left: 0, padding: 20, zIndex: 10, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ color: '#FFF', fontSize: 20 }}>随心看</Text>
                <Search width={30} height={30} style={{ color: 'white' }} />
            </View>
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
        backgroundColor: '#000',
        // border: '1px solid red'
    },
    bottomRightText:{
        fontSize: 14,
        color: '#FFFFFF',
        marginTop: 5
    },
    bottomRightBn:{
        width: 50,
        height: 50,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 35,
        alignItems: 'center',
        textAlign: 'center'
    },
})