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
import {VodDescription} from "./vodDescription"
import { CBottomSheet } from "../../atoms";
import { useTheme } from '@react-navigation/native';

interface ttSmall {
    isVisible?: boolean;
    handleClose?: () => any;
    displayMode?: string;
    vodTitle? : string,
    vod_director? : string,
    vod_writer?: string,
    vod_actor? : string,
    vod_content? : string,
    textColor?: string;
  }
  const definedValue = (val: any) => {
    if (val === undefined || val === null) {
      return "";
    }
    return val + " ";
  };

  type ttGreyBorderless = {
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
    textColor = '',
}: ttSmall) {
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
      style={{paddingBottom:50}}
    >
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
        <View style={{marginTop: 20}}>
        <Text style={styles.descriptionContainer2Text}>
        {`导演：${definedValue(vod_director)}${"\n"}` +
        `编剧：${definedValue(vod_writer)}${"\n"}` +
         `主演：${definedValue(vod_actor)}${"\n"}`}
    </Text>
    </View>
    <View style={{marginBottom: 20}}>
    <Text
        ref={textRef}
        onTextLayout={handleTextLayout}
        style={styles.descriptionContainer2Text}
        
        numberOfLines={30}
        >
        {`简介 ${"\n"}${definedValue(vod_content)}`}
        </Text>
        </View>
    </CBottomSheet>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
     
      },
    descriptionContainer2Text: {
        color: "#9C9C9C",
        fontSize: 15,
   
      },
  });

export default memo(DescriptionBottomSheet);