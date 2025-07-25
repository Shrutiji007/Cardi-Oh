import { create } from 'zustand';

type PetState = {
  name: string;
  mood: string;
  streak: number;
  setName: (name: string) => void;
  setMood: (mood: string) => void;
  incrementStreak: () => void;
};

export const usePetStore = create<PetState>((set) => ({
  name: 'Cardi',
  mood: 'happy',
  streak: 0,
  setName: (name) => set({ name }),
  setMood: (mood) => set({ mood }),
  incrementStreak: () => set((state) => ({ streak: state.streak + 1 })),
}));
