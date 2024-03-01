import React, { useEffect, ReactNode } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import VIPIcon from '@static/images/hooksSports.svg';

interface yys_ConfigureUimanager {
    children: ReactNode
}

export default function RegengModal({ children }: yys_ConfigureUimanager) {
    return (
        <View style={{ flex: 1, position: 'relative', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', alignContent: 'center', marginBottom: '18%' }}>
          <View style={{ position: 'relative', alignItems: 'center' }}>
            {children}
          </View>
        </View>
    )
}