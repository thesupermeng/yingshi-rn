import { useSharedValue } from "react-native-reanimated"

export type Position = {
    x: number,
    y: number,
}

type yys_HolderLibimagepipeline = {
}

export const useCPanGestureHook = ({
}: yys_HolderLibimagepipeline = {}) => {
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