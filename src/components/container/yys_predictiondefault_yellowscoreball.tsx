import React, { memo, useEffect, useRef, useState } from 'react';
import {View, StyleSheet, TouchableOpacity, Platform} from 'react-native';

interface yysIconarrowrightorangeStation {
  data?: any;
  activeIndex?: any;
  dashStyle:boolean;
  onDotPress?: (index: number) => void;
  onScrollIndexChanged?: (index: number) => void; 
}

const CarouselPagination = ({data,dashStyle = false, activeIndex, onDotPress, onScrollIndexChanged, }: yysIconarrowrightorangeStation) => {

  const scrollOffsetRef = useRef<number>(0);
  const [debouncedActiveIndex, setDebouncedActiveIndex] = useState<number | null>(null);
  const carouselActiveIndex = useRef<number | null>(null);

   
  
  
  
  

  //   return () => clearTimeout(debounceTimeout);
  

  
  useEffect(() => {
    if (debouncedActiveIndex !== null) {
      carouselActiveIndex.current = debouncedActiveIndex; 
      if (onScrollIndexChanged) {
        onScrollIndexChanged(debouncedActiveIndex); 
      }
    }
  }, [debouncedActiveIndex, onScrollIndexChanged]);

  
  
  
  
  
  

  const currentItem = (item: any, index: number) => (
    <View
      key={index}
      style={[
        dashStyle ? { width: 18 } : { width: 5.5 },
        dashStyle ? { height: 2 } : { height: 5.5 },
        styles.paginationDot,
        index === activeIndex && styles.paginationDotActive,

       
      ]}
      onTouchStart={() => onDotPress && onDotPress(index)} 
    />

    
    
    
    
    
    
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
    backgroundColor: '#FAC33D',
  },
});

export default memo(CarouselPagination);
