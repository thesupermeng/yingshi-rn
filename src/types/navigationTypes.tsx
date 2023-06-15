import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { VodType, VodTopicType } from './ajaxTypes';

// https://reactnavigation.org/docs/typescript/
export type HomeTabParamList = {
    首页: undefined;
    随心看: undefined;
    播单: undefined;
    我的: undefined;
};

export type ProfileTabParamList = {
    我的: undefined;
    首页: undefined;
    随心看: undefined;
    播单: undefined;
};

export type PlaylistTabParamList = {
    我的: undefined;
    首页: undefined;
    随心看: undefined;
    播单: undefined;
};

export type WatchAnytimeTabParamList = {
    我的: undefined;
    首页: undefined;
    随心看: undefined;
    播单: undefined;
};

export type RootStackParamList = {
    Profile: BottomTabScreenProps<ProfileTabParamList>;
    Playlist: BottomTabScreenProps<PlaylistTabParamList>;
    WatchAnytime: BottomTabScreenProps<WatchAnytimeTabParamList>;
    Home: BottomTabScreenProps<HomeTabParamList>;

    视频收藏: undefined;
    播单收藏: undefined;
    合辑收藏: undefined;
    播放历史: undefined;
    反馈: undefined;
    设置: undefined;
    关于我们: undefined;
    分享App: undefined;
    播放: {
        vod_id: VodType['vod_id']
    };
    搜索: undefined;
    PlaylistDetail: {
        topic_id: VodTopicType['topic_id']
    };
};


export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;

export type HomeTabScreenProps<T extends keyof HomeTabParamList> = BottomTabScreenProps<HomeTabParamList, T>;
export type ProfileTabScreenProps<T extends keyof ProfileTabParamList> = BottomTabScreenProps<ProfileTabParamList, T>;
export type PlaylistTabScreenProps<T extends keyof PlaylistTabParamList> = BottomTabScreenProps<PlaylistTabParamList, T>;
export type WatchAnytimeTabScreenProps<T extends keyof WatchAnytimeTabParamList> = BottomTabScreenProps<WatchAnytimeTabParamList, T>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}