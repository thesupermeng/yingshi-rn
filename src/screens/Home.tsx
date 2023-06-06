import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import HomeHeader from '../components/header/homeHeader';
import { HomeStackParamList, HomeStackScreenProps } from '../types/navigationTypes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export default  ({ navigation  }:NativeStackScreenProps<HomeStackParamList>) => {
  const dispatch = useDispatch();
  return (
      <View style={{ flex: 1 }}>
        <HomeHeader navigation={navigation} />
      </View>
  )
}

const styles = StyleSheet.create({
});