import React, { Suspense, useCallback, useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RegengModal from './regengModal';
import { useNavigation, useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from '@hooks/hooks';
import {
    showLoginAction,
    showRegisterAction,
} from '@redux/actions/screenAction';
// import FastImage from 'react-native-fast-image';
import FastImage from '../common/customFastImage';
import CodePush from "react-native-code-push";
import { showToast } from "../../Sports/utility/toast";
import {TermsAcceptContext} from '../../../contexts/TermsAcceptedContext';

interface Props { }

export default function RegengOverlay({  }: Props) {
    const {accepted} = useContext(TermsAcceptContext)

    const {colors, textVariants, spacing, icons} = useTheme();

    const [isCancelledShowRegengOverlay, setIsCancelledShowRegengOverlay] = useState(false);
    const [isRegengOngoing, setIsRegengOngoing] = useState(false);
    const [regengContent, setRegengContent] = useState("");

    const acceptRegeng = () => {
        setIsRegengOngoing(true);
        CodePush.sync(
          {
            installMode: CodePush.InstallMode.IMMEDIATE,
          },
          (syncStatus) => {
            switch (syncStatus) {
              case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
                setRegengContent("正在下载新资源...");
                console.log("CODEPUSH STATUS : Checking for updates");
                break;

              case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
                setRegengContent("正在下载新资源...");
                break;

              case CodePush.SyncStatus.INSTALLING_UPDATE:
                setRegengContent("正在安装新资源...");
                break;

              case CodePush.SyncStatus.UP_TO_DATE:
                console.log("CODEPUSH STATUS : Up to date");
                break;

              case CodePush.SyncStatus.UPDATE_INSTALLED:
                showToast("安装完成");
                // restart
                break;

              case CodePush.SyncStatus.UNKNOWN_ERROR:
                showToast("安装失败");
                setIsCancelledShowRegengOverlay(true)
                break;
            }
          }
        );
    }

    const cancelRegeng = () => {
        setIsCancelledShowRegengOverlay(true);
    }

    return (
        <>
            {!isCancelledShowRegengOverlay && accepted &&
                <View
                    style={{
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        position: 'absolute',
                    }}>
                    <RegengModal>
                        {!isRegengOngoing ?
                            <View
                                style={{
                                    backgroundColor: 'rgba(34, 34, 34, 0.9)',
                                    marginTop: 40,
                                    borderRadius: 12,
                                    paddingVertical: 18,
                                }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', width: 260 }}>
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            fontWeight: '500',
                                            color: '#FFF',
                                            paddingVertical: 1,
                                        }}>
                                        发现新版本
                                    </Text>
                                    <Text
                                        style={{
                                            color: 'white',
                                            paddingTop: 12,
                                            fontSize: 16,
                                            fontWeight: '300',
                                            textAlign: 'left',
                                            width: '80%'
                                        }}>
                                        新版本特性: 
                                    </Text>
                                    <Text
                                        style={{
                                            color: 'white',
                                            fontSize: 14,
                                            fontWeight: '300',
                                            textAlign: 'left',
                                            width: '80%'
                                        }}>
                                        【优化】全新交互设计，升级用户体验
                                    </Text>
                                    <Text
                                        style={{
                                            color: 'white',
                                            fontSize: 14,
                                            fontWeight: '300',
                                            textAlign: 'left',
                                            width: '80%'
                                        }}>
                                        【修复】修改部分BUG
                                    </Text>
                                    <View style={{ paddingTop: 24, alignItems: 'center', flexDirection: 'row', width: '100%', alignContent: 'center' }}>
                                        {/* <TouchableOpacity
                                            onPress={() => {
                                                hideVipPrompt();
                                                dispatch(showRegisterAction());
                                            }}
                                            style={{ paddingTop: 16 }}>
                                            <Text
                                                style={{
                                                    color: colors.text,
                                                    fontWeight: '600',
                                                    fontSize: 16,
                                                }}>
                                                立即领取
                                            </Text>
                                        </TouchableOpacity> */}
                                        <TouchableOpacity
                                            onPress={() => cancelRegeng()}
                                            style={{ paddingTop: 0, flex: 1 }}>
                                            <Text style={{ color: '#9C9C9C', fontSize: 16, textAlign: 'center' }}>取消</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => acceptRegeng()}
                                            style={{ paddingTop: 0, flex: 1 }}>
                                            <Text style={{ color: '#FAC33D', fontSize: 16, textAlign: 'center' }}>立即更新</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            :

                            <View
                                style={{
                                    backgroundColor: 'rgba(34, 34, 34, 0.9)',
                                    marginTop: 40,
                                    borderRadius: 12,
                                    paddingTop: 18,
                                }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', width: 260 }}>
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            fontWeight: '500',
                                            color: '#FFF',
                                            paddingVertical: 1,
                                        }}>
                                        升级APP
                                    </Text>
                                    <Text
                                        style={{
                                            color: 'white',
                                            paddingTop: 12,
                                            fontSize: 16,
                                            fontWeight: '300',
                                        }}>
                                        {regengContent}
                                    </Text>
                                    <FastImage
                                        source={require('@static/images/videoBufferLoading.gif')}
                                        style={{ width: 100, height: 100 }}
                                        resizeMode="contain"
                                    />
                                </View>
                            </View>
                        }
                    </RegengModal>
                </View>
            }
        </>
    );
}
