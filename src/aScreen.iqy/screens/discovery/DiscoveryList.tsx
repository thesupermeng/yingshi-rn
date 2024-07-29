import React, { useCallback, useMemo, useState } from "react";
import { FlatList, View } from "react-native";
import DiscoveryHotsView from "./DiscoveryHots";
import DiscoveryActionsView from "./DiscoveryActions";
import DiscoveryCardView from "./DiscoveryCard";
import PublishData from "./DiscoveryPublish.json";

interface DiscoveryRenderItem {
  id: string,
  type: string,
  items?: any[] | undefined,
  data?: any,
  vod?: any,
}

interface DiscoveryListProps {
}

export default function DiscoveryListView({
}: DiscoveryListProps) {

  const renderDatas = useMemo(() => {
    const prefixDatas: DiscoveryRenderItem[] = [
      {id: 'hots', type: 'hots'},
      {id: 'actions', type: 'actions'},
    ];

    const suffixDatas: DiscoveryRenderItem[] = []
    const publishData:any = PublishData.article;
    const publishVods:any = PublishData.vods;
    const publishKeys = Object.keys(publishData)
    console.debug("==> publishKeys", publishKeys);
    for (const key of publishKeys) {
      const name = key.split("_")[0]
      suffixDatas.push({ 
        id: `card-${key}`, 
        type: 'card', 
        data: publishData[key],
        vod: publishVods[name]
      });
    }
    console.debug("==> ", suffixDatas);
    return prefixDatas.concat(suffixDatas);
  }, [])

  const renderListItem = useCallback(
    ({ item, index }: { item: DiscoveryRenderItem; index: number }) => {
      return (
        <View key={`discovery-list-item-${index}`} style={{width: "100%", alignItems:"stretch"}}> 
          
          { item.type === "hots" && 
            <DiscoveryHotsView/> 
          }

          { item.type === "actions" && 
            <DiscoveryActionsView/> 
          }

          { item.type === "card" && 
            <DiscoveryCardView data={item.data} vod={item.vod} index={index}/> 
          }

        </View>
      )
    },
    [renderDatas],
  );

  const renderSeparator = useCallback(
    (props:any) => {
      return (<View key={`separator-${props.leadingItem.key}`} style={{height: 5}}></View>)
    },
    [],
  );

  return (
    <FlatList
      data={renderDatas}
      initialNumToRender={5}
      windowSize={3}
      maxToRenderPerBatch={10}
      renderItem={renderListItem}
      contentContainerStyle={{paddingTop: 10, paddingBottom: 10}}
      removeClippedSubviews={false}
      ItemSeparatorComponent={renderSeparator}
      keyExtractor={(item, index) => `discovery-list-item-${index}`}
    />
  );
}

