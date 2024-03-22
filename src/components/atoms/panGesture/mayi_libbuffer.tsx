import { useSharedValue } from "react-native-reanimated"

export type Position = {
    x: number,
    y: number,
}

type mayi_RegisterTicked = {
}

export const useCPanGestureHook = ({
}: mayi_RegisterTicked = {}) => {
    const startPosition = useSharedValue<Position | undefined>(undefined);
    const previousPosition = useSharedValue<Position | undefined>(undefined);
    const currentPosition = useSharedValue<Position | undefined>(undefined);
    const differentPosition = useSharedValue<Position | undefined>(undefined);

    return {
        startPosition,
        previousPosition,
        currentPosition,
        differentPosition,
    };
}