import { ttFast } from "@models/tt_stations_right";

export const loginChecking = (page: string | undefined, params: any) => {
    const userState = params.userState;
    const showLogin = params.showLogin;

    if (ttFast.isGuest(userState.user)) {
        showLogin();
        return undefined;
    }

    return page;
}
