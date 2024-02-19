import React, { useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Text, ViewStyle } from 'react-native';
import { useAppDispatch, useAppSelector } from "@hooks";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useTheme, useRoute } from '@react-navigation/native';
import BackButton from '../button/yys_matchdetailbg_iconarrowright_button';
import { yysPredictionbanner, RootStackScreenProps } from "@type";
import {
    showLoginAction,
} from "@redux";
import { screenModel } from "@type";
import { yysIconclosewhiteBaiduads } from "@redux";

interface yysIconarrowrightorangeStation {
    title?: string,
    onBack?: any,
    headerStyle?: ViewStyle,
    right?: React.ReactNode,
    destination: keyof yysPredictionbanner,
}



export default function PrivacyBackButtonHeader({ title, headerStyle, right, destination }: yysIconarrowrightorangeStation) {
    const { textVariants } = useTheme()
    const dispatch = useAppDispatch();
    const navigation = useNavigation();
    const route = useRoute();
    const screenReducer: screenModel = useAppSelector(
        ({ screenReducer }: yysIconclosewhiteBaiduads) => screenReducer
    );

    useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', (e) => {
            if (screenReducer.navigateToProfile === true) {
                
                
                const navState = navigation.getState();
                const currentRouteName = navState.routes[navState.index].name;
                const previousRouteName = navState.routes[navState.index - 1]?.name;
                if (previousRouteName != '关于我们') {
                    dispatch(showLoginAction());
                }
            } else {
                return
            }
        });

        return unsubscribe;
    }, [route]);


    return (
        <View style={{ ...styles.container, ...headerStyle }}>
            <View style={{ paddingTop: 10, ...styles.backStyle }}>
                <BackButton onPress={() => navigation.goBack()} />
            </View>
            <Text style={{ ...textVariants.header, fontSize: 16 }} numberOfLines={1}>{title}</Text>
            {
                right
                    ? right
                    : <View style={{ opacity: 0, pointerEvents: 'none' }}>
                        <BackButton onPress={() => navigation.goBack()} />
                    </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        marginTop: 5,
    },
    backStyle: {
        width: 30,
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});