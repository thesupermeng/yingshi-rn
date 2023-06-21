import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Moon from '../../../../static/images/Moon.svg';
import Sun from '../../../../static/images/Sun.svg';
import MutedVolume from '../../../../static/images/MutedVolume.svg';
import Volume from '../../../../static/images/Volume.svg';

type Props = {
    percent: number,
    icon: any
}

export default ({percent, icon}: Props) => {

    useEffect(() => {
        console.log(percent, icon);
    }, [])

    return (
        <View style={styles.smallContainer}>
            {icon == "Moon" &&
                <Moon width={24} height={24} style={{ color: 'white' }} />
            }
            {icon == "Sun" &&
                <Sun width={24} height={24} style={{ color: 'white' }} />
            }
            {icon == "MutedVolume" &&
                <MutedVolume width={24} height={24} style={{ color: 'white' }} />
            }
            {icon == "Volume" &&
                <Volume width={24} height={24} style={{ color: 'white' }} />
            }
            <View style={styles.statBar}>
                <View
                    style={{
                        height: 5,
                        borderRadius: 4,
                        backgroundColor: 'white',
                        width: `${percent > 100 ? 100 : percent}%`,
                    }}>
                </View>
            </View>
            <Text style={styles.percentText}>{percent.toFixed()}%</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    smallContainer: {
        width: '30%',
        height: 32,
        borderRadius: 10,
        backgroundColor: 'rgba(43, 43, 43, 0.5)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginTop: 20,
        left: '35%',
        zIndex: 20,
    },
    statBar: {
        width: '70%',
        height: 5,
        backgroundColor: 'rgba(74, 153, 233, 0.3)',
        marginBottom: 'auto',
        marginTop: 'auto',
        flexDirection: 'row',
        borderStyle: 'solid',
        borderRadius: 4,
    },
    percentText: {
        color: 'white',
        fontSize: 12,
        marginLeft: 8,
    },
});