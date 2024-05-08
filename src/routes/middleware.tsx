import { User } from "@models";

export const loginChecking = (page: string | undefined, params: any) => {
    const userState = params.userState;

    if (User.isGuest(userState.user)) {
        return undefined;
    }

    return page;
}
