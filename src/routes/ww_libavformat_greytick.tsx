import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";

export const loginChecking = (page: string | undefined, params: any) => {
    const userState = params.userState;

    if (wwBodan.isGuest(userState.user)) {
        return undefined;
    }

    return page;
}
