/**
 * user guide
 * init:
 *   put CRouteInitializer inside NavigationContainer
 * 
 * method: 
 *   toNamed => navigate by push (if exits in previoud will pop)
 *   offNamed => navigate by replace
 *   canBack => check can back to previous page or not
 *   back => back to previous page
 *   getParams => get current page parameters
 *   current => get current page details
 *   previous => get previous page details
 *   history => get all page details in stack
 *   
 *   method inside: toNamed, offNamed
 *      then => listen and callback if next screen close
 */

import { useEffect } from "react";
import { NavigationProp, StackActions, useNavigation } from "@react-navigation/native";
import { DeviceEventEmitter } from "react-native";

enum CRouteEvent {
    THEN = 'then',
    CATCH = 'catch',
}

const eventKeyGenerator = (key: string, type: CRouteEvent) => {
    return key + (type === CRouteEvent.CATCH ? '-catch' : '-then')
}

export type CPageType = {
    key: string,
    name: string,
    params?: any,
    backParams?: any,
}

export class CRouter {
    static #navigator: NavigationProp<{ [key: string]: any }> | null = null;
    static #historiesPages: CPageType[] = [];

    static pendingEvent: { pageName: string, thenEvent: any }[] = [];
    // use for handle navigate pop action
    static #lastActoinPageName = '';

    static init = (navigation: NavigationProp<any>) => {
        if (this.#navigator !== null) return;

        this.#navigator = navigation;
        this.#navigator.addListener('state', this.#matchHistory);
    }

    static closeRouter = () => {
        this.#navigator?.removeListener('state', this.#matchHistory);
    }

    static updateNavigator = (navigation: NavigationProp<any>) => {
        this.#navigator = navigation;
    }

    static toName = (page: string, { params }: { params?: any } = {}) => {
        const then = (callback?: (params: any) => void) => {
            this.pendingEvent.push({
                pageName: page,
                thenEvent: callback,
            });
        }

        this.#lastActoinPageName = page;
        this.#navigator?.navigate(page, params);

        return { then };
    }

    static offName = (page: string, { params }: { params?: any } = {}) => {
        const then = (callback?: (params: any) => void) => {
            this.pendingEvent.push({
                pageName: page,
                thenEvent: callback,
            });
        }

        this.#lastActoinPageName = page;
        this.#navigator?.dispatch(
            StackActions.replace(page, params),
        );

        return { then };
    }

    static canBack = () => {
        return this.#historiesPages.length > 0;
    }

    static back = (params?: any) => {
        if (!this.#navigator?.canGoBack()) return;

        this.#historiesPages[this.#historiesPages.length - 1].backParams = params;
        this.#navigator?.goBack();
    }

    static getParams = (): any => {
        return this.current()?.params;
    };

    static current = (): CPageType | undefined => {
        if (this.#historiesPages.length <= 0) return;
        return this.#historiesPages[this.#historiesPages.length - 1];
    }

    static previous = (): CPageType | undefined => {
        if (this.#historiesPages.length <= 1) return;
        return this.#historiesPages[this.#historiesPages.length - 2];
    }

    static history = (): CPageType[] => {
        return this.#historiesPages ?? [];
    }

    static #matchHistory = (state: any) => {
        const histories = state?.data?.state?.routes;

        if (!histories) return;

        // if local history > lib history => pop
        if (this.#historiesPages.length > histories.length) {
            for (let i = this.#historiesPages.length - 1; i >= histories.length; i--) {
                this.#handlePop(this.#historiesPages.pop(), histories.length > 0 ? histories[histories.length - 1] : undefined);
            }
        }

        histories.forEach((route: any, index: number) => {
            // if local history < lib history => push
            if (this.#historiesPages.length <= index) {
                this.#handlePush(route)
                return;
            }

            // if local history != lib history => replace
            if (this.#historiesPages[index].key !== route.key || this.#historiesPages[index].params !== route.params) {
                this.#handleReplace(index, route);
            }
        });
    }

    static #handlePush = (route: {
        key: string;
        name: string;
        params?: any;
        state?: any;
    }) => {
        this.#historiesPages.push({
            key: route.key,
            name: route.name,
            params: route.params,
        });

        // add pop callback event
        const pendingEventFound = this.pendingEvent.findIndex(e => e.pageName === route.name);

        if (pendingEventFound !== -1) {
            this.#addEventByKey(route.key, CRouteEvent.THEN, this.pendingEvent[pendingEventFound].thenEvent);
            this.pendingEvent.splice(pendingEventFound, 1);
        }
    }

    /**
     * params => use for navigate pop action
     */
    static #handlePop = (
        page?: CPageType,
        route?: {
            key: string;
            name: string;
            params?: any;
            state?: any;
        }
    ) => {
        if (!page) return;

        this.#runEventByKey(page.key, CRouteEvent.THEN, page.backParams);
        this.#removeListenerByKey(page.key);

        // handle navigate pop action - (route to previous)
        if (this.#lastActoinPageName === this.current()?.name) {
            // update params
            this.#historiesPages[this.#historiesPages.length - 1].params = route?.params;

            // remove pending
            const pendingEventFound = this.pendingEvent.findIndex(e => e.pageName === this.#lastActoinPageName);

            if (pendingEventFound === -1) return;

            this.pendingEvent.splice(pendingEventFound, 1);
        }
    }

    static #handleReplace = (
        index: number,
        route: {
            key: string;
            name: string;
            params?: any;
            state?: any;
        },
    ) => {
        // handle navigate pop action - (replace self)
        if (this.#lastActoinPageName === this.current()?.name) {
            this.#historiesPages[index] = {
                key: route.key,
                name: route.name,
                params: route.params,
            };
            return;
        }

        this.#handlePop(this.#historiesPages[index]);

        this.#historiesPages[index] = {
            key: route.key,
            name: route.name,
            params: route.params,
        };
    }

    static #addEventByKey = (key: string, type: CRouteEvent, callback: () => void) => {
        DeviceEventEmitter.addListener(eventKeyGenerator(key, type), callback);
    }

    static #runEventByKey = (key: string, type: CRouteEvent, params?: any) => {
        DeviceEventEmitter.emit(eventKeyGenerator(key, type), params);
        this.#removeListenerByKey(key);
    }

    static #removeListenerByKey = (key: string) => {
        DeviceEventEmitter.removeAllListeners(eventKeyGenerator(key, CRouteEvent.THEN));
        DeviceEventEmitter.removeAllListeners(eventKeyGenerator(key, CRouteEvent.CATCH));
    }
}

export const CRouteInitializer = () => {
    const navigator = useNavigation<NavigationProp<{ [key: string]: any }>>();

    useEffect(() => {
        CRouter.init(navigator);

        return CRouter.closeRouter;
    }, []);

    useEffect(() => {
        CRouter.updateNavigator(navigator);
    }, [navigator]);

    return <></>
}
