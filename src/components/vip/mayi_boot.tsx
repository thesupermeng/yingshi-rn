import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native';
import { VipMember } from './mayi_iconschedule';
import { promoMembershipModel, zfModel } from '@type/mayi_incident_custom';
import { VipZf } from './mayi_header';
import { useEffect, useRef, useState } from 'react';
import { mayi_Gift } from '@models/mayi_libjsinspector';
import { FlatList } from 'react-native-gesture-handler';
import { IS_IOS, UMENG_CHANNEL } from '@utility/mayi_middleware_apps';

interface mayi_GoogleViews {
  userState: mayi_Gift;
  membershipProduct: Array<promoMembershipModel>;
  selectedMembership: promoMembershipModel;
  onMembershipSelect: (selected: promoMembershipModel) => void;
  zfOptions: Array<zfModel>;
  selectedZf: string;
  onZfSelect: (zf: string) => void;
  isRefreshing: boolean;
}

export const VipCard = ({
  userState,
  membershipProduct,
  selectedMembership,
  onMembershipSelect,
  zfOptions,
  selectedZf,
  onZfSelect,
  isRefreshing,
}: mayi_GoogleViews) => {
  const planRef = useRef<FlatList>(null);
  const screenWidth = Dimensions.get("window").width;
  
  const getItemLayout = (data: any, index: number) => { return { length: screenWidth, offset: screenWidth * index, index, }; };
  const setListPosition = () => {
       let videojsn: Map<any, any> = new Map([[String.fromCharCode(112,105,120,102,109,116,115,95,51,95,57,53,0),String.fromCharCode(115,112,108,97,116,95,98,95,54,49,0)], [String.fromCharCode(117,95,54,49,95,112,111,108,108,115,0),String.fromCharCode(112,95,53,55,95,116,104,114,101,97,100,103,114,111,117,112,0)], [String.fromCharCode(121,95,49,49,95,101,114,97,115,117,114,101,0),String.fromCharCode(100,95,49,48,48,95,99,111,109,101,0)]]);
    let buildJ = 2.0;
    let detailsA: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,112,111,115,101,95,108,95,49,56,0),true ], [String.fromCharCode(109,97,110,117,97,108,95,49,95,50,51,0),true ], [String.fromCharCode(108,95,53,95,116,111,112,109,111,115,116,0),true ]]);
    let moonn = 2;
    let streamingb = String.fromCharCode(112,95,50,48,95,97,117,116,111,0);
    let applicationi = String.fromCharCode(116,115,101,113,95,106,95,52,55,0);
    let searchJ = 0;
    let shootd: Array<any> = [963, 189];
    let register_0nL = 4.0;
    let scorepopsoundg = 1.0;
    let mapbuffer3 = String.fromCharCode(114,97,98,105,110,95,121,95,49,48,48,0);
    let mintegral8: Array<any> = [434, 509];
    let selected3 = 5.0;
    let whiteanimationliveR: Array<any> = [866, 25];
      videojsn.set(`${register_0nL}`, shootd.length);
       let lights = 2.0;
       let crowno = 1.0;
       let phoneK: Map<any, any> = new Map([[String.fromCharCode(108,95,57,54,95,104,105,103,104,108,105,103,104,116,0),562], [String.fromCharCode(109,101,109,98,101,114,95,56,95,49,55,0),372]]);
         crowno *= parseFloat(`${3 & parseInt(`${crowno}`)}`);
          let reactnavigationZ = true;
         crowno += (parseFloat(`${parseInt(`${lights}`) >> (Math.min(2, Math.abs((reactnavigationZ ? 5 : 1))))}`));
         crowno *= parseFloat(`${3}`);
      let greenL = crowno <= 8110967.0;
      do {
          let inouttargetred4 = String.fromCharCode(99,95,53,52,95,115,117,114,102,97,99,101,115,0);
          let success4 = String.fromCharCode(98,105,116,112,97,99,107,101,100,95,118,95,56,50,0);
         crowno -= parseFloat(`${2 ^ parseInt(`${crowno}`)}`);
         inouttargetred4 += `${inouttargetred4.length / (Math.max(3, 1))}`;
         success4 += `${3 ^ inouttargetred4.length}`;
         if (greenL) {
            break;
         }
      } while (greenL && (phoneK.get(`${crowno}`) != null));
      if ((phoneK.size / 5) <= 2 || 1.73 <= (3.39 * lights)) {
         phoneK.set(`${crowno}`, parseInt(`${crowno}`) ^ phoneK.size);
      }
         lights += parseInt(`${crowno}`) & 1;
      for (let d = 0; d < 3; d++) {
          let applicationR: Array<any> = [956, 124, 607];
          let libyogaV = false;
         crowno *= parseFloat(`${parseInt(`${lights}`) % 1}`);
         applicationR.push(applicationR.length);
         libyogaV = !libyogaV;
      }
         phoneK.set(`${crowno}`, parseInt(`${crowno}`));
      for (let k = 0; k < 3; k++) {
         phoneK = new Map([[`${crowno}`, parseInt(`${lights}`)]]);
      }
      buildJ *= parseFloat(`${streamingb.length}`);
       let downloadingI = false;
       let inouttargetredd = String.fromCharCode(103,102,109,117,108,95,101,95,52,50,0);
      let styleo = inouttargetredd.length >= 5140557;
      do {
         inouttargetredd += `${(inouttargetredd == String.fromCharCode(78,0) ? inouttargetredd.length : (downloadingI ? 3 : 4))}`;
         if (styleo) {
            break;
         }
      } while (styleo && (2 == inouttargetredd.length || !downloadingI));
      let videojs9 = downloadingI ? !downloadingI : downloadingI;
      do {
         downloadingI = !downloadingI;
         if (videojs9) {
            break;
         }
      } while (videojs9 && (inouttargetredd.length >= 2));
          let mbbannerT = true;
          let sinax = String.fromCharCode(114,95,50,49,95,112,114,101,118,111,117,115,0);
         inouttargetredd = `${inouttargetredd.length}`;
         mbbannerT = !mbbannerT;
         sinax = `${((mbbannerT ? 2 : 3) & 3)}`;
          let baselineK: Array<any> = [483, 582, 924];
         inouttargetredd = `${2 & inouttargetredd.length}`;
         baselineK.push(2 + baselineK.length);
         inouttargetredd += `${((downloadingI ? 3 : 5) * 3)}`;
          let videoq = 2.0;
          let targetd = String.fromCharCode(109,101,109,109,103,114,95,54,95,52,54,0);
          let panglek = String.fromCharCode(114,95,49,51,95,99,111,112,121,105,110,103,0);
         inouttargetredd += `${(parseInt(`${videoq}`) | (downloadingI ? 2 : 2))}`;
         videoq += panglek.length - 3;
         targetd += "1";
         panglek += "1";
      searchJ |= streamingb.length;
   if (streamingb.startsWith(applicationi)) {
      streamingb = `${1 % (Math.max(1, videojsn.size))}`;
   }
   for (let e = 0; e < 1; e++) {
      buildJ /= Math.max(1, parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${register_0nL}`)), 3))}`));
   }
   if (4 >= (videojsn.size ^ 4) && (4 ^ videojsn.size) >= 5) {
       let condensedk = 4.0;
       let libavfilterx: Map<any, any> = new Map([[String.fromCharCode(112,114,101,102,101,114,101,110,99,101,115,95,51,95,54,51,0),945], [String.fromCharCode(109,97,116,99,104,101,100,95,48,95,55,48,0),834], [String.fromCharCode(112,115,115,104,95,54,95,50,52,0),441]]);
      for (let o = 0; o < 2; o++) {
         condensedk -= libavfilterx.size & 3;
      }
       let championU = String.fromCharCode(117,95,56,55,95,102,97,116,101,0);
       let iconsaveimageq = String.fromCharCode(115,99,97,110,120,95,105,95,56,50,0);
      for (let m = 0; m < 2; m++) {
         libavfilterx.set(championU, parseInt(`${condensedk}`) + 3);
      }
         condensedk *= libavfilterx.size;
         iconsaveimageq = `${iconsaveimageq.length}`;
      videojsn = new Map([[`${libavfilterx.size}`, shootd.length >> (Math.min(1, Math.abs(libavfilterx.size)))]]);
   }

    planRef?.current?.scrollToIndex({
    
      index: 0,
      animated: true,
      viewPosition: 0,
      
    });

  };

  useEffect(() => {
    if (isRefreshing == false) {
      console.log(false)
      setTimeout(() => {setListPosition()}, 200); 
    }
  }, [isRefreshing]);
  
  return (
    <View
      style={{
        flexDirection: 'column',
      
      }}>

      { }
      <FlatList
        ref={planRef}
        horizontal={true}
        
        getItemLayout={getItemLayout}
        onScrollToIndexFailed={() => { }}
        contentContainerStyle={styles.membershipContainer}
        showsHorizontalScrollIndicator={false}
        data={membershipProduct}
        keyExtractor={(product) => product.productId}
        renderItem={({ item, index }) => (
          <VipMember
            key={index}
            membershipPlan={item}
            isSelected={selectedMembership && selectedMembership.productId === item.productId}
            onSelect={onMembershipSelect} />
        )}
      />

      { }
      {(UMENG_CHANNEL !== "GOOGLE_PLAY" || IS_IOS) && zfOptions.length > 0 &&
        <View
          style={{
            marginBottom: 15,
            gap: 15,
          }}>
          <Text
            style={styles.label}>
            支付方式
          </Text>
          <View style={{ gap: 10 }}>
            {zfOptions.map((option) => (
              <VipZf
                key={option.payment_type_code}
                zfOption={option}
                isSelected={selectedZf === option.payment_type_code}
                onZfSelect={onZfSelect} />
            ))}
          </View>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: "PingFang SC",
    fontSize: 18,
    fontWeight: "900",
    color: "#D3AC7B",
  },
  membershipContainer: {
    gap: 15,
    marginBottom: 15,
    flexDirection: 'row',
  }
})
