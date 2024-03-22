import React, { useEffect, useState, useContext } from 'react';
import { View, PanResponder, StyleSheet, Dimensions, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import Pip from '@static/images/loginDownloader.svg';
import ScreenCast from '@static/images/crossAnimation.svg';
import VideoShare from '@static/images/editCurrentCanvas.svg';
import { TouchableWithoutFeedback } from 'react-native';

type XFillButton = {
    isFullScreen: boolean
}

export default ({ isFullScreen }: XFillButton) => {

    useEffect(() => {
    }, [])

    return (
        <>
            {!isFullScreen ?
                <View style={styles.wrapper}>
                    <View style={styles.leftContainer}>

                    </View>
                    <View style={styles.rightContainer}>
                        {/* <TouchableWithoutFeedback>
                            <ScreenCast width={30} height={30} />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <Pip width={30} height={30} />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <VideoShare width={30} height={30} />
                        </TouchableWithoutFeedback> */}
                    </View>
                </View>
                :
                <View style={styles.wrapper}>
                    <View style={styles.leftContainerLandscape}>

                    </View>
                    <View style={styles.rightContainerLandscape}>
                        {/* <TouchableWithoutFeedback>
                            <ScreenCast width={30} height={30} />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <Pip width={30} height={30} />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <VideoShare width={30} height={30} />
                        </TouchableWithoutFeedback> */}
                    </View>
                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftContainer: {
        width: '65%',
        backgroundColor: 'blue'
    },
    rightContainer: {
        width: '35%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    leftContainerLandscape: {
        width: '75%',
        backgroundColor: 'blue'
    },
    rightContainerLandscape: {
        width: '25%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
});