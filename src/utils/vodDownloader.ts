import { VodType } from "@type/ajaxTypes";
import { FFmpegKit, FFmpegSession, FFprobeKit, Log, MediaInformationSession, Statistics } from "ffmpeg-kit-react-native";
import { throttle, uniqueId } from "lodash";
import RNFetchBlob from "rn-fetch-blob";
export async function downloadVod(id: string, url: string, onProgress: (progress: {percentage?: number, bytes?:number}) => void, onComplete: any, onError: any, onSessionCreated: ({session}:{session: FFmpegSession}) => void) { 
  await RNFetchBlob.fs.mkdir(RNFetchBlob.fs.dirs.DocumentDir + '/SavedVideos').catch((err) => {})

  const outputFilePath = `${RNFetchBlob.fs.dirs.DocumentDir}/SavedVideos/${id}.mp4`
  const ffmpegScript = `-i ${url} -acodec copy -bsf:a aac_adtstoasc -vcodec copy ${outputFilePath}`
  const details = await FFprobeKit.getMediaInformation(url)
  let duration = 0


  const handleComplete = async (session: FFmpegSession) => {
    // console.log(`Download complete. File at ${outputFilePath}`)
    
    try{
      const stats = await RNFetchBlob.fs.stat(outputFilePath)
      onComplete(stats.size)
    } catch (e) {
      onError()
    }
  }

  const handleLog = (async (log: Log) => {
    try {
      const durationFromString = await (log.getMessage()).match(/^\d+:\d+:\d+.*$/)?.pop()
      if (durationFromString){
        const durationTimeOnly = durationFromString.replace(/\..*/, '')
        const durationTimeArr = durationTimeOnly.split(':')
        if (durationTimeArr){
          duration = +durationTimeArr[0] * 60 * 60 + +durationTimeArr[1] * 60 + +durationTimeArr[2]
        }
      }

      const time = (await log.getMessage()).match(/time=\d+:\d+:\d+/)?.pop()
      const timeArr = time?.replace("time=", "")?.split(':')
      if (!timeArr) return
      const timeInSeconds = +timeArr[0] * 60 * 60 + +timeArr[1] * 60 + +timeArr[2]
      const progressPercentage = timeInSeconds/duration * 100
      onProgress({percentage: progressPercentage})
      // console.debug(`Progress: ${progressPercentage}%`)

    } catch (e) {
      console.error('FFMPEG ERROR')
      onError()
    }


  })

  const handleStatistic = async (stats: Statistics) => {
    onProgress({bytes: stats.getSize()})
  }

  const session = await FFmpegKit.executeAsync(
    ffmpegScript, 
    handleComplete, 
    handleLog, 
    handleStatistic
  )

  onSessionCreated({session})
}

export async function downloadVodImage(vod: VodType){
  const imagePath = RNFetchBlob.fs.dirs.DocumentDir + '/VodImages' + `/pic${vod.vod_id}.png`
  // const urls = [vod.vod_pic]

  if (await RNFetchBlob.fs.exists(imagePath)) return

  try {
    await RNFetchBlob.fs.mkdir(RNFetchBlob.fs.dirs.DocumentDir + '/VodImages').catch((err) => {})
    const res = await RNFetchBlob
      .config({
        path: imagePath
      })
      .fetch('GET', vod.vod_pic_oss ?? vod.vod_pic) 

    
  } catch {
    // TODO : handle error 
  }

}

export function getUrlOfVod(vod: VodType, vodSourceId: number, vodUrlNid: number, vodIsAdult?: boolean) {
  // console.log(vod)
  if (vodIsAdult){
    return vod.vod_play_list.urls
      .find(url => url.nid === vodUrlNid)
      ?.url
  }
  return vod.vod_sources
    .find(source => source.source_id === vodSourceId)?.vod_play_list.urls
    .find(url => url.nid === vodUrlNid)
    ?.url

}