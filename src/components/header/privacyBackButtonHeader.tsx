import React, { useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Text, ViewStyle } from 'react-native';
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useTheme } from '@react-navigation/native';
import BackButton from '../button/backButton';
import {
    showLoginAction,
    showRegisterAction,
  } from "../../redux/actions/screenAction";

interface Props {
    title?: string,
    onBack?: any,
    headerStyle?: ViewStyle,
    right?: React.ReactNode
}



export default function PrivacyBackButtonHeader({ title, headerStyle, right }: Props) {
    const { textVariants } = useTheme()
    const dispatch = useAppDispatch();
    const navigation = useNavigation();

    const onBackPress = () => {
        // Perform your action when the user presses the back button
        // For example, show the login screen:
        dispatch(showRegisterAction());
        return true; // Prevent default back behavior (optional)
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', (e) => {
            // If the back button was pressed, trigger your custom action
            if (e.data.action.type === 'GO_BACK') {
                onBackPress();
            }
        });

        return unsubscribe;
    }, [navigation]);


    return (
        <View style={{ ...styles.container, ...headerStyle }}>
            <View style={{ paddingTop: 4, ...styles.backStyle }}>
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
        paddingTop: 4,
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