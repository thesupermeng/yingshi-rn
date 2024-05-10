import React, { memo } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import BottomSheet from "../bottomSheet/bottomSheet";
import SelectDownloadComponent from "../download/selectDownloadComponent";
import CloseIcon from "@static/images/close_icon.svg";
import { VodEpisodeGroup } from "@models";
import { CLangKey } from "@constants";

interface Props {
  onDownload: (nid: number) => void;
  episodes?: VodEpisodeGroup;
  activeEpisode?: number;
  rangeSize?: number;
  isVisible: boolean;
  handleClose: any;
  vodId?: number;
  isVip: boolean;
  setShowAdOverlay: (show: boolean) => void;
  onPressToDownload: () => void,
  source: number;
}
function DownloadVodSelectionModal({
  vodId,
  isVip,
  source,
  episodes,
  isVisible,
  handleClose,
  rangeSize = 50,
  activeEpisode = 0,
  onDownload,
  setShowAdOverlay,
  onPressToDownload,
}: Props) {
  const { spacing, textVariants, colors } = useTheme();

  return (
    <BottomSheet
      isVisible={isVisible}
      onBackdropPress={handleClose}
      containerStyle={{
        paddingLeft: spacing.sideOffset,
        paddingRight: spacing.sideOffset,
        gap: spacing.m,
        alignItems: "center",
      }}
      height="50%"
      bottomOffset={-100}
      showWhiteLine={false}
    >
      <View style={styles.headerContainer}>
        <Text style={textVariants.header}>{CLangKey.download.tr()}</Text>
        <TouchableOpacity onPress={() => setShowAdOverlay(false)}>
          <CloseIcon color={colors.muted} />
        </TouchableOpacity>
      </View>

      {isVisible && (
        <SelectDownloadComponent
          handleClose={handleClose}
          onPressToDownload={onPressToDownload}
          activeEpisode={activeEpisode}
          episodes={episodes}
          onDownload={onDownload}
          rangeSize={rangeSize}
          vodId={vodId}
          isVip={isVip}
          setShowAdOverlay={setShowAdOverlay}
          source={source}
          screen="potrait"
        />
      )}
    </BottomSheet >
  );
}

export default memo(DownloadVodSelectionModal);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  title: {
    alignSelf: 'center',
    textAlign: "center",
  },
  episodeList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 10,
    marginBottom: 14,
  },
  selAllBtn: {
    position: 'absolute',
    right: 0,
    alignSelf: 'center',
  },
  legend: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingVertical: 3,
    paddingHorizontal: 6,
    overflow: 'hidden'
  },
  btn: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
