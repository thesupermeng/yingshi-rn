import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useTheme } from "@react-navigation/native";
import { useCallback, useRef } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { useAppDispatch, useAppSelector } from "@hooks";
import { hideAdultModeDisclaimer, showAdultModeDisclaimer, updateLastSeenNavName } from "@redux";
import { screenModel } from "@type";

const Tab = createMaterialTopTabNavigator();

interface Props {
  tabList: { title: string; id: number; name: string }[];
  tabChildren: (tab: { title: string; id: number; name: string }, index: number) => React.ReactNode,
  hideContent?: boolean,
  onTabPress: (target?: string) => void,
  onTabFocus: (target?: string) => void,
  onTabSwipe: (index: number, tab: any) => void,
  navId: number
}

export default function HomeNav({
  tabList,
  tabChildren,
  hideContent = false,
  onTabPress,
  onTabFocus,
  onTabSwipe,
  navId,
}: Props) {

  const { colors, textVariants } = useTheme();
  const dispatch = useAppDispatch();

  const renderTab = useCallback((tab: any, i: any) => (
    <Tab.Screen
      key={tab.id}
      name={tab.name}
      options={() => ({
        tabBarLabel: ({ focused, color }) =>
          tab.id == navId ? (
            <Text
              style={{
                ...styles.textStyles,
                fontSize: textVariants.selected.fontSize,
                color: colors.primary,
                fontWeight: textVariants.selected.fontWeight,
              }}>
              {tab.name}
            </Text>
          ) : (
            <Text
              style={{
                ...styles.textStyles,
                fontSize: textVariants.unselected.fontSize,
                color: colors.muted,
                fontWeight: textVariants.unselected.fontWeight,
                paddingTop: 2,
              }}>
              {tab.name}
            </Text>
          ),
      })}

      children={() => tabChildren(tab, i)}
      listeners={{
        tabPress: e => onTabPress(e.target),
        swipeStart: e => {
          dispatch(showAdultModeDisclaimer())
        },
        // swipeEnd: e => {
        //   onTabSwipe(i, tab); 
        //   console.debug('tab swipe triggered')
        //   if (tab.id == 99){
        //     dispatch(showAdultModeDisclaimer())
        //   }
        // }, 
        focus: e => {
          onTabFocus(e.target)
          if (tab.id != 99) {
            // dispatch(showAdultModeDisclaimer())
            dispatch(updateLastSeenNavName(tab.name))
            dispatch(hideAdultModeDisclaimer())
          } else {
            dispatch(showAdultModeDisclaimer())
          }
        }
      }}
    />
  ), [tabChildren])

  return (
    <>
      {tabList.length > 0 && !hideContent &&
        <Tab.Navigator
          keyboardDismissMode="none"
          screenOptions={() => ({
            tabBarScrollEnabled: true,
            tabBarIndicatorStyle: {
              opacity: 0,
            },
            tabBarItemStyle: {
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row-reverse',
              width: 75,
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
          })}
        >
          {
            tabList.map(renderTab)
          }
        </Tab.Navigator>
      }
    </>
  )
}

const styles = StyleSheet.create({
  textStyles: {
    height: 30,
    width: 60,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});