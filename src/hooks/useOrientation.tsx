import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

const isPortrait = () => {
    const dimension = Dimensions.get('screen');
    return dimension.height >= dimension.width;
};

export function useOrientation(): boolean {
    
    const [isPotrait, setIsPotrait] = useState<boolean>(
        isPortrait() ? true : false,
    );

    useEffect(() => {
        const callback = () => setIsPotrait(isPortrait() ? true : false);
        let eventListener = Dimensions.addEventListener('change', callback);

        return () => {
            // Dimensions.removeEventListener('change', callback);
            // eventListener.remove();
        };
    }, []);

    return isPotrait;
}