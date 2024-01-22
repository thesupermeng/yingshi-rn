import { RootStackScreenProps } from "@type/navigationTypes";
import ScreenContainer from "../../../components/container/screenContainer";
import { FlatList, Pressable, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import TitleWithBackButtonHeader from "../../../components/header/titleWithBackButtonHeader";
import { useCallback, useState } from "react";
import DownloadEpisodeDetailCard from "../../../components/download/downloadEpisodeDetailCard";
import { EpisodeDownloadType } from "@type/vodDownloadTypes";
import { useAppSelector } from "@hooks/hooks";
import { RootState } from "@redux/store";

const DownloadDetails = ({ navigation, route }: RootStackScreenProps<"下载详情">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const { vodId } = route.params

  const download = useAppSelector(({downloadVideoReducer}: RootState) => downloadVideoReducer.downloads.find(dl => dl.vod.vod_id === vodId))

  if (!download) return <></>

  const getEpisodeName = useCallback((sourceId: number, urlNid: number) => {
    return download.vod.vod_sources
      .find(source => source.source_id === sourceId)?.vod_play_list.urls
      .find(url => url.nid === urlNid)
      ?.name
  }, [download] )

  const getSourceName = useCallback((sourceId: number) => {
    return download.vod.vod_sources.find(source => source.source_id === sourceId)?.source_name
  }, [download])

  const renderItem = useCallback(({item, index}: {item: EpisodeDownloadType, index: number}) => {
    return <DownloadEpisodeDetailCard
      title={`${getEpisodeName(item.vodSourceId, item.vodUrlNid)} - ${getSourceName(item.vodSourceId)}`}
      progressPercentage={item.progress.percentage.toFixed(0)}
      status={item.status}
    />
  }, [download]) 


  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title={download.vod.vod_name}
        right={
          <Pressable
            onPress={() => {
              setIsEditing(!isEditing);
            }}
          >
            <Text
              style={{
                ...textVariants.body,
                opacity: download.episodes && download.episodes.length > 0 ? 100 : 0,
              }}
            >
              {isEditing ? "取消" : "编辑"}
            </Text>
          </Pressable>
        }
      />
      <View>
        <FlatList
          data={download.episodes.sort((a,b)=> a.vodUrlNid - b.vodUrlNid || a.vodSourceId - b.vodSourceId)}
          renderItem={renderItem}
          keyExtractor={(item) => {return `${download.vod.vod_id}-${item.vodSourceId}-${item.vodUrlNid}`}}
        />
        
      </View>
    </ScreenContainer>
  )

}

export default DownloadDetails; 