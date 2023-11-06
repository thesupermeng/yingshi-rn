import React, { useEffect, ReactNode } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import VIPIcon from '../../../static/images/vip_icon.svg';

interface Props {
    children: ReactNode
}

export default function VipModal({ children }: Props) {
    return (
        <View style={{ flex: 1, position: 'relative', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', alignContent: 'center', marginBottom: '18%' }}>
          <View style={{ position: 'relative', alignItems: 'center' }}>
            <VIPIcon style={{ position: 'absolute', zIndex: 100, top: 0 }}></VIPIcon>
            {children}
          </View>
        </View>
    )
}