import React, {
  useEffect,
  useState,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useTheme, useFocusEffect } from "@react-navigation/native";
import { Dimensions } from "react-native";
import FastImage from "react-native-fast-image";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MatchScheduleListVip from "./MatchScheduleListVip";

const Tab = createMaterialTopTabNavigator();

interface Props {
  streamId?: number;
  tabList?: { title: string; id: number; name: string }[];
  setShowBecomeVIPOverlay: any;
}

export default function MatchScheduleNav({
  tabList,
  streamId,
  setShowBecomeVIPOverlay,
}: Props) {
  const { colors, textVariants, spacing } = useTheme();
  const width = Dimensions.get("window").width;

  const renderTabs = (tab: any, index: any) => {
    const tabScreenChild = (i: number) => (
      <>
        <MatchScheduleListVip
          bgDark={true}
          setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
          matchTypeID={tab.id}
          status={i}
        />
      </>
    );

    return (
      <Tab.Screen
        key={index}
        name={tab.name}
        options={({ route }) => ({
          tabBarLabel: ({ focused, color }) =>
            focused ? (
              <Text
                style={{
                  fontSize: textVariants.selected.fontSize,
                  color: colors.primary,
                  height: 30,
                  width: 40,
                  textAlignVertical: "bottom",
                  fontWeight: textVariants.selected.fontWeight,
                }}
              >
                {tab.name}
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: textVariants.unselected.fontSize,
                  color: colors.muted,
                  height: 30,
                  width: 40,
                  textAlignVertical: "bottom",
                  fontWeight: textVariants.unselected.fontWeight,
                }}
              >
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
                backgroundColor: "#0c0c0c",
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              },
            }}
          >
            <Tab.Screen
              key={`inner-${index}-1`}
              name="进行中"
              children={() => tabScreenChild(1)}
            />
            <Tab.Screen
              key={`inner-${index}-2`}
              name="赛程"
              children={() => tabScreenChild(2)}
            />
            <Tab.Screen
              key={`inner-${index}-3`}
              name="赛果"
              children={() => tabScreenChild(3)}
            />
          </Tab.Navigator>
        )}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1}}>
   

      <Tab.Navigator
        sceneContainerStyle={{ backgroundColor: 'transparent' }}
        keyboardDismissMode="none"
        screenOptions={({ route }) => ({
          tabBarScrollEnabled: true,
          tabBarIndicatorStyle: {
            // height: 4,
            opacity: 0,
          },
          tabBarItemStyle: {
            alignItems: "center",
            display: "flex",
            flexDirection: "row-reverse",
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
            paddingLeft: 12,
            backgroundColor: "transparent",
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            shadowColor:'transparent'
          },
        })}
      >
        <Tab.Screen
          key={-1}
          name={"直播"}
          options={({ route }) => ({
            tabBarLabel: ({ focused, color }) =>
              focused ? (
                <Text
                  style={{
                    fontSize: textVariants.selected.fontSize,
                    color: colors.primary,
                    height: 30,
                    width: 40,
                    textAlignVertical: "bottom",
                    fontWeight: textVariants.selected.fontWeight,
                  }}
                >
                  直播
                </Text>
              ) : (
                <Text
                  style={{
                    fontSize: textVariants.unselected.fontSize,
                    color: colors.muted,
                    height: 30,
                    width: 40,
                    textAlignVertical: "bottom",
                    fontWeight: textVariants.unselected.fontWeight,
                  }}
                >
                  直播
                </Text>
              ),
          })}
          children={() => (
            <>
             
                <MatchScheduleListVip
                  bgDark={true}
                  isLive={true}
                  setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                  matchTypeID={-1}
                  status={-1}
                />
            
            </>
          )}
        />

        {tabList != undefined && tabList.map(renderTabs)}
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
