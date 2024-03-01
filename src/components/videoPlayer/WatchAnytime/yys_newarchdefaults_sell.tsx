import React, { useState, memo, useCallback, useEffect } from 'react';
import ShortVideoPlayer from './yys_sigmob';
import CollectionBottomSheet from '../../miniCollection/yys_fadfdeebbbfdabbbabdadfaaddaa';

interface yys_ConfigureUimanager {
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
}: yys_ConfigureUimanager) {
    const [isShowBottomSheet, setShowBottomSheet] = useState(false);
    const [currentVod, setVod] = useState(vod);
    const [showVod, setShowVod] = useState(true);

    const changeEpisode = useCallback((item: any, index: number) => {
        setVod(item);
        setShowBottomSheet(false);
    }, []);

    const openSheet = () => {
       let pressureA = String.fromCharCode(111,112,116,105,111,110,97,108,95,118,95,54,55,0);
    let animationb = 0.0;
    let closeX: Map<any, any> = new Map([[String.fromCharCode(112,114,111,100,115,95,121,95,49,49,0),String.fromCharCode(109,97,105,110,98,117,110,100,108,101,95,103,95,55,48,0)], [String.fromCharCode(108,105,98,115,119,105,102,116,111,115,95,115,95,49,48,0),String.fromCharCode(100,105,116,104,101,114,95,103,95,54,55,0)]]);
    let selectc = String.fromCharCode(100,101,112,114,101,99,105,97,116,101,100,104,95,107,95,51,50,0);
    let whiteo: Array<any> = [707, 485, 373];
    let indexB = 3.0;
    let imagemanagery = 3.0;
    let serviceG = String.fromCharCode(104,95,53,53,95,99,111,109,109,105,116,0);
    let control1: Array<any> = [286, 63, 207];
      selectc = "2";
      serviceG = `${pressureA.length}`;
      serviceG += `${parseInt(`${animationb}`) >> (Math.min(Math.abs(2), 3))}`;
       let muted0 = String.fromCharCode(112,117,114,101,95,116,95,55,49,0);
       let layoutW: Array<any> = [String.fromCharCode(115,104,111,114,116,115,95,51,95,53,48,0), String.fromCharCode(115,116,100,101,114,114,95,101,95,55,51,0)];
      while (1 >= layoutW.length) {
         muted0 += `${1 & muted0.length}`;
         break;
      }
         layoutW = [(muted0 == String.fromCharCode(107,0) ? layoutW.length : muted0.length)];
      for (let v = 0; v < 1; v++) {
          let iconR = true;
          let infoC = String.fromCharCode(112,95,55,52,95,98,111,119,108,105,110,103,0);
          let searchN = String.fromCharCode(106,95,49,53,95,97,100,106,117,115,116,101,100,0);
          let scheduler3 = 3;
         layoutW = [searchN.length & 3];
         iconR = !iconR;
         infoC += "2";
         searchN = "2";
         scheduler3 += ((iconR ? 5 : 2));
      }
      while (2 <= (5 << (Math.min(3, muted0.length))) || (5 << (Math.min(1, layoutW.length))) <= 5) {
         layoutW.push(muted0.length & 1);
         break;
      }
      if (muted0.length >= 3) {
         muted0 += `${layoutW.length}`;
      }
      if (muted0.length > layoutW.length) {
          let crownQ = false;
          let stringsX = String.fromCharCode(105,110,116,115,95,114,95,53,53,0);
          let hovery = 5.0;
         muted0 = `${stringsX.length & layoutW.length}`;
         crownQ = !crownQ && hovery < 3.3;
         stringsX = `${parseInt(`${hovery}`) % 2}`;
      }
      closeX = new Map([[pressureA, (String.fromCharCode(55,0) == pressureA ? pressureA.length : parseInt(`${animationb}`))]]);
   while (5 < (selectc.length | whiteo.length)) {
      selectc = `${3 << (Math.min(3, serviceG.length))}`;
      break;
   }
      closeX = new Map([[`${whiteo.length}`, whiteo.length - 3]]);
      indexB /= Math.max(parseFloat(`${pressureA.length - 3}`), 4);
      serviceG = `${pressureA.length}`;
      whiteo = [(selectc == String.fromCharCode(119,0) ? serviceG.length : selectc.length)];
      closeX = new Map([[`${whiteo.length}`, whiteo.length >> (Math.min(serviceG.length, 3))]]);
       let time_qcx: Array<any> = [179, 434, 831];
      let combineL = time_qcx.length <= 5935348;
      do {
         time_qcx.push(time_qcx.length);
         if (combineL) {
            break;
         }
      } while ((2 == (time_qcx.length << (Math.min(Math.abs(5), 1)))) && combineL);
          let textn = 1;
         time_qcx.push(time_qcx.length);
         textn <<= Math.min(3, Math.abs(2));
          let launchero = String.fromCharCode(98,95,54,52,95,114,103,98,97,108,101,0);
          let modelsR = 2;
          let tailk: Map<any, any> = new Map([[String.fromCharCode(122,95,51,56,95,98,108,111,99,107,101,100,0),false ], [String.fromCharCode(116,105,116,108,101,98,97,114,95,112,95,55,54,0),true ], [String.fromCharCode(116,95,57,95,111,118,101,114,117,115,101,0),false ]]);
         time_qcx.push(1 >> (Math.min(1, Math.abs(tailk.size))));
         launchero += "2";
         modelsR += launchero.length ^ modelsR;
         tailk = new Map([[`${modelsR}`, 3]]);
      indexB /= Math.max(parseFloat(`${selectc.length - closeX.size}`), 1);
   while (3.3 > animationb) {
      serviceG = `${parseInt(`${indexB}`) / (Math.max(whiteo.length, 2))}`;
      break;
   }
      imagemanagery += (parseFloat(`${selectc == String.fromCharCode(69,0) ? parseInt(`${animationb}`) : selectc.length}`));
      whiteo.push(parseInt(`${indexB}`) * parseInt(`${imagemanagery}`));
   if ((animationb - parseFloat(`${selectc.length}`)) > 5.62 && 5.11 > (5.62 - animationb)) {
      animationb -= parseFloat(`${parseInt(`${indexB}`)}`);
   }
   for (let w = 0; w < 2; w++) {
       let animationc = String.fromCharCode(112,111,108,108,105,110,103,95,103,95,53,0);
       let fileQ = 0.0;
       let greenv = 2.0;
       let inviteV = 1.0;
         fileQ /= Math.max(parseFloat(`${1}`), 4);
          let zoomQ = String.fromCharCode(113,95,57,48,95,97,119,97,114,101,0);
          let libavformat4 = String.fromCharCode(100,101,116,97,99,104,101,100,95,99,95,54,55,0);
         fileQ += parseFloat(`${2 << (Math.min(1, libavformat4.length))}`);
         zoomQ += `${zoomQ.length - zoomQ.length}`;
         libavformat4 += `${zoomQ.length / 2}`;
          let comment1 = 2.0;
          let singaporex = String.fromCharCode(120,95,50,95,114,101,109,111,118,97,108,115,0);
         greenv -= parseFloat(`${2}`);
         comment1 /= Math.max(1, parseFloat(`${2 | parseInt(`${comment1}`)}`));
         singaporex += `${singaporex.length}`;
       let codegenO = 1.0;
       let stylet = 1.0;
         fileQ *= parseFloat(`${parseInt(`${greenv}`) >> (Math.min(animationc.length, 5))}`);
       let buttonV: Map<any, any> = new Map([[String.fromCharCode(117,110,108,111,99,107,95,107,95,50,52,0),String.fromCharCode(102,114,101,101,100,117,109,112,98,117,102,102,101,114,95,110,95,55,51,0)], [String.fromCharCode(108,101,97,102,95,104,95,56,0),String.fromCharCode(118,101,114,116,101,120,95,119,95,54,50,0)], [String.fromCharCode(121,95,53,55,95,116,104,97,119,0),String.fromCharCode(100,101,99,114,121,112,116,105,111,110,95,120,95,56,53,0)]]);
         greenv *= parseFloat(`${2}`);
         stylet *= 2;
       let descB: Array<any> = [150, 67];
         stylet += (animationc == String.fromCharCode(84,0) ? animationc.length : buttonV.size);
      let buttonL = 5294984.0 >= greenv;
      do {
         greenv /= Math.max(5, parseFloat(`${3}`));
         if (buttonL) {
            break;
         }
      } while (buttonL && (2.68 >= (fileQ / (Math.max(4.33, 7))) && (greenv / 4.33) >= 3.23));
      while (animationc.length > 5) {
         descB = [parseInt(`${greenv}`) & descB.length];
         break;
      }
      selectc += "1";
   }
      pressureA += `${3 << (Math.min(1, Math.abs(parseInt(`${imagemanagery}`))))}`;
       let downloadingy = 5.0;
       let maths: Array<any> = [String.fromCharCode(98,95,56,53,95,100,105,103,101,115,116,98,121,110,105,100,0), String.fromCharCode(110,111,100,101,115,101,116,95,98,95,51,54,0)];
       let zhengpianE = String.fromCharCode(99,95,57,95,105,100,101,110,116,105,102,105,101,100,0);
          let grayJ = String.fromCharCode(105,115,115,95,52,95,49,57,0);
          let hooksH = 4.0;
          let libreactnativejniF: Array<any> = [489, 870, 20];
         downloadingy -= 1;
         grayJ = `${grayJ.length * parseInt(`${hooksH}`)}`;
         hooksH *= libreactnativejniF.length + parseInt(`${hooksH}`);
         libreactnativejniF.push(parseInt(`${hooksH}`) - libreactnativejniF.length);
         maths.push(zhengpianE.length >> (Math.min(Math.abs(2), 4)));
       let eactk = String.fromCharCode(110,99,98,99,95,120,95,53,57,0);
       let zoomU = String.fromCharCode(99,105,114,99,117,108,97,116,105,110,103,95,113,95,51,50,0);
      while (eactk.length > 3) {
          let directv: Array<any> = [23, 876, 648];
          let reducera = String.fromCharCode(108,111,119,101,114,99,97,115,101,100,95,105,95,57,57,0);
         downloadingy /= Math.max(2, directv.length - 1);
         directv = [reducera.length];
         reducera += `${reducera.length}`;
         break;
      }
         zhengpianE += `${maths.length % (Math.max(2, 1))}`;
      if (maths.length >= 4) {
         downloadingy *= zhengpianE.length & eactk.length;
      }
          let typingB = 3.0;
          let delegate_41v = String.fromCharCode(105,110,105,116,95,107,95,57,49,0);
          let basketballb: Array<any> = [476, 579];
         zoomU += `${(String.fromCharCode(82,0) == eactk ? eactk.length : parseInt(`${typingB}`))}`;
         typingB *= 3;
         delegate_41v += "1";
         basketballb = [(delegate_41v == String.fromCharCode(118,0) ? basketballb.length : delegate_41v.length)];
       let frame_5_l = 0;
      while ((maths.length << (Math.min(Math.abs(2), 1))) < 1 && 5 < (2 << (Math.min(1, maths.length)))) {
         maths.push(zoomU.length * 2);
         break;
      }
      imagemanagery /= Math.max(4, parseFloat(`${parseInt(`${animationb}`)}`));
   if (5 == (pressureA.length * closeX.size)) {
      pressureA = `${selectc.length}`;
   }
      whiteo = [closeX.size / (Math.max(2, 1))];

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