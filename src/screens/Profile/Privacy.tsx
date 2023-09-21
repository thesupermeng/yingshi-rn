import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import { RootStackScreenProps } from '../../types/navigationTypes';
import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';

import { useTheme } from '@react-navigation/native';

export default ({ navigation }: RootStackScreenProps<'隐私政策'>) => {
    const { colors, textVariants, icons, spacing } = useTheme();
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const toggleOverlay = () => {
        setIsDialogOpen(!isDialogOpen);
    };

    return (
        <ScreenContainer scrollView={true}>
            <View style={{ gap: spacing.m }}>
                <TitleWithBackButtonHeader title='隐私政策' />
                <Text style={{ ...textVariants.header, textAlign: 'center' }}>影视TV隐私协议</Text>
                <Text style={textVariants.body}>
                    {'        '}追剧影视大全隐私政策更新于2023年11月07日衷心感谢您选用追剧影视大全产品! 为更好地向您展示和说明我方的隐私规则和您的权利，以及向您提供更完善的个人信息保护措施，
                    我方拟定《追剧影视大全隐私政策》（以下简称本政策），意在向您阐述您对个人信息的控制权、使用增强式告知方式展示（核心）隐私条款并给予您明确选择是否授权同意的权利等。
                    请您在使用/继续使用追剧影视大全的产品与/或服务前仔细阅读和充分理解全文，并在同意全部内容后使用/继续使用。
                </Text>
            </View>
        </ScreenContainer >
    )
}

const styles = StyleSheet.create({
    text: {

    }
});