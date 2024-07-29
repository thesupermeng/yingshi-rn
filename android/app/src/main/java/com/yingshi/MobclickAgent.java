package com.yingshitv;

import android.content.Context;

import org.json.JSONObject;

import java.util.List;
import java.util.Map;

// this is fake class for prevent import error
public class MobclickAgent {
    public static int DEVICE_TYPE_PHONE = 1;
    public static void setSessionContinueMillis(int millis){}
    public static void onResume(Context context){}
    public static void onPause(Context context){}
    public static void onPageStart(String pageName){}
    public static void onPageEnd(String pageName){}
    public static void onEvent(Context context, String eventId){}
    public static void onEvent(Context context, String eventId, String eventLabel){}
    public static void onEvent(Context context, String eventId, Map<String, String> map){}
    public static void onEventValue(Context context, String eventId, Map<String, String> map, int value){}
    public static void onEventObject(Context context, String eventId, Map<String, Object> property){}
    public static void registerPreProperties(Context context, JSONObject map){}
    public static void unregisterPreProperty(Context context, String propertyName){}
    public static String getPreProperties(Context context){return "";}
    public static void clearPreProperties(Context context){}
    public static void setFirstLaunchEvent(Context context, List<String> list){}
    public static void onProfileSignIn(String puid){}
    public static void onProfileSignIn(String provider, String puid){}
    public static void onProfileSignOff(){}
}
