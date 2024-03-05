import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useTheme } from "@react-navigation/native";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";

const yys_GmailAndroid = createMaterialTopTabNavigator();

interface yys_ConfigureUimanager {
  tabList: {title: string; id: number; name: string}[];
  tabChildren: (tab: {title: string; id: number; name: string}, index: number) => React.ReactNode,
  hideContent?: boolean,
}

export const VipNav = ({
  tabList,
  tabChildren,
}: yys_ConfigureUimanager) => {
  const {colors, textVariants} = useTheme();

  return (
    <>
      { tabList.length > 0 &&
        <yys_GmailAndroid.Navigator
          keyboardDismissMode="none"
          screenOptions={() => ({
            tabBarScrollEnabled: true,
            tabBarIndicatorStyle: {
              width:0.4,
              height: 3,
            },
            tabBarItemStyle: {
              width:'auto',
            },
            tabBarStyle: {
              margin: 10,
              flexDirection:'row',
              alignSelf:'center',
            }
          })}
        >
          {
            tabList.map((tab, i) => (
              <yys_GmailAndroid.Screen 
                key={tab.id}
                name={tab.name}
                options={() => ({
                  tabBarLabel: ({focused}) =>
                    focused ? (
                      <View
                        style={{height:'auto', width:'auto'}}
                      >
                        <Text
                          style={{
                            ...textVariants.selected,
                            fontSize: 18,
                            color: colors.primary,
                            alignSelf:'center',
                          }} >
                          {tab.name}
                        </Text>
                      </View>
                    ) : (
                      <View
                        style={{height:25, width:80}}
                      >
                        <Text
                          style={{
                            ...textVariants.unselected,
                            color: colors.muted,
                            alignSelf:'center',
                            marginTop: 3,
                          }} >
                          {tab.name}
                        </Text>
                      </View>
                    ),
                  })}
                children={() => tabChildren(tab, i)} 
              />
            ))
          }
        </yys_GmailAndroid.Navigator>
      }
    </>
  )
}

const styles = StyleSheet.create({});