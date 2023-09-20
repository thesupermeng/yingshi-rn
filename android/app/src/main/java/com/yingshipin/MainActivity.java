package com.yingshipin;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
import android.os.Bundle;

import com.umeng.analytics.MobclickAgent;
import com.zoontek.rnbootsplash.RNBootSplash;
import com.umeng.commonsdk.UMConfigure;
import android.util.Log;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "yingshipin";
  }
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    RNBootSplash.init(this); // ⬅️ initialize the splash screen
    super.onCreate(savedInstanceState); // or super.onCreate(null) with react-native-screens
    // super.onCreate(null);
    String appKey = getResources().getString(R.string.UMENG_APPKEY);
    String channel = getResources().getString(R.string.UMENG_CHANNEL);
    RNUMConfigure.init(this, appKey, channel, UMConfigure.DEVICE_TYPE_PHONE, "");
    MobclickAgent.setSessionContinueMillis(1000*40);
  }

  @Override    
  public void onResume() {   
    // 友盟统计初始化        
    super.onResume();        
    MobclickAgent.onResume(this);   
  }    

  @Override    
  protected void onPause() { 
    //友盟统计初始化        
    super.onPause();        
    MobclickAgent.onPause(this);    
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled(), // fabricEnabled
        // If you opted-in for the New Architecture, we enable Concurrent React (i.e. React 18).
        DefaultNewArchitectureEntryPoint.getConcurrentReactEnabled() // concurrentRootEnabled
        );
  }
}
