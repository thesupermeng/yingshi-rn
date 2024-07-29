import React, { useCallback, useMemo } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { spacing } from "../../const/layout";
import FastImage, { Source } from "react-native-fast-image";
import FavIcon from "../../assets/images/favicon.svg";
import OptionIcon from "../../assets/images/option_dot.svg";

interface HomeCardProps {
  layout: 'compact' | 'normal' | 'none',
  ratio?: number,
  isFav?: boolean,
  isAds?: boolean,
  image?: string | Source,
  tagString?: string,
  tagColor?: string,
  typeString?: string,
  remarkString?: string,
  title?: string,
  subTitle?: string
}

export default function HomeCardView({
  layout, ratio, isFav, isAds,
  image,
  tagString, tagColor, 
  typeString, remarkString, 
  title, subTitle
}: HomeCardProps) {

  const imageRatio = useMemo(() => {
    if (ratio != undefined) {
      return ratio;
    } else if (layout === 'compact') {
      return 1.92
    } else if (layout === 'normal') {
      return 0.74
    }
    return 0.74
  }, [ratio, layout]);

  const imageSource = useMemo<number|Source|undefined>(() => {
    console.debug("==> image", image);
    if (image === undefined) {
      return image
    }
    if (typeof image === 'string') {
      if (image.startsWith("http")) {
        return {uri: image} as Source
      }
    }
    return image as Source;
  }, [image])

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: layout === 'normal' ? "#ffffff" : "transparent",
        borderRadius: 8,
        overflow: "hidden"
      }}>
        {layout != 'none' && (<>
          <View style={{
            position: "relative", width: "100%",
            aspectRatio: imageRatio,
            borderRadius: layout === 'compact' ? 8 : 0,
            overflow: "hidden"
          }}>
            
            <FastImage 
              source={imageSource} 
              style={{
                position: "absolute", 
                left: 0, top: 0, right: 0, bottom: 0,
                width: "100%", height: "100%",
                zIndex: 1
              }} 
              resizeMode={FastImage.resizeMode.cover}
            />
            
            {isFav != undefined && <View style={{
              position: "absolute", 
              left: -2, top: 3, 
              width: 24, height: 24,
              zIndex: 2
            }}>
              <FavIcon height={24}/>
            </View>}
            
            {tagString != undefined && <View style={{
              position: "absolute", 
              right: 0, top: 0, padding:5, 
              borderBottomLeftRadius: 10, borderTopRightRadius: 10, 
              backgroundColor: tagColor ?? "#19D168",
              zIndex: 2
            }}>
              <Text style={{fontSize: 11, fontWeight: '500', color: "#ffffff"}}>独播</Text>
            </View>}

            {isAds === true && <View style={{
              position: "absolute", 
              right: 0, top: 0, padding:5, 
              borderBottomLeftRadius: 10, borderTopRightRadius: 10, 
              backgroundColor: tagColor ?? "#19D168",
              zIndex: 2
            }}>
              <Text style={{fontSize: 11, fontWeight: '500', color: "#ffffff"}}>独播</Text>
            </View>}
            
            {typeString != undefined && <View style={{
              position: "absolute", 
              left: 8, bottom: 5, padding: 5, 
              backgroundColor: "#1C2841",
              zIndex: 2
            }}>
              <Text style={{fontSize: 11, fontWeight: '500', color: "#ffffff"}}>{typeString}</Text>
            </View>}

            {remarkString != undefined && <View style={{
              position: "absolute", 
              right: 5, bottom: 5, padding: 5,
              zIndex: 2
            }}>
              <Text style={{fontSize: 11, fontWeight: '500', color: "#ffffff"}}>{remarkString}</Text>
            </View>}

          </View>

          <View style={{
            paddingHorizontal: layout === 'normal' ? 10 : 0, 
            paddingVertical: 10,
          }}>
            {title != undefined && <View style={{
              width: '100%', height: 22,
            }}>
              <Text style={{fontSize: 16, fontWeight: '500', color: "#000000"}}>{title}</Text>
            </View>}

            {subTitle != undefined && <View style={{
              width: '100%', height: 17, 
              marginTop: layout === 'normal' ? 5 : 2,
              flexDirection: 'row', justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Text style={{
                fontSize: 12, fontWeight: '400', 
                color: "#A3A2A2", marginRight: 20
              }}>{subTitle}</Text>
              <OptionIcon height={15}/>
            </View>}

          </View>
        </>)}
    </View>
  );
}

