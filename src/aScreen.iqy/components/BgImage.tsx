import FastImage, { Source } from "react-native-fast-image";

interface BgImageProps {
  source?: number | Source | undefined;
  height?: number | string | undefined;
  opacity?: number;
  zIndex?: number;
}

export default function BgImageView({
  source,
  height,
  opacity,
  zIndex
}: BgImageProps) {
  return (<FastImage
    source={source}
    style={{ 
      position: "absolute", 
      left: 0,
      right: 0,
      top: 0, 
      height: height,
      bottom: height === undefined ? 0 : undefined, 
      opacity: opacity ?? 1,
      zIndex: zIndex ?? -1
    }}
    resizeMode="stretch"
  />)
}