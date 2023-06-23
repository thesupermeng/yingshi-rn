import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, FlatList, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';

interface FlatListType {
    item: string
}
interface Props {
    init: string
    callback?: any,
    options?: Array<string>
}

export default ({ init, callback, options = [] }: Props) => {
    const { textVariants, colors, spacing } = useTheme();

    return (
        <View style={{marginTop: spacing.m}}>
            <FlatList
                data={options}
                horizontal
                renderItem={({ item }: FlatListType) => {
                    return <TouchableOpacity style={{ marginRight: spacing.m, justifyContent: 'center', display: 'flex' }} onPress={() => callback(item)}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: textVariants.header.fontSize,
                            color: init === item ? colors.primary : colors.muted
                        }}>{item}</Text>
                    </TouchableOpacity>
                }}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 10,
    },
    image: {
        width: '100%',
        height: 160,
        borderRadius: 10,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    dotStyle: {
        width: 12,
        height: 7
    },
    activeDotStyle: {
        width: 25,
        height: 7
    },
    paginationStyle: {
        top: 180,
        height: 20
    },
    vod_hotlist: {
        height: 150,
        width: 250
    },
    nav: {
        flexGrow: 1,
        justifyContent: 'center',
        marginBottom: 10,
        backgroundColor: 'red',
    }
})