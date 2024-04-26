import React, { useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Text, ViewStyle } from 'react-native';
import { useAppDispatch, useAppSelector } from "@hooks/wawa_root";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useTheme, useRoute } from '@react-navigation/native';
import BackButton from '../button/wawa_awayteamfield_airbnbstarselected_button';
import { wawaDelegate, RootStackScreenProps } from "@type/wawa_iconnewchat";
import {
    showLoginAction,
} from "@redux/actions/wawa_related";
import { screenModel } from "@type/wawa_rules";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";

interface wawaAwayShow {
    title?: string,
    onBack?: any,
    headerStyle?: ViewStyle,
    right?: React.ReactNode,
    destination: keyof wawaDelegate,
}



export default function PrivacyBackButtonHeader({ title, headerStyle, right, destination }: wawaAwayShow) {
    const { textVariants } = useTheme()
    const dispatch = useAppDispatch();
    const navigation = useNavigation();
    const route = useRoute();
    const screenReducer: screenModel = useAppSelector(
        ({ screenReducer }: wawaIconsubssuccess) => screenReducer
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