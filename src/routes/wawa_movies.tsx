import { wawaLibglog } from "@models/wawa_refreshborderless_found";

export const loginChecking = (page: string | undefined, params: any) => {
    const userState = params.userState;

    if (wawaLibglog.isGuest(userState.user)) {
        return undefined;
    }

    return page;
}
