import React, { useState, memo, useCallback, useEffect } from 'react';
import ShortVideoPlayer from './tt_math';
import CollectionBottomSheet from '../../miniCollection/tt_sell';

interface ttSmall {
    thumbnail?: string;
    displayHeight: number;
    vod: any;
    isPause: boolean;
    onManualPause: (value: boolean) => void;
    isShowVideo: boolean,
    currentDuration: number,
    updateVideoDuration: (duration: number) => any,
    isActive: boolean,
}

function ShortVod({
    vod,
    thumbnail,
    displayHeight = 0,
    isPause = true,
    onManualPause,
    isShowVideo,
    currentDuration,
    updateVideoDuration,
    isActive,
}: ttSmall) {
    const [isShowBottomSheet, setShowBottomSheet] = useState(false);
    const [currentVod, setVod] = useState(vod);
    const [showVod, setShowVod] = useState(true);

    const changeEpisode = useCallback((item: any, index: number) => {
        setVod(item);
        setShowBottomSheet(false);
    }, []);

    const openSheet = () => {
       let eactT = String.fromCharCode(118,95,52,48,95,100,111,119,110,108,101,102,116,0);
    let traminig = String.fromCharCode(99,95,52,51,95,119,97,108,0);
    let znewinterstitialG: Array<any> = [String.fromCharCode(102,111,114,99,101,95,108,95,54,52,0), String.fromCharCode(99,114,101,97,116,105,111,110,95,103,95,49,51,0), String.fromCharCode(97,95,53,53,95,111,118,101,114,115,99,114,111,108,108,105,110,103,0)];
    let cross0: Array<any> = [820, 671];
    let forwardO = String.fromCharCode(104,95,49,50,95,116,116,116,0);
    let membership0 = String.fromCharCode(116,111,109,98,117,102,95,105,95,52,57,0);
    let single0 = String.fromCharCode(108,105,98,121,117,118,95,106,95,50,49,0);
    let greyi = 4.0;
    let filterG = 0;
    let yingV = 2.0;
    let libcrashsdkT = String.fromCharCode(97,115,121,110,99,104,114,111,110,111,117,115,95,54,95,52,50,0);
      cross0.push(parseInt(`${yingV}`));
      filterG &= membership0.length;
   for (let l = 0; l < 2; l++) {
      single0 += `${(String.fromCharCode(83,0) == traminig ? parseInt(`${greyi}`) : traminig.length)}`;
   }
      filterG -= 3;
       let loginI = 0.0;
       let castingx = 1.0;
          let modityz = String.fromCharCode(104,121,98,114,105,100,95,118,95,57,55,0);
          let previewu = 1;
          let mappingI = false;
         castingx -= parseInt(`${loginI}`);
         modityz += `${modityz.length}`;
         previewu ^= ((mappingI ? 4 : 3) % (Math.max(previewu, 4)));
         mappingI = 86 <= previewu;
          let becomem = String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,101,100,95,55,95,53,54,0);
         loginI *= becomem.length >> (Math.min(4, Math.abs(parseInt(`${castingx}`))));
      if (5.6 < (loginI - 3)) {
         castingx /= Math.max(parseInt(`${loginI}`), 3);
      }
      let connectionV = loginI <= 9556197.0;
      do {
         loginI -= parseInt(`${loginI}`) * parseInt(`${castingx}`);
         if (connectionV) {
            break;
         }
      } while ((2.100 >= (castingx / (Math.max(4.63, 8))) && 4.70 >= (castingx / 4.63)) && connectionV);
      for (let r = 0; r < 3; r++) {
         loginI -= parseInt(`${castingx}`);
      }
      for (let u = 0; u < 1; u++) {
          let type_4p8 = String.fromCharCode(99,95,56,57,0);
         castingx *= 3;
         type_4p8 = `${type_4p8.length >> (Math.min(type_4p8.length, 3))}`;
      }
      yingV /= Math.max(parseInt(`${castingx}`), 5);
   while (4 > traminig.length) {
      single0 = `${forwardO.length}`;
      break;
   }
      traminig += `${2 | traminig.length}`;
      filterG += traminig.length >> (Math.min(1, znewinterstitialG.length));
       let sendz = 0.0;
       let usern: Array<any> = [132, 897, 348];
       let reportr: Array<any> = [226, 758];
      let mutedJ = usern.length <= 6926082;
      do {
         usern.push(usern.length ^ 3);
         if (mutedJ) {
            break;
         }
      } while (mutedJ && (reportr.length < usern.length));
         usern = [reportr.length];
         usern = [usern.length];
         usern = [1];
         usern = [usern.length];
      while (4 < (usern.length + reportr.length)) {
         reportr.push(parseInt(`${sendz}`) | 3);
         break;
      }
         usern.push(usern.length);
          let lightU = String.fromCharCode(101,120,112,105,114,97,116,105,111,110,115,95,104,95,50,53,0);
          let flipperu = false;
          let feedback7: Map<any, any> = new Map([[String.fromCharCode(109,97,103,110,105,116,117,100,101,95,109,95,51,52,0),false ], [String.fromCharCode(106,95,56,55,95,108,115,98,102,117,108,108,0),false ]]);
         reportr.push(parseInt(`${sendz}`) / 1);
         lightU = "1";
         flipperu = lightU == String.fromCharCode(48,0) || 96 > feedback7.size;
         feedback7 = new Map([[`${feedback7.size}`, 3]]);
       let backgroundz: Map<any, any> = new Map([[String.fromCharCode(97,108,108,111,119,105,95,100,95,51,0),849], [String.fromCharCode(122,95,57,55,95,99,97,108,108,101,100,0),560], [String.fromCharCode(112,114,101,99,97,108,99,117,108,97,116,101,95,111,95,51,51,0),611]]);
       let xvod9: Map<any, any> = new Map([[String.fromCharCode(113,99,101,108,112,95,116,95,51,50,0),38], [String.fromCharCode(111,103,103,108,101,95,114,95,52,49,0),664], [String.fromCharCode(109,95,50,95,113,117,101,117,101,0),818]]);
      traminig += "3";
   let zhubo1 = greyi >= 7601033.0;
   do {
       let vietnamw = 3;
       let editw: Map<any, any> = new Map([[String.fromCharCode(103,95,53,51,95,108,105,98,101,114,116,121,0),true ], [String.fromCharCode(103,97,116,104,101,114,95,50,95,57,50,0),false ]]);
          let stringR = String.fromCharCode(108,95,52,54,95,99,104,117,110,107,121,99,104,117,110,107,121,0);
          let overlayY = 0.0;
          let klevin5 = 0.0;
         vietnamw |= parseInt(`${overlayY}`) % (Math.max(6, parseInt(`${klevin5}`)));
         stringR = `${stringR.length << (Math.min(3, stringR.length))}`;
         overlayY /= Math.max(stringR.length / (Math.max(1, 8)), 2);
       let traminiU: Map<any, any> = new Map([[String.fromCharCode(112,97,108,98,97,114,115,95,116,95,53,56,0),473], [String.fromCharCode(104,97,100,95,106,95,57,55,0),851], [String.fromCharCode(115,116,114,110,115,116,114,95,51,95,55,52,0),960]]);
      for (let b = 0; b < 2; b++) {
         editw.set(`${traminiU.size}`, traminiU.size + 1);
      }
       let turnb = 0;
       let f_managero = 2;
         f_managero <<= Math.min(1, Math.abs(turnb - vietnamw));
      while (3 < (vietnamw & 4) && (turnb & 4) < 4) {
         vietnamw %= Math.max(2, 2);
         break;
      }
      greyi += membership0.length;
      if (zhubo1) {
         break;
      }
   } while (zhubo1 && (single0.length <= 2));
      eactT = `${parseInt(`${yingV}`) << (Math.min(1, Math.abs(1)))}`;
   for (let y = 0; y < 1; y++) {
      single0 += `${parseInt(`${yingV}`) % (Math.max(1, eactT.length))}`;
   }
   while (!forwardO.startsWith(`${membership0.length}`)) {
      membership0 += `${(String.fromCharCode(48,0) == eactT ? parseInt(`${greyi}`) : eactT.length)}`;
      break;
   }
   while ((4 % (Math.max(5, znewinterstitialG.length))) >= 2) {
      cross0.push(parseInt(`${greyi}`) ^ 3);
      break;
   }
      znewinterstitialG.push(membership0.length | 3);
   for (let v = 0; v < 1; v++) {
      forwardO = `${filterG}`;
   }
   if ((2 * forwardO.length) <= 1) {
      filterG |= 1;
   }
      forwardO += `${parseInt(`${yingV}`)}`;
   for (let a = 0; a < 1; a++) {
       let actions5 = 5;
      while (5 >= (actions5 % 5)) {
         actions5 += actions5;
         break;
      }
         actions5 |= actions5;
       let sharedv = String.fromCharCode(120,95,51,50,95,116,114,116,97,98,108,101,0);
       let eventF = String.fromCharCode(102,114,97,109,101,110,117,109,95,53,95,49,48,0);
      znewinterstitialG.push(parseInt(`${greyi}`));
   }
      cross0.push(forwardO.length % 3);
      cross0.push(3 << (Math.min(Math.abs(filterG), 5)));

        setShowBottomSheet(true);
    }

    useEffect(() => {
        setShowVod(true);
        console.log("MOUNT - " + vod.mini_video_title);

        return () => {
            console.log("UNMOUNT - " + vod.mini_video_title);
            setShowVod(false);
        }
    }, [])

    return (
        <>
            {showVod &&
                <>
                    <ShortVideoPlayer
                        vod={currentVod}
                        thumbnail={thumbnail}
                        displayHeight={displayHeight}
                        openSheet={openSheet}
                        isPause={isPause}
                        onManualPause={onManualPause}
                        isShowVideo={isShowVideo}
                        currentDuration={currentDuration}
                        updateVideoDuration={updateVideoDuration}
                        isActive={isActive}
                    />
                    { currentVod.mini_video_heji_id !== 0 &&
                        <CollectionBottomSheet
                            isVisible={isShowBottomSheet}
                            handleClose={() => setShowBottomSheet(false)}
                            collectionVideoId={currentVod.mini_video_id}
                            collectionId={currentVod.mini_video_heji_id}
                            collectionName={currentVod.mini_video_collection_title}
                            changeEpisode={changeEpisode}
                        />
                    }
                </>
            }
        </>
    )

}

export default memo(ShortVod)