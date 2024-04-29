import React, { ReactNode, useEffect, useState } from 'react';
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CPressable } from '../atoms';
import { useTheme } from '@react-navigation/native';
import LogoIcon from "@static/images/matchSmall.svg";
import StarFillIcon from "@static/images/expandDirect.svg";
import StarUnfillIcon from "@static/images/kickIconpipshrink.svg";
import { APP_NAME_CONST } from '@utility/wawa_iconpointscore';

type wawaAwayShow = {
  isVisible?: boolean,
  supportedOrientations?: ("portrait" | "landscape")[],
  onBackdropPress?: () => void,
  onCancelPress?: () => void,
  onReview?: (mark: number) => void,
}

export default function ReviewModal({
  isVisible = false,
  supportedOrientations = ['portrait'],
  onBackdropPress,
  onCancelPress,
  onReview,
}: wawaAwayShow) {
  const { textVariants, icons, colors } = useTheme();
  const [mark, setMark] = useState(0);

  useEffect(() => {
    if (isVisible) {
      setMark(0);
    }
  }, [isVisible]);

  const renderStar = ({ item, index }: any) => {
    return <TouchableOpacity onPress={() => {
      setMark(index + 1);
      if (onReview) onReview(index + 1);
    }}>
      {(index + 1) > mark
        ? <StarUnfillIcon color={colors.primary} />
        : <StarFillIcon color={colors.primary} />
      }
    </TouchableOpacity>
  }

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      supportedOrientations={supportedOrientations}
    >
      <CPressable style={styles.backdrop} onPress={onBackdropPress}>
        <CPressable style={styles.container} onPress={() => { }}>
          <LogoIcon height={icons.sizes.xl} width={icons.sizes.xl} />
          <Text style={{ ...textVariants.bigHeader }}>喜欢“{APP_NAME_CONST}”吗？</Text>
          <Text style={{ ...textVariants.subBody, color: colors.muted }}>轻点星形以在App Store中评分</Text>

          <FlatList
            horizontal={true}
            data={Array(5)}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            renderItem={renderStar}
          />

          <TouchableOpacity onPress={onCancelPress}>
            <Text style={{ ...textVariants.bigHeader, color: colors.muted }}>取消</Text>
          </TouchableOpacity>
        </CPressable>
      </CPressable>
    </Modal>
  )
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: '#000000AA',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#222222',
    paddingVertical: 20,
    
    width: '80%',
    borderRadius: 18,
    alignItems: 'center',
    gap: 10,
  }
});