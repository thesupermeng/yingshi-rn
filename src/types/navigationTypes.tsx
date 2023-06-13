import type {
    CompositeScreenProps,
    NavigatorScreenParams,
    CompositeNavigationProp
} from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { VodType, VodTopicType } from './ajaxTypes';
// https://reactnavigation.org/docs/typescript/

//   export type RootStackParamList = {
//     Home: NavigatorScreenParams<HomeTabParamList>;
//     PostDetails: { id: string };
//     NotFound: undefined;
//   };


export type HomeStackParamList = {
    Home: undefined;
    搜索: undefined;
    播放: {
        vod_id: VodType['vod_id']
    };
};

export type PlaylistStackParamList = {
    Playlist: undefined;
    搜索: undefined;
    播放: {
        vod_id: VodType['vod_id']
    };
    PlaylistDetail: {
        topic_id: VodTopicType['topic_id']
    };
};

export type RootTabParamList = {
    首页: NavigatorScreenParams<HomeStackParamList>;
    随心看: undefined;
    播单: undefined;
    我的: NativeStackNavigationProp<ProfileStackParamList>;
};

export type ProfileStackParamList = {
    Profile: undefined;
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
};

// export type PlaylistParamList = {
//     Playlist: NavigatorScreenParams<PlaylistParamList>;
//     随心看: undefined;
//     播单: undefined;
//     我的: NativeStackNavigationProp<ProfileStackParamList>;
// };



export type RootTabScreenProps<T extends keyof RootTabParamList> =
    BottomTabScreenProps<RootTabParamList, T>;

export type HomeStackScreenProps<T extends keyof HomeStackParamList> = NativeStackScreenProps<HomeStackParamList, T>;

export type HomeTabScreenProps<T extends keyof HomeStackParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<RootTabParamList, '首页'>,
        NativeStackScreenProps<HomeStackParamList, T>
    >;

export type ProfileStackScreenProps<T extends keyof ProfileStackParamList> = NativeStackScreenProps<ProfileStackParamList, T>;
export type PlaylistStackScreenProps<T extends keyof PlaylistStackParamList> = NativeStackScreenProps<PlaylistStackParamList, T>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootTabParamList { }
    }
}