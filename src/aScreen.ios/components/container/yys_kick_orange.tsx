import { useTheme } from '@react-navigation/native';
import React, { memo, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';

interface yys_ConfigureUimanager {
  data?: any;
  activeIndex?: any;
}

const CarouselPagination = ({ data, activeIndex }: yys_ConfigureUimanager) => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles({ colors }), [colors]);

  return (
    <View style={styles.paginationContainer}>
      {data.map((item: any, index: number) => (
        <View
          key={index}
          style={[
            styles.paginationDot,
            index === activeIndex && styles.paginationDotActive,
          ]}
        />
      ))}
    </View>
  );
};

const createStyles = ({ colors }: any) => StyleSheet.create({
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
