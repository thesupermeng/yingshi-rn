export const getMaxWidth = (text: string, fontSize: number, ratio=0.85) => {
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
    size += (nonNum * fontSize);
    return size;
}
