import React, { useState } from 'react';
import { Dialog } from '@rneui/themed';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { IS_OTHER_SKIN } from '@utility/mayi_middleware_apps';

interface mayi_GoogleViews {
    onConfirm: any,
    onCancel: any,
    isVisible: boolean,
    title?: string,
    subtitle?: string,
    confirmationText?: string,
    cancelText?: string,
    confirmationColor?: string,
}
export default function ConfirmationModal({ onConfirm, onCancel, isVisible, title = '', subtitle = '', confirmationText = '确定', cancelText = '取消', confirmationColor }: mayi_GoogleViews) {
    const { colors, textVariants, spacing } = useTheme();

    return (
        <Dialog
            isVisible={isVisible}
            overlayStyle={{ backgroundColor: colors.background, ...styles.overlay }}
            backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            onBackdropPress={onCancel}
        >
            <View style={{ gap: spacing.m }}>
                <Text style={{ ...textVariants.header, ...styles.text, }}>{title}</Text>
                <Text style={{ ...textVariants.subBody, ...styles.text, }} >{subtitle}</Text>
                <View style={styles.btns}>
                    <TouchableOpacity style={styles.btn} onPress={onCancel}>
                        <Text style={{ ...textVariants.body, ...styles.text, }}>{cancelText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={onConfirm}>
                        <Text style={{ ...textVariants.body, ...styles.text, color: confirmationColor ?? (IS_OTHER_SKIN ? colors.confirm : colors.primary) }}>{confirmationText}</Text>
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
    text: {
        
        textAlign: 'center'
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