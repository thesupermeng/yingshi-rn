import React, { useCallback, useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { spacing } from "../../const/layout";
import MemberLimitIcon from "../../assets/images/member_limit.svg"
import MemberDiscountIcon from "../../assets/images/member_discount.svg"

interface MemberSalesProps {
}



export default function MemberSalesView({
}: MemberSalesProps) {

  const renderItem = (e:any, i:number) => (<View key={`member-sale-${i}`} style={styles.flowItem}>
    <FastImage style={styles.itemImage} resizeMode="cover" source={e.image}/>
    <View style={styles.itemInfo}>
      <Text style={styles.itemTitle}>{e.title ?? "无标题"}</Text>
      <View style={styles.itemPrice}>
        <Text style={styles.itemPriceText}>{e.price ?? "0会员积分"}</Text>
        { e.concessions === "discount" && <MemberDiscountIcon height={12}/>}
        { e.concessions === "limit" && <MemberLimitIcon height={12}/>}
      </View>
      { e.remarks && <View style={styles.itemRemarks}>
        {e.remarks.map((e:any)=> (
          <View style={styles.itemRemarkBox}>
            <Text style={styles.itemRemarkText}>{e}</Text>
          </View>
        ))}
      </View> }
      { e.detail && <Text style={styles.itemDetail}>
        {`${e.detail} >`}
      </Text> }
      { e.describe && <Text style={styles.itemDescription}>
        {e.describe}
      </Text> }
    </View>
  </View>);

  const [saleProducts, setSaleProducts] = useState([
    {
      title: "猫耳朵无线蓝牙耳机", 
      price: "159元", 
      concessions: '', 
      detail: "", 
      describe: "已购买18件",
      remarks: undefined, 
      image: require("../../assets/images/sale-0.jpg"),
      imageRatio: 1
    },
    {
      title: "男女双肩电脑包", 
      price: "199元", 
      concessions: '', 
      detail: "", 
      describe: "已购买28件", 
      remarks: undefined, 
      image: require("../../assets/images/sale-1.jpeg"),
      imageRatio: 1
    },
    {
      title: "透明便携耐高温简约水杯", 
      price: "29元", 
      concessions: '', 
      detail: "", 
      describe: "已购买15件", 
      remarks: undefined,  
      image: require("../../assets/images/sale-2.jpg"),
      imageRatio: 1
    },
    {
      title: "安耐晒极致防晒霜", 
      price: "139元", 
      concessions: '', 
      detail: "", 
      describe: "已购买24件", 
      remarks: undefined, 
      image: require("../../assets/images/sale-3.jpg"),
      imageRatio: 1
    },
    {
      title: "超韧抽取式纸面巾", 
      price: "13.9元", 
      concessions: '', 
      detail: "", 
      describe: "已购买19件", 
      remarks: undefined, 
      image: require("../../assets/images/sale-4.jpg"),
      imageRatio: 1
    },
    {
      title: "大容量单肩帆布包", 
      price: "39元", 
      concessions: '', 
      detail: "", 
      describe: "已购买21件", 
      remarks: undefined, 
      image: require("../../assets/images/sale-5.webp"),
      imageRatio: 1
    },
    {
      title: "猫咪自动喂食器", 
      price: "49元", 
      concessions: '', 
      detail: "", 
      describe: "已购买14件", 
      remarks: undefined, 
      image: require("../../assets/images/sale-6.jpg"),
      imageRatio: 1
    },
    {
      title: "MLB 经典棒球帽", 
      price: "159元", 
      concessions: '', 
      detail: "", 
      describe: "已购买9件", 
      remarks: undefined, 
      image: require("../../assets/images/sale-7.webp"),
      imageRatio: 1
    },
    {
      title: "毛绒公仔", 
      price: "59元", 
      concessions: '', 
      detail: "", 
      describe: "已购买5件", 
      remarks: undefined, 
      image: require("../../assets/images/sale-8.jpeg"),
      imageRatio: 1
    },
    {
      title: "电竞键盘", 
      price: "189元", 
      concessions: '', 
      detail: "", 
      describe: "已购买30件", 
      remarks: undefined, 
      image: require("../../assets/images/sale-9.png"),
      imageRatio: 1
    }
  ])

  const flowDatas = useMemo(() => {
    let left = 0.0
    let right = 0.0
    const leftItems:any[] = []
    const rightItems:any[] = []

    for(let item of saleProducts) {
      if (left < right+0.01) {
        leftItems.push(item)
        left += item.imageRatio
      } else {
        rightItems.push(item)
        right += item.imageRatio
      }
    }

    return {
      leftItems, rightItems
    }
  }, [saleProducts])

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.headText}>会员推荐</Text>
        <></>
      </View>
      <View style={styles.flow}>
        <View style={styles.flowCol}>
          {flowDatas.leftItems.map(renderItem)}
        </View>
        <View style={styles.flowCol}>
          {flowDatas.rightItems.map(renderItem)}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: 'flex-start',
    alignItems: "stretch",
    backgroundColor: "#f2f5fa", 
    paddingTop: 10,
    gap: 10
  },
  head: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    paddingHorizontal: 16
  },
  headText: {
    color: "#000",
    fontSize: 15,
    fontWeight: '600',
  },
  flow: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "flex-start",
    paddingHorizontal: spacing.sideOffset,
    gap: 10
  },
  flowCol: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'flex-start',
    alignItems: "stretch",
    gap: 10
  },
  flowItem: {
    flexDirection: "column",
    justifyContent: 'flex-start',
    alignItems: "stretch",
    gap: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    overflow: "hidden"
  }, 
  itemImage: {
    width: "100%",
    aspectRatio: 1,
  },
  itemInfo: {
    flexDirection: "column",
    justifyContent: 'flex-start',
    alignItems: "stretch",
    padding: 10,
    gap: 2
  },
  itemTitle: {
    color: "#000",
    fontSize: 13,
    fontWeight: '500',
  },
  
  itemPrice: {
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: "center",
  },
  itemPriceText: {
    color: "#ff3c11",
    fontSize: 11,
    fontWeight: '400',
  },
  itemRemarks: {
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: 5,
    paddingVertical: 2,
  },
  itemRemarkBox: {
    borderColor: "#C88C13",
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 3,
    paddingVertical: 1,
    paddingHorizontal: 5
  },
  itemRemarkText: {
    color: "#C88C13",
    fontSize: 9,
    fontWeight: '400',
  },
  itemDetail: {
    color: "#ff3c11",
    fontSize: 11,
    fontWeight: '400',
  },
  itemDescription: {
    color: "#A3A2A2",
    fontSize: 11,
    fontWeight: '400',
  },

});