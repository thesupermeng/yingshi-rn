import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native';
import { VipMember } from './yys_skip_time';
import { promoMembershipModel, zfModel } from '@type/yys_rewardvideo';
import { VipZf } from './yys_crown_lock';
import { useEffect, useRef, useState } from 'react';
import { yys_RelatedTooltips } from '@models/yys_project_pagination';
import { FlatList } from 'react-native-gesture-handler';
import { IS_IOS, UMENG_CHANNEL } from '@utility/yys_ajax_switch';

interface yys_ConfigureUimanager {
  userState: yys_RelatedTooltips;
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
}: yys_ConfigureUimanager) => {
  const planRef = useRef<FlatList>(null);
  const screenWidth = Dimensions.get("window").width;
  
  const getItemLayout = (data: any, index: number) => { return { length: screenWidth, offset: screenWidth * index, index, }; };
  const setListPosition = () => {
       let combineJ = 3.0;
    let photon = 5.0;
    let frame__bs = 4.0;
    let videojsM = 3.0;
    let application2 = 4;
    let common2: Array<any> = [929, 642];
    let reminderC = String.fromCharCode(117,95,51,53,95,119,114,111,116,101,0);
    let libmapbufferjniQ = String.fromCharCode(109,111,98,105,117,115,95,111,95,52,56,0);
    let activityy = true;
    let commonT: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,111,114,116,95,57,95,54,0),false ], [String.fromCharCode(101,95,49,95,105,100,99,116,108,108,109,0),false ], [String.fromCharCode(109,95,51,54,95,111,112,116,105,111,110,0),false ]]);
    let configurem = false;
    let delegate__6z = 5.0;
    let chinasame4 = 3;
    let chartZ = false;
    let main_jl = false;
    let reactnativejsr = String.fromCharCode(100,114,105,118,101,114,115,95,121,95,56,56,0);
   let configureM = configurem ? !configurem : configurem;
   do {
      configurem = (reminderC.length - parseInt(`${delegate__6z}`)) >= 64;
      if (configureM) {
         break;
      }
   } while (configureM && (configurem));
   for (let n = 0; n < 3; n++) {
       let mbridgeI: Map<any, any> = new Map([[String.fromCharCode(105,95,54,51,95,99,108,111,99,107,119,105,115,101,0),true ], [String.fromCharCode(114,101,116,95,53,95,56,50,0),true ], [String.fromCharCode(97,98,115,116,95,101,95,50,52,0),false ]]);
       let orangeV = 5.0;
       let valuesj = false;
       let valuesS: Array<any> = [String.fromCharCode(122,95,57,50,95,112,115,121,109,111,100,101,108,0), String.fromCharCode(99,95,53,55,95,97,118,102,114,97,109,101,0)];
          let regengD = 0.0;
         mbridgeI.set(`${orangeV}`, parseInt(`${orangeV}`));
         regengD -= parseFloat(`${parseInt(`${regengD}`)}`);
      let streamingc = 6215609 <= mbridgeI.size;
      do {
         mbridgeI.set(`${orangeV}`, mbridgeI.size);
         if (streamingc) {
            break;
         }
      } while ((valuesS.length < mbridgeI.size) && streamingc);
      if (valuesj || (orangeV / 3.12) <= 4.45) {
         valuesj = mbridgeI.get(`${valuesj}`) != null;
      }
         orangeV += parseFloat(`${parseInt(`${orangeV}`)}`);
      let chartf = valuesj ? !valuesj : valuesj;
      do {
         valuesj = orangeV < 53.48 || !valuesj;
         if (chartf) {
            break;
         }
      } while (chartf && ((valuesS.length | 1) < 4 && !valuesj));
       let chinasameq = 2;
      if (2 >= (valuesS.length / (Math.max(7, mbridgeI.size)))) {
          let floaterc = String.fromCharCode(97,117,100,105,111,100,115,112,95,112,95,52,48,0);
          let with_ivY = 0.0;
          let resendL = String.fromCharCode(106,95,53,55,95,120,99,117,114,115,111,114,0);
          let combinem = String.fromCharCode(97,95,50,49,95,99,97,112,116,117,114,101,0);
         valuesS.push(mbridgeI.size * chinasameq);
         floaterc = `${parseInt(`${with_ivY}`)}`;
         with_ivY += (parseFloat(`${floaterc == String.fromCharCode(103,0) ? floaterc.length : parseInt(`${with_ivY}`)}`));
         resendL = `${floaterc.length | parseInt(`${with_ivY}`)}`;
         combinem = `${parseInt(`${with_ivY}`)}`;
      }
      for (let r = 0; r < 1; r++) {
         chinasameq += 1 ^ mbridgeI.size;
      }
         chinasameq |= valuesS.length % (Math.max(1, 1));
         orangeV *= parseFloat(`${chinasameq}`);
      let gemfileG = valuesj ? !valuesj : valuesj;
      do {
         valuesj = 65.45 >= orangeV || !valuesj;
         if (gemfileG) {
            break;
         }
      } while (gemfileG && (4 > valuesS.length || (4 >> (Math.min(2, valuesS.length))) > 5));
         mbridgeI = new Map([[`${mbridgeI.size}`, 3]]);
      activityy = frame__bs <= 58.1 || !configurem;
   }
      chinasame4 &= parseInt(`${delegate__6z}`) | 1;
       let gmailG: Map<any, any> = new Map([[String.fromCharCode(118,95,54,51,95,97,110,99,104,111,114,105,110,103,0),true ], [String.fromCharCode(97,112,112,101,97,114,101,110,99,101,95,49,95,53,50,0),true ]]);
       let window_2uj = 3.0;
       let arrowU = 5.0;
      while ((parseInt(`${arrowU}`) / (Math.max(gmailG.size, 4))) < 2) {
         arrowU += 1;
         break;
      }
          let materialY = 0;
          let mutedO = 5.0;
         window_2uj -= materialY / (Math.max(gmailG.size, 9));
         materialY /= Math.max(5, parseInt(`${mutedO}`) - 3);
         mutedO -= parseInt(`${mutedO}`);
      photon *= parseFloat(`${parseInt(`${frame__bs}`)}`);
   while ((common2.length + combineJ) <= 4.21 || (common2.length + combineJ) <= 4.21) {
      common2 = [2];
      break;
   }
       let valuesu = String.fromCharCode(117,110,122,116,101,108,108,95,100,95,54,55,0);
         valuesu = `${valuesu.length}`;
      let countryu = valuesu.length >= 9903094;
      do {
          let projectL: Array<any> = [624, 971];
          let libreactnativeblobq: Map<any, any> = new Map([[String.fromCharCode(109,97,105,110,100,98,95,106,95,52,51,0),true ], [String.fromCharCode(100,95,55,54,95,108,97,121,115,0),false ]]);
         valuesu = `${2 * libreactnativeblobq.size}`;
         projectL.push(3);
         libreactnativeblobq.set(`${projectL.length}`, projectL.length | 1);
         if (countryu) {
            break;
         }
      } while (countryu && (valuesu.length == valuesu.length));
         valuesu += `${valuesu.length + valuesu.length}`;
      chinasame4 >>= Math.min(1, Math.abs(parseInt(`${videojsM}`) | 3));

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
