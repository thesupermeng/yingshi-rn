import React, { useState } from 'react';
import { Dialog } from '@rneui/themed';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

interface Props {
    onConfirm: any,
    isVisible: boolean
}
export default function NotificationModal({ onConfirm, isVisible }: Props) {
    const { colors, textVariants, spacing } = useTheme();

    return (
        <Dialog
            isVisible={isVisible}
            overlayStyle={{ backgroundColor: 'rgba(34, 34, 34, 1)', ...styles.overlay }}
            backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            onBackdropPress={onConfirm}
        >
            <View gap={spacing.m}>
                <Dialog.Title titleStyle={{ ...textVariants.header, ...styles.head, }} title="清除提示" />
                <Text style={{ ...textVariants.body, ...styles.body, }}>
                    <Text>如果本站提供内容侵犯了您的版权，请来函说明，本网站将立即删除，保护版权所有者的权益。</Text>
                    <Text>联系邮箱: hello@yingshi.com</Text>
                </Text>
                <View style={styles.btns}>
                    <TouchableOpacity style={styles.btn} onPress={onConfirm}>
                        <Text style={{ ...textVariants.body, ...styles.head, color: colors.primary }}>确定</Text>
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
        textAlign: 'left'
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