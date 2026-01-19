import AsyncStorage from "@react-native-async-storage/async-storage";
import { Profile } from "../features/profile/types";

const STORAGE_KEY = "ALVION_PROFILES";

export const saveProfilesToStorage = async (profiles: Profile[]) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
  } catch (error) {
    console.error("Error saving profiles", error);
  }
};

export const loadProfilesFromStorage = async (): Promise<Profile[]> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error loading profiles", error);
    return [];
  }
};
