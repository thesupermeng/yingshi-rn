import React, { useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Text, ViewStyle } from 'react-native';
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useTheme, useRoute } from '@react-navigation/native';
import BackButton from '../button/backButton';
import { RootStackParamList, RootStackScreenProps } from "@type/navigationTypes";
import {
    showLoginAction,
} from "@redux/actions/screenAction";
import { screenModel } from "@type/screenType";
import { RootState } from "@redux/store";

interface Props {
    title?: string,
    onBack?: any,
    headerStyle?: ViewStyle,
    right?: React.ReactNode,
    destination: keyof RootStackParamList,
}



export default function PrivacyBackButtonHeader({ title, headerStyle, right, destination }: Props) {
    const { textVariants } = useTheme()
    const dispatch = useAppDispatch();
    const navigation = useNavigation();
    const route = useRoute();
    const screenReducer: screenModel = useAppSelector(
        ({ screenReducer }: RootState) => screenReducer
    );

    useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', (e) => {
            if (screenReducer.navigateToProfile === true) {
                // Check if the previous route was "RegistrationPage" and the destination is "ProfileScreen"
                // If yes, trigger your custom action
                dispatch(showLoginAction());
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