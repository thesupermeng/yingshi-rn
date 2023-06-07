import type {
    CompositeScreenProps,
    NavigatorScreenParams,
} from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// https://reactnavigation.org/docs/typescript/

//   export type RootStackParamList = {
//     Home: NavigatorScreenParams<HomeTabParamList>;
//     PostDetails: { id: string };
//     NotFound: undefined;
//   };


export type HomeStackParamList = {
    Home: undefined;
    Search: undefined;
    Play: undefined;
};

export type RootTabParamList = {
    首页: NativeStackNavigationProp<HomeStackParamList>;
    随心看: undefined;
    播单: undefined;
    我的: NativeStackNavigationProp<HomeStackParamList>;
};

export type HomeStackScreenProps<T extends keyof HomeStackParamList> = NativeStackScreenProps<HomeStackParamList, T, undefined>;

//   export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
//     CompositeScreenProps<
//       BottomTabScreenProps<HomeTabParamList, T>,
//       NativeStackNavigationProp<keyof RootStackParamList>
//     >;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootTabParamList { }
    }
}