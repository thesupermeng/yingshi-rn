import React, { memo, } from "react";
import {
  View,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { IDelegate } from "@type/wpk_long";
import SelectDownloadComponent from "../download/uuu_background_control";

interface XFillButton {
  vodId?: number;
  isVip: boolean;
  source?: number;
  episodes?: IDelegate;
  rangeSize?: number;
  activeEpisode?: number;
  onDownload: (nid: number) => void;
  handleClose: any;
  setShowAdOverlay: (show: boolean) => void;
}
function DownloadVodSelection({
  vodId,
  isVip,
  source,
  episodes,
  rangeSize = 50,
  activeEpisode = 0,
  onDownload,
  handleClose,
  setShowAdOverlay
}: XFillButton) {
  const { spacing } = useTheme();

  return (
    <View
      style={{
        paddingLeft: spacing.sideOffset,
        paddingRight: spacing.sideOffset,
        gap: spacing.s,
      }}
    >
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
        screen="landscape"
      />
    </View>
  );
}

export default memo(DownloadVodSelection);
