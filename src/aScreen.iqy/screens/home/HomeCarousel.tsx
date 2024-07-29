import React, { useCallback, useRef, useState } from "react";
import { Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { spacing } from "../../const/layout";
import FastImage from "react-native-fast-image";
import Carousel from 'react-native-reanimated-carousel';

interface HomeCarouselProps {
  data?: any
}

export default function HomeCarouselView({
  data
}: HomeCarouselProps) {
  const carouselRef = useRef<any>();
  const [width] = useState(Dimensions.get('window').width);
  const [activeIndex, setActiveIndex] = useState(0);

  const dashStyle = false;

  const renderPageDot = (item: any, index: number) => (
    <View
      key={index}
      style={[
        dashStyle ? { width: 18 } : { width: 5.5 },
        dashStyle ? { height: 2 } : { height: 5.5 },
        styles.paginationDot,
        index === activeIndex && styles.paginationDotActive,
      ]}
    />
  )

  const renderCarousel = useCallback(({ item, index }: { item: any, index: number }) => {
    return (
      <View key={`home-carousel-item-${index}`}>
        <View style={{
          position: "relative",
          width: "100%", height: "100%", 
          paddingHorizontal: spacing.sideOffset,
        }}>
          <FastImage
            style={styles.image}
            source={{
              uri: item.carousel_pic_mobile,
              priority: "normal",
            }}
            resizeMode={"cover"}
          />
          <View style={{
            position: "absolute",
            left: spacing.sideOffset,
            bottom: 0, 
            paddingVertical: 6,
            paddingHorizontal: 10,
          }}>
            <Text style={{fontSize: 16, fontWeight: "600", color: "#fff"}}>{item.carousel_name}</Text>
          </View>
        </View>
      </View>
    )
  }, []);

  return (
      <View>
        <Carousel
          ref={carouselRef}
          loop
          width={width}
          height={width/2}
          autoPlay={true}
          data={data?.carousel ?? []}
          scrollAnimationDuration={800}
          autoPlayInterval={5000}
          onScrollBegin={() => { }}
          onSnapToItem={index => {
            setActiveIndex(index);
          }}
          onScrollEnd={index => {
            setActiveIndex(index);
          }}
          renderItem={renderCarousel}
        />
        <View style={styles.paginationContainer}>
          {(data?.carousel ?? []).map(renderPageDot)}
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
  },

  wrapper: {
    borderRadius: 100,
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    backgroundColor: "#f2f3f4"
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  dotStyle: {
    width: 6,
    height: 4,
  },
  activeDotStyle: {
    width: 14,
    height: 4,
  },
  paginationStyle: {
    top: 173,
    height: 20,
  },
  vod_hotlist: {
    height: 99,
    width: 176,
  },
  nav: {
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: 10,
  },
  catalogNav: {
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: 5,
  },
  vodList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bottomBlur: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 75,
    flex: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    opacity: 0.8,
  },
  carouselTag: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    marginRight: 16,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 0,
    marginRight: spacing.sideOffset + 10,
    position: 'relative',
    bottom: Platform.OS === 'ios' ? 35 : 12,
    borderRadius: 10,
  },
  paginationDot: {
    height: 5.5,
    borderRadius: 4,
    backgroundColor: '#fff',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#00dc5a',
  },
});
