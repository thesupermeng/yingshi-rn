import React, {
  useEffect,
  useState,
  useMemo,
  useRef,
  useCallback,
  useContext,
  memo,
  forwardRef,
} from "react";
import {
  View,
  TouchableOpacity,
  Share,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Platform,
} from "react-native";
import { VodDescription } from "./vodDescription"
import { CBottomSheet } from "../atoms";
import { useTheme } from '@react-navigation/native';
import { CLangKey } from "@constants";
import CloseIcon from "@static/images/close_icon.svg";

interface Props {
  isVisible?: boolean;
  handleClose?: () => any;
  displayMode?: string;
  vodTitle?: string,
  vod_director?: string,
  vod_writer?: string,
  vod_actor?: string,
  vod_content?: string,
  vod_year?: string,
  vod_area?: string,
  vod_class?: string,
  vod_time_add?: number,
  textColor?: string;
}
const definedValue = (val: any) => {
  if (val === undefined || val === null) {
    return "";
  }
  return val + " ";
};

type VideoRef = {
  setPause: (param: boolean) => void;
  isPaused: boolean;
  setCurrentTime: (time: number) => void;
};

function DescriptionBottomSheet({
  isVisible = false,
  handleClose,
  displayMode,
  vodTitle = "",
  vod_director = "",
  vod_writer = "",
  vod_actor = "",
  vod_content = "",
  vod_year = "",
  vod_area = "",
  vod_class = "",
  vod_time_add,
  textColor = '',
}: Props) {
  const { colors, textVariants, spacing, icons } = useTheme();

  const textRef = useRef(null);
  const [actualNumberOfLines, setActualNumberOfLines] = useState(0);

  const handleTextLayout = (event: { nativeEvent: { lines: any } }) => {
    const { lines } = event.nativeEvent;
    setActualNumberOfLines(lines.length);
  };

  return (

    <CBottomSheet
      isVisible={isVisible}
      onBackdropPress={() => {
        if (handleClose) handleClose();
      }}
      maxHeight={'85%'}
      style={{ paddingBottom: 50 }}
      showWhiteLine={false}
    >
      <View style={styles.headerContainer}>
        <Text style={textVariants.header}>{CLangKey.details.tr()}</Text>
        <TouchableOpacity onPress={handleClose}>
          <CloseIcon color={colors.muted} />
        </TouchableOpacity>
      </View>

      <View style={styles.titleContainer}>
        <Text
          numberOfLines={1}
          style={{
            ...textVariants.header,
            color: textColor ? textColor : colors.text,
            flex: 1, marginBottom: 10,
          }}>
          {`${definedValue(vodTitle)}`}
        </Text>
      </View>
      <Text
        style={{ ...textVariants.subBody, color: colors.muted }}
        numberOfLines={2}
      >
        {`${definedValue(vod_year)}`}
        {/* {`${definedValue(vod_area)}`} */}
        {`${definedValue(vod_class)}`}
      </Text>
      <Text
        style={{ ...textVariants.subBody, color: colors.muted }}
      >
        {(() => {
          try {
            const dateValue =
              !!vod_time_add
                ? new Date(vod_time_add * 1000)
                  .toISOString()
                  .slice(0, 10)
                  .replace(/\//g, "-")
                : new Date()
                  .toISOString()
                  .slice(0, 10)
                  .replace(/\//g, "-");

            return `${CLangKey.update.tr()}：${dateValue}`;
          } catch (error) {
            console.error("Error while formatting date:", error);
            return `${CLangKey.update.tr()}：N/A`; // or any default value you want to display on error
          }
        })()}
      </Text>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.descriptionContainer2Text}>
          {`${CLangKey.director.tr()}：${definedValue(vod_director)}${"\n"}` +
            // `${CLangKey.writer.tr()}：${definedValue(vod_writer)}${"\n"}` +
            `${CLangKey.actor.tr()}：${definedValue(vod_actor)}${"\n"}`}
        </Text>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text
          style={textVariants.header}
          numberOfLines={2}
        >
          {CLangKey.info.tr()}
        </Text>
        <Text
          ref={textRef}
          onTextLayout={handleTextLayout}
          style={styles.descriptionContainer2Text}
          // numberOfLines={isCollapsed ? 2 : 20}
          numberOfLines={30}
        >
          {definedValue(vod_content)}
        </Text>
      </View>
    </CBottomSheet>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'flex-start',

  },
  descriptionContainer2Text: {
    color: "#9C9C9C",
    fontSize: 15,

  },
  headerContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default memo(DescriptionBottomSheet);