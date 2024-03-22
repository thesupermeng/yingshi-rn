import React, { useEffect, ReactNode } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import VIPIcon from '@static/images/fastVietnam.svg';

interface XFillButton {
    children: ReactNode
}

export default function VipModal({ children }: XFillButton) {
    return (
        <View style={{ flex: 1, position: 'relative', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', alignContent: 'center', marginBottom: '5%' }}>
          <View style={{ position: 'relative', alignItems: 'center' }}>
            <VIPIcon style={{ position: 'absolute', zIndex: 100, top: 0 }}></VIPIcon>
            {children}
          </View>
        </View>
    )
}