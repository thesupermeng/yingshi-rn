import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { View, TouchableOpacity, Share, Text, StyleSheet, Alert, ScrollView, Image, SafeAreaView } from 'react-native';
import {
    Goal,
    SubIn,
    SubOut,
    OwnGoal,
    wwMatchactive,
    PenaltyGoal,
    PenaltyShootNoGoal,
    CornerKick,
    YellowCard,
    RedCard,
    YellowToRedCard,
    VideoVAR,
    ShootYesGoal,
    ShootNoGoal,
} from '../../assets';


interface wwIndexDice {
    showLessIcon?: any
}

export default function FootballIconComponent({ showLessIcon = false }: wwIndexDice) {

    return (
        <View style={styles.mainContainer}>
            {!showLessIcon ? (
                <View style={{ marginLeft: "auto", marginRight: "auto", width: '90%' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.imageDiv}>
                            <Image style={styles.imageStyle} source={Goal} />
                            <Text style={styles.imageText}>进球</Text>
                        </View>
                        <View style={styles.imageDiv}>
                            <Image style={styles.imageStyle} source={ShootYesGoal} />
                            <Text style={styles.imageText}>射正</Text>
                        </View>
                        <View style={styles.imageDiv}>
                            <Image style={styles.imageStyle} source={ShootNoGoal} />
                            <Text style={styles.imageText}>射偏</Text>
                        </View>
                        <View style={styles.imageDiv}>
                            <Image style={styles.imageStyle} source={PenaltyGoal} />
                            <Text style={styles.imageText}>点球</Text>
                        </View>
                        <View style={styles.imageDiv}>
                            <Image style={styles.imageStyle} source={PenaltyShootNoGoal} />
                            <Text style={styles.imageText}>点球未进</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.imageDiv}>
                            <Image style={styles.imageStyle} source={OwnGoal} />
                            <Text style={styles.imageText}>乌龙球</Text>
                        </View>
                        <View style={styles.imageDiv}>
                            <Image style={styles.imageStyle} source={wwMatchactive} />
                            <Text style={styles.imageText}>助攻</Text>
                        </View>
                        <View style={styles.imageDiv}>
                            <Image style={styles.imageStyle} source={CornerKick} />
                            <Text style={styles.imageText}>角球</Text>
                        </View>
                        <View style={styles.imageDiv}>
                            <Image style={styles.imageStyle} source={YellowCard} />
                            <Text style={styles.imageText}>黄牌</Text>
                        </View>
                        <View style={styles.imageDiv}>
                            <Image style={styles.imageStyle} source={RedCard} />
                            <Text style={styles.imageText}>红牌</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.imageDiv}>
                            <Image style={styles.imageStyle} source={YellowToRedCard} />
                            <Text style={styles.imageText}>红黄两变</Text>
                        </View>
                        <View style={styles.imageDiv}>
                            <Image style={styles.imageStyle} source={SubIn} />
                            <Text style={styles.imageText}>上场</Text>
                        </View>
                        <View style={styles.imageDiv}>
                            <Image style={styles.imageStyle} source={SubOut} />
                            <Text style={styles.imageText}>下场</Text>
                        </View>
                        <View style={styles.imageDiv}>
                            <Image style={styles.imageStyle} source={VideoVAR} />
                            <Text style={styles.imageText}>视频裁判</Text>
                        </View>
                    </View>
                </View>
            ) : (
                <View style={{ marginLeft: "auto", marginRight: "auto", width: '90%' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.imageDiv}>
                            <Image style={styles.imageStyle} source={Goal} />
                            <Text style={styles.imageText}>进球</Text>
                        </View>
                        <View style={styles.imageDiv}>
                            <Image style={styles.imageStyle} source={PenaltyGoal} />
                            <Text style={styles.imageText}>点球</Text>
                        </View>
                        <View style={styles.imageDiv}>
                            <Image style={styles.imageStyle} source={PenaltyShootNoGoal} />
                            <Text style={styles.imageText}>点球未进</Text>
                        </View>
                        <View style={styles.imageDiv}>
                            <Image style={styles.imageStyle} source={OwnGoal} />
                            <Text style={styles.imageText}>乌龙球</Text>
                        </View>
                        <View style={styles.imageDiv}>
                            <Image style={styles.imageStyle} source={wwMatchactive} />
                            <Text style={styles.imageText}>助攻</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.imageDiv}>
                            <Image style={styles.imageStyle} source={YellowCard} />
                            <Text style={styles.imageText}>黄牌</Text>
                        </View>
                        <View style={styles.imageDiv}>
                            <Image style={styles.imageStyle} source={RedCard} />
                            <Text style={styles.imageText}>红牌</Text>
                        </View>
                        <View style={styles.imageDiv}>
                            <Image style={styles.imageStyle} source={YellowToRedCard} />
                            <Text style={styles.imageText}>红黄两变</Text>
                        </View>
                        <View style={styles.imageDiv}>
                            <Image style={styles.imageStyle} source={SubIn} />
                            <Text style={styles.imageText}>上场</Text>
                        </View>
                        <View style={styles.imageDiv}>
                            <Image style={styles.imageStyle} source={SubOut} />
                            <Text style={styles.imageText}>下场</Text>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    imageDiv: {
        flexDirection: 'row',
        width: '20%',
        
        alignItems: 'center',
        marginBottom: 5,
    },
    imageStyle: {
        width: 12,
        height: 12,
        resizeMode: 'contain',
    },
    imageText: {
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 10,
        marginLeft: 5,
        color: '#FFFFFF',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    mainContainer: {
        position: 'relative',
        display: 'flex',
        flex: 1,
        height: '100%',
    },
});