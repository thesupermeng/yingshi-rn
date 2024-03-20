import { User } from "@models/user";

export const loginChecking = (page: string | undefined, params: any) => {
    const userState = params.userState;
    const showLogin = params.showLogin;

    if (User.isGuest(userState.user)) {
        showLogin();
        return undefined;
    }

    return page;
}
