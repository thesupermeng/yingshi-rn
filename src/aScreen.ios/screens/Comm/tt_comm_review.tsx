import { VodCommentBox } from "@iosScreen/components/vodComment";
import { useTheme } from "@react-navigation/native";
import { ttDoubanMeta } from "@type/tt_line_borderless";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CommenterIcon from "@static/images/commenter.svg";
import FastImage from '../../components/common/tt_connection';


interface ttReviewProps {
  meta: ttDoubanMeta;
  display: 'sample' | 'large';
  onPress?: () => void,
}

const definedValue = (val: any) => {
  if (val === undefined || val === null) {
    return '';
  }
  return val + ' ';
};

function CommunityReview({ meta, display, onPress }: ttReviewProps) {
  
  const { textVariants, colors, spacing } = useTheme();

  const renderCommenter = () => (
    <View style={styles.commender}>
      <CommenterIcon width={20} height={20}></CommenterIcon>
      <Text style={{...textVariants.subBody, marginLeft: 10, marginRight: 20}}>
        官方推荐
      </Text>
      <Text style={{...textVariants.subBody, color: colors.muted}}>
        2小时前
      </Text>
    </View>
  )

  const renderSample = () => (
    <View style={styles.sampleContainer}>
      <FastImage
        source={{uri: meta.vod_pic}}
        resizeMode={'cover'}
        style={{
          ...styles.sampleImage,
          ...styles.descriptionImage,
        }}
      />
      <View style={styles.sampleDescription}>
        {renderCommenter()}
        <Text style={{...textVariants.body, marginTop:5, marginBottom:2}} numberOfLines={1}>
          {`${definedValue(meta.vod_name)}`}
        </Text>
        <Text style={{...textVariants.small, marginTop:2, marginBottom:2, color: colors.muted}}>
        {`${definedValue(meta.type_name)}`}
        </Text>
        <Text style={{...textVariants.small, color: colors.muted, flex: 1}} numberOfLines={4}>
          {`${definedValue(meta.vod_content)}`}
        </Text>
      </View>
    </View>
  );

  const renderDesc = () => (
    <View style={styles.largeContainer}>
      {renderCommenter()}
      <Text style={styles.largeDescription}>
        { meta.vod_content }
      </Text>
      <FastImage
        source={{uri: meta.vod_pic}}
        resizeMode={'cover'}
        style={styles.largeImage}
      />
      { meta.douban_reviews.length > 0 &&
        <View style={styles.largeComments}>
          <VodCommentBox
            comments={meta.douban_reviews}
            total={meta.total_douban_review}
            onlyShow={2}
            onCommentTap={() => {
              
            }}
          />
        </View>
      }
    </View>
  );

  return (
    <TouchableOpacity 
      activeOpacity={0.85} 
      style={{...styles.descriptionContainer2, gap: spacing.m}} 
      onPress={onPress}
    >
      { display === 'sample' && renderSample()}
      { display === 'large' && renderDesc()}
    </TouchableOpacity> 
  );
};

export default memo(CommunityReview);

const styles = StyleSheet.create({
  commender: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sampleContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginBottom: 1,
  },
  largeContainer: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  sampleImage: {
    flex: 2,
  },
  sampleDescription: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingLeft: 10
  },
 
  largeImage: {
    width: '100%',
    aspectRatio: 139 / 93,
    borderRadius: 10,
    marginTop: 20
  },

  largeComments: {
    width: '100%',
    marginTop: 20
  },

  descriptionImage: {
    width: '100%',
    aspectRatio: 93 / 139,
    borderRadius: 10,
  },
  
  descriptionContainerText: {
    fontSize: 17,
  },
  descriptionContainer2: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  largeDescription: {
    color: '#9C9C9C',
    fontSize: 14,
    marginTop: 10
  },
  share: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceApart: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  episodeBtn: {
    borderRadius: 8,
  },
  episodeList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
});
