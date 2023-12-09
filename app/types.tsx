type TRandomUser = {
  id: string;
  name: string;
  image: string;
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
