import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import FastImage from "react-native-fast-image";

import { useAppDispatch, useSelector } from '@hooks/yys_frame';
import { yys_HejiCricket } from '@redux/reducers/yys_privacy_round';
import WebView from "react-native-webview";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showLoginAction, showLoginExpired } from "@redux/actions/yys_runtimescheduler";
import { BackHandler, View } from "react-native";
import { addUserAuthState, removeUserAuthState } from "@redux/actions/yys_gesture";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { yys_GesturesConst } from "../../api/yys_project_pagination";
import { clearMinivodApiCache } from "../../utils/yys_found_manifest";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";



interface AhaWebProps {
  url?: string,
  html?: string,
  loadingSize?: number,
  setWebTitle?: (title:string) => void,
  setLoading?: (loading:boolean) => void,
  pageOpen?: (url:string, navBack?:number) => void,
  pageClose?: () => void,
  pageRoute?: (name:string, params:any) => void,
}

function AhaWebView({ url, html, loadingSize, setWebTitle, setLoading, pageOpen, pageClose, pageRoute}: AhaWebProps) {

  const dispatch = useAppDispatch();
  const [uniqueToken, setUniqueToken] = useState(`${Date.now()}`)
  const [baseUrl] = useState(url);
  const [baseHtml] = useState(html)
  const [webViewUrl, setWebViewUrl] = useState('');
  const [webViewRef, setWebViewRef] = useState<any>();
  const [canGoBack, setCanGoBack] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isClosed = useRef(false);

  const [ahaToken, setAhaToken] = useState<string>()
  const [ahaHost] = useState('https://iframe-h5.aha666.site')
  const [channelCode] = useState('200000_100031')
  const userState = useSelector<yys_HejiCricket>('userReducer');
  const ahaTokenValidate = useRef(false);

  let webView:any = undefined;
  
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
    console.log('====> aha token', ahaToken);
    ahaTokenValidate.current = false;
    if (ahaToken == undefined) return;
    if (baseUrl == undefined) return;

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
    console.log('====> webSource', baseHtml, webViewUrl);
    if (baseHtml && baseHtml.length > 0) {
      return { html: baseHtml }
    } else if (webViewUrl && webViewUrl.length > 0) {
      return { uri: webViewUrl, method: 'GET'}
    } else {
      return undefined
    }
  }, [baseHtml, webViewUrl])

  const INJECTED_JAVASCRIPT = `
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
      const {message, type, url, newUrl, data} = json;
      if (type === 'urlChange') {
        console.log(`==> 【iframe】【${type}】`, newUrl);
        if (!newUrl || newUrl.includes('undefined')) {
          handleSessionExpired();
          return;
        }
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
        console.log(`==> 【iframe】【${type}】`, event.nativeEvent);
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
          if (url === '/myprofile') {
            handleClose()
          }
        } else {
          console.log(`==> 【iframe】[${type}]`, url);
          if (!url || url.includes('undefined')) {
            handleSessionExpired();
          } else {
            handleOpen(url)
          }
        }
      }
    } catch (error) {
      console.log(`==webViewMessageError:${error}`, event.nativeEvent.data);
    }
  }

  const handleRef = (view:any) => {
    // console.log(`==webViewRef:${view}`);
    webView = view
  }

  const handleLoad = () => {
    // console.log(`==webViewLoad:`, webView);
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
    const loading = navState.loading ?? false;
    if (setLoading) {
      setLoading(loading)
    } else {
      // for first loading
      if (isLoading && !loading) {
        setIsLoading(false);
      }
    }
  }

  const handleRequest = (event:any) => {
    // console.log('========》 webViewShouldStartLoadWithRequest', event);
    const url = event?.url ?? "";
    if (url.includes('www.sss999888.com')) {
      return false
    }
    return true
  }

  const handleScroll = (event:any) => {
    //console.log('==webViewScroll', event);
  }

  const onBackButtonPressAndroid = (): boolean => {
      if (canGoBack) {
        webViewRef?.goBack();
        return false
      } else {
        if (pageClose) {
          pageClose()
        }
        return true
      }
  };

  const componentDidMount = () => {
    BackHandler.addEventListener('hardwareBackPress', onBackButtonPressAndroid);
  }

  const componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', onBackButtonPressAndroid);
  }


  return (
    <>
      { 
        webSource && <WebView 
          ref={handleRef}
          // injectedJavaScript={INJECTED_JAVASCRIPT}
          // injectedJavaScriptForMainFrameOnly={true}
          injectedJavaScriptBeforeContentLoaded={INJECTED_JAVASCRIPT}
          bounces={false}
          scalesPageToFit={true}
          source={webSource}
          style={{width:'100%', height:'100%', backgroundColor: "#1A1E21"}}
          useWebKit={false}
          onLoad={handleLoad}
          onError={handleError}
          onMessage={handleMessage}
          onNavigationStateChange={handleStateChange}
          onShouldStartLoadWithRequest={handleRequest}
          automaticallyAdjustContentInsets={false}
          contentInset={{ top: 0, left: 0, bottom: -1, right: 0 }}
          onScroll={handleScroll}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        ></WebView>
      }
      {isLoading && <View 
        style={{
          width: '100%', 
          height: '100%', 
          position: 'absolute', 
          zIndex: 1000, 
          backgroundColor: 'rgba(20,22,25,0)',
          justifyContent: 'center', 
          alignItems: 'center'
        }}
      >
        <FastImage
          style={{ height: loadingSize ?? 150, width: loadingSize ?? 150 }}
          source={require("@static/images/sinaHover.gif")}
          resizeMode={"contain"}
        />
      </View>}
    </>
    
  );
}

export default memo(AhaWebView);