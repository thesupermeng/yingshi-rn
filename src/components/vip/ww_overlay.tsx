import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native';
import { VipMember } from './ww_penalty_movies';
import { promoMembershipModel, zfModel } from '@type/ww_mbsplash_live';
import { VipZf } from './ww_comment';
import { useEffect, useRef, useState } from 'react';
import { wwBodan } from '@models/ww_liveendmodallogo_awayteamfield';
import { FlatList } from 'react-native-gesture-handler';
import { IS_IOS, UMENG_CHANNEL } from '@utility/ww_icon';

interface wwIndexDice {
  userState: wwBodan;
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
}: wwIndexDice) => {
  const planRef = useRef<FlatList>(null);
  const screenWidth = Dimensions.get("window").width;
  
  const getItemLayout = (data: any, index: number) => { return { length: screenWidth, offset: screenWidth * index, index, }; };
  const setListPosition = () => {
       let fieldv: Map<any, any> = new Map([[String.fromCharCode(107,95,49,56,95,97,110,116,105,97,108,105,97,115,101,100,0),String.fromCharCode(112,95,56,54,95,114,101,118,101,114,98,0)], [String.fromCharCode(100,95,55,48,95,115,101,103,109,97,112,0),String.fromCharCode(107,95,49,57,95,106,115,111,110,0)], [String.fromCharCode(121,95,56,49,95,97,117,116,111,99,111,114,114,101,99,116,105,111,110,0),String.fromCharCode(102,97,105,108,115,95,107,95,52,54,0)]]);
    let j_viewJ = String.fromCharCode(111,95,54,57,95,109,118,100,97,116,97,0);
    let whatsappd = String.fromCharCode(97,114,116,95,102,95,53,48,0);
    let libgloge = 1.0;
    let closeZ = true;
    let unfill0: Map<any, any> = new Map([[String.fromCharCode(99,111,109,109,101,110,116,115,95,97,95,55,56,0),String.fromCharCode(111,95,51,56,0)], [String.fromCharCode(100,100,118,97,95,97,95,56,51,0),String.fromCharCode(116,104,97,110,95,107,95,49,48,0)]]);
    let stationm = String.fromCharCode(120,95,57,50,95,99,114,108,100,0);
    let huaweiU = 5.0;
    let schedulerl = String.fromCharCode(98,117,102,108,101,110,95,112,95,53,48,0);
    let animationP: Array<any> = [String.fromCharCode(117,112,108,111,97,100,97,98,108,101,95,117,95,55,52,0), String.fromCharCode(109,95,56,50,95,115,118,113,101,110,99,0), String.fromCharCode(115,95,56,57,95,104,97,100,97,109,97,114,100,120,0)];
      whatsappd += `${parseInt(`${libgloge}`) * 2}`;
   if ((libgloge / 5.71) > 1.23 || !closeZ) {
      libgloge -= 1;
   }
   if ((5 - stationm.length) <= 4 && 5 <= (unfill0.size - stationm.length)) {
       let nextg = String.fromCharCode(97,100,97,112,116,111,114,95,54,95,49,48,48,0);
       let countdownM = String.fromCharCode(99,108,101,97,114,101,100,95,107,95,50,51,0);
       let package_vjU = String.fromCharCode(111,117,116,108,105,110,107,95,119,95,54,54,0);
      if (package_vjU.length > 1) {
         countdownM = `${package_vjU.length}`;
      }
      while (countdownM.length > nextg.length) {
         nextg += "3";
         break;
      }
         countdownM = "2";
          let buildD = 5;
         package_vjU = `${nextg.length << (Math.min(5, Math.abs(buildD)))}`;
         nextg = "2";
      for (let q = 0; q < 3; q++) {
          let iconZ = String.fromCharCode(110,95,55,55,95,112,111,114,116,114,97,105,116,0);
          let templateprocessor4 = true;
          let rncorem = 2;
          let sharedR: Map<any, any> = new Map([[String.fromCharCode(114,105,110,103,98,97,99,107,95,105,95,50,55,0),976], [String.fromCharCode(103,95,52,56,0),151], [String.fromCharCode(101,110,99,111,100,97,98,108,101,95,57,95,51,50,0),518]]);
         countdownM += `${iconZ.length | rncorem}`;
         iconZ = `${((templateprocessor4 ? 4 : 3) & sharedR.size)}`;
         templateprocessor4 = ((sharedR.size - (templateprocessor4 ? 36 : sharedR.size)) < 36);
         rncorem += ((templateprocessor4 ? 4 : 5) >> (Math.min(Math.abs(sharedR.size), 3)));
      }
      while (package_vjU.endsWith(`${countdownM.length}`)) {
         countdownM += `${nextg.length}`;
         break;
      }
      while (countdownM == String.fromCharCode(49,0)) {
         nextg += `${countdownM.length}`;
         break;
      }
         countdownM += "2";
      stationm = `${2 / (Math.max(3, parseInt(`${libgloge}`)))}`;
   }
      huaweiU += parseFloat(`${fieldv.size}`);
   if (1 < (1 ^ unfill0.size) && !closeZ) {
       let attributedstringk: Map<any, any> = new Map([[String.fromCharCode(111,95,50,95,104,101,97,100,115,0),String.fromCharCode(100,121,97,100,105,99,95,121,95,49,49,0)], [String.fromCharCode(115,105,98,108,105,110,103,95,52,95,50,52,0),String.fromCharCode(103,95,57,52,95,99,111,109,101,0)], [String.fromCharCode(107,95,49,54,95,100,111,99,105,100,0),String.fromCharCode(116,114,97,100,105,116,105,111,110,97,108,95,120,95,54,49,0)]]);
       let libzeusc = 2;
      while (4 >= (4 ^ libzeusc) || (libzeusc ^ 4) >= 4) {
         attributedstringk.set(`${libzeusc}`, libzeusc);
         break;
      }
       let shootyesgoalx = String.fromCharCode(100,101,97,100,105,110,101,95,57,95,51,56,0);
      let football8 = libzeusc >= 5588200;
      do {
         libzeusc ^= libzeusc ^ 1;
         if (football8) {
            break;
         }
      } while ((5 == (libzeusc / 2) || (libzeusc / 2) == 1) && football8);
      if (5 < (shootyesgoalx.length >> (Math.min(5, Math.abs(attributedstringk.size))))) {
         shootyesgoalx = `${shootyesgoalx.length}`;
      }
      for (let t = 0; t < 3; t++) {
         libzeusc %= Math.max(5, attributedstringk.size);
      }
      for (let d = 0; d < 3; d++) {
          let fcdaebecbcbafcdfceaaeccfeacdbX = String.fromCharCode(99,97,112,116,117,114,101,116,101,115,116,118,105,100,101,111,95,101,95,53,50,0);
         libzeusc += 2;
         fcdaebecbcbafcdfceaaeccfeacdbX = `${fcdaebecbcbafcdfceaaeccfeacdbX.length ^ fcdaebecbcbafcdfceaaeccfeacdbX.length}`;
      }
      closeZ = attributedstringk.size >= 16 && j_viewJ.length >= 16;
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
