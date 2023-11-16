import React, { memo } from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {
  data?: any;
  activeIndex?: any;
}

const CarouselPagination = ({data, activeIndex}: Props) => {

  const currentItem = (item: any, index: number) => (
    <View
      key={index}
      style={[
        styles.paginationDot,
        index === activeIndex && styles.paginationDotActive,
      ]}
    />
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
