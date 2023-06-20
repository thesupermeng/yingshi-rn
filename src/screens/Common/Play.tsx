import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, ScrollView, Image, FlatList } from 'react-native';
import Video from 'react-native-video';
import { YingshiDarkTheme } from '../../theme';
import FavoriteButton from '../../components/button/favoriteVodButton';
import FavoriteIcon from '../../../static/images/favorite.svg'
import ScreenContainer from '../../components/container/screenContainer';
import { useTheme } from '@react-navigation/native';

import { RootStackScreenProps } from '../../types/navigationTypes';
import { VodType } from '../../types/ajaxTypes';
import { useOrientation } from '../../hooks/useOrientation';
import PlayFullScreenGesture from '../../components/gestures/vod/PlayFullScreenGesture';
import { addVodToHistory, toggleVodFavorites } from '../../redux/actions/vodActions';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';
import { VodReducerState } from '../../redux/reducers/vodReducer';
import BackButton from '../../components/button/backButton';
import LinearGradient from 'react-native-linear-gradient';
import SinaIcon from '../../../static/images/sina.svg';
import WeChatIcon from '../../../static/images/wechat.svg'
import QQIcon from '../../../static/images/qq.svg';
import PYQIcon from '../../../static/images/pyq.svg';

const definedValue = (val: any) => {
    if (val === undefined || val === null) {
        return '';
    }
    return val + ' ';
}

export default ({ navigation, route }: RootStackScreenProps<'播放'>) => {
    const { colors, spacing, textVariants } = useTheme();
    // const isPotrait = useOrientation();
    const vodReducer: VodReducerState = useAppSelector(({ vodReducer }: RootState) => vodReducer);
    const vod = vodReducer.playVod.vod;
    const isFavorite = vodReducer.playVod.isFavorite;
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (vod) {
            dispatch(addVodToHistory(vod, 0));
        }
    }, [vod])
    return (
        <ScreenContainer style={{ paddingLeft: 0, paddingRight: 0 }}>
            {/* {!isPotrait &&
                <PlayFullScreenGesture />
            } */}
            <View style={styles.bofangBox}>
                {
                    vod && <Video controls={true} resizeMode="contain" source={{ uri: vod?.vod_play_list.urls[0].url, type: 'm3u8' }} style={styles.video} />
                }
            </View>
            <LinearGradient
                colors={['rgba(0, 0, 0, 0.4)', 'transparent',]}
                start={{ x: 0.5, y: 0.1 }}
                end={{ x: 0.5, y: 0.8 }}
                style={styles.videoHeader}
            >
                <BackButton btnStyle={{ padding: 20 }} onPress={() => navigation.goBack()} />
                <Text style={{ ...textVariants.header, color: colors.text, marginLeft: spacing.l, flex: 1 }} numberOfLines={1}>{vod?.vod_name}</Text>
            </LinearGradient>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                <View>
                    <View style={styles.videoDescription}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{ uri: vod?.vod_pic }}
                                resizeMode={'cover'}
                                style={styles.descriptionImage}
                                alt='Thumbnail'
                            />
                        </View>
                        <View style={styles.descriptionContainer}>
                            {vod && <FavoriteButton
                                vod={vod}
                                leftIcon={
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} gap={spacing.xxs}>
                                        <FavoriteIcon width={24} height={24} style={{ color: isFavorite ? colors.primary : colors.muted }} />
                                        <Text style={{ color: isFavorite ? colors.primary : colors.muted }}>收藏</Text>
                                    </View>
                                }
                            />}
                            <Text style={{ ...textVariants.body, color: colors.muted }} numberOfLines={2}>
                                {`${definedValue(vod?.vod_year)}`}
                                {`${definedValue(vod?.vod_area)}`}
                                {`${definedValue(vod?.vod_class.split(",").join(" "))}`}
                            </Text>
                            <Text style={{ ...textVariants.body, color: colors.muted }}>
                                {`更新：${vod ?
                                    new Date(vod?.vod_time_add * 1000).toLocaleDateString().replace(/\//g, '-')
                                    : new Date().toLocaleDateString().replace(/\//g, '-')
                                    }`}
                            </Text>
                            <View style={styles.share}>
                                <Text style={{ ...textVariants.body, color: colors.muted }}>分享：</Text>
                                <WeChatIcon />
                                <PYQIcon />
                                <WeChatIcon />
                                <QQIcon />
                            </View>


                        </View>
                    </View>
                    <View style={styles.descriptionContainer2} gap={spacing.m}>
                        <Text style={styles.descriptionContainer2Text}>
                            {
                                `导演：${definedValue(vod?.vod_director)}${'\n'}编剧：${definedValue(vod?.vod_writer)}${'\n'}主演：${definedValue(vod?.vod_actor)}`
                            }
                        </Text>
                        <Text style={styles.descriptionContainer2Text}>{`${definedValue(vod?.vod_blurb)}`}</Text>
                    </View>
                    {/* <FlatList
                        data={vod?.vod_play_list}
                        renderItem={({ item }: FlatListType) => {
                            return <VodCard vod_name={item.vod_name} vod_pic={item.vod_pic} onPress={() => {
                                dispatch(playVod(item));
                                navigator.navigate('播放', {
                                    vod_id: item.vod_id,
                                })
                            }} />
                        }}
                    /> */}
                </View>
            </ScrollView>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    video: {
        aspectRatio: 428 / 242,
        width: '100%',
        backgroundColor: '#000',
    },
    bofangBox: {
        aspectRatio: 428 / 242,
        width: '100%',
    },
    videoHeader: {
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    videoDescription: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        padding: 20
    },
    imageContainer: {
        flex: 2
    },
    descriptionImage: {
        width: '100%',
        aspectRatio: 93 / 139,
        borderRadius: 10
    },
    descriptionContainer: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        paddingLeft: 10
    },
    descriptionContainerText: {
        fontSize: 17
    },
    descriptionContainer2: {
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    descriptionContainer2Text: {
        color: '#9C9C9C',
        fontSize: 16
    },
    share: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
});
