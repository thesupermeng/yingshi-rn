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
import {DetailTab} from '@type/ajaxTypes';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MatchSchedule from './MatchSchedule';
import {tapGestureHandlerProps} from 'react-native-gesture-handler/lib/typescript/handlers/TapGestureHandler';
import MatchScheduleList from './MatchScheduleList';

const Tab = createMaterialTopTabNavigator();

interface Props {
  streamId?: number;
  tabList?: {title: string; id: number; name: string}[];
  setShowBecomeVIPOverlay: any;
}

export default function MatchScheduleNav({
  tabList,
  streamId,
  setShowBecomeVIPOverlay,
}: Props) {
  const {colors, textVariants, spacing} = useTheme();
  const width = Dimensions.get('window').width;

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() =>{
    // fake loading to ensure all assets are loaded 
    setTimeout(() => {
      setShowLoading(false)
    }, 1000);
  }, [])

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
          source={require("@static/images/home-loading.gif")}
          resizeMode={"contain"}
        />
      </View>}
      <Tab.Navigator
        keyboardDismissMode="none"
        screenOptions={({route}) => ({
          tabBarScrollEnabled: true,
          tabBarIndicatorStyle: {
            // height: 4,
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
            // lineHeight: 22,
            // height: 30,
          },
          tabBarStyle: {
            padding: 0,
            marginTop: -8,
            paddingLeft: 12,
          },
          // // tabBarActiveTintColor: colors.primary,
          // // tabBarInactiveTintColor: colors.muted,
          // // tabBarIconStyle: { position: 'absolute', top: -22, right: -20 },
          // tabBarLabel: ({ focused, color }) => (
          //     focused
          //     ? <Text>{}</Text>
          //     : <Text>sax</Text>
          // )
        })}>
        <Tab.Screen
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
          tabList.map((tab, index) => {
            return (
              <Tab.Screen
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
                  <Tab.Navigator
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
                    <Tab.Screen
                      key={`inner-${index}-1`}
                      name="进行中"
                      children={() => (
                        <MatchScheduleList
                          setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                          matchTypeID={tab.id}
                          status={1}
                        />
                      )}
                    />
                    <Tab.Screen
                      key={`inner-${index}-2`}
                      name="赛程"
                      children={() => (
                        <MatchScheduleList
                          setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                          matchTypeID={tab.id}
                          status={2}
                        />
                      )}
                    />
                    <Tab.Screen
                      key={`inner-${index}-3`}
                      name="赛果"
                      children={() => (
                        <MatchScheduleList
                          setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                          matchTypeID={tab.id}
                          status={3}
                        />
                      )}
                    />
                  </Tab.Navigator>
                )}
              />
            );
          })}
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});