import React, { memo } from "react";
import SearchBar from "./searchbar";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  Text,
} from "react-native";
import Logo from "@static/images/logo.svg";
import ShareRectIcon from "@static/images/shareRect.svg";
import SearchIcon from "@static/images/search.svg";
import NavIcon from "@static/images/nav.svg";
import FireIcon from "@static/images/fire.svg";
import VipEntry from "@static/images/splash/VipEntry.svg";
import History from "@static/images/history.svg";
import { useTheme } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { SuggestVodListType } from "@type/ajaxTypes";
import { useMemo } from "react";
import { VodApi } from "@api";
import { SHOW_ZF_CONST, UMENG_CHANNEL } from "@utility/constants";

interface Props {
  logo?: React.ReactNode;
  navigator: any;
  headerStyle?: ViewStyle;
  title?: string,
  rightComponent?: React.ReactNode,
  searchIcon?: boolean,
  navIcon?: boolean,
  fireIcon?: boolean,
}
function MainHeader({
  logo,
  navigator,
  headerStyle,
  title,
  rightComponent,
  searchIcon = false,
  navIcon = false,
  fireIcon = false,
}: Props) {
  const { textVariants, colors, } = useTheme();

  const { data: recommendations } = useQuery({
    queryKey: ["recommendationList"],
    queryFn: () => VodApi.getListByRecommendations(),
  });

  const randomVod = useMemo(() => {
    if (recommendations && recommendations.length > 0) {
      return recommendations[
        Math.floor(Math.random() * recommendations.length)
      ];
    }
  }, [recommendations]);

  return (
    <View style={{ ...styles.container, ...headerStyle }}>
      <ShareRectIcon />

      <Text style={{
        ...textVariants.header,
        flex: 1,
        color: colors.text,
        textAlign: 'center',
      }}
      >
        {title}
      </Text>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
      }}>
        {rightComponent}
        {searchIcon &&
          <TouchableOpacity onPress={() => navigator.navigate('搜索')}>
            <SearchIcon />
          </TouchableOpacity>
        }
        {navIcon &&
          <TouchableOpacity onPress={() => navigator.navigate('片库')}>
            <NavIcon />
          </TouchableOpacity>
        }
        {fireIcon &&
          <TouchableOpacity onPress={() => navigator.navigate('Trending')}>
            <FireIcon />
          </TouchableOpacity>
        }
      </View>
      {SHOW_ZF_CONST &&
        <TouchableOpacity
          onPress={() => {
            navigator.navigate("付费VIP");
            // if (UMENG_CHANNEL == "GOOGLE_PLAY") {
            //   navigator.navigate("付费Google");
            // } else {
            //   navigator.navigate("付费VIP");
            // }
          }}
        >
          <VipEntry height={36} />
        </TouchableOpacity>
      }
    </View>
  );
}

export default memo(MainHeader);

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 2,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
});
