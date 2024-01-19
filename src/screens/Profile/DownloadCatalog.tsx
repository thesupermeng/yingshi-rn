import { RootStackScreenProps } from "@type/navigationTypes"
import ScreenContainer from "../../components/container/screenContainer"
import TitleWithBackButtonHeader from "../../components/header/titleWithBackButtonHeader"
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useCallback, useState } from "react"
import { useTheme } from "@react-navigation/native"
import { useAppSelector } from "@hooks/hooks"
import { RootState } from "@redux/store"
import { VodDownloadType } from "@type/vodDownloadTypes"
import EmptyList from "../../components/common/emptyList"

const DownloadCatalog = ({ navigation }: RootStackScreenProps<"我的下载">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const allDownloads = useAppSelector(({downloadVideoReducer}: RootState) => downloadVideoReducer.downloads)


  const renderItem = useCallback(({item, index}:{item: VodDownloadType, index: number}) => {
    return <Text>{item.vod.vod_name}</Text>
  }, [])

  const handleSeeMore = useCallback(() => {
  }, [])

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title="我的下载"
        right={
          <Pressable
            onPress={() => {
              setIsEditing(!isEditing);
            }}
          >
            <Text
              style={{
                ...textVariants.body,
                // padding: 8,
                // opacity: history && history.length > 0 ? 100 : 0,
              }}
            >
              {isEditing ? "取消" : "编辑"}
            </Text>
          </Pressable>
        }
      />
      <View style={styles.contentContainer}>
        {
          allDownloads.length > 0 ? 
            <FlatList
              data={[]}
              renderItem={renderItem}
              keyExtractor={(item, index) => item.vod.vod_id.toString()}
            />
          : 
            <View style={styles.emptyListContainer}>
              <EmptyList 
              description="暂无下载视频" 
              additionalElement={
                <Pressable style={styles.seeMoreBtn} onPress={handleSeeMore}>
                  <Text style={styles.seeMoreBtnText}>查看精彩视频</Text>
                </Pressable>
              }/>
            </View>
        }
      </View>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1, 
  }, 
  emptyListContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  seeMoreBtn: {
    backgroundColor: '#FAC33D', 
    borderRadius: 22, 
    paddingHorizontal: 12, 
    paddingVertical: 6
  },
  seeMoreBtnText: {
    color: '#1D2023', 
    fontSize: 12, 
    fontWeight: '500', 
  }
})

export default DownloadCatalog