import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import FastImage from '../../common/customFastImage';

import PlayZhengPianIcon from '@static/images/play-zhengpian1.svg';
import PlayBoDanIcon from '@static/images/play-bodan.svg';
import { useTheme } from '@react-navigation/native';
import { memo, useState } from 'react';
import { CLangKey } from '../../../constants/langkey';

interface Props {
  imageUrl: string;
  vodTitle: string;
  isBodan: boolean;
  redirectVod: any;
}

const RedirectButton = ({
  imageUrl,
  vodTitle,
  isBodan,
  redirectVod,
}: Props): JSX.Element => {
  const watchText = isBodan ? CLangKey.watchPlaylist.tr() : CLangKey.watchVideo.tr();
  const { colors, textVariants } = useTheme();

  return (
    <View style={{ flexWrap: 'wrap' }}>
      {/* <View style={{ flex: 10, flexDirection: 'column', justifyContent: 'flex-end', marginRight: 35 }}> */}

      <View
        style={{
          padding: 8,
          height: 75,
          flexDirection: 'row',
          borderRadius: 8,
          backgroundColor: 'rgba(106, 106, 106, 0.25)',
        }}>
        <>
          <View
            style={{
              width: 45,
              flexDirection: 'column',
              justifyContent: 'flex-end',
              marginRight: 6,
            }}>
            <TouchableOpacity
              style={{ flex: 1, position: 'relative' }}
              onPress={redirectVod}>
              <FastImage
                style={{
                  flex: 1,
                  borderRadius: 6,
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  zIndex: 3,
                }}
                source={{
                  uri: imageUrl,
                  priority: 'high',
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignContent: 'center',
              marginLeft: 10,
              marginRight: 5,
            }}>
            <TouchableOpacity onPress={redirectVod}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  paddingVertical: 5,
                }}>
                <View
                  style={{
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                  }}>
                  <View>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={{
                        ...textVariants.bodyBold,
                        color: colors.text,
                        fontSize: 15,
                      }}>
                      {vodTitle}
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                  <View style={{ flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                    {isBodan ? (
                      <View style={{ width: 20, height: 20 }}>
                        <PlayBoDanIcon style={{ flex: 1 }} />
                      </View>
                    ) : (
                      <PlayZhengPianIcon width={20} height={20} />
                    )}
                  </View>
                  <View
                    style={{
                      paddingLeft: 6,
                      justifyContent: 'center',

                    }}>
                    <Text
                      style={{
                        ...textVariants.subBody,
                        color: colors.text,
                        fontSize: 14,
                        position: 'relative',
                        top: isBodan ? 2 : 0
                      }}>
                      {watchText}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </>
      </View>
    </View>
  );
};

export default memo(RedirectButton);

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    justifyContent: 'flex-end',
  },
});
