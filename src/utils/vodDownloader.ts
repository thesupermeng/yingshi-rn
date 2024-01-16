import { FFmpegKit, FFmpegSession, FFprobeKit, Log, MediaInformationSession, Statistics } from "ffmpeg-kit-react-native";
import { throttle, uniqueId } from "lodash";
import RNFetchBlob from "rn-fetch-blob";

export async function downloadVod(url: string) { 
  const uuid = uniqueId()
  const outputFilePath = `${RNFetchBlob.fs.dirs.DocumentDir}/SavedVideos/${uuid}.mp4`
  const ffmpegScript = `-i ${url} -acodec copy -bsf:a aac_adtstoasc -vcodec copy ${outputFilePath}`
  const details = await FFprobeKit.getMediaInformation(url)
  let duration = 0


  const handleComplete = async (session: FFmpegSession) => {
    console.log(`Download complete. File at ${outputFilePath}`)
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
      console.debug(`Progress: ${progressPercentage}%`)

    } catch (e) {
      console.error('FFMPEG ERROR')
    }


  })

  const handleStatistic = async (stats: Statistics) => {
  }

  await FFmpegKit.executeAsync(
    ffmpegScript, 
    handleComplete, 
    handleLog, 
    handleStatistic
  )
}