import useGetLikesByPostId from "@/app/hooks/useGetLikesByPostId";
import { TLike } from "@/app/types";
import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";

interface LikeStore {
  likesByPost: TLike[];
  setLikesByPost: (postId: string) => void;
}

export const useLikeStore = create<LikeStore>()(
  devtools(
    persist(
      (set) => ({
        likesByPost: [],

        setLikesByPost: async (postId: string) => {
          const result = await useGetLikesByPostId(postId);
          set({ likesByPost: result });
        },
      }),
      {
        name: "store",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
