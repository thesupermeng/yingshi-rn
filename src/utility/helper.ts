export const getMaxWidth = (text: string, fontSize: number, ratio = 1) => {
    let size = 0;
    let nonNum = 0
    for (var i = 0; i < text.length; i++) {
        const c = text.charAt(i);
        if (c >= '0' && c <= '9') {
            size += fontSize
        } else {
            nonNum += 1
        }
    }
    size *= ratio;
    size += (nonNum * (fontSize + 1));
    return size;
}

export const getMinuteSecond = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    return formattedTime;
}

export const warnIgnore = (ignore: (string | RegExp)[]) => {
    const warnRef = console.warn;

    console.warn = (e: string, ...params: any[]) => {
        for (let msg of ignore) {
            if (msg instanceof RegExp) {
                if (msg.test(e)) return;
            } else {
                if (e.includes(msg)) return;
            }
        }

        return warnRef(e, ...params);
    }
}

export const logIgnore = (ignore: (string | RegExp)[]) => {
    const logRef = console.log;

    console.log = (e: string, ...params: any[]) => {
        for (let msg of ignore) {
            if (msg instanceof RegExp) {
                if (msg.test(e)) return;
            } else if (typeof e === 'string') {
                if (e.includes(msg)) return;
            }
        }

        return logRef(e, ...params);
    }
}
