package com.yingshi;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

import android.content.Intent;
import android.os.Bundle;

import com.umeng.analytics.MobclickAgent;
import com.umeng.commonsdk.UMConfigure;


public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "yingshi";
  }
  
  private void showSplashScreenAd() {
    Intent intent = new Intent(getApplicationContext(), SplashAdShowActivity.class);
    startActivity(intent);
  }
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState); // or super.onCreate(null) with react-native-screens
    // super.onCreate(null);


    String appKey = getResources().getString(R.string.UMENG_APPKEY);
    String channel = getResources().getString(R.string.UMENG_CHANNEL);
    RNUMConfigure.init(this, appKey, channel, UMConfigure.DEVICE_TYPE_PHONE, "");
    MobclickAgent.setSessionContinueMillis(1000*40);
    showSplashScreenAd();

    // ATSDK.setNetworkLogDebug(true);//SDK日志功能，集成测试阶段建议开启，上线前必须关闭

    // Log.i("HHHOIIOK", "TopOn SDK version: " + ATSDK.getSDKVersionName());//SDK版本

    // ATSDK.integrationChecking(getApplicationContext());//检查广告平台的集成状态，提交审核时需注释此API
    // //(v5.7.77新增) 打印当前设备的设备信息(IMEI、OAID、GAID、AndroidID等)
    // ATSDK.testModeDeviceInfo(this, new DeviceInfoCallback() {
    //     @Override
    //     public void deviceInfo(String deviceInfo) {
    //         Log.i(TAG, "deviceInfo: " + deviceInfo);
    //     }
    // });
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
