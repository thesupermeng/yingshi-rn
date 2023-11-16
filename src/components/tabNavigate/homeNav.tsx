import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useTheme } from "@react-navigation/native";
import { useCallback } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";

const Tab = createMaterialTopTabNavigator();

interface Props {
  tabList: {title: string; id: number; name: string}[];
  tabChildren: (tab: {title: string; id: number; name: string}, index: number) => React.ReactNode,
  hideContent?: boolean,
}


export default function HomeNav({
  tabList,
  tabChildren,
  hideContent = false,
}: Props) {
  const {colors, textVariants} = useTheme();

  const renderTab = useCallback((tab: any, i: any) => (
    <Tab.Screen 
      key={tab.id}
      name={tab.name}
      options={() => ({
        tabBarLabel: ({focused, color}) =>
          focused ? (
            <Text
              style={{ ...styles.textStyles,
                fontSize: textVariants.selected.fontSize,
                color: colors.primary,
                fontWeight: textVariants.selected.fontWeight,
              }}>
              {tab.name}
            </Text>
          ) : (
            <Text
              style={{ ...styles.textStyles,
                fontSize: textVariants.unselected.fontSize,
                color: colors.muted,
                fontWeight: textVariants.unselected.fontWeight,
              }}>
              {tab.name}
            </Text>
          ),
      })}
      children={() => tabChildren(tab, i)} 
    />
  ), [tabChildren])

  return (
    <>
      { tabList.length > 0 && !hideContent &&
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
              width: 70,
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
    textAlignVertical: 'center',
  }
});