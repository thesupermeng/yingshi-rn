import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import Video from 'react-native-video';
import { YingshiDarkTheme } from '../../theme';
import { StarIcon } from 'react-native-heroicons/solid';
import ScreenContainer from '../../components/container/screenContainer';
import { useTheme } from '@react-navigation/native';

import { HomeStackScreenProps } from '../../types/navigationTypes';
import { VodType } from '../../types/ajaxTypes';
import { useOrientation } from '../../hooks/useOrientation';
import PlayFullScreenGesture from '../../components/gestures/vod/PlayFullScreenGesture';
import { toggleVodFavorites } from '../../redux/actions/vodActions';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';
import { VodReducerState } from '../../redux/reducers/vodReducer';

export default ({ navigation, route }: HomeStackScreenProps<'播放'>) => {
    const { colors, textVariants } = useTheme();
    // const isPotrait = useOrientation();
    const vodReducer : VodReducerState = useAppSelector(({ vodReducer }: RootState) => vodReducer);
    const vod = vodReducer.playVod.vod;
    const dispatch = useAppDispatch();

    const toggleFavoriteVod = () => {
        if (vod) {
            dispatch(toggleVodFavorites(vod));
        }
    }
    return (
        <SafeAreaView>
            {/* {!isPotrait &&
                <PlayFullScreenGesture />
            } */}
            <View style={styles.bofangBox}>
                <Video controls={true} resizeMode="contain" source={{ uri: 'https://m3u.haiwaikan.com/xm3u8/395b22f1f066891ed8f7b191457a685490095df735c1e3c32e37ba4903b4bb649921f11e97d0da21.m3u8', type: 'm3u8' }} style={styles.video} />
            </View>
            <View style={styles.videoHeader}>
                <Text style={{ color: colors.text, ...styles.videoHeaderContent }}>{vod?.vod_name}</Text>
            </View>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                <View>
                    <View style={styles.videoDescription}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{ uri: vod?.vod_pic }}
                                resizeMode={'cover'}
                                style={styles.descriptionImage}
                            />
                        </View>
                        <View style={styles.descriptionContainer}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ ...textVariants.body, ...styles.descriptionContainerText }}>{vod?.vod_name}</Text>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={toggleFavoriteVod}>
                                    <View style={{ paddingTop: 3, paddingRight: 5 }}>
                                        <StarIcon size={22} color="orange" opacity={0.5} />
                                    </View>
                                    <View>
                                        <Text style={styles.descriptionContainerText}>收藏</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.descriptionContainerText}>2023 大陆 古装 爱情 仙侠 剧情</Text>
                            <Text style={styles.descriptionContainerText}>更新：2023-02-10</Text>
                            <Text style={styles.descriptionContainerText}>分享：2023-02-10</Text>
                        </View>
                    </View>

                    <View style={styles.descriptionContainer2}>
                        <Text style={styles.descriptionContainer2Text}>
                            导演：瑞恩·库格勒
                            编剧：乔·罗伯特·科尔/瑞恩·库格勒
                            主演：利蒂希娅·赖特/露皮塔·尼永奥/安吉拉·贝塞特/丹娜·奎里拉/温斯顿·杜克/马丁·弗瑞曼/特诺切·韦尔塔/理查德·希夫/多米尼克·索恩/米凯拉·科尔/弗洛伦丝·卡松巴/玛丽亚·梅塞德斯·科罗伊/伊萨赫·德·班克尔/施奎塔·詹姆斯/胡安·卡洛斯·坎图/洁基伯明翰/索佩·阿卢科/小弗洛伊德·安东尼·约翰/布伦特·莫雷尔·加斯金斯/拉希姆·赖利/乔丹·沃克·罗斯
                        </Text>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
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
    },
    videoHeaderContent: {
        fontWeight: '600',
        fontSize: 16,
        paddingLeft: 43,
        paddingTop: 17
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
    }
});
