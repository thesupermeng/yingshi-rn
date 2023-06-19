import React, { useState } from 'react';
import { Dialog } from '@rneui/themed';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

interface Props {
    onConfirm: any,
    onCancel: any,
    isVisible: boolean
}
export default function ConfirmationModal({ onConfirm, onCancel, isVisible }: Props) {
    const { colors, textVariants, spacing } = useTheme();

    return (
        <Dialog
            isVisible={isVisible}
            overlayStyle={{ backgroundColor: 'rgba(34, 34, 34, 1)', ...styles.overlay }}
            backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            onBackdropPress={onCancel}
        >
            <View gap={spacing.m}>
                <Dialog.Title titleStyle={{ ...textVariants.header, ...styles.text, }} title="清除提示" />
                <Text style={{ ...textVariants.body, ...styles.text, }} >您是否确定清除播放历史吗？</Text>
                <View style={styles.btns}>
                    <TouchableOpacity style={styles.btn} onPress={onCancel}>
                        <Text style={{ ...textVariants.body, ...styles.text, }}>取消</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={onConfirm}>
                        <Text style={{ ...textVariants.body, ...styles.text, color: colors.primary }}>确定</Text>
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
        color: 'white',
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