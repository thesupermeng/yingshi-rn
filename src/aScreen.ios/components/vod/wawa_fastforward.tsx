import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, FlatList, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';

interface wawaBellreminderDisconnected {
    item: Option
}

interface Option {
    text: string
    value: any
}

interface wawaAwayShow {
    init: Option
    callback?: any,
    options?: Array<Option>
}


export default ({ init, callback, options = [] }: wawaAwayShow) => {
    const { textVariants, colors, spacing } = useTheme();
        // const flatListRef = useRef<wawaBellreminderDisconnected | null>(null);
        const flatListRef = useRef<wawaBellreminderDisconnected>();
        // const flatListRef = useRef<FlatList>();
        const [selectedItem, setSelectedItem] = useState<Option>();
    
        useEffect(() => {
            if (selectedItem !== null && flatListRef.current) {
            const index = options.findIndex(option => option.text === init.text)
            if (index !== -1) {
                const itemHeight = options.length  ;
                const offset = index * itemHeight;
            if (index >= 10) {
            flatListRef.current.scrollToItem({ animated: false, item: options[index], viewPosition: -0.5 })
            } else {
            flatListRef.current.scrollToOffset({ animated: false, offset });
            }
              }
            }
          }, [selectedItem, options]);
    
          const getItemLayout = (_data: any, index: number) => ({
            length: spacing.m, 
            offset: spacing.m * index,
            index,
          });
    
    return (
        <View style={{marginTop: spacing.m}}>
            <FlatList
                ref = {flatListRef}
                data={options}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }: wawaBellreminderDisconnected) => {
                    return <TouchableOpacity style={{ marginRight: spacing.m, justifyContent: 'center', display: 'flex' }} 
                    // onPress={() => callback(item)}>
                    onPress={() => {setSelectedItem(item); callback && callback(item)}}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: textVariants.subBody.fontSize,
                            color: init.value === item.value ? colors.primary : colors.muted
                        }}>{item.text}</Text>
                    </TouchableOpacity>
                }}
            getItemLayout = {getItemLayout}

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