import { yys_RelatedTooltips } from "@models/yys_project_pagination";

export const loginChecking = (page: string | undefined, params: any) => {
    const userState = params.userState;
    const showLogin = params.showLogin;

    if (yys_RelatedTooltips.isGuest(userState.user)) {
        showLogin();
        return undefined;
    }

    return page;
}
