import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, FlatList, Image, LayoutChangeEvent } from 'react-native';
import { useTheme } from '@react-navigation/native';

interface FlatListType {
    item: Option,
    index: number,
}

interface Option {
    text: string
    value: any
}

interface Props {
    init: Option
    callback?: any,
    options?: Array<Option>,
}


export default ({ init, callback, options = [] }: Props) => {
    const { textVariants, colors, spacing } = useTheme();
    const [itemsLayout, setItemsLayout] = useState<number[]>(options.map(() => 0));

    const scrollRef = useRef<FlatList>();
    const initRef = useRef(init);
    const [isInitScroll, setIsInitScroll] = useState(true)

    useEffect(() => {
        if (isInitScroll && itemsLayout.filter((layout) => layout !== 0).length === itemsLayout.length) {
            let index = options.findIndex((option) => option.value === initRef.current.value)

            if (index !== -1) {
                index = 0
            }

            scrollRef?.current?.scrollToIndex({ animated: true, index: index, viewPosition: 0 })
            setIsInitScroll(false)
        }
    }, [itemsLayout]);

    const onLayoutChange = (e: LayoutChangeEvent, index: number) => {
        if (itemsLayout[index] === 0) {
            setItemsLayout(itemsLayout.map((layout, i) => {
                if (index === i) {
                    return e.nativeEvent.layout.width;
                }

                return layout
            }))
        }
    }

    const getItemLayout = (_data: any, index: number) => {
        let offset = 0

        for (let i = 0; i < index; i++) {
            offset += itemsLayout[i]
        }

        return ({
            length: itemsLayout[index], // Specify the item's height here
            offset: offset + (index * spacing.m),
            index,
        })
    };

    return (
        <View style={{ marginTop: spacing.m }}>
            <FlatList
                ref={scrollRef}
                data={options}
                horizontal
                initialNumToRender={options.length}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={
                    <View style={{ width: spacing.m, }} />
                }
                renderItem={({ item, index }: FlatListType) => {
                    return <TouchableOpacity style={{ justifyContent: 'center' }}
                        // onPress={() => callback(item)}>
                        onPress={() => { callback && callback(item) }}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: textVariants.subBody.fontSize,
                            color: init.value === item.value ? colors.primary : colors.muted
                        }} onLayout={(e) => onLayoutChange(e, index)}>{item.text}</Text>
                    </TouchableOpacity>
                }}
                getItemLayout={getItemLayout}

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