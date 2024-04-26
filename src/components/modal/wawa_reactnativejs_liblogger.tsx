import React, { useEffect, ReactNode } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import EighteenPlusIcon from '@static/images/internetLibsentry.svg';
import { screenModel } from '@type/wawa_rules';
import { useAppSelector } from '@hooks/wawa_root';
import { BlurView } from '../blurView';

interface wawaAwayShow {
  handleAccept: any
  handleReject: any
  isRadius?:boolean
}

export default function EighteenPlusOverlay({ handleAccept, handleReject , isRadius=false }: wawaAwayShow) {
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  )
  const { adultModeDisclaimerShow, isOverEighteenAccepted } = screenState

  if (adultModeDisclaimerShow && !isOverEighteenAccepted)
    return (
      <View style={{ height: '100%', width: '100%', position: 'absolute' }}>
        <BlurView
          blurType='dark'
          blurAmount={15}
          style={{
            flex: 1,
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius : isRadius ? 15:0
          }}
        />
        <View style={{ flex: 1, position: 'relative', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', alignContent: 'center', marginBottom: '18%' }}>
          <View style={{ position: 'relative', alignItems: 'center' }}>
            <EighteenPlusIcon style={{ position: 'absolute', zIndex: 100, top: 0 }}></EighteenPlusIcon>
            <View
              style={{
                backgroundColor: 'rgba(34, 34, 34, 0.9)',
                marginTop: 40,
                borderRadius: 12,
                paddingTop: 60,
                paddingBottom: 26,
                paddingHorizontal: 28,
              }}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text
                  style={{
                    color: 'white',
                    padding: 2,
                    fontSize: 16,
                    fontWeight: '400',
                  }}>
                  未成年请勿观看视频
                </Text>
                <Text
                  style={{
                    color: 'white',
                    padding: 2,
                    fontSize: 16,
                    fontWeight: '400',
                  }}>
                  我们遵守当地法律实施内容分级规定

                </Text>
                <Text
                  style={{
                    color: 'white',
                    padding: 2,
                    fontSize: 16,
                    fontWeight: '400',
                  }}>
                  观看视频者必须年满18周岁
                </Text>
                <View style={{ paddingTop: 22, alignItems: 'center' }}>
                  <TouchableOpacity
                    onPress={handleAccept}
                    style={{
                      backgroundColor: '#FAC33D',
                      paddingVertical: 12,
                      paddingHorizontal: 38,
                      borderRadius: 8,
                    }}>
                    <Text
                      style={{
                        
                        fontWeight: '500',
                        fontSize: 16,
                        color: '#1D2023'
                      }}>
                      我已年满18岁
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handleReject}
                    style={{ paddingTop: 16 }}>
                    <Text style={{ color: '#9C9C9C', fontSize: 16, fontWeight: '500' }}>否</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

    )

  return <></>
}

const styles = {

}