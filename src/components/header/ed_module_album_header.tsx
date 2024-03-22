import React, { useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Text, ViewStyle } from 'react-native';
import { useAppDispatch, useAppSelector } from "@hooks/kg_index";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useTheme, useRoute } from '@react-navigation/native';
import BackButton from '../button/exb_member_source_button';
import { NRank, RootStackScreenProps } from "@type/vrm_thailand";
import {
    showLoginAction,
} from "@redux/actions/a_switch";
import { screenModel } from "@type/nb_shared_target";
import { PSmall } from "@redux/fj_prediction_thailand";

interface XFillButton {
    title?: string,
    onBack?: any,
    headerStyle?: ViewStyle,
    right?: React.ReactNode,
    destination: keyof NRank,
}



export default function PrivacyBackButtonHeader({ title, headerStyle, right, destination }: XFillButton) {
    const { textVariants } = useTheme()
    const dispatch = useAppDispatch();
    const navigation = useNavigation();
    const route = useRoute();
    const screenReducer: screenModel = useAppSelector(
        ({ screenReducer }: PSmall) => screenReducer
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