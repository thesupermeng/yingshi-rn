import { useState } from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../../global/colors';
import styles from './style';
import EmptyDataPage from '../EmptyDataPage';

type BarType = {
  name: string
  children: React.ReactNode
}

interface Props {
  tabBar: BarType[]
}

const CustomMatchDetailsTabBar = ({ tabBar }: Props) => {
  const [tab, setTab] = useState(0);
  const activeTabColor = '#FAC33D';
  const activeTextColor = '#000000';

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        {tabBar?.map((x, idx) => {
          return (
            <View
              key={`MatchDetailsTabBar-${idx}`}
              style={[
                styles.tabNavigator,
                {
                  backgroundColor:
                    tab === idx ? activeTabColor : Colors.colorLightGrey,
                },
              ]}>
              <Text
                onPress={() => {
                  setTab(idx);
                }}
                style={[
                  styles.textTabNavigator,
                  { color: tab === idx ? activeTextColor : 'white' },
                ]}>
                {x.name}
              </Text>
            </View>
          );
        })}
      </View>

      {tabBar?.map((x, idx) => {
        return (
          tab === idx && (
            <View
              key={`MatchDetailsTabBarContent-${idx}`}
              style={[
                styles.tab,
                {
                  height: x?.children ? '100%' : 350,
                },
              ]}>
              {x?.children ? x.children : <EmptyDataPage></EmptyDataPage>}
            </View>
          )
        );
      })}
    </View>
  );
};

export default CustomMatchDetailsTabBar;
