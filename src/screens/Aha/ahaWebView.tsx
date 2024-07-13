import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import FastImage from "react-native-fast-image";

import { useAppDispatch, useSelector } from '@hooks/yys_frame';
import { yys_HejiCricket } from '@redux/reducers/yys_privacy_round';
import WebView from "react-native-webview";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showLoginAction, showLoginExpired } from "@redux/actions/yys_runtimescheduler";
import { BackHandler, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { addUserAuthState, removeUserAuthState } from "@redux/actions/yys_gesture";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { yys_GesturesConst } from "../../api/yys_project_pagination";
import { clearMinivodApiCache } from "../../utils/yys_found_manifest";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";
import { useTheme } from '@react-navigation/native';
import RefreshIcon from '@static/images/videojsHumidityGraph.svg';
import { IS_OTHER_SKIN } from "@utility/yys_ajax_switch";
import NoWifi from '@static/images/libglogTypesSkip.svg';

interface AhaWebProps {
  name?: string,
  url?: string,
  html?: string,
  whitelist?: string,
  blacklist?: string,
  loadingSize?: number,
  errorType?: 'page' | 'banner',
  backgroundColor?: string,
  setWebTitle?: (title:string) => void,
  setLoading?: (loading:boolean) => void,
  pageOpen?: (url:string, navBack?:number) => void,
  pageClose?: () => void,
  pageRoute?: (name:string, params:any) => void,
}

function AhaWebView({
  name, url, html, whitelist, 
  blacklist, loadingSize, errorType, 
  backgroundColor, 
  setWebTitle, setLoading, 
  pageOpen, pageClose, pageRoute
}: AhaWebProps) {

  const dispatch = useAppDispatch();
  const [uniqueToken, setUniqueToken] = useState(`${Date.now()}`)
  const [baseUrl] = useState(url);
  const [baseHtml] = useState(html)
  const [webViewUrl, setWebViewUrl] = useState('');
  const [canGoBack, setCanGoBack] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const isClosed = useRef(false);
  const [whiteList] = useState(whitelist?.split(';'));
  const [blackList] = useState(blacklist?.split(';'));

  const [ahaToken, setAhaToken] = useState<string>()
  const [ahaHost] = useState('https://iframe-h5.aha666.site')
  const [channelCode] = useState('200000_100031')
  const userState = useSelector<yys_HejiCricket>('userReducer');
  const ahaTokenValidate = useRef(false);
  const webViewRef = useRef<any>(null);
  
  useEffect(() => {
    const email = userState.user?.userEmail ?? ''
    const phone = userState.user?.userPhoneNumber ?? ''
    checkToken(email, phone)
  }, [userState.user?.userEmail, userState.user?.userPhoneNumber]);
  
  const checkToken = async (email: string, phone: string) => {
    const token = await AsyncStorage.getItem("ahaToken");
    if (email.length <= 0 && phone.length <= 0) {
      if (token && token.length > 0) {
        await AsyncStorage.removeItem("ahaToken");
        setAhaToken('invalidToken');
      } else {
        setAhaToken('');
      }
    } else if (token) {
      setAhaToken(token);
    } else {
      setAhaToken('');
    }
  };

  useEffect(() => {
    // https://iframe-h5.aha666.site/games
    ahaTokenValidate.current = false;
    if (ahaToken == undefined) return;
    if (baseUrl == undefined) return;

    console.debug(`==>【${name}】【TOKEN】`, ahaToken);
    let res = baseUrl || '/games?hasGame=true';
    if (!res.startsWith('http://') && !res.startsWith('https://')) {
      res = `${ahaHost}${res}`
    }
    let sep = res.includes('?') ? '&' : '?'
    if (res.startsWith(ahaHost)) {
      if (ahaToken.length > 0) {
        ahaTokenValidate.current = ahaToken != 'invalidToken'
        res = res + sep + `authToken=${ahaToken}`
        sep = '&'
      }
      if (channelCode.length > 0) {
        res = res + sep + `channelCode=${channelCode}`
        sep = '&'
      }
      res = res + sep + 'isApp=true'
      sep = '&'
      res = res + sep + `_u=${uniqueToken}`
      sep = '&'
    }
    // history page must include hasGame=true
    if (res.startsWith(`${ahaHost}/user/history`)) {
      res = res + sep + 'hasGame=true'
      sep = '&'
    }
    if (res !== webViewUrl) {
      setWebViewUrl(res)
    }
  }, [baseUrl, ahaToken, uniqueToken, channelCode])

  const webSource = useMemo(() => {
    if (baseHtml && baseHtml.length > 0) {
      return { html: baseHtml }
    } else if (webViewUrl && webViewUrl.length > 0) {
      return { uri: webViewUrl, method: 'GET'}
    } else {
      return undefined
    }
  }, [baseHtml, webViewUrl])

  const INJECTED_JAVASCRIPT_MESSAGE = `
    function handleReactMessage(event) {
      window.ReactNativeWebView.postMessage(JSON.stringify(event.data));
    }

    function addReactMessage() {
      window.removeEventListener('message', handleReactMessage);
      window.addEventListener('message', handleReactMessage);
    }

    addReactMessage();
  `;
  
  const handleOpen = (uri: string, navBack?: number) => {
    let openUrl = uri
    if (!openUrl.startsWith('https://') && !openUrl.startsWith('http://')) {
      openUrl = `${ahaHost}${uri}`
    }
    if (pageOpen) {
      pageOpen(openUrl, navBack)
    }
  }

  const handleRoute = (name: string, params: any) => {
    if (pageRoute) {
      pageRoute(name, params);
    }
  }

  const handleClose = () => {
    if (isClosed.current == false && pageClose) {
      isClosed.current = true
      pageClose()
    }
  }

  const handlePin = (verify:boolean) => {
    if (pageRoute) {
      pageRoute('AhaPinCodeScreen', {verify})
    }
  }

  const logout = async () => {
    dispatch(showLoginExpired());

    await AsyncStorage.removeItem("showAds");
    dispatch(removeUserAuthState());
    clearMinivodApiCache();

    const user = await yys_GesturesConst.guestLogin();
    dispatch(addUserAuthState(user));
    GoogleSignin.signOut();
  }

  const handleSessionExpired = async () => {
    if (!yys_RelatedTooltips.isLogin(userState.user)) return;
    if (!ahaTokenValidate.current) return;

    logout();
  }

  const handleMessage = (event:any) => {
    try {
      const json = JSON.parse(event.nativeEvent.data);
      const {message, type, url, data} = json;
      if (type === 'urlChange') {
        // console.log(`==> 【${name}】【iframe】【${type}】`, newUrl);
        // if (!newUrl || newUrl.includes('undefined')) {
        //   handleSessionExpired();
        //   return;
        // }
        // setHideFooter(newUrl.endsWith('/sports/sport'));
      }
      // if (event.data.type === 'openBottomSheet' &&
      //   !pathname.startsWith('/sport/u') &&
      //   !pathname.startsWith('/sport/s')
      // ) {
      //   console.log(pathname);
      //   setHideFooter(false);
      // }
      // if (
      //   event.data.type === 'closeBottomSheet' &&
      //   !pathname.startsWith('/sport/u') &&
      //   !pathname.startsWith('/sport/s')
      // ) {
      //   console.log(pathname);
      //   setHideFooter(true);
      // }
      if (message === 'iframe') {
        console.debug(`==>【${name}】【iframe】【${type}】`, event.nativeEvent);
        if (type === 'login') {
          dispatch(showLoginAction());
        } else if (type === 'share') {
          handleOpen(url);
        } else if (type === 'invalidToken') {
          handleSessionExpired();
        } else if (type === 'gameLobby') {
          handleOpen(url, 1);
          setUniqueToken(`${Date.now()}`)
        } else if (type === 'betcart') {
          handleOpen(url)
        } else if (type === 'sportLobby') {
          handleOpen(url)
        } else if (type === 'onTopUp') {
          const dataUrl = data?.data?.topup_data;
          const dataHtml = data?.data?.html;
          if (dataUrl) {
            handleRoute('AhaLinkScreen', {url: dataUrl, navBack: 1})
          } else if (dataHtml && dataHtml.length > 0) {
            handleRoute('AhaLinkScreen', {html: dataHtml, navBack: 1})
          }
        } else if (type === 'enterPin') {
          handlePin(true)
        } else if (type === 'setUpPin') {
          handlePin(false)
        } else if (type === 'forgotSecurityPin') {
          handlePin(false)
        } else if (type === 'return') {
          handleClose()
        } else {
          console.log(`==>【iframe】[${type}]`, url);
          if (url && !url.includes('undefined')) {
            handleOpen(url)
          }
        }
      }
    } catch (error) {
      console.log(`==webViewMessageError:${error}`, event.nativeEvent.data);
    }
  }

  const handleLoad = () => {
    // console.log(`==webViewLoad:`, webView);
  }

  const handleLoadEnd = () => {
    // console.log(`==webViewLoad:`, webView);
    setIsRefreshing(false);
    if (setLoading) {
      new Promise(() => {
        setTimeout(() => {
          setLoading(false)
        }, 200)
      })
    } else {
      // for first loading
      if (isLoading) {
        new Promise(() => {
          setTimeout(() => {
            setIsLoading(false);
          }, 200)
        })
      }
    }
  }

  const handleError = (event:any) => {
    console.log(`==webViewError:${JSON.stringify(event.nativeEvent)}`);
  }

  const handleStateChange = (navState:any) => {
    // Keep track of going back navigation within component
    // this.canGoBack = navState.canGoBack;
    // console.log(`==webViewNavigationStateChange:${navState.url}`, navState);
    setCanGoBack(navState.canGoBack);
    // const url = navState.url ?? "";
    // if (url.includes('www.sss999888.com')) {
    //   console.log('== sss999888', webView, webView?.stopLoading, webView?.goBack);
    //   if (webView && webView.stopLoading) {
    //     webView.stopLoading()
    //   }
    //   if (webView && webView.goBack) {
    //     webView.goBack()
    //   } 
    //   if (setLoading) {
    //     setLoading(false)
    //   }
    //   return
    // }
    
    if (setWebTitle) {
      setWebTitle(navState.title);
    }
    console.debug(`==>【${name}】【STATE】:${navState.url}`, navState.loading);
  }

  const handleRequest = (event:any) => {
    const url = event?.url ?? "";
    if (url.includes('www.sss999888.com')) {
      return false
    }
    if (whiteList != undefined && whitelist != null) {
      for (const item of whiteList) {
        if (item === '*') {
          console.debug(`==>【${name}】【WHITELIST】`, url);
          return true
        }
        let res = item;
        if (!res.startsWith('http://') && !res.startsWith('https://')) {
          res = `${ahaHost}${res}`
        }
        if (url.startsWith(res)) {
          console.debug(`==>【${name}】【WHITELIST】`, url, res);
          return true
        }
      }
    }
    if (blackList != undefined && blackList != null) {
      for (const item of blackList) {
        if (item === '*') {
          console.debug(`==>【${name}】【BLACKLIST】`, url);
          return false
        }
        let res = item;
        if (!res.startsWith('http://') && !res.startsWith('https://')) {
          res = `${ahaHost}${res}`
        }
        if (url.startsWith(res)) {
          console.debug(`==>【${name}】【BLACKLIST】`, url, res);
          return false
        }
      }
    }
    return true
  }

  const handleScroll = (event:any) => {
    
  }

  // const onBackButtonPressAndroid = (): boolean => {
  //     if (canGoBack) {
  //       webViewRef.current?.goBack();
  //       return false
  //     } else {
  //       if (pageClose) {
  //         pageClose()
  //       }
  //       return true
  //     }
  // };

  // const componentDidMount = () => {
  //   BackHandler.addEventListener('hardwareBackPress', onBackButtonPressAndroid);
  // }

  // const componentWillUnmount = () => {
  //   BackHandler.removeEventListener('hardwareBackPress', onBackButtonPressAndroid);
  // }

  const renderLoading = () => (
    <View style={styles.loading}>
      <FastImage
        style={{ height: loadingSize ?? 150, width: loadingSize ?? 150 }}
        source={require("@static/images/sinaHover.gif")}
        resizeMode={"contain"}
      />
    </View>
  )

  const renderError = (errorDomain: string | undefined, errorCode: number, errorDesc: string) => {
    const {colors} = useTheme();
    return (<View style={ 
      {...(errorType === 'banner' ? styles.errorBanner : styles.errorPage), 
      backgroundColor: backgroundColor ?? "rgb(22, 22, 22)"
    } }>
      <View style={ errorType === 'banner' ? styles.errorBannerIcon : styles.errorPageIcon}>
        <NoWifi width={errorType === 'banner' ? 25 : 100} />
      </View>
      <View style={ errorType === 'banner' ? styles.errorBannerMsg : styles.errorPageMsg}>
        <Text style={{color: '#F1C557', fontSize: 16}}>
          数据加载失败
        </Text>
      </View>
      <TouchableOpacity activeOpacity={0.7} onPress={onRefresh}>
        <View style={{
          ...(errorType === 'banner' ? styles.refreshBannerBtn : styles.refreshBtn),
          backgroundColor: IS_OTHER_SKIN ? 'white' : colors.title,
        }}>
          <View style={{ position: 'relative', top: 2, paddingRight: 3 }}>
            <RefreshIcon />
          </View>
          <Text
            style={{
              ...styles.refreshText,
              color: colors.background,
            }}>
            刷新
          </Text>
        </View>
      </TouchableOpacity>
    </View>)
  }
  

  const onRefresh = React.useCallback(() => {
    setIsRefreshing(true);
    if (webViewRef.current && webViewRef.current.reload) {
      setIsRefreshing(true);
      webViewRef.current.reload();
    }
  }, []);

  return (
    <>
      { 
        webSource && 
        <WebView 
          ref={webViewRef}
          // injectedJavaScript={INJECTED_JAVASCRIPT_MESSAGE}
          // injectedJavaScriptForMainFrameOnly={true}
          injectedJavaScriptBeforeContentLoaded={INJECTED_JAVASCRIPT_MESSAGE}
          bounces={true}
          scalesPageToFit={true}
          source={webSource}
          style={styles.web}
          useWebKit={false}
          onLoad={handleLoad}
          onLoadEnd={handleLoadEnd}
          onError={handleError}
          onMessage={handleMessage}
          onNavigationStateChange={handleStateChange}
          onShouldStartLoadWithRequest={handleRequest}
          automaticallyAdjustContentInsets={false}
          contentInset={{ top: 0, left: 0, bottom: -1, right: 0 }}
          onScroll={handleScroll}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          allowsInlineMediaPlayback={true}
          backgroundColor="#1A1E21"
          defaultBackgroundColor="#1A1E21"
          startInLoadingState={true}
          pullToRefreshEnabled
          setSupportMultipleWindows={false}
          renderLoading={renderLoading}
          renderError={renderError}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={onRefresh}
              colors={['blue', 'green', 'red']}
              progressBackgroundColor="white"
            />
          }
        ></WebView>
      }
      {/* {isLoading && <View 
        style={{
          width: '100%', 
          height: '100%', 
          position: 'absolute', 
          zIndex: 10, 
          backgroundColor: '#1A1E21',
          justifyContent: 'center', 
          alignItems: 'center'
        }}
      >
        <FastImage
          style={{ height: loadingSize ?? 150, width: loadingSize ?? 150 }}
          source={require("@static/images/sinaHover.gif")}
          resizeMode={"contain"}
        />
      </View>} */}
    </>
  );
}

export default memo(AhaWebView);

const styles = StyleSheet.create({
  web: {
    flex:1, 
    width:'100%', 
    height:'100%', 
    backgroundColor: "#1A1E21"
  },
  loading: {
    width: '100%', 
    height: '100%', 
    backgroundColor: '#1A1E21',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  errorPage: {
    width:'100%', 
    height:'100%', 
    backgroundColor: "#1A1E21",
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorBanner: {
    width:'100%', 
    height:'100%', 
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#1A1E21",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  errorPageIcon: {
    width: 100, 
    height: 100, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorBannerIcon: {
    width: 20, 
    height: 20, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorPageMsg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorBannerMsg: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  indicator: {
    width: 150,
    height: 150,
  },
  refreshBtn: {
    marginTop: 20,
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  refreshBannerBtn: {
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  refreshText: {
    color: 'white',
    textAlign: 'center',
  }
});