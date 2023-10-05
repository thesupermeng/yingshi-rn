import { Text, View } from "react-native";
import MatchStatistic from '../../../../components/matchStatistic';
import { useSelector } from "react-redux"
import { ScrollView } from "react-native";

const MatchStatisticTab = () => {
    const liveRoomMatchUpdates = useSelector(state => state.liveRoomUpdate);
    return (
        <View>
            <MatchStatistic statisticData={liveRoomMatchUpdates?.football_match_stats?.stats?.filter(x => x.type != "team_id")}/>
        </View>
    )
}

export default MatchStatisticTab