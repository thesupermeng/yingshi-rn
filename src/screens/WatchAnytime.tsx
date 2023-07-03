import React, { useEffect, useState, useCallback, useMemo } from 'react';
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
    Text } from 'react-native';
import ScreenContainer from '../components/container/screenContainer';
import { useTheme, useFocusEffect } from '@react-navigation/native';
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
import Play from '../../static/images/blackPlay.svg';
import FastImage from 'react-native-fast-image';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Orientation from 'react-native-orientation-locker';
import { API_DOMAIN } from '../constants';

type MiniVideoResponseType = {
    data: {
        List: Array<MiniVideo>
    }
}

export default ({ navigation } : BottomTabScreenProps<any>) => {

    const { colors } = useTheme();

    const [current, setCurrent] = useState<number | null>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [page, setPage] = useState(2)

    const [isBuffering, setIsBuffering] = useState(false);

    const [videos, setVideos] = useState<MiniVideo[]>([]);
    const getMiniVideos = useQuery({
        queryKey: ["WatchAnytime"],
        queryFn: async () => {
            const abortController = new AbortController();
            const signal = abortController.signal;
            try {
                const response = await fetch(
                    `${API_DOMAIN}miniVod/v1/miniVod?page=` + page,{ signal }
                );
                const json: MiniVideoResponseType = await response.json();
                if(json.data.List == null){
                    return;
                }
                console.log("AAAAAAA")
                console.log(json.data.List);
                for(let i = 0; i < json.data.List.length; i++){
                    json.data.List[i].mini_video_origin_video_url = json.data.List[i].mini_video_origin_video_url.replace('http://', 'https://');
                }
                setVideos((prevVideos: any) => [...prevVideos, ...json.data.List]);
                // setPage((prevPage: any) => {
                //     return prevPage + 1;
                // });
                setPage(1);
                return json.data.List;
            } catch (error: any) {
                if (error.name === "AbortError") {
                    
                }
            }
        }
    });

    const navBarHeight = useBottomTabBarHeight();

    useFocusEffect(
        useCallback(() => {
            setIsPaused(false);
            Orientation.lockToPortrait();

            return () => {
                setIsPaused(true);
                Orientation.unlockAllOrientations();
            };
        }, [])
    );

    useEffect(() => {
        getMiniVideos;

        return () => {
            getMiniVideos.remove();
        };
    }, [])

    const windowHeight = Dimensions.get('window').height;
    // const fullHeight = windowHeight + (StatusBar.currentHeight || 0);

    const handleViewableItemsChanged = useCallback(({ viewableItems }: { viewableItems: any }) => {
        setIsBuffering(false);
        console.log("VIEWABLE : " + JSON.stringify(viewableItems));
        if(viewableItems.length == 1 && typeof viewableItems[0] != 'undefined'){
            setIsBuffering(true);
            const curr = viewableItems[0].index;

            // console.log("Currently Playing : " + curr);
            // console.log(viewableItems[0].item.mini_video_title + " - " + viewableItems[0].item.mini_video_origin_video_url);
            setCurrent(curr);
        }
        return () => {
            
        };
    }, []);

    const loadMoreVideos = async () => {
        fetch(`${API_DOMAIN}miniVod/v1/miniVod?page=` + page)
            .then(response => response.json())
            .then((json: MiniVideoResponseType) => {
                setVideos((prevVideos: any) => [...prevVideos, ...json.data.List]);
                setPage((prevPage: any) => {
                    console.log(prevPage);
                    console.log(prevPage + 1);
                    console.log('ZZZZCASDZZZZZZ');
                    return prevPage + 1;
                });
            })
    }

    const onBuffer = (bufferObj: any) => {
        console.log(bufferObj);
        setIsBuffering(bufferObj.isBuffering);
    }

    const videoError = (err: any) => {
        console.log(err);
     }

    const renderFlatListItem = useCallback(({item, index}: { item: MiniVideo; index: number }) => {
        const isCurrentVideo = index === current;
        return (
            // Note : Will change to windowHeight - "NavBarHeight" instead
            <View style={{ height: windowHeight - navBarHeight, width: '100%' }}>
                <View style={[styles.pauseOverlay, { height: windowHeight - navBarHeight, width: '100%' }]}>
                    {/* <Text style={{ zIndex: 100, color: 'blue' }}>{index}</Text> */}
                    <TouchableOpacity onPress={() => {
                        setIsPaused(!isPaused);
                    }}>
                        {isPaused &&
                            <Play width={50} height={50} />
                        }
                    </TouchableOpacity>
                </View>
                <View style={{height: windowHeight, width: '100%', flex: 1}}> 
                {/* <View style={{height: windowHeight - navBarHeight, width: '100%', flex: 1}}>  */}
                    <TouchableWithoutFeedback style={{ backgroundColor: "blue", width: "100", height: "100", zIndex: "2000" }} onPress={() => {
                        console.log(isPaused);
                        setIsPaused(!isPaused);
                    }}>
                        <Video 
                            resizeMode="contain"
                            poster={ item.mini_video_origin_cover }
                            source={{ uri: item.mini_video_origin_video_url }}
                            // source={{ uri: 'https://v5-dy-o-abtest.zjcdn.com/4000bf51799fb919d077e3186c0d31cf/64a28054/video/tos/cn/tos-cn-ve-15c001-alinc2/osAQhflDlUPmznYCeNsBMWAOgDhyAO2EcyIiI7/?a=6383&ch=11&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=496&bt=496&cs=0&ds=2&ft=dqY4KG0Y0d-17XvjVQZEF6K7usZLQ5vmaglc&mime_type=video_mp4&qs=0&rc=M2RnaTU1aTY2Ozg1Njk1ZUBpanZkdWg6ZjRzbDMzNGkzM0BgLWIvNWAxX18xLV5gMF8zYSNxXjE0cjRnMmRgLS1kLTBzcw%3D%3D&l=20230703150037158E39DF1CC73A058EDA&btag=e00020000&cc=46' }}
                            onBuffer={onBuffer}
                            onError={videoError}
                            repeat={true} 
                            style={styles.video}
                            paused={!isCurrentVideo || isPaused} 
                            // preload={'metadata'}
                            // preload={isCurrentVideo ? 'auto' : 'metadata'}
                            />
                    </TouchableWithoutFeedback>
                    <View column style={{position:'absolute', left: 0, top: 0, marginTop: (windowHeight - navBarHeight) / 2, height: (windowHeight - navBarHeight) / 2, width: '100%', justifyContent:'flex-end', padding: 20, paddingBottom: 30}}>
                        <View style={{marginTop:10, flexDirection: 'row'}}>
                            {/* <View style={{ flex: 10, flexDirection: 'column', justifyContent: 'flex-end', marginRight: 35 }}> */}
                            <View style={{ flex: 10, flexDirection: 'column', justifyContent: 'flex-end' }}>
                                <TouchableOpacity row style={{background: 'rgba(255, 255, 255, 0.16)', borderRadius:17 }}>
                                    <Text style={{fontSize:14,color:'#fff'}}>{item.mini_video_title}</Text>
                                </TouchableOpacity>
                            </View>
                            {/* <View style={{ flex: 1, flexDirection: 'column', justifyContent:'flex-end', alignItems:'center' }}>
                                <TouchableOpacity column right style={styles.bottomRightBn} >
                                    <Wechat width={30} height={30} style={{ color: 'white' }} />
                                    <Text style={styles.bottomRightText}>微信</Text>
                                </TouchableOpacity>
                                <TouchableOpacity column cerightnter style={styles.bottomRightBn}>
                                    <PYQ width={30} height={30} style={{ color: 'white' }} />
                                    <Text style={styles.bottomRightText}>朋友圈</Text>
                                </TouchableOpacity>
                                <TouchableOpacity column right style={styles.bottomRightBn}>
                                    <Weibo width={30} height={30} style={{ color: 'white' }} />
                                    <Text style={styles.bottomRightText}>微博</Text>
                                </TouchableOpacity>
                                <TouchableOpacity column right style={styles.bottomRightBn}>
                                    <QQ width={30} height={30} style={{ color: 'white' }} />
                                    <Text style={styles.bottomRightText}>QQ</Text>
                                </TouchableOpacity>
                            </View> */}
                        </View>
                    </View>
                </View>
            </View>
        )
    }, [videos, current, isPaused])

    return (
        <SafeAreaView>
            {/* <View style={{ position: 'absolute', top: 0, left: 0, padding: 20, zIndex: 50, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ color: '#FFF', fontSize: 20 }}>随心看</Text>
                <Search width={30} height={30} style={{ color: 'white' }} />
            </View> */}
            <View style={{ position: 'absolute', top: 0, left: 0, padding: 20, zIndex: 50, width: '100%', flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{ color: '#FFF', fontSize: 20 }}>随心看</Text>
            </View>
            {isBuffering &&
                <View style={styles.buffering}>
                    <FastImage
                        source={require('../../static/images/videoBufferLoading.gif')}
                        style={{ width: 100, height: 100 }}
                        resizeMode="contain"
                    />
                </View>
            }
            {videos.length != 0 ?
                <FlatList
                    data={videos}
                    renderItem={renderFlatListItem}
                    horizontal={false}
                    pagingEnabled={true}
                    getItemLayout={(data: any, index: number) => {
                        return { length: windowHeight - navBarHeight, offset: ((windowHeight - navBarHeight) * index), index }
                    }}
                    keyExtractor={(item: any, index: any) => item.mini_video_id.toString()}
                    viewabilityConfig={{viewAreaCoveragePercentThreshold: 80}}
                    showsHorizontalScrollIndicator={false}
                    onViewableItemsChanged={handleViewableItemsChanged}
                    onEndReached={loadMoreVideos}
                    onEndReachedThreshold={0.4}
                    />

                :

                <View style={[styles.pauseOverlay, { height: windowHeight - navBarHeight, width: '100%' }]}>
                    <FastImage
                        source={require('../../static/images/loading-spinner.gif')}
                        style={{ width: 100, height: 100 }}
                        resizeMode="contain"
                    />
                </View>
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
        fontSize: 12,
        color: '#FFFFFF',
    },
    bottomRightBn:{
        width: 50,
        height: 40,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 35,
        alignItems: 'center',
        textAlign: 'center'
    },
    pauseOverlay:{
        position: 'absolute',
        top: 0,
        left: 0,
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#00000010',
        zIndex: 10,
        // backgroundColor: 'yellow',
    },
    buffering: {
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 3,
        color: 'yellow',
        position: 'absolute',
        top: '40%',
        left: '36%',
        zIndex: 100
    },
})