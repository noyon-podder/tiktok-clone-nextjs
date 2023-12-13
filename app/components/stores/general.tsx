import useGetRandomUsers from "@/app/hooks/useGetRandomUsers";
import { TRandomUser } from "@/app/types";
import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";

interface GeneralStore {
  isLoginOpen: boolean;
  isEditProfileOpen: boolean;
  randomUsers: TRandomUser[];
  setIsLoginOpen: (val: boolean) => void;
  setIsEditProfileOpen: (val: boolean) => void;
  setRandomUsers: () => void;
}

export const useGeneralStore = create<GeneralStore>()(
  devtools(
    persist(
      (set) => ({
        isLoginOpen: false,
        isEditProfileOpen: false,
        randomUsers: [],

        setIsLoginOpen: (val: boolean) => set({ isLoginOpen: val }),
        setIsEditProfileOpen: (val: boolean) => set({ isEditProfileOpen: val }),
        setRandomUsers: async () => {
          const result = await useGetRandomUsers();
          set({ randomUsers: result });
        },
      }),
      {
        name: "store",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
