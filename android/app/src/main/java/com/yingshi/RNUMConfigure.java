package com.doratvhd;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import android.annotation.TargetApi;
import android.content.Context;
import android.os.Build.VERSION_CODES;
import android.util.Log;

/*/if
import com.umeng.commonsdk.UMConfigure;
import com.umeng.analytics.MobclickAgent;
//else*/
import com.doratvhd.UMConfigure;
import com.doratvhd.MobclickAgent;
//endif

public class RNUMConfigure {
    public static int DEVICE_TYPE_PHONE = UMConfigure.DEVICE_TYPE_PHONE;


    public static void setLogEnabled(boolean isEnabled){
        UMConfigure.setLogEnabled(isEnabled);
    }
    public static void preInit(Context context, String appkey, String channel){
        UMConfigure.preInit(context,appkey,channel);
    }
    public static void init(Context context, String appkey, String channel, int type, String secret){
        try {
            initRN("react-native","2.0");
            UMConfigure.init(context,appkey,channel,type,secret);
            MobclickAgent.setSessionContinueMillis(1000*40);
        } catch (Exception e) {
            Log.w("UMENG", e.getMessage());
        }
    }

    public static void onResume(Context context){
        MobclickAgent.onResume(context);
    }

    public static void onPause(Context context){
        MobclickAgent.onPause(context);
    }

    @TargetApi(VERSION_CODES.KITKAT)
    private static void initRN(String v, String t){
        Method method = null;
        try {
            Class<?> config = Class.forName("com.umeng.commonsdk.UMConfigure");
            method = config.getDeclaredMethod("setWraperType", String.class, String.class);
            method.setAccessible(true);
            method.invoke(null, v,t);
        } catch (NoSuchMethodException | InvocationTargetException | IllegalAccessException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
