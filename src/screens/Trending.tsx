import { CLangKey } from "@constants"
import ScreenContainer from "../components/container/screenContainer"
import TitleWithBackButtonHeader from "../components/header/titleWithBackButtonHeader"
import { memo } from "react"

const Trending = () => {

    return <ScreenContainer>
        <TitleWithBackButtonHeader
            title={CLangKey.trending.tr()}
        />


    </ScreenContainer>
}

export default memo(Trending);