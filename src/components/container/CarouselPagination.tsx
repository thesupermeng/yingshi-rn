import React, { memo, useEffect, useRef, useState } from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  data?: any;
  activeIndex?: any;
  onDotPress?: (index: number) => void;
  onScrollIndexChanged?: (index: number) => void; // Callback to track scroll changes
}

const CarouselPagination = ({data, activeIndex, onDotPress, onScrollIndexChanged,}: Props) => {

  const scrollOffsetRef = useRef<number>(0);
  const [debouncedActiveIndex, setDebouncedActiveIndex] = useState<number | null>(null);
  const carouselActiveIndex = useRef<number | null>(null);

   // Debounce the active index update to reduce rapid updates
   useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setDebouncedActiveIndex(activeIndex);
    }, 10); // Adjust the debounce delay as needed

    return () => clearTimeout(debounceTimeout);
  }, [activeIndex]);

  // Effect to handle the updated active index
  useEffect(() => {
    if (debouncedActiveIndex !== null) {
      carouselActiveIndex.current = debouncedActiveIndex; // Update ref with debounced active index
      if (onScrollIndexChanged) {
        onScrollIndexChanged(debouncedActiveIndex); // Trigger function for updated index
      }
    }
  }, [debouncedActiveIndex, onScrollIndexChanged]);

  // useEffect(() => {
  //   // Handle the carousel scroll change event
  //   if (onScrollIndexChanged) {
  //     onScrollIndexChanged(scrollOffsetRef.current);
  //   }
  // }, [onScrollIndexChanged]);

  const currentItem = (item: any, index: number) => (
    <View
      key={index}
      style={[
        styles.paginationDot,
        index === activeIndex && styles.paginationDotActive,
      ]}
      onTouchStart={() => onDotPress && onDotPress(index)} // Trigger function on dot press
    />

    // <TouchableOpacity
    //   key={index}
    //   style={[
    //     styles.paginationDot,
    //     index === activeIndex && styles.paginationDotActive,
    //   ]}
    //   onPress={() => onDotPress && onDotPress(index)} // Trigger function on dot press
    // />
  )

  return (
    <View style={styles.paginationContainer}>
      {data.map(currentItem)}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 0,
    position: 'relative',
    bottom: 12,
    borderRadius: 10,
  },
  paginationDot: {
    width: 5.5,
    height: 5.5,
    borderRadius: 4,
    backgroundColor: '#fff',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#FAC33D',
  },
});

export default memo(CarouselPagination);
