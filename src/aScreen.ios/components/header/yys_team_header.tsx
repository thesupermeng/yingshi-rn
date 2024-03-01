import React, { useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Text, ViewStyle } from 'react-native';
import { useAppDispatch, useAppSelector } from "@hooks/yys_frame";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useTheme, useRoute } from '@react-navigation/native';
import BackButton from '../button/yys_render_cast_button';
import { yys_ServiceBridge, RootStackScreenProps } from "@type/yys_settings";
import {
    showLoginAction,
} from "@redux/actions/yys_runtimescheduler";
import { screenModel } from "@type/yys_service_setting";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";

interface yys_ConfigureUimanager {
    title?: string,
    onBack?: any,
    headerStyle?: ViewStyle,
    right?: React.ReactNode,
    destination: keyof yys_ServiceBridge,
}



export default function PrivacyBackButtonHeader({ title, headerStyle, right, destination }: yys_ConfigureUimanager) {
    const { textVariants } = useTheme()
    const dispatch = useAppDispatch();
    const navigation = useNavigation();
    const route = useRoute();
    const screenReducer: screenModel = useAppSelector(
        ({ screenReducer }: yys_MintegralLibavdevice) => screenReducer
    );

    useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', (e) => {
            if (screenReducer.navigateToProfile === true) {
               
        
        const navState = navigation.getState();
        const currentRouteName = navState.routes[navState.index].name;
        const previousRouteName = navState.routes[navState.index - 1]?.name;
        if( previousRouteName !='关于我们')
        {
          dispatch(showLoginAction());
        }
            } else {
                return
            }
        });

        return unsubscribe;
    }, [navigation, route]);


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