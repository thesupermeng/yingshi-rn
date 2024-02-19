import AsyncStorage from "@react-native-async-storage/async-storage";
import { EventApi } from "../src/api/event";
import { EVENT_ANALYSIS_INTERVEL_SECONDS } from "@utility";

type _EventParamsType = {
    desc_1: string,
    desc_2?: string,
    desc_3?: string,
    desc_4?: string,
    desc_5?: string,
}

type _EventDataType = {
    params: _EventParamsType | null,
    num_viewed: number,
    num_clicked: number,
}

export type EventType = {
    title: string,
    name?: string,
    ads_slot_id: number,
    ads_id: number,
    data: _EventDataType[],
}

export type EventApiJsonType = {
    stats: EventType[],
    created_at: number,
}

export class CustomEventAnalytic {
    static #localKey: string = 'customEvent'; // seconds
    static #intervalTime: number = EVENT_ANALYSIS_INTERVEL_SECONDS; // seconds
    static #intervalTimeout: NodeJS.Timeout | null = null;
    static #events: EventType[] = [];

    static start = () => {
        this.#intervalTimeout = setInterval(this.#pushEvent, this.#intervalTime * 1000);
    }

    static close = () => {
        if (this.#intervalTimeout === null) return;

        clearInterval(this.#intervalTimeout);
    }

    static setIntervalTime = (time: number) => {
        // to fixed intervalTime only in accept 10 - 600 second
        if (typeof time !== 'number' || !(10 <= time && time <= 600)) {
            return;
        }

        this.#intervalTime = time;
    }

    static onEvent = ({
        type,
        title,
        name,
        ads_slot_id,
        ads_id,
        params,
    }: {
        type: 'view' | 'click' | 'count',
        title: string,
        name?: string,
        ads_slot_id?: number,
        ads_id?: number,
        params?: _EventParamsType,
    }) => {
        if (title === undefined || title === '') {
            console.debug('add event fail. title is empty');
            return;
        }

        const elementFound = this.#events.findIndex((e) => this.#isEventEqual(e, {
            ads_slot_id: ads_slot_id ?? 0,
            ads_id: ads_id ?? 0,
            title: title,
            name: name ?? '',
            data: [],
        }));

        if (elementFound === -1) {
            this.#events.push({
                title: title,
                name: name ?? '',
                ads_slot_id: ads_slot_id ?? 0,
                ads_id: ads_id ?? 0,
                data: [
                    {
                        params: params ?? null,
                        num_viewed: type === 'view' || type === 'count' ? 1 : 0,
                        num_clicked: type === 'click' ? 1 : 0,
                    }
                ],
            });
            this.#saveLocal();
            return;
        }

        const paramsFound = this.#events[elementFound].data.findIndex((e) => this.#isParamsEqual(e.params, params ?? null));

        if (paramsFound === -1) {
            this.#events[elementFound].data.push({
                params: params ?? null,
                num_viewed: type === 'view' || type === 'count' ? 1 : 0,
                num_clicked: type === 'click' ? 1 : 0,
            });
            this.#saveLocal();
            return;
        }

        if (type === 'view' || type === 'count') {
            this.#events[elementFound].data[paramsFound].num_viewed++;
        }

        if (type === 'click') {
            this.#events[elementFound].data[paramsFound].num_clicked++;
        }

        this.#saveLocal();
    }

    static foundLocalPush = async () => {
        // todo: search & push 
        const jsonStr = await AsyncStorage.getItem(this.#localKey);

        if (jsonStr === null) return;

        const json: EventApiJsonType = JSON.parse(jsonStr);
        EventApi.postEvents(json);
    }

    static #pushEvent = () => {
        const utcTime = Math.floor((new Date()).getTime() / 1000);

        const json: EventApiJsonType = {
            stats: this.#events,
            created_at: utcTime,
        }

        EventApi.postEvents(json).then((result) => {
            if (result) {
                this.#events.length = 0;
            }
        });
    }

    static #isEventEqual = (event1: EventType, event2: EventType) => {
        return event1.ads_slot_id === event2.ads_slot_id &&
            event1.ads_id === event2.ads_id &&
            event1.title === event2.title &&
            event1.name === event2.name;
    }

    static #isParamsEqual = (data1: _EventParamsType | null, data2: _EventParamsType | null) => {
        return (data1 === null && data2 === null) || (
            data1?.desc_1 === data2?.desc_1 &&
            data1?.desc_2 === data2?.desc_2 &&
            data1?.desc_3 === data2?.desc_3 &&
            data1?.desc_4 === data2?.desc_4 &&
            data1?.desc_5 === data2?.desc_5
        );
    }

    static #saveLocal = () => {
        const utcTime = Math.floor((new Date()).getTime() / 1000);

        const json: EventApiJsonType = {
            stats: this.#events,
            created_at: utcTime,
        }
        const jsonStr = JSON.stringify(json);

        AsyncStorage.setItem(this.#localKey, jsonStr);
    }
}