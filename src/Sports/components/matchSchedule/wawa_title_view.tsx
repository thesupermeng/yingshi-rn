import React, {useEffect, useState, useMemo, useRef, useCallback} from 'react';
import {
  View,
  TouchableOpacity,
  Share,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import {useTheme, useFocusEffect} from '@react-navigation/native';

import Orientation from 'react-native-orientation-locker';

import {Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import BottomSheet from '@gorhom/bottom-sheet';
import {wawaUtilsVignette} from '@type/wawa_gradlew';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MatchSchedule from './wawa_iconwatchnow_bgvipxvod';
import {tapGestureHandlerProps} from 'react-native-gesture-handler/lib/typescript/handlers/TapGestureHandler';
import MatchScheduleList from './wawa_line_floating';

const wawaDefaultteam = createMaterialTopTabNavigator();

interface wawaAwayShow {
  streamId?: number;
  tabList?: {title: string; id: number; name: string}[];
  setShowBecomeVIPOverlay: any;
}

export default function MatchScheduleNav({
  tabList,
  streamId,
  setShowBecomeVIPOverlay,
}: wawaAwayShow) {
  const {colors, textVariants, spacing} = useTheme();
  const width = Dimensions.get('window').width;

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() =>{
    
    setTimeout(() => {
      setShowLoading(false)
    }, 1000);
  }, [])

  const renderTabs = (tab: any, index: any) => {

    const tabScreenChild = (i: number) => (
      <MatchScheduleList
        setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
        matchTypeID={tab.id}
        status={i}
      />
    )

    return (
      <wawaDefaultteam.Screen
        key={index}
        name={tab.name}
        options={({route}) => ({
          tabBarLabel: ({focused, color}) =>
            focused ? (
              <Text
                style={{
                  fontSize: textVariants.selected.fontSize,
                  color: colors.primary,
                  height: 30,
                  width: 40,
                  textAlignVertical: 'bottom',
                  fontWeight: textVariants.selected.fontWeight,
                }}>
                {tab.name}
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: textVariants.unselected.fontSize,
                  color: colors.muted,
                  height: 30,
                  width: 40,
                  textAlignVertical: 'bottom',
                  fontWeight: textVariants.unselected.fontWeight,
                }}>
                {tab.name}
              </Text>
            ),
        })}
        children={() => (
          <wawaDefaultteam.Navigator
            screenOptions={{
              tabBarScrollEnabled: false,
              tabBarIndicatorStyle: {
                height: 4,
                width: 4,
                left: (width / 6 + 12) / 2,
                backgroundColor: colors.primary,
                borderRadius: 10,
                bottom: 5,
              },
              tabBarItemStyle: {
                width: width / 6,
                padding: 0,
              },
              tabBarActiveTintColor: colors.primary,
              tabBarInactiveTintColor: colors.muted,
              tabBarLabelStyle: {
                fontFamily: textVariants.unselected.fontFamily,
                fontWeight: textVariants.unselected.fontWeight,
                fontSize: textVariants.unselected.fontSize,
              },
              tabBarStyle: {
                paddingLeft: 8,
                marginTop: -8,
              },
            }}>
            <wawaDefaultteam.Screen
              key={`inner-${index}-1`}
              name="进行中"
              children={() => tabScreenChild(1)}
            />
            <wawaDefaultteam.Screen
              key={`inner-${index}-2`}
              name="赛程"
              children={() => tabScreenChild(2)}
            />
            <wawaDefaultteam.Screen
              key={`inner-${index}-3`}
              name="赛果"
              children={() => tabScreenChild(3)}
            />
          </wawaDefaultteam.Navigator>
        )}
      />
    )
  }

  return (
    <SafeAreaView style={{flex: 1}}> 
      {showLoading && <View 
        style={{
          width: '100%', 
          height: '100%', 
          position: 'absolute', 
          zIndex: 1000, 
          backgroundColor: 'rgb(20,22,25)',
          justifyContent: 'center', 
          alignItems: 'center'
        }}
      >
        <FastImage
          style={{ height: 150, width: 150 }}
          source={require("@static/images/mbridgeFilledLibfolly.gif")}
          resizeMode={"contain"}
        />
      </View>}
      <wawaDefaultteam.Navigator
        keyboardDismissMode="none"
        screenOptions={({route}) => ({
          tabBarScrollEnabled: true,
          tabBarIndicatorStyle: {
            
            opacity: 0,
          },
          tabBarItemStyle: {
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row-reverse',
            width: 50,
            paddingTop: 0,
            paddingBottom: 0,
          },
          tabBarLabelStyle: {
            fontFamily: textVariants.unselected.fontFamily,
            fontWeight: textVariants.unselected.fontWeight,
            
            
          },
          tabBarStyle: {
            padding: 0,
            marginTop: -8,
            paddingLeft: 12,
          },
          
          
          
          // tabBarLabel: ({ focused, color }) => (
          
          //     ? <Text>{}</Text>
          //     : <Text>sax</Text>
          
        })}>
        <wawaDefaultteam.Screen
          key={-1}
          name={'直播'}
          options={({route}) => ({
            tabBarLabel: ({focused, color}) =>
              focused ? (
                <Text
                  style={{
                    fontSize: textVariants.selected.fontSize,
                    color: colors.primary,
                    height: 30,
                    width: 40,
                    textAlignVertical: 'bottom',
                    fontWeight: textVariants.selected.fontWeight,
                  }}>
                  直播
                </Text>
              ) : (
                <Text
                  style={{
                    fontSize: textVariants.unselected.fontSize,
                    color: colors.muted,
                    height: 30,
                    width: 40,
                    textAlignVertical: 'bottom',
                    fontWeight: textVariants.unselected.fontWeight,
                  }}>
                  直播
                </Text>
              ),
          })}
          children={() => (
            <MatchScheduleList
              setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
              matchTypeID={-1}
              status={-1}
            />
          )}
        />
        {tabList != undefined &&
          tabList.map(renderTabs)}
      </wawaDefaultteam.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
