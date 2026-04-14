import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BusinessProfile {
  id: string;
  name: string;
  domain: string;
  location: string;
  status: 'Active' | 'Inactive';
  tags: string[];
  lastRun?: string;
  tokens: number;
}

interface ProfileState {
  profiles: BusinessProfile[];
  isLoading: boolean;
}

const initialState: ProfileState = {
  profiles: [
    {
      id: '1',
      name: 'DigitalSEO',
      domain: 'https://www.digitalseo.in/',
      location: 'Tirunelveli',
      status: 'Active',
      tags: [],
      tokens: 0,
    }
  ],
  isLoading: false,
};

const profileSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    setProfiles: (state, action: PayloadAction<BusinessProfile[]>) => {
      state.profiles = action.payload;
    },
    addProfile: (state, action: PayloadAction<Omit<BusinessProfile, 'id'>>) => {
      state.profiles.push({
        ...action.payload,
        id: Math.random().toString(36).substr(2, 9),
      });
    },
    updateProfile: (state, action: PayloadAction<{ id: string; profile: Partial<BusinessProfile> }>) => {
      const { id, profile } = action.payload;
      const index = state.profiles.findIndex((p) => p.id === id);
      if (index !== -1) {
        state.profiles[index] = { ...state.profiles[index], ...profile };
      }
    },
    deleteProfile: (state, action: PayloadAction<string>) => {
      state.profiles = state.profiles.filter((p) => p.id !== action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setProfiles, addProfile, updateProfile, deleteProfile, setLoading } = profileSlice.actions;
export default profileSlice.reducer;
