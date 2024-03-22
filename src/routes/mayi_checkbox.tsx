import { mayi_Gift } from "@models/mayi_libjsinspector";

export const loginChecking = (page: string | undefined, params: any) => {
    const userState = params.userState;
    const showLogin = params.showLogin;

    if (mayi_Gift.isGuest(userState.user)) {
        showLogin();
        return undefined;
    }

    return page;
}
