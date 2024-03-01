import React, { memo, } from "react";
import {
  View,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { yys_Libreact } from "@type/yys_libzeus";
import SelectDownloadComponent from "../download/yys_react";

interface yys_ConfigureUimanager {
  vodId?: number;
  isVip: boolean;
  source?: number;
  episodes?: yys_Libreact;
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
}: yys_ConfigureUimanager) {
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
