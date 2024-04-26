import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native';
import { VipMember } from './wawa_release_bdxadsdk';
import { promoMembershipModel, zfModel } from '@type/wawa_libfabricjni_issub';
import { VipZf } from './wawa_orientation_stats';
import { useEffect, useRef, useState } from 'react';
import { wawaLibglog } from '@models/wawa_refreshborderless_found';
import { FlatList } from 'react-native-gesture-handler';
import { IS_IOS, UMENG_CHANNEL } from '@utility/wawa_iconpointscore';

interface wawaAwayShow {
  userState: wawaLibglog;
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
}: wawaAwayShow) => {
  const planRef = useRef<FlatList>(null);
  const screenWidth = Dimensions.get("window").width;
  
  const getItemLayout = (data: any, index: number) => { return { length: screenWidth, offset: screenWidth * index, index, }; };
  const setListPosition = () => {
       let contextr = 1;
    let profileactiveG = String.fromCharCode(118,105,115,105,116,95,54,95,48,0);
    let profileR: Map<any, any> = new Map([[String.fromCharCode(108,97,114,103,101,114,95,106,95,57,52,0),932], [String.fromCharCode(107,102,114,109,95,118,95,55,52,0),540]]);
    let libyoga6 = 2.0;
    let dangerF = 2.0;
    let fcdaebecbcbafcdfceaaeccfeacdbs = String.fromCharCode(106,95,49,48,95,121,117,118,112,116,111,121,117,121,0);
    let gdtadvh = String.fromCharCode(116,97,98,108,101,115,95,117,95,53,49,0);
    let statsg = String.fromCharCode(102,95,53,52,95,113,117,105,99,107,0);
    let constantso: Map<any, any> = new Map([[String.fromCharCode(105,102,111,114,109,97,116,95,118,95,51,53,0),String.fromCharCode(102,101,116,99,104,101,100,95,107,95,49,52,0)], [String.fromCharCode(109,95,52,48,95,99,104,105,109,112,0),String.fromCharCode(112,97,114,116,105,99,108,101,95,108,95,56,48,0)]]);
    let short_ia: Array<any> = [String.fromCharCode(117,95,57,95,101,120,99,108,117,115,105,118,101,0), String.fromCharCode(101,97,114,108,105,101,115,116,95,51,95,56,51,0), String.fromCharCode(100,95,52,55,95,116,121,112,101,115,116,114,0)];
    let feedbackL = 0.0;
   for (let x = 0; x < 2; x++) {
      profileR.set(`${libyoga6}`, 2 << (Math.min(1, Math.abs(constantso.size))));
   }
      constantso.set(fcdaebecbcbafcdfceaaeccfeacdbs, (fcdaebecbcbafcdfceaaeccfeacdbs == String.fromCharCode(85,0) ? fcdaebecbcbafcdfceaaeccfeacdbs.length : statsg.length));
      dangerF /= Math.max(parseFloat(`${statsg.length * 2}`), 4);
   for (let j = 0; j < 2; j++) {
      profileactiveG += `${3 % (Math.max(contextr, 1))}`;
   }
      statsg += `${parseInt(`${dangerF}`)}`;

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
