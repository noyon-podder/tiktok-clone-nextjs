export type TRandomUser = {
  id: string;
  name: string;
  image: string;
};
export type PostWithProfile = {
  id: string;
  user_id: string;
  video_url: string;
  text: string;
  created_at: string;
  profile: {
    user_id: string;
    name: string;
    image: string;
  };
};

export type TLike = {
  id: string;
  user_id: string;
  post_id: string;
};

export type TComment = {
  id: string;
  user_id: string;
  post_id: string;
  text: string;
  created_at: string;
};

export type Post = {
  id: string;
  user_id: string;
  video_url: string;
  text: string;
  created_at: string;
};
export type TUploadError = {
  type: string;
  message: string;
};
///////////////////////////////////////////////////
/////////////////////////////////////////////////

// component types
export type TPostMain = {
  post: PostWithProfile;
};

export type TPostMainLikesComp = {
  post: PostWithProfile;
};

export type TPostUserComp = {
  post: Post;
};

export type TProfilePage = {
  params: { id: string };
};
// layout includes
export type TMenuItems = {
  sizeString: string;
  colorString: string;
  iconString: string;
};

export type TMenuItemFollowComp = {
  user: TRandomUser;
};
