import React, { useCallback, useMemo, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { spacing } from "../../const/layout";
import HomeCardView from "./HomeCard";
import HomeCarouselView from "./HomeCarousel";
import FastImage, { Source } from "react-native-fast-image";

interface HomeVodData {
  vod_id?: number,
  type_id?: number,
  type_name?: string,
  vod_name?: string,
  vod_pic?: string | Source,
  vod_blurb?: string,
  vod_remarks?: string,
  vod_tag?: string
}

interface HomeRenderData {
  layout: 'compact' | 'normal' | 'none',
  isFav?: boolean,
  isAds?: boolean,
  vod?: HomeVodData
}

interface HomeRenderItem {
  id: string,
  type: string,
  items: HomeRenderData[]
}

interface HomeListProps {
  data: any
}

export default function HomeListView({
  data
}: HomeListProps) {

  const carouselData = useMemo(() => {
    return data as any
  }, [data])

  const vodDatas = useMemo(() => {
    const categories =  data?.categories as any[] ?? []
    if (categories.length > 0) {
      return categories[0].vod_list as any[] ?? [];
    }
    return [] 
  }, [data])

  const renderListItem = useCallback(
    ({ item, index }: { item: HomeRenderItem; index: number }) => {
      console.log("==>", `home-list-item-${index}-${item.id}`)
      return (
        <View key={`home-list-item-${index}`} style={{width: "100%", alignItems:"stretch"}}> 
          
          { item.type === "carousel" && 
            <View key={`home-list-carousel-${index}`}>
              <HomeCarouselView data={carouselData}/> 
            </View>
          }

          { item.type === "vip" && 
            <View key={`home-list-vip-${index}`} style={{
              paddingHorizontal: spacing.sideOffset,
              gap:spacing.m, 
              flexDirection: "row", 
              justifyContent: "space-between"
            }}>
              <FastImage style={{
                width: "100%",
                aspectRatio: 6.6,
                marginVertical: 10
              }} 
              source={require("../../assets/images/Frame-1000003000.png")} 
              resizeMode={FastImage.resizeMode.contain}/>
            </View> 
          }

          { item.type === 'card' && 
            <View key={`home-list-card-${index}`} style={{
              paddingHorizontal: spacing.sideOffset,
              gap:spacing.m, 
              flexDirection: "row", 
              justifyContent: "space-between"
            }}>
              {item.items.map((e, i) => (
                <View key={`home-list-card-item-${index*2 + i}`} style={{flex: 1}}>
                  <HomeCardView
                    layout={e.layout}
                    image={e.vod?.vod_pic}
                    isFav={e.layout === 'normal' ? true : undefined}
                    typeString={e.layout === 'normal' ? e.vod?.type_name : undefined}
                    remarkString={e.layout === 'normal' ? e.vod?.vod_remarks : undefined}
                    title={e.vod?.vod_name}
                    subTitle={e.vod?.vod_blurb}
                  />
                </View>
              ))}
            </View>
          } 
        </View>
      )
    },
    [carouselData],
  );

  const renderSeparator = useCallback(
    (props:any) => {
      console.log(`==> separator-${props.leadingItem.key}`)
      return (<View key={`separator-${props.leadingItem.key}`} style={{height: 5}}></View>)
    },
    [],
  );

  const renderDatas = useMemo(() => {
    const prefixDatas: HomeRenderItem[] = [
      {id: 'carousel', type: 'carousel', items: []},
      {id: 'vip', type: 'vip', items: []},
      {id: 'prevod1', type: 'card', items: [
        {layout: 'compact', vod: {vod_name: "颜心记", vod_pic: require("../../assets/images/Frame-1000003010-0.png"), vod_blurb: "病情相投相亲相爱"}}, 
        {layout: 'compact', vod: {vod_name: "消失的大象", vod_pic: require("../../assets/images/Frame-1000003010-1.png"), vod_blurb: "王志文垂死挣扎难逃法网"}}
      ]},
      {id: 'prevod2', type: 'card', items: [
        {layout: 'compact', vod: {vod_name: "孤站迷城", vod_pic: require("../../assets/images/Frame-1000003010-2.png"), vod_blurb: "810的残酷超乎你想象"}}, 
        {layout: 'compact', vod: {vod_name: "唐朝诡事录·召集令", vod_pic: require("../../assets/images/Frame-1000003010-3.png"), vod_blurb: "唤醒你的唐诡记忆"}}
      ]},
      {id: 'prevod3', type: 'card', items: [
        {layout: 'compact', vod: {vod_name: "狐妖小红娘月红篇", vod_pic: require("../../assets/images/Frame-1000003010-4.png"), vod_blurb: "最高热度破9000"}}, 
        {layout: 'compact', vod: {vod_name: "小禾卿卿有点田", vod_pic: require("../../assets/images/Frame-1000003010-5.png"), vod_blurb: "外卖小哥回80年代致富"}}
      ]},
      {id: 'prevod4', type: 'card', items: [
        {layout: 'compact', vod: {vod_name: "我和我的朋友们", vod_pic: require("../../assets/images/Frame-1000003010-6.png"), vod_blurb: "重回十八岁逆转人生"}}, 
        {layout: 'compact', vod: {vod_name: "第二次“初见”", vod_pic: require("../../assets/images/Frame-1000003010-7.png"), vod_blurb: "段玉顾清乔情侣变宿敌"}}
      ]},
      {id: 'preads', type: 'card', items: [
        {layout: 'compact', vod: {vod_name: "完了，看了这部剧根本停不下来，...", vod_pic: require("../../assets/images/Frame-1000003005.png"), vod_blurb: "娶了媳妇勿忘娘"}}
      ]},
    ];

    const suffixDatas: HomeRenderItem[] = []
    for (let index = 0; index < vodDatas.length; index+=2) {
      suffixDatas.push({
        id: `vod-${index}`,
        type: 'card', 
        items: [
          {layout: 'normal', vod: vodDatas[index]},
          index+1 < vodDatas.length ? 
          {layout: 'normal', vod: vodDatas[index+1]} : 
          {layout: 'none'}, 
        ]
      })
    }
    
    return prefixDatas.concat(suffixDatas);
  }, [vodDatas])

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
      keyExtractor={(item, index) => `home-list-item-${index}`}
    />
  );
}

