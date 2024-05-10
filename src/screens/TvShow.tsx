import { memo } from "react";
import ScreenContainer from "../components/container/screenContainer";
import HomeHeader from "../components/header/homeHeader";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CLangKey } from "@constants";

const TvShows = ({ navigation }: BottomTabScreenProps<any>) => {
    return <ScreenContainer>
        <HomeHeader
            title={CLangKey.tvShowsTab.tr()}
            navigator={navigation}
            searchIcon={true}
            navIcon={true}
        />
    </ScreenContainer>
}

export default memo(TvShows);