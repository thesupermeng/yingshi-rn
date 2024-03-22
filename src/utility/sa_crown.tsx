import Toast from 'react-native-simple-toast';

export class SMBing {
    static showToast = (text: string, {
        duration,
        gravity,
    }: {
        duration?: number,
        gravity?: string,
    } = {}) => {
        Toast.showWithGravity(text, duration ?? Toast.SHORT, gravity ?? Toast.CENTER);
    };
}
