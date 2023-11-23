import {View, Text, TouchableOpacity, ViewStyle, TextStyle, StyleSheet} from 'react-native';
import {showRegisterAction} from '../../redux/actions/screenAction';
import VipModal from './vipModal';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import { IconClose } from '../../Sports/assets';
import { useAdultVideoContext } from '../../contexts/AdultVideoContext';
import { useCallback } from 'react';
import CrossIcon from '../../../static/images/cross.svg'
import CloseIcon from '../../../static/images/close.svg'


const AdultVideoVipModal = () => {
  const navigator = useNavigation();
  const {toggleShowVipModal, showVipModal} = useAdultVideoContext();

  const handleCloseModal = useCallback(() => {
    toggleShowVipModal(false)
  }, [])

  if (showVipModal)
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          position: 'absolute',
        }}>
        <VipModal>
          <View
            style={{
              backgroundColor: 'rgba(34, 34, 34, 0.9)',
              marginTop: 40,
              borderRadius: 12,
              paddingTop: 36,
              paddingBottom: 26,
              paddingHorizontal: 28,
            }}>
            <TouchableOpacity
              onPress={() => {
                handleCloseModal()
              }}>
              <View style={styles.closeBtnContainer}>
                <CloseIcon />
              </View>
            </TouchableOpacity>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  color: '#E2820E',
                  paddingTop: 20,
                  paddingVertical: 12,
                }}>
                VIP升级权益
              </Text>
              <Text
                style={{
                  color: 'white',
                  padding: 2,
                  fontSize: 16,
                  fontWeight: '300',
                }}>
                立即升级VIP，畅享午夜视频
              </Text>
              <View style={styles.btnContainer}>
                <TouchableOpacity
                  onPress={() => {
                    handleCloseModal();
                    navigator.navigate('付费VIP');
                  }}
                  style={styles.btn}>
                  <Text
                    style={{
                      color: '#000',
                      fontWeight: '600',
                      fontSize: 16,
                    }}>
                    购买VIP
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handleCloseModal();
                    navigator.navigate('邀请');
                  }}
                  style={styles.btn}>
                  <Text
                    style={{
                      color: '#000',
                      fontWeight: '600',
                      fontSize: 16,
                    }}>
                    邀请好友
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </VipModal>
      </View>
    );
};

const styles = StyleSheet.create({
  closeBtnContainer: {
    height: 20,
    width: 20,
    marginTop: -20,
    marginRight: -10,
    // borderRadius: 10,
    alignSelf: 'flex-end',
    // backgroundColor: 'rgba(201, 201, 201, 0.3)',
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 10,
    paddingTop: 25,
    paddingBottom: 10,
  },

  btn: {
    backgroundColor: '#FAC33D',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
  },
})

export default AdultVideoVipModal;
