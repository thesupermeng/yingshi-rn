import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useTheme } from "@react-navigation/native";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";

const Tab = createMaterialTopTabNavigator();

interface Props {
  tabList: {title: string; id: number; name: string}[];
  tabChildren: (tab: {title: string; id: number; name: string}, index: number) => React.ReactNode,
  hideContent: boolean,
}


export default function HomeNav({
  tabList,
  tabChildren,
  hideContent = false,
}: Props) {
  const {colors, textVariants} = useTheme();

  return (
    <>
      { tabList.length > 0 && !hideContent &&
        <Tab.Navigator
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
            tabList.map((tab, i) => (
              <Tab.Screen 
                key={tab.id}
                name={tab.name}
                options={({route}) => ({
                  tabBarLabel: ({focused, color}) =>
                    focused ? (
                      <Text
                        style={{
                          fontSize: textVariants.selected.fontSize,
                          color: colors.primary,
                          height: 30,
                          width: 60,
                          textAlign: 'center',
                          textAlignVertical: 'center',
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
                          width: 60,
                          textAlign: 'center',
                          textAlignVertical: 'center',
                          fontWeight: textVariants.unselected.fontWeight,
                        }}>
                        {tab.name}
                      </Text>
                    ),
                })}
                children={() => tabChildren(tab, i)} 
              />
            ))
          }
        </Tab.Navigator>
      }
    </>
  )
}

const styles = StyleSheet.create({});