// import React, { useEffect, useMemo, useState } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, FlatList, TouchableWithoutFeedback } from 'react-native';
// import ScreenContainer from './screenContainer';
// import HomeHeader from '../header/homeHeader';
// import { useNavigation, useTheme } from '@react-navigation/native';
// import Swiper from 'react-native-swiper';
// import ShowMoreVodButton from '../button/showMoreVodButton';
// import VodList from '../vod/vodList';
// import { useQuery, QueryClient, useQueryClient } from '@tanstack/react-query';
// import { NavOptionsResponseType, VodCarousellResponseType, VodPlaylistResponseType, VodType } from '../../types/ajaxTypes';
// import FastImage from 'react-native-fast-image'
// import { VodReducerState } from '../../redux/reducers/vodReducer';
// import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
// import { RootState } from '../../redux/store';
// import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
// import VodHistoryList from '../vod/vodHistoryList';
// import { API_DOMAIN } from '../../constants';
// import VodListVertical from '../vod/vodListVertical';
// import LinearGradient from 'react-native-linear-gradient';
// import { playVod } from '../../redux/actions/vodActions';
// import { Directions, FlingGestureHandler, Gesture, GestureDetector, PanGestureHandler } from 'react-native-gesture-handler';
// interface NavType {
//   item: {
//     id: number,
//     name: string,
//   }
// }

// interface Props {
//   vodCarouselRes: VodCarousellResponseType
//   navOptions: NavOptionsResponseType['data']
// }

// export default ({ vodCarouselRes, navOptions }: Props) => {
//   const { colors, textVariants, spacing } = useTheme();
//   const [navId, setNavId] = useState(0);
//   const vodReducer: VodReducerState = useAppSelector(({ vodReducer }: RootState) => vodReducer);
//   const history = vodReducer.history;
//   const BTN_COLORS = ['#30AA55', '#7E9CEE', '#F1377A', '#FFCC12', '#ED7445',];
//   const dispatch = useAppDispatch();
//   const navigation = useNavigation();
//   const data = vodCarouselRes.data;

//   return (
//     <View>
//       {
//         data?.carousel[0] && <View style={{ height: 200, paddingLeft: spacing.sideOffset, paddingRight: spacing.sideOffset }}>
//           <Swiper style={styles.wrapper}
//             autoplay
//             dotColor={colors.sliderDot}
//             activeDotColor={colors.text}
//             dotStyle={styles.dotStyle}
//             paginationStyle={styles.paginationStyle}
//             activeDotStyle={styles.activeDotStyle}>
//             {
//               data.carousel.map((carouselItem, idx) => {
//                 return <TouchableOpacity style={styles.slide} key={`slider-${idx}`} onPress={() => {
//                   dispatch(playVod(carouselItem.vod));
//                   navigation.navigate('播放', {
//                     vod_id: carouselItem.carousel_content_id,
//                   });
//                 }} >
//                   <FastImage
//                     style={styles.image}
//                     source={{
//                       uri: carouselItem.carousel_pic_mobile,
//                       priority: FastImage.priority.normal,
//                     }}
//                     resizeMode={FastImage.resizeMode.cover}
//                   />
//                   <LinearGradient
//                     colors={['transparent', 'black']}
//                     start={{ x: 0.5, y: 0 }}
//                     end={{ x: 0.5, y: 0.6 }}
//                     style={styles.bottomBlur}
//                   />
//                   <Text style={{ ...textVariants.bodyBold, ...styles.carouselTag, color: 'white' }} numberOfLines={1}>{carouselItem.carousel_name}</Text>
//                 </TouchableOpacity>
//               })
//             }
//           </Swiper>
//         </View>
//       }

//       <View>
//         {
//           data?.class_list && data.class_list !== undefined && data.class_list.length > 0 &&
//           <FlatList
//             data={['全部剧集', ...data.class_list]}
//             horizontal
//             contentContainerStyle={{ ...styles.catalogNav, marginBottom: spacing.m, paddingLeft: spacing.sideOffset, paddingRight: spacing.sideOffset }}
//             renderItem={({ item, index }: { item: string, index: number }) => {
//               return <TouchableOpacity style={{
//                 marginRight: spacing.m, justifyContent: 'center',
//                 display: 'flex',
//                 backgroundColor: BTN_COLORS[index % BTN_COLORS.length],
//                 paddingLeft: spacing.s,
//                 paddingRight: spacing.s,
//                 paddingTop: spacing.s - 4,
//                 paddingBottom: spacing.s - 1,
//                 borderRadius: spacing.xs,
//                 opacity: 0.9
//               }} onPress={() => navigation.navigate('片库', { type_id: navId, class: item })}>
//                 <Text style={{
//                   textAlign: 'center',
//                   ...textVariants.body,
//                   fontWeight: '700',
//                   opacity: 0.9
//                 }}>{item}</Text>
//               </TouchableOpacity>
//             }}
//           />
//         }
//         {
//           data && !data.class_list && history?.length && history.length > 0 &&
//           <View gap={spacing.m} >
//             <View style={{ paddingLeft: spacing.sideOffset, paddingRight: spacing.sideOffset }}>
//               <ShowMoreVodButton text='继续看' onPress={() => {
//                 navigation.navigate('播放历史');
//               }} />
//             </View>
//             <View style={{ paddingLeft: spacing.sideOffset }}>
//               <VodHistoryList vodStyle={styles.vod_hotlist} vodList={history.slice(0, 10)} showInfo='watch_progress' />
//             </View>
//           </View>
//         }
//         {
//           data && data.yunying &&
//           <View gap={spacing.m} style={{ paddingLeft: spacing.sideOffset, paddingRight: spacing.sideOffset }}>
//             <View style={{ paddingLeft: spacing.sideOffset, paddingRight: spacing.sideOffset }}>
//               <ShowMoreVodButton text='重磅热播' onPress={() => {
//                 navigation.navigate('片库', { type_id: 1 });
//               }} />
//             </View>
//             <VodListVertical vods={data?.yunying[navId]?.vod_list.slice(0, 6)} />
//           </View>
//         }
//         <View gap={spacing.m} style={{ paddingLeft: spacing.sideOffset, paddingRight: spacing.sideOffset }}>
//           {
//             data?.categories.map((lst, idx) => (
//               <View key={`${lst.type_name}-${idx}`} gap={spacing.m}>
//                 <ShowMoreVodButton text={lst.type_name} onPress={() => {
//                   navigation.navigate('片库', { type_id: lst.type_id });
//                 }} />
//                 {
//                   lst?.vod_list &&
//                   <VodListVertical vods={lst?.vod_list?.slice(0, 6)} />
//                 }
//               </View>
//             ))
//           }
//         </View>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   wrapper: {
//     borderRadius: 100,
//     marginTop: 10,
//   },
//   image: {
//     width: '100%',
//     height: 160,
//     borderRadius: 10,
//   },
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold'
//   },
//   dotStyle: {
//     width: 6,
//     height: 4
//   },
//   activeDotStyle: {
//     width: 14,
//     height: 4
//   },
//   paginationStyle: {
//     top: 173,
//     height: 20
//   },
//   vod_hotlist: {
//     height: 99,
//     width: 176
//   },
//   nav: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     marginBottom: 10,
//   },
//   catalogNav: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     marginTop: 5
//   },
//   vodList: {
//     display: 'flex',
//     flexDirection: 'row',
//     flexWrap: 'wrap'
//   },
//   bottomBlur: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     bottom: 0,
//     height: 45,
//     flex: 1,
//     borderBottomRightRadius: 10,
//     borderBottomLeftRadius: 10,
//     opacity: 0.8
//   },
//   carouselTag: {
//     position: 'absolute',
//     bottom: 12,
//     left: 16,
//     marginRight: 16
//   },
// })