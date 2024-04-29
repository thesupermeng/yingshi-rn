import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import FastImage from 'react-native-fast-image';
import EmptyList from '../../components/common/wawa_othermatchdetailbg_videocommon';

interface wawaAwayShow {
    containerStyle?: ViewStyle
}

export default function EmptyDataPage({containerStyle }: wawaAwayShow) {
    return (
        // <View style={{...styles.mainContainer, ...containerStyle}}>
        
        
        
        //     source={} />
        //     <Text style={styles.title}>暂无数据</Text>
        //     {/* </View> */}
        // </View>
        <EmptyList description='暂无数据' style={{paddingBottom: 0, paddingTop: 50}}/>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#1D2023',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainImage: {
        width: '80%',
        height: '50%',
    },
    title: {
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 22,

        display: 'flex',
        textAlign: 'center',

        color: '#808080',
    },
});
