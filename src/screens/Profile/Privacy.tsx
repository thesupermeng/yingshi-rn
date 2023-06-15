import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import { RootStackScreenProps } from '../../types/navigationTypes';
import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';
import ShowMoreButton from '../../components/button/showMoreButton';
import Logo2 from '../../../static/images/logo2.svg';
import NotificationModal from '../../components/modal/notificationModal';

import { useTheme } from '@react-navigation/native';

export default ({ navigation }: RootStackScreenProps<'关于我们'>) => {
    const { colors, textVariants, icons, spacing } = useTheme();
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const toggleOverlay = () => {
        setIsDialogOpen(!isDialogOpen);
    };

    return (
        <ScreenContainer>
            <View gap={spacing.m}>
                <TitleWithBackButtonHeader title='关于我们' />
                <View style={styles.logo}>
                    <Logo2 height={icons.sizes.xxl} width={icons.sizes.xxl} />
                </View>
                <Text style={{ textAlign: 'center', ...textVariants.body }}>V1.0.01</Text>
                <NotificationModal onConfirm={toggleOverlay} isVisible={isDialogOpen} />
                <View>
                    <ShowMoreButton text='隐私政策' onPress={() => navigation.navigate('视频收藏')} />
                    <ShowMoreButton text='用户协议' onPress={() => navigation.navigate('播放历史')} />
                    <ShowMoreButton text='版权声明' onPress={() => setIsDialogOpen(!isDialogOpen)} />
                </View>
            </View>
        </ScreenContainer >
    )
}

const styles = StyleSheet.create({
    topNav: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logo: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitBtn: {
        borderRadius: 10,
    }
});