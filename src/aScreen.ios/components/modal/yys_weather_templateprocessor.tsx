import React, { useEffect, ReactNode } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { VipIcon2Svg } from '@static';

interface yysIconarrowrightorangeStation {
  children: ReactNode
}

export default function RegengModal({ children }: yysIconarrowrightorangeStation) {
  return (
    <View style={{ flex: 1, position: 'relative', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', alignContent: 'center', marginBottom: '18%' }}>
      <View style={{ position: 'relative', alignItems: 'center' }}>
        {children}
      </View>
    </View>
  )
}