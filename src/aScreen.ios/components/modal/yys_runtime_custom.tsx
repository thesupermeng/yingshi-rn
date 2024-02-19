import React, { useEffect, ReactNode } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { VipIcon2Svg } from '@static';

interface yysIconarrowrightorangeStation {
  children: ReactNode
}

export default function VipModal({ children }: yysIconarrowrightorangeStation) {
  return (
    <View style={{ flex: 1, position: 'relative', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', alignContent: 'center', marginBottom: '18%' }}>
      <View style={{ position: 'relative', alignItems: 'center' }}>
        <VipIcon2Svg style={{ position: 'absolute', zIndex: 100, top: 0 }}></VipIcon2Svg>
        {children}
      </View>
    </View>
  )
}