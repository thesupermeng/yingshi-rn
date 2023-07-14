import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

interface Props {
    subTabs: any
}

export default function EmptyDataPage({ subTabs }: Props) {
    return (
        <View style={styles.mainContainer}>
            {/* <Image
            resizeMode="contain"
            style={styles.mainImage}
            source={TempNoData}></Image> */}
            <Text style={styles.title}>暂无数据</Text>
            {/* </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '',
        height: '100%',
        marginHorizontal: 5,
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
  
