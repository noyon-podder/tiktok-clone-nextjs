export type TUserContext = {
  user: TUser | null;
  register: (name: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkUser: () => Promise<void>;
};

export type TUser = {
  id: string;
  name: string;
  image: string;
  bio: string;
};

export type TRandomUser = {
  id: string;
  name: string;
  image: string;
};

export type TCropperDimensions = {
  height: number | null;
  width: number | null;
  top: number | null;
  left: number | null;
};

export type TShowErrorObject = {
  type: string;
  message: string;
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

export type CommentWithProfile = {
  id: string;
  user_id: string;
  post_id: string;
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

export type TCommentHeaderComp = {
  params: { userId: string; postId: string };
  post: PostWithProfile;
};

export type TCommentComp = {
  params: { userId: string; postId: string };
};

export type TSingleCommentComp = {
  params: { userId: string; postId: string };
  comment: CommentWithProfile;
};

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

export type TPostPage = {
  params: { userId: string; postId: string };
};
export type TTextInputComp = {
  string: string;
  placeholder: string;
  error: string;
  inputType: string;
  onUpdate: (newValue: string) => void;
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
