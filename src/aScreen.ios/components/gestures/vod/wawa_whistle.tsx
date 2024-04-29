import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Moon from '@static/images/bellActionsNews.svg';
import Sun from '@static/images/mailPauseOthermatchdetailbg.svg';
import MutedVolume from '@static/images/libyogaGesturesSubs.svg';
import Volume from '@static/images/subinStatsnomoredata.svg';

type wawaAwayShow = {
  percent: number;
  icon: any;
};

export default ({ percent, icon }: wawaAwayShow) => {
  return (
    <View style={styles.smallContainer}>
      {icon == 'Moon' && <Moon width={24} height={24} style={styles.icon} />}
      {icon == 'Sun' && <Sun width={24} height={24} style={styles.icon} />}
      {icon == 'MutedVolume' && (
        <MutedVolume width={24} height={24} style={styles.icon} />
      )}
      {icon == 'Volume' && (
        <Volume width={24} height={24} style={styles.icon} />
      )}
      <View style={styles.statBar}>
        <View
          style={{
            height: 5,
            borderRadius: 4,
            backgroundColor: 'white',
            width: `${percent > 100 ? 100 : percent}%`,
          }}
        />
      </View>
      <Text style={styles.percentText}>{percent.toFixed(0)}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  smallContainer: {
    width: '60%',
    height: 32,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    marginTop: 20,
    left: '25%',
    zIndex: 20,
  },
  statBar: {
    width: '70%',
    height: 5,
    backgroundColor: 'rgba(74, 153, 233, 0.3)',
    marginBottom: 'auto',
    marginTop: 'auto',
    flexDirection: 'row',
    borderStyle: 'solid',
    borderRadius: 4,
  },
  percentText: {
    color: 'white',
    
    fontSize: 11,
    width: '15%',
  },
  icon: {
    color: 'white',
    
    maxWidth: '15%',
    objectFix: 'contain',
  },
});