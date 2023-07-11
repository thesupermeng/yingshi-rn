import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import { playVod } from '../../redux/actions/vodActions';
import { useAppDispatch } from '../../hooks/hooks';
import VodCard from '../../components/vod/vodCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { VodType } from '../../types/ajaxTypes';


interface Props {
    vods: Array<VodType>,
    numOfRows?: number,
    outerRowPadding?: number,
    minNumPerRow?: number,
    heightToWidthRatio?: number
}

function VodListVertical({ vods, numOfRows = 2, outerRowPadding = 0, minNumPerRow = 3, heightToWidthRatio = 1.414 }: Props) {
    const { textVariants, colors, spacing, icons } = useTheme();
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const dispatch = useAppDispatch();

    const width = Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
   
    const windowDim = width - insets.left - insets.right - outerRowPadding - (2 * spacing.sideOffset); // usable space
    const minWidth = windowDim / minNumPerRow - 8;
    const cardWidth = Math.min(200, Math.floor(minWidth));
    const cardHeight = heightToWidthRatio * cardWidth;
    const CARDS_PER_ROW = Math.floor(windowDim / cardWidth);
    const BTN_MARGIN_RIGHT = (windowDim - (CARDS_PER_ROW * cardWidth)) / (CARDS_PER_ROW - 1);

    return (
        <View style={styles.vodList}>
            {
                vods &&
                vods.slice(0, numOfRows * CARDS_PER_ROW).map((vod, idx) => (
                    <VodCard
                        key={`${vod.vod_id}`}
                        vod_name={vod?.vod_name}
                        vod_pic={vod?.vod_pic}
                        showInfo={vod?.vod_remarks}
                        vodImageStyle={{
                            width: cardWidth,
                            height: cardHeight,
                            marginRight: (idx % CARDS_PER_ROW) === CARDS_PER_ROW - 1 ? 0 : BTN_MARGIN_RIGHT,
                        }}
                        onPress={() => {
                            dispatch(playVod(vod));
                            navigation.navigate('播放', {
                                vod_id: vod?.vod_id,
                            });
                        }}
                    />
                ))
            }
        </View>
    )
}

export default VodListVertical;

const styles = StyleSheet.create({
    vodList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})