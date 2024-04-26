import { wawaReactnavigation } from "@type/wawa_gradlew";
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FastImage from '../common/wawa_iconarrowrightblack';

type wawaOthermatchdetailbg = {
    data: wawaReactnavigation[],
    dataSelected?: wawaReactnavigation,
    onSelectCountryPhone: (data: wawaReactnavigation) => void,
}
export const CountryPhoneList = ({
    data,
    dataSelected,
    onSelectCountryPhone: onSelectPhoneCode,
}: wawaOthermatchdetailbg) => {

    return (
        <View style={styles.card}>
            <Text style={styles.title}>选择国家电话代码</Text>

            <FlatList
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item, index }) => {
                    return <TouchableOpacity
                        onPress={() => onSelectPhoneCode(item)}
                        style={dataSelected === item ? styles.selected : styles.unselected}
                    >
                        <FastImage
                            source={{
                                uri: item?.country_flag,
                            }}
                            style={styles.countryFlag}
                        />

                        <Text style={{ color: 'white', width: 50, }}>+{item.country_phonecode}</Text>
                        <Text style={{ color: 'white' }}>{item.country_name}</Text>
                    </TouchableOpacity>
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        height: "100%",
        width: "100%",
        backgroundColor: "transparent",
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom:30
    },
    title: {
        fontWeight: "400",
        fontSize: 16,
        textAlign: "center",
        color: "#fff",
        paddingBottom: 20,
    },
    selected: {
        backgroundColor: '#FAC33D20',
        padding: 8,
        borderRadius: 6,
        display: 'flex',
        flexDirection: 'row',
    },
    unselected: {
        padding: 8,
        borderRadius: 6,
        display: 'flex',
        flexDirection: 'row',
    },
    countryFlag: {
        width: 24,
        aspectRatio: 1,
        borderRadius: 100,
        marginRight: 10,
    },
});
