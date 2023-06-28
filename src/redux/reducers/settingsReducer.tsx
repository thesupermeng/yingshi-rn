import { ClearStorageActionType } from "../../types/actionTypes";
import { CLEAR_STORAGE_MEMORY } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function settingsReducer(state: any, action: ClearStorageActionType) {
    if (action.type === CLEAR_STORAGE_MEMORY) {
        console.log('CLEAR')
        AsyncStorage.clear()
        return true;
    }
    return false;
}