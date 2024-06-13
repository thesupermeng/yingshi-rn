package com.yingshitv;

import static com.facebook.react.views.textinput.ReactEditText.DEBUG_MODE;

import com.anythink.core.api.ATSDK;
import com.yingshitv.SQLiteDBHelper;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
import com.google.android.ump.ConsentForm;
import com.google.android.ump.ConsentInformation;
import com.google.android.ump.ConsentRequestParameters;
import com.google.android.ump.UserMessagingPlatform;
import com.google.android.ump.FormError;

import android.content.Intent;
import android.content.SharedPreferences;
import android.database.Cursor;
import android.database.CursorWindow;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;

import com.yingshitv.RNUMConfigure;

// import com.yingshitv.SplashAdShowActivity;
import android.content.Context;
import android.util.Log;

import java.lang.reflect.Field;

public class AppActivity extends ReactActivity {
   private ConsentInformation consentInformation;

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "yingshi";
  }
  
  // private void showSplashScreenAd() {
  //   Intent intent = new Intent(getApplicationContext(), SplashAdShowActivity.class);
  //   startActivity(intent);
  // }
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    // super.onCreate(savedInstanceState); // or super.onCreate(null) with react-native-screens
    super.onCreate(null);
    ATSDK.init(this, "a65002a2db3a7f", "aad683307ed540dfc11b094206e8a15b1");

    // Create a ConsentRequestParameters object.
    ConsentRequestParameters params = new ConsentRequestParameters
        .Builder()
        .build();

    consentInformation = UserMessagingPlatform.getConsentInformation(this);
    consentInformation.requestConsentInfoUpdate(
        this,
        params,
        // (consentInformation.onConsentInfoUpdateSuccess ()) () -> {
        //   UserMessagingPlatform.loadAndShowConsentFormIfRequired(
        //     this,
        //     (OnConsentFormDismissedListener) loadAndShowError -> {
        //       if (loadAndShowError != null) {
        //         // Consent gathering failed.
        //         Log.w(TAG, String.format("%s: %s",
        //             loadAndShowError.getErrorCode(),
        //             loadAndShowError.getMessage()));
        //       }

        //       // Consent has been gathered.
        //     }
        //   );
        // },
        new ConsentInformation.OnConsentInfoUpdateSuccessListener() {
            @Override
            public void onConsentInfoUpdateSuccess() {
                // The consent information state was updated.
                // You are now ready to check if a form is available.
                if (consentInformation.isConsentFormAvailable() && consentInformation.getConsentStatus() == ConsentInformation.ConsentStatus.REQUIRED) {
                    // Log.w(TAG, String.format("%s: %s",
                    //     loadAndShowError.getErrorCode(),
                    //     loadAndShowError.getMessage()));
                }
            }
        },
        // (consentInformation.onConsentInfoUpdateFailure(FormError error)) requestConsentError -> {
        //   // Consent gathering failed.
        //   Log.w(TAG, String.format("%s: %s",
        //       requestConsentError.getErrorCode(),
        //       requestConsentError.getMessage()));
        // });
        new ConsentInformation.OnConsentInfoUpdateFailureListener() {
            @Override
            public void onConsentInfoUpdateFailure(FormError formError) {
                // Log.w(TAG, String.format("%s: %s",
                //     requestConsentError.getErrorCode(),
                //     requestConsentError.getMessage()));
            }
        });

    if(getResources().getString(R.string.ANALYTICS_UMENG).equals("1")){
      String appKey = getResources().getString(R.string.UMENG_APPKEY);
      String channel = getResources().getString(R.string.UMENG_CHANNEL);
      RNUMConfigure.setLogEnabled(true);
      RNUMConfigure.preInit(this, appKey, channel);
      RNUMConfigure.init(this, appKey, channel, RNUMConfigure.DEVICE_TYPE_PHONE, "");
    }

    // showSplashScreenAd();

    try {
      Field field = CursorWindow.class.getDeclaredField("sCursorWindowSize");
      field.setAccessible(true);
      field.set(null, 100 * 1024 * 1024); //the 100MB is the new size
    } catch (Exception e) {
      if (DEBUG_MODE) {
        e.printStackTrace();
      }
    }

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
      if(getResources().getString(R.string.ANALYTICS_UMENG).equals("1")) {
        RNUMConfigure.onResume(this);
      }

      SharedPreferences sharedPreferences = getSharedPreferences("LocalStorage", MODE_PRIVATE);
      SharedPreferences.Editor sharedPreferenceEdit = sharedPreferences.edit();
      sharedPreferenceEdit.remove("isPause").commit();
  }

  @Override    
  protected void onPause() {
    //友盟统计初始化
    super.onPause();
      if(getResources().getString(R.string.ANALYTICS_UMENG).equals("1")) {
        RNUMConfigure.onPause(this);
      }

      SharedPreferences sharedPreferences = getSharedPreferences("LocalStorage", MODE_PRIVATE);
      SharedPreferences.Editor sharedPreferenceEdit = sharedPreferences.edit();
      sharedPreferenceEdit.putBoolean("isPause", true).commit();
  }

  @Override
  protected void onDestroy() {
    super.onDestroy();

    SharedPreferences sharedPreferences = getSharedPreferences("LocalStorage", MODE_PRIVATE);
    SharedPreferences.Editor sharedPreferenceEdit = sharedPreferences.edit();
    sharedPreferenceEdit.remove("isPause").commit();
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
