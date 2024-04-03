import { Image, ImageURISource, LogBox } from "react-native";
import { Platform } from "react-native";
import { ImageProps, ViewProps } from "react-native"
import FastImage, { FastImageProps } from "react-native-fast-image";

type yys_Libturbomodulejsijni = ImageProps & {source: ImageURISource}

type yys_FlyerTurn = FastImageProps & {useFastImage?: boolean}

LogBox.ignoreLogs([`ReactImageView: Image source "null" doesn't exist`])

const customFastImage = ({useFastImage = false, ...imageProp}: yys_FlyerTurn) => {
  if (useFastImage === true || Platform.OS === "android"){
    return <FastImage {...imageProp as FastImageProps}/>
  } else {
    if (typeof imageProp.source == 'number'){ // if source={require(...)}
      return <Image {...imageProp as yys_Libturbomodulejsijni}/>
    } else { // if source={{uri:...}}
      return <Image {...imageProp as yys_Libturbomodulejsijni} source={{...(imageProp.source as ImageURISource), uri: !!(imageProp as yys_Libturbomodulejsijni).source.uri ? (imageProp as yys_Libturbomodulejsijni).source.uri : undefined}}/>
    }
  }
}

export default customFastImage;