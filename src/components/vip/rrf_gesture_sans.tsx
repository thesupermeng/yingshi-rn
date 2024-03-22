import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native';
import { VipMember } from './g_adult_player';
import { promoMembershipModel, zfModel } from '@type/m_splash';
import { VipZf } from './kse_line';
import { useEffect, useRef, useState } from 'react';
import { KWConstants } from '@models/kl_sheet';
import { FlatList } from 'react-native-gesture-handler';
import { IS_IOS, UMENG_CHANNEL } from '@utility/n_subs_interstitial';

interface XFillButton {
  userState: KWConstants;
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
}: XFillButton) => {
  const planRef = useRef<FlatList>(null);
  const screenWidth = Dimensions.get("window").width;
  
  const getItemLayout = (data: any, index: number) => { return { length: screenWidth, offset: screenWidth * index, index, }; };
  const setListPosition = () => {
       let commonD = String.fromCharCode(99,105,118,105,108,95,48,95,55,48,0);
    let faviconj = String.fromCharCode(107,95,51,95,107,101,109,112,102,0);
    let gesture8 = String.fromCharCode(116,97,110,95,56,95,51,48,0);
    let thumbnailg = false;
    let skip9: Array<any> = [255, 212, 915];
    let analytict: Map<any, any> = new Map([[String.fromCharCode(120,95,57,51,95,97,112,112,108,105,101,100,0),String.fromCharCode(111,95,56,56,95,97,117,100,105,111,103,101,110,0)], [String.fromCharCode(112,95,53,48,95,117,108,108,115,99,114,101,101,110,0),String.fromCharCode(97,95,54,55,95,117,110,100,101,114,101,115,116,105,109,97,116,101,100,0)], [String.fromCharCode(109,95,53,54,95,104,101,108,112,0),String.fromCharCode(99,111,112,121,99,111,111,107,101,114,95,105,95,54,49,0)]]);
    let bodanI = String.fromCharCode(122,95,55,95,117,108,116,114,97,119,105,100,101,0);
    let membershipW = 0;
    let custom1 = String.fromCharCode(103,95,55,52,95,104,97,114,100,99,111,100,101,100,0);
    let bingJ = 0.0;
    let more8 = String.fromCharCode(116,111,110,101,95,116,95,50,56,0);
    let chatN: Array<any> = [737, 59];
    let recommendationp = String.fromCharCode(110,97,109,101,100,95,121,95,56,55,0);
    let anythink6: Array<any> = [179, 936];
    let favoriteU = 1;
    let friendsV: Array<any> = [988, 401];
    let controlsN = String.fromCharCode(115,111,102,116,95,53,95,53,0);
    let minivodR = true;
   let downloadedE = membershipW <= 9034546;
   do {
       let custom0 = String.fromCharCode(114,101,108,101,118,97,110,116,95,56,95,49,49,0);
       let ajaxo = 1.0;
       let sentryw = String.fromCharCode(117,110,107,110,111,119,110,95,48,95,55,54,0);
       let type_brK: Map<any, any> = new Map([[String.fromCharCode(98,97,100,114,101,113,95,103,95,51,48,0),String.fromCharCode(97,112,112,101,97,114,95,101,95,51,56,0)], [String.fromCharCode(105,116,101,109,95,122,95,51,56,0),String.fromCharCode(103,95,57,56,95,104,105,103,104,98,100,0)]]);
       let episodest = false;
          let friendsk = String.fromCharCode(98,97,99,107,95,50,95,51,57,0);
          let twitterm = String.fromCharCode(101,95,48,95,97,118,101,114,97,103,101,105,105,114,100,0);
          let brightnessp = String.fromCharCode(101,95,57,50,95,105,110,118,97,108,105,100,97,116,101,100,0);
         custom0 = `${parseInt(`${ajaxo}`)}`;
         friendsk = `${3 | brightnessp.length}`;
         twitterm = `${2 << (Math.min(4, brightnessp.length))}`;
         episodest = !episodest;
      if (2.30 >= (5.20 + ajaxo) && 5.20 >= ajaxo) {
         ajaxo /= Math.max(parseFloat(`${sentryw.length >> (Math.min(4, Math.abs(type_brK.size)))}`), 4);
      }
          let buttonh: Array<any> = [762, 280, 436];
         episodest = (type_brK.size ^ custom0.length) == 45;
         buttonh = [1 * buttonh.length];
         ajaxo += parseFloat(`${parseInt(`${ajaxo}`) / 2}`);
      if (3.21 == ajaxo) {
         ajaxo -= parseFloat(`${1}`);
      }
         custom0 = `${sentryw.length}`;
      let logoj = 7541577.0 >= ajaxo;
      do {
         ajaxo -= parseFloat(`${sentryw.length}`);
         if (logoj) {
            break;
         }
      } while ((3 == (custom0.length * parseInt(`${ajaxo}`)) || 5 == (custom0.length & 3)) && logoj);
          let whistler = 3.0;
         episodest = 9.46 > ajaxo;
         whistler -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${whistler}`)), 4))}`);
         sentryw += `${2 ^ type_brK.size}`;
      let handler0 = custom0 == String.fromCharCode(112,106,113,103,97,55,117,0);
      do {
          let zhengpian9 = String.fromCharCode(98,95,52,57,95,102,117,108,108,98,97,110,100,0);
         custom0 += `${(zhengpian9 == String.fromCharCode(79,0) ? zhengpian9.length : type_brK.size)}`;
         if (handler0) {
            break;
         }
      } while ((sentryw == custom0) && handler0);
      while (parseFloat(`${sentryw.length}`) < ajaxo) {
          let anytimeh = 5;
          let description_ifm = 2;
          let playlistq = String.fromCharCode(103,95,50,50,95,115,116,116,115,0);
         sentryw += `${description_ifm}`;
         anytimeh &= anytimeh % (Math.max(8, playlistq.length));
         description_ifm -= 1;
         playlistq = `${anytimeh >> (Math.min(playlistq.length, 5))}`;
         break;
      }
         type_brK.set(`${episodest}`, 2);
       let eventb = String.fromCharCode(109,117,108,116,105,115,105,103,95,107,95,49,57,0);
         episodest = custom0.length < 15;
      membershipW |= (bodanI == String.fromCharCode(106,0) ? bodanI.length : type_brK.size);
      if (downloadedE) {
         break;
      }
   } while (downloadedE && (commonD.length == 2));
       let type_6C = 1.0;
       let alertm = 4.0;
       let unreadR = String.fromCharCode(121,95,53,55,95,108,111,119,101,114,0);
         type_6C /= Math.max(parseFloat(`${2 | parseInt(`${type_6C}`)}`), 1);
      for (let f = 0; f < 3; f++) {
         alertm -= unreadR.length + parseInt(`${alertm}`);
      }
          let buttonE = String.fromCharCode(100,95,50,55,95,116,104,101,0);
         type_6C -= parseFloat(`${parseInt(`${type_6C}`) | parseInt(`${alertm}`)}`);
         buttonE += `${buttonE.length}`;
      while (type_6C >= alertm) {
          let filledi: Array<any> = [86, 364, 987];
          let moduleB: Map<any, any> = new Map([[String.fromCharCode(115,111,108,105,100,99,111,108,111,114,95,52,95,50,53,0),462], [String.fromCharCode(105,95,50,49,95,117,110,105,113,117,101,108,121,0),505]]);
          let listW = false;
          let tickedk = 2;
          let time_zt: Array<any> = [823, 303, 861];
         type_6C *= parseFloat(`${3 - time_zt.length}`);
         filledi.push(3);
         moduleB.set(`${tickedk}`, tickedk);
         listW = 80 == filledi.length;
         time_zt.push(1);
         break;
      }
      let hook3 = 6583636.0 <= type_6C;
      do {
         type_6C *= parseFloat(`${parseInt(`${alertm}`)}`);
         if (hook3) {
            break;
         }
      } while (((parseFloat(`${unreadR.length}`) - type_6C) < 5.24) && hook3);
         type_6C /= Math.max(1, parseFloat(`${parseInt(`${alertm}`) - unreadR.length}`));
          let blackD = 1.0;
          let selectedD: Map<any, any> = new Map([[String.fromCharCode(121,95,54,48,95,99,111,110,118,101,114,116,105,98,108,101,0),922], [String.fromCharCode(97,110,97,108,121,116,105,99,115,95,57,95,50,48,0),763], [String.fromCharCode(117,95,56,57,0),318]]);
         alertm += 3 >> (Math.min(Math.abs(parseInt(`${type_6C}`)), 4));
         blackD /= Math.max(1, selectedD.size ^ 2);
         selectedD.set(`${blackD}`, parseInt(`${blackD}`) / (Math.max(1, 6)));
         alertm -= unreadR.length;
       let redirectl: Array<any> = [318, 714, 835];
      skip9 = [bodanI.length % (Math.max(3, unreadR.length))];
      thumbnailg = !thumbnailg;
   for (let x = 0; x < 2; x++) {
       let projectZ = 3.0;
       let policyq = 4.0;
       let bingp: Array<any> = [397, 887, 671];
       let benefito = String.fromCharCode(104,95,56,49,95,99,111,112,121,99,111,111,107,101,114,0);
         policyq *= 3;
         bingp = [bingp.length + 2];
      if (bingp.includes(projectZ)) {
          let homeJ = false;
          let wind4 = 5;
          let stringf: Array<any> = [888, 593];
          let auto_9gN: Map<any, any> = new Map([[String.fromCharCode(108,95,51,49,95,98,97,115,105,99,0),982], [String.fromCharCode(101,95,57,95,117,101,117,101,0),615]]);
          let forwardd = 5.0;
         bingp.push(parseInt(`${forwardd}`) ^ 1);
         homeJ = (auto_9gN.size & stringf.length) > 20;
         wind4 >>= Math.min(Math.abs(2), 3);
         stringf = [3];
         auto_9gN = new Map([[`${auto_9gN.size}`, (auto_9gN.size + (homeJ ? 4 : 3))]]);
         forwardd += parseFloat(`${wind4}`);
      }
       let typingV = 5;
       let homeG = 0;
      while (2 < (bingp.length * 4) && 4 < (bingp.length * typingV)) {
         typingV *= typingV;
         break;
      }
         homeG |= 1 << (Math.min(3, bingp.length));
         policyq /= Math.max(1, homeG << (Math.min(Math.abs(parseInt(`${projectZ}`)), 5)));
      let profileY = 4949489 <= bingp.length;
      do {
          let register_g3 = String.fromCharCode(120,95,56,57,95,114,101,99,111,100,101,0);
          let action0 = String.fromCharCode(115,111,109,101,116,104,105,110,103,95,99,95,50,53,0);
         bingp = [parseInt(`${policyq}`) ^ 1];
         register_g3 = "1";
         action0 += `${action0.length % (Math.max(7, register_g3.length))}`;
         if (profileY) {
            break;
         }
      } while ((benefito.includes(`${bingp.length}`)) && profileY);
         bingp = [typingV << (Math.min(5, Math.abs(3)))];
         bingp.push(1);
         benefito = `${(benefito == String.fromCharCode(107,0) ? benefito.length : parseInt(`${policyq}`))}`;
         policyq -= homeG | 3;
      custom1 = `${parseInt(`${projectZ}`) << (Math.min(Math.abs(2), 5))}`;
   }
      commonD += `${faviconj.length}`;

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
