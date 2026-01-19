import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile, ProfileState } from "./types";
import { saveProfilesToStorage } from "../../utils/storage";

const initialState: ProfileState = {
  draft: {
    id: "",
    fullName: "",
    email: "",
    age: "",
    city: "",
    state: "",
    country: "",
  },
  profiles: [],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    
    setProfiles(state, action: PayloadAction<Profile[]>) {
      state.profiles = action.payload;
    },

    updateDraft(state, action: PayloadAction<Partial<Profile>>) {
      state.draft = { ...state.draft, ...action.payload };
    },
    saveProfile(state) {
      const newProfile = { ...state.draft, id: Date.now().toString() };
      state.profiles.push(newProfile);
      saveProfilesToStorage(state.profiles);
      state.draft = initialState.draft;
    },

    deleteProfile(state, action: PayloadAction<string>) {
      state.profiles = state.profiles.filter((p) => p.id !== action.payload);
      saveProfilesToStorage(state.profiles);
    },
  },
});

export const { updateDraft, saveProfile, deleteProfile } = profileSlice.actions;

export default profileSlice.reducer;
