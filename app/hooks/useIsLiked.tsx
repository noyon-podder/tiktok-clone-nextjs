import { TLike } from "../types";

const useIsLiked = (userId: string, postId: string, likes: Array<TLike>) => {
  let res: TLike[] = [];
  likes?.forEach((like) => {
    if (like.user_id == userId && like.post_id == postId) res.push(like);
  });
  if (typeof res == undefined) return;
  return res.length > 0;
};

export default useIsLiked;
