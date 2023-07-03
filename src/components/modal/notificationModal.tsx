import React, { useState } from 'react';
import { Dialog } from '@rneui/themed';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

interface Props {
    onConfirm: any,
    isVisible: boolean,
    title?: string,
    subtitle1?: string,
    subtitle2?: string,
    confirmationText?: string,
}
export default function NotificationModal({ onConfirm, isVisible, title = '', subtitle1, subtitle2, confirmationText='确定' }: Props) {
    const { colors, textVariants, spacing } = useTheme();

    return (
        <Dialog
            isVisible={isVisible}
            overlayStyle={{ backgroundColor: 'rgba(34, 34, 34, 1)', ...styles.overlay }}
            backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            onBackdropPress={onConfirm}
        >
            <View gap={spacing.m}>
                <Text style={{ ...textVariants.header, ...styles.head, }}>{title}</Text>
                <Text style={{ ...textVariants.subBody, ...styles.body, textAlign: subtitle2 ? 'left' : 'center' }}>
                    {subtitle1 && <Text>{subtitle1}{'\n'}</Text>}
                    {subtitle2 && <Text>{subtitle2}</Text>}
                </Text>
                <View style={styles.btns}>
                    <TouchableOpacity style={styles.btn} onPress={onConfirm}>
                        <Text style={{ ...textVariants.body, ...styles.head, color: colors.primary }}>{confirmationText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Dialog>
    );
};
const styles = StyleSheet.create({
    overlay: {
        borderRadius: 14,
    },
    head: {
        color: 'white',
        textAlign: 'center'
    },
    body: {
        color: 'white',
    },
    btns: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        flex: 1
    }
});