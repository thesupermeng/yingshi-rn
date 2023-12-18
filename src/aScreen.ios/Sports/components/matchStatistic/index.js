import MatchStatisticComponent from "./matchStatisticComponent";

const MatchStatistic = ({statisticData = [], sportType}) => {
        return (
            statisticData?.map((item, index) => {
                return(
                    <MatchStatisticComponent key={index} index = {index} data = {item} sportType={sportType}/> 
                )  
            })
        )
}

export default MatchStatistic;