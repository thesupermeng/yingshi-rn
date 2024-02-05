import React, { memo } from "react";
import {
  StyleSheet,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { VodEpisodeListType } from "@type/ajaxTypes";
import BottomSheet from "../bottomSheet/bottomSheet";
import SelectDownloadComponent from "../download/selectDownloadComponent";

interface Props {
  onDownload: (nid: number) => void;
  episodes?: VodEpisodeListType;
  activeEpisode?: number;
  rangeSize?: number;
  isVisible: boolean;
  handleClose: any;
  vodId?: number;
  isVip: boolean;
  setShowAdOverlay: (show: boolean) => void;
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
}: Props) {
  const { spacing } = useTheme();

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
    >
      {isVisible && (
        <SelectDownloadComponent
          handleClose={handleClose}
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
});
