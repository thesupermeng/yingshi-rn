import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, FlatList, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';

interface FlatListType {
    item: Option
}

interface Option {
    text: string
    value: any
}

interface Props {
    init: Option
    callback?: any,
    options?: Array<Option>
    scrollRef?: React.MutableRefObject<FlatList | undefined>,
}


export default ({ init, callback, options = [], scrollRef }: Props) => {
    const { textVariants, colors, spacing } = useTheme();

    const getItemLayout = (_data: any, index: number) => {
        let offset = 0

        for (let i = 0; i < index; i++) {
            offset += _data[i].value.length * 10
        }

        return ({
            length: _data[index].value.length * 10, // Specify the item's height here
            offset: offset + (index * spacing.m),
            index,
        })
    };
    return (
        <>
            {options.length > 2 ?
                (
                    <View style={{ marginTop: spacing.m }}>
                        <FlatList
                            ref={scrollRef}
                            data={options}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            ItemSeparatorComponent={
                                <View style={{ width: spacing.m, }} />
                            }
                            renderItem={({ item, index }: FlatListType) => {
                                return <TouchableOpacity style={{ justifyContent: 'center', width: item.value.length * 10 }}
                                    // onPress={() => callback(item)}>
                                    onPress={() => { callback && callback(item) }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontSize: textVariants.subBody.fontSize,
                                        color: init.value === item.value ? colors.primary : colors.muted
                                    }}>{item.text}</Text>
                                </TouchableOpacity>
                            }}
                            getItemLayout={getItemLayout}
                        />
                    </View>
                )

                :

                (
                    <></>
                )
            }
        </>
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