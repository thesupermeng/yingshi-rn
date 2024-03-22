import { KWConstants } from "@models/kl_sheet";

export const loginChecking = (page: string | undefined, params: any) => {
    const userState = params.userState;
    const showLogin = params.showLogin;

    if (KWConstants.isGuest(userState.user)) {
        showLogin();
        return undefined;
    }

    return page;
}
