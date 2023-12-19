import { MiniVideo } from "@type/ajaxTypes"
import { DOWNLOAD_BATCH_SIZE, TOTAL_VIDEO_TO_DOWNLOAD } from "@utility/constants"
import chunk from "lodash/chunk"
import RNFetchBlob from "rn-fetch-blob"

async function downloadVod(vod: MiniVideo){
  const fileLocation = RNFetchBlob.fs.dirs.DocumentDir + `/videocache/${vod.mini_video_id}.mp4`
  const temp = RNFetchBlob.fs.dirs.DocumentDir + `/partial/${vod.mini_video_id}`

  const fileExist = RNFetchBlob.fs.exists(fileLocation)

  return fileExist.then((exist) => {
    if (exist){
      // console.debug('file exist!')
    } else {
      return RNFetchBlob
      .config({
        path: temp
      })
      .fetch('GET', vod.mini_video_origin_video_url)
      .then((res) =>{
        // console.debug('finished download', res.path())
        return RNFetchBlob.fs.mv(res.path(), fileLocation)
      })
    }
  })
}

export const downloadFirstNVid = async (n:number, vods: MiniVideo[]) => {
  // check if date file exist 
  // if not exist, create
  // if exist, check if today
  // if not today, delete folder 
  // download
  const tempfolder = RNFetchBlob.fs.dirs.DocumentDir + `/partial/`
  const cacheFolder = RNFetchBlob.fs.dirs.DocumentDir + '/videocache/'

  if (await RNFetchBlob.fs.exists(cacheFolder) && (await RNFetchBlob.fs.ls(cacheFolder)).length > TOTAL_VIDEO_TO_DOWNLOAD) {
    // already downloaded required amount
    // console.debug('already done')
    return 
  }
  if ((await RNFetchBlob.fs.ls).length >= 300) return // video exceed limit 

  if (await RNFetchBlob.fs.exists(tempfolder)){
    await RNFetchBlob.fs.unlink(tempfolder)
  }

  const todayDateString = new Date().toDateString().replace(/\s/g, "")
  const dateFile = RNFetchBlob.fs.dirs.DocumentDir + `/videocache/bGFzdHNhdmU=` // 'lastsave' convert to utf8.. 
  const dateFileExist = await RNFetchBlob.fs.exists(dateFile)
  if (!dateFileExist){
    RNFetchBlob.fs.writeFile(dateFile, todayDateString, 'utf8')
  }
  else {
    const fileContent = await RNFetchBlob.fs.readFile(dateFile, 'utf8')
    if (fileContent !== todayDateString){
      await RNFetchBlob.fs.unlink(cacheFolder)
    } 
  }
  
  const NChunks = chunk(vods, DOWNLOAD_BATCH_SIZE)
  for (const chunk of NChunks) {
    // console.debug('downloading chunk')
    await Promise.all(
      chunk.map(vod => downloadVod(vod))
    )
  }

}

const deleteCachedVideos = async () => {
  const excludedIds = await getExcludedIds()

  for (const id of excludedIds) {
    await deleteFile(id)
  }


}

const deleteFile = async (id: string) => {
  const cacheFolderPath = RNFetchBlob.fs.dirs.DocumentDir + '/videocache/'
  const targetFilePath = cacheFolderPath + `${id}.mp4` // assuming file is mp4

  if (!(await RNFetchBlob.fs.exists(targetFilePath))) return // do nothing if file not exist
  await RNFetchBlob.fs.unlink(targetFilePath)

} 

export const addIdToCache = async (id: string) => {
  const watchedVidsPath = RNFetchBlob.fs.dirs.DocumentDir + '/watched'
  const todayStr = new Date().toISOString().slice(0, 10)

  if (!(await RNFetchBlob.fs.exists(watchedVidsPath))) {
    await RNFetchBlob.fs.createFile(watchedVidsPath, "", 'utf8')
  }
  
  const entry = `${id}|${todayStr}\n`
  await RNFetchBlob.fs.appendFile(watchedVidsPath, entry, 'utf8')
}

export const getExcludedIds = async () : Promise<string[]> => {
  const watchedVidsPath = RNFetchBlob.fs.dirs.DocumentDir + '/watched'

  if (!(await RNFetchBlob.fs.exists(watchedVidsPath))) return [] // if file not exist, return empty array

  const watchedVids = (await RNFetchBlob.fs.readFile(watchedVidsPath, 'utf8')).split('\n')
  
  const today = new Date(); 
  today.setHours(0,0,0,0);

  return watchedVids
    .map(vid => {
      const [id, dateStr] = vid.split('|');
      const date = new Date(dateStr);
      if (date < today) {
        return id;
      }
    })
    .filter(item => item != undefined);
}