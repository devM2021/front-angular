export type UserInfo = {
  username: string;
  roles: string;
  token: string;
};

export type LoginInput = {
  username: string;
  password: string;
};

export type Role = {
  id: string;
  name: string;
};

export type User = {
  id?: string;
  username: string;
  password?: string;
  confirmPassword?: string;
  role?: Role[];
};

export type Vehicle = {
  id: string;
  name: string;
  description: string;
  comments: Comment[];
};

export type Comment = {
  id: string;
  commentDate: Date;
  content: String;
  vehicle?: Vehicle;
  localUser?: User;
};

export type CommentInput = {
  id?: string;
  vehicleId: string;
  username: string;
  content: string;
};
