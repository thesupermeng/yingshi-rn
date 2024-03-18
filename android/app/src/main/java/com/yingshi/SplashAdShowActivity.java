/*
 * Copyright © 2018-2020 TopOn. All rights reserved.
 * https://www.toponad.com
 * Licensed under the TopOn SDK License Agreement
 * https://github.com/toponteam/TopOn-Android-SDK/blob/master/LICENSE
 */

package com.aimeiju;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.content.res.Configuration;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.Toast;

import com.anythink.core.api.ATSDK;
import com.anythink.core.api.ATAdConst;
import com.anythink.core.api.ATAdInfo;
import com.anythink.core.api.ATAdSourceStatusListener;
import com.anythink.core.api.ATNetworkConfirmInfo;
import com.anythink.core.api.AdError;
import com.anythink.splashad.api.ATSplashAd;
import com.anythink.splashad.api.ATSplashAdExtraInfo;
import com.anythink.splashad.api.ATSplashExListener;
import com.aimeiju.zoomout.SplashEyeAdHolder;
import com.aimeiju.zoomout.SplashZoomOutManager;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.database.Cursor;

import java.util.HashMap;
import java.util.Map;
import java.util.Timer;
import java.util.TimerTask;

public class SplashAdShowActivity extends Activity implements ATSplashExListener {

    private static final String TAG = SplashAdShowActivity.class.getSimpleName();

    ATSplashAd splashAd;
    FrameLayout container;

    Handler mHandler = new Handler(Looper.getMainLooper());

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        // super.onCreate(savedInstanceState); // or super.onCreate(null) with
        // react-native-screens
        super.onCreate(null);
        ATSDK.init(this, "a65f7e931ca8e2", "a98f786383065622e56e00bd6e3a59723");

        setContentView(R.layout.splash_ad_show);

        // String placementId = getIntent().getStringExtra("placementId");
        container = findViewById(R.id.splash_ad_container);
        ViewGroup.LayoutParams layoutParams = container.getLayoutParams();
        Configuration cf = getResources().getConfiguration();

        int ori = cf.orientation;

        /** You should set size to the layout param. **/
        if (ori == Configuration.ORIENTATION_LANDSCAPE) {
            setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_SENSOR_LANDSCAPE);
            layoutParams.width = (int) (getResources().getDisplayMetrics().widthPixels * 0.9);
            layoutParams.height = getResources().getDisplayMetrics().heightPixels;
        } else if (ori == Configuration.ORIENTATION_PORTRAIT) {
            setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_SENSOR_PORTRAIT);
            layoutParams.width = getResources().getDisplayMetrics().widthPixels;
            layoutParams.height = (int) (getResources().getDisplayMetrics().heightPixels * 0.9);
        } else {
            setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_SENSOR_PORTRAIT);
            layoutParams.width = getResources().getDisplayMetrics().widthPixels;
            layoutParams.height = (int) (getResources().getDisplayMetrics().heightPixels * 0.9);
        }

        String defaultConfig = "";

        // Mintegral
        // defaultConfig =
        // "{\"unit_id\":1333033,\"nw_firm_id\":6,\"adapter_class\":\"com.anythink.network.mintegral.MintegralATSplashAdapter\",\"content\":\"{\\\"placement_id\\\":\\\"210169\\\",\\\"unitid\\\":\\\"276803\\\",\\\"countdown\\\":\\\"5\\\",\\\"allows_skip\\\":\\\"1\\\",\\\"orientation\\\":\\\"1\\\",\\\"appkey\\\":\\\"ef13ef712aeb0f6eb3d698c4c08add96\\\",\\\"suport_video\\\":\\\"1\\\",\\\"appid\\\":\\\"100947\\\"}\"}";

        // Tencent Ads
        // defaultConfig =
        // "{\"unit_id\":1333176,\"nw_firm_id\":8,\"adapter_class\":\"com.anythink.network.gdt.GDTATSplashAdapter\",\"content\":\"{\\\"unit_id\\\":\\\"8863364436303842593\\\",\\\"zoomoutad_sw\\\":\\\"1\\\",\\\"app_id\\\":\\\"1101152570\\\"}\"}";

        // CSJ
        // defaultConfig =
        // "{\"unit_id\":1333195,\"nw_firm_id\":15,\"adapter_class\":\"com.anythink.network.toutiao.TTATSplashAdapter\",\"content\":\"{\\\"personalized_template\\\":\\\"0\\\",\\\"zoomoutad_sw\\\":\\\"2\\\",\\\"button_type\\\":\\\"1\\\",\\\"dl_type\\\":\\\"2\\\",\\\"slot_id\\\":\\\"801121648\\\",\\\"app_id\\\":\\\"5001121\\\"}\"}";

        // Sigmob
        // defaultConfig =
        // "{\"unit_id\":1333222,\"nw_firm_id\":29,\"adapter_class\":\"com.anythink.network.sigmob.SigmobATSplashAdapter\",\"content\":\"{\\\"placement_id\\\":\\\"ea1f8f21300\\\",\\\"app_id\\\":\\\"6878\\\",\\\"app_key\\\":\\\"8ebc1fd1c27e650c\\\"}\"}";

        // Baidu
        // defaultConfig =
        // "{\"unit_id\":1329553,\"nw_firm_id\":22,\"adapter_class\":\"com.anythink.network.baidu.BaiduATSplashAdapter\",\"content\":\"{\\\"button_type\\\":\\\"0\\\",\\\"ad_place_id\\\":\\\"7854679\\\",\\\"app_id\\\":\\\"a7dd29d3\\\"}\"}";

        // Kuaishou
        // defaultConfig =
        // "{\"unit_id\":1333246,\"nw_firm_id\":28,\"adapter_class\":\"com.anythink.network.ks.KSATSplashAdapter\",\"content\":\"{\\\"zoomoutad_sw\\\":\\\"1\\\",\\\"position_id\\\":\\\"4000000042\\\",\\\"app_id\\\":\\\"90009\\\",\\\"app_name\\\":\\\"90009\\\"}\"}";

        // Klevin
        // defaultConfig =
        // "{\"unit_id\":1333253,\"nw_firm_id\":51,\"adapter_class\":\"com.anythink.network.klevin.KlevinATSplashAdapter\",\"content\":\"{\\\"pos_id\\\":\\\"30029\\\",\\\"app_id\\\":\\\"30008\\\"}\"}";

        splashAd = new ATSplashAd(this, "b1ffeabipi52v5", this, 10000, defaultConfig);

        Map<String, Object> localMap = new HashMap<>();
        localMap.put(ATAdConst.KEY.AD_WIDTH, layoutParams.width);
        localMap.put(ATAdConst.KEY.AD_HEIGHT, layoutParams.height);

        splashAd.setLocalExtra(localMap);
        ATSplashAd.entryAdScenario("b1ffeabipi52v5", "f628c7999265cd");

        splashAd.setAdSourceStatusListener(new ATAdSourceStatusListener() {
            @Override
            public void onAdSourceBiddingAttempt(ATAdInfo adInfo) {
                Log.i(TAG, "onAdSourceBiddingAttempt: " + adInfo.toString());
            }

            @Override
            public void onAdSourceBiddingFilled(ATAdInfo adInfo) {
                Log.i(TAG, "onAdSourceBiddingFilled: " + adInfo.toString());
            }

            @Override
            public void onAdSourceBiddingFail(ATAdInfo adInfo, AdError adError) {
                Log.i(TAG, "onAdSourceBiddingFail Info: " + adInfo.toString());
                Log.i(TAG, "onAdSourceBiddingFail error: " + adError.getFullErrorInfo());
            }

            @Override
            public void onAdSourceAttempt(ATAdInfo adInfo) {
                Log.i(TAG, "onAdSourceAttempt: " + adInfo.toString());
            }

            @Override
            public void onAdSourceLoadFilled(ATAdInfo adInfo) {
                Log.i(TAG, "onAdSourceLoadFilled: " + adInfo.toString());
            }

            @Override
            public void onAdSourceLoadFail(ATAdInfo adInfo, AdError adError) {
                Log.i(TAG, "onAdSourceLoadFail Info: " + adInfo.toString());
                Log.i(TAG, "onAdSourceLoadFail error: " + adError.getFullErrorInfo());
            }
        });

        SQLiteDBHelper dbHelper = new SQLiteDBHelper(getApplicationContext());
        SQLiteDatabase readableDatabase = dbHelper.getReadableDatabase();
        Cursor cursor = readableDatabase.query("catalystLocalStorage", null, null, null, null, null, null);

        String isShowAds = "true";

        try {
            while (cursor.moveToNext()) {
                if (cursor.getString(0).equals("showAds")) {
                    isShowAds = cursor.getString(1);
                }
            }
        } finally {
            cursor.close();
            readableDatabase.close();
        }

        if (isShowAds.equals("true")) {
            if (splashAd.isAdReady()) {
                mHandler.postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        splashAd.show(SplashAdShowActivity.this, container);
                        // showAdWithCustomSkipView();//show with customSkipView
                        // splashAd.show(SplashAdShowActivity.this, container, "f628c7999265cd");
                    }
                }, 10);

            } else {
                // loop in splash
                // Log.i(TAG, "SplashAd isn't ready to show, start to request.");
                // Toast.makeText(getApplicationContext(), "splashAd.loadAd()",
                // Toast.LENGTH_SHORT).show();
                splashAd.loadAd();
                // jumpToMainActivity();
            }
        } else {
            // delayRedirectToMainActivity(4000);
            jumpToMainActivity();
        }
    }

    @Override
    public void onDeeplinkCallback(ATAdInfo adInfo, boolean isSuccess) {
        Log.i(TAG, "onDeeplinkCallback:" + adInfo.toString() + "--status:" + isSuccess);
    }

    // private void showAdWithCustomSkipView() {
    // TextView skipView = findViewById(R.id.splash_ad_skip);

    // long countDownDuration = 5000;
    // long callbackInterval = 100;
    // skipView.setText(((int) (countDownDuration / 1000)) + "s | Skip");

    // splashAd.show(this, container, new ATSplashSkipInfo(skipView,
    // countDownDuration, callbackInterval, new ATSplashSkipAdListener() {
    // @Override
    // public void onAdTick(long duration, long remainder) {
    // skipView.setText(((int) (remainder / 1000)) + "s | Skip");
    // }

    // @Override
    // public void isSupportCustomSkipView(boolean isSupport) {
    // Log.i(TAG, "isSupportCustomSkipView: " + isSupport);
    // if (isSupport) {
    // skipView.setVisibility(View.VISIBLE);
    // }
    // }
    // }));

    // splashAd.show(this, container, new ATSplashSkipInfo(skipView,
    // countDownDuration, callbackInterval, new ATSplashSkipAdListener() {
    // @Override
    // public void onAdTick(long duration, long remainder) {
    // skipView.setText(((int) (remainder / 1000)) + "s | Skip");
    // }

    // @Override
    // public void isSupportCustomSkipView(boolean isSupport) {
    // Log.i(TAG, "isSupportCustomSkipView: " + isSupport);
    // if (isSupport) {
    // skipView.setVisibility(View.VISIBLE);
    // }
    // }
    // }), "f628c7999265cd");
    // }

    @Override
    public void onAdLoaded(boolean isTimeout) {
        Log.i(TAG, "onAdLoaded---------isTimeout:" + isTimeout);

        if (!inForeBackground) {
            needShowSplashAd = true;
            return;
        }

        if (!splashAd.isAdReady()) {
            Log.e(TAG, "onAdLoaded: no cache");
            jumpToMainActivity();
            return;
        }

        splashAd.show(this, container);
        // showAdWithCustomSkipView();//show with customSkipView
        // splashAd.show(this, container, "f628c7999265cd");
    }

    @Override
    public void onAdLoadTimeout() {
        Log.i(TAG, "onAdLoadTimeout---------");
        // Toast.makeText(getApplicationContext(), "onAdLoadTimeout",
        // Toast.LENGTH_SHORT).show();
        jumpToMainActivity();
    }

    @Override
    public void onNoAdError(AdError adError) {
        Log.i(TAG, "onNoAdError---------:" + adError.getFullErrorInfo());
        // Toast.makeText(getApplicationContext(), "onNoAdError",
        // Toast.LENGTH_SHORT).show();
        jumpToMainActivity();
    }

    public void delayRedirectToMainActivity(int ms) {
        Timer timer = new Timer();
        // artificial timer to prevent black screen when loading main activity
        timer.schedule(new TimerTask() {
            @Override
            public void run() {
                Log.d(TAG, "waited 4 secs, jumptomainactivity");
                jumpToMainActivity();
            }
        }, ms);
    }

    @Override
    public void onAdShow(ATAdInfo entity) {
        Log.i(TAG, "onAdShow:\n" + entity.toString());
    }

    @Override
    public void onAdClick(ATAdInfo entity) {
        Log.i(TAG, "onAdClick:\n" + entity.toString());
    }

    @Override
    public void onAdDismiss(ATAdInfo entity, ATSplashAdExtraInfo splashAdExtraInfo) {
        Log.i(TAG, "onAdDismiss type:" + splashAdExtraInfo.getDismissType() + "\n" + entity.toString());
        SplashEyeAdHolder.splashEyeAd = splashAdExtraInfo.getAtSplashEyeAd();
        jumpToMainActivity();
    }

    boolean hasHandleJump = false;
    boolean needJump;

    boolean inForeBackground;
    boolean needShowSplashAd;

    public void jumpToMainActivity() {

        if (!needJump) {
            needJump = true;
            return;
        }

        if (!hasHandleJump) {
            hasHandleJump = true;

            if (SplashEyeAdHolder.splashEyeAd != null) {
                try {
                    SplashZoomOutManager zoomOutManager = SplashZoomOutManager.getInstance(getApplicationContext());
                    zoomOutManager.setSplashInfo(container.getChildAt(0),
                            getWindow().getDecorView());
                } catch (Throwable e) {
                    Log.e(TAG, "jumpToMainActivity: ------------------------------------------ error");
                    e.printStackTrace();
                }

                overridePendingTransition(0, 0);
            }
            // // Toast.makeText(this, "start your MainActivity.",
            // Toast.LENGTH_SHORT).show();

            // Intent intent = new Intent(SplashAdShowActivity.this, MainActivity.class);
            // startActivity(intent);
            Log.d(TAG, "jumpToMainActivity: jumping to main");
            finish();
        }

    }

    @Override
    protected void onResume() {
        super.onResume();

        inForeBackground = true;

        if (needJump) {
            jumpToMainActivity();
        }

        needJump = true;

        if (needShowSplashAd) {
            needShowSplashAd = false;

            if (splashAd.isAdReady()) {
                splashAd.show(this, container);
                // splashAd.show(this, container, "f628c7999265cd");
            }
        }
    }

    @Override
    protected void onPause() {
        super.onPause();

        inForeBackground = false;

        needJump = false;
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (splashAd != null) {
            splashAd.setAdListener(null);
            splashAd.setAdDownloadListener(null);
            splashAd.setAdSourceStatusListener(null);
        }

    }

    @Override
    public void onDownloadConfirm(Context context, ATAdInfo adInfo, ATNetworkConfirmInfo networkConfirmInfo) {

    }

}
