import { VodType } from "@type/ajaxTypes";
import { FFmpegKit, FFmpegKitConfig, FFmpegSession, FFmpegSessionCompleteCallback, FFprobeKit, Level, Log, MediaInformationSession, Statistics } from "ffmpeg-kit-react-native";
import { throttle, uniqueId } from "lodash";
import RNFetchBlob from "rn-fetch-blob";
import {getVideoDuration} from 'react-native-video-duration'

async function ffmpegDownload(outputPath: string, ffmpegCommand: string ,url: string, onProgress: any, onComplete: any, onError: any, onSessionCreated: any){
  const details = await FFprobeKit.getMediaInformation(url)
  let duration = 0
  let completionPercentage = 0; 


  const handleComplete = async (session: FFmpegSession) => {
    // console.log(`Download complete. File at ${outputFilePath}`)
    try{
      const stats = await RNFetchBlob.fs.stat(outputPath)
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
      completionPercentage = Math.round(progressPercentage)
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
    ffmpegCommand, 
    handleComplete, 
    handleLog, 
    handleStatistic
  )

  onSessionCreated({session})
}

export async function downloadVod(id: string, url: string, onProgress: (progress: {percentage?: number, bytes?:number}) => void, onComplete: any, onError: any, onSessionCreated: ({session}:{session: FFmpegSession}) => void) { 
  await RNFetchBlob.fs.mkdir(RNFetchBlob.fs.dirs.DocumentDir + '/SavedVideos').catch((err) => {})

  const outputFilePath = `${RNFetchBlob.fs.dirs.DocumentDir}/SavedVideos/${id}.mp4`
  const ffmpegScript = `-i ${url} -acodec copy -bsf:a aac_adtstoasc -vcodec copy ${outputFilePath}`

  ffmpegDownload(outputFilePath, ffmpegScript, url, onProgress, onComplete, onError, onSessionCreated)
  
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

export async function pauseDownloadVod(id:string, onPause: any) {
  // TODO : stop FFMPEG session
  onPause();

  const originalFilePath = `${RNFetchBlob.fs.dirs.DocumentDir}/SavedVideos/${id}.mp4`

  await RNFetchBlob.fs.mkdir(RNFetchBlob.fs.dirs.DocumentDir + '/PartialDownload').catch((err) => {})

  const outputFolder = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${id}`

  await RNFetchBlob.fs.mkdir(outputFolder).catch((err) => {})

  const segmentName = `${(await RNFetchBlob.fs.ls(outputFolder)).length}.mp4`

  if (await RNFetchBlob.fs.exists(originalFilePath)){
    // first time press pause 

    // move file to PartialDownload 
    RNFetchBlob.fs.mv(originalFilePath, `${outputFolder}/${segmentName}`)
  }

}

export async function resumeDownloadVod(id: string, url:string, onProgress: any, onComplete: any, onError: any, onSessionCreated: any) {
  const originalFilePath = `${RNFetchBlob.fs.dirs.DocumentDir}/SavedVideos/${id}.mp4`
  const outputFolder = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${id}`

  if (!(await RNFetchBlob.fs.exists(outputFolder))){
    // partial downloads for this video does not exist.. 
    // maybe need to throw error 
    return 
  }
  const segmentName = `${(await RNFetchBlob.fs.ls(outputFolder)).length}.mp4`

  const outputFolderFiles = await RNFetchBlob.fs.ls(outputFolder)
  let startTime = 0
  try{
    for (const file of outputFolderFiles) {
      startTime += (await getVideoDuration(`file://${outputFolder}/${file}`)).valueOf()
    }
    
    const ffmpegCommand = `-ss ${startTime} -i ${url} -acodec copy -bsf:a aac_adtstoasc -vcodec copy ${outputFolder}/${segmentName}`
  
    ffmpegDownload(
      `${outputFolder}/${segmentName}`, 
      ffmpegCommand, 
      url, 
      onProgress, 
      onComplete, 
      onError, 
      onSessionCreated
    )
  } catch {
    onError()
  }

}

export async function concatPartialVideos(id: string, onComplete: any, onError: any,) {
  const inputFolder = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${id}`
  if (!(await RNFetchBlob.fs.exists(inputFolder))){
    // partial downloads for this video does not exist.. 
    // maybe need to throw error 
    return 
  }
  const listTxt = (await RNFetchBlob.fs.ls(inputFolder)).sort().map(path => `file '${inputFolder}/${path}'`).join('\n')
  const listTxtPath = `${inputFolder}/list.txt`
  const outputFolder = `${RNFetchBlob.fs.dirs.DocumentDir}/SavedVideos`
  const ffmpegConcatCommand = `-f concat -safe 0 -i ${listTxtPath} -c copy ${outputFolder}/${id}.mp4`
  await RNFetchBlob.fs.writeFile(listTxtPath, listTxt)
  await RNFetchBlob.fs.mkdir(outputFolder).catch(err => {})

  const handleComplete = async () => {
    try{
      RNFetchBlob.fs.unlink(inputFolder)
      onComplete(); 
    } catch (e) {
      onError()
      // TODO : Enhancement: can view what are the logs, identify error string, trigger on error. Right now technically will not have errors
    }
    
  }

  FFmpegKit.executeAsync(
    ffmpegConcatCommand, 
    handleComplete, 
    () => {}, //* onLog, if wan do error checking probably is here
    () => {} //* onStat, probably no use.. 
  )
}