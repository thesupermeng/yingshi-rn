import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import { RootStackScreenProps } from '../../types/navigationTypes';
import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';
import ShowMoreButton from '../../components/button/showMoreButton';
import Logo2 from '../../../static/images/logo2.svg';
import NotificationModal from '../../components/modal/notificationModal';

import { useTheme } from '@react-navigation/native';

export default ({ navigation }: RootStackScreenProps<'用户协议'>) => {
    const { colors, textVariants, icons, spacing } = useTheme();
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const toggleOverlay = () => {
        setIsDialogOpen(!isDialogOpen);
    };
    
    return (
        <ScreenContainer scrollView={true}>
            <View gap={spacing.m}>
                <TitleWithBackButtonHeader title='用户协议' />
                <Text style={{ ...textVariants.header, textAlign: 'center' }}>影视TV用户协议</Text>
                <Text style={textVariants.body}>
                    一、关于我们{"\n"}
                    萤视TV是一站式线上视频服务社区。本 协议中的"您''与"用户"指任何使用和/或访问本服 务的个人。
                </Text>
                <Text style={textVariants.body}>
                    二、协议目的{"\n"}
                    本用户协议、隐私政策及本服务发布的其他 政策（以下合称"本协议"）是我们为您提供本服务 以供使用及访问所依据的条款。
                    通过本协议，您将 了解幸福影视向您提供本服务的方式、本服务所允 许或禁止的活动、
                    应用问题及其他重要信息，以及 相关方的权利义务内容。请您仔细阅读本协议，若 您使用本服务, 则视为您已经与萤视TV达成具有 法律约束力的协议。若您不接受本协议，请勿使用 本服务。
                </Text>
                <Text style={textVariants.body}>
                    三、使用资格{"\n"}
                    您需具有符合适用本服务的法定年龄要求， 方可使用本服务。一般指年满18周岁，若您未满 18周岁，则需您的父母或法定监护人同意后方可 使用。
                </Text>
                <Text style={textVariants.body}>
                    四、使用权限{"\n"}
                    幸福影视授权您依照本协议访问或使用本服务 的有限的、非独家的、不可转授权、不可转让、但可以撤销的使用权限。
                </Text>
            </View>
        </ScreenContainer >
    )
}

const styles = StyleSheet.create({
    text: {

    }
});