import {
  Owner,
  Thread,
  User,
  Comment,
  ThreadVote,
  CommentVote,
  Leaderboard,
  DetailThread,
} from "./shared";

type RegisterBody = {
  name: string;
  email: string;
  password: string;
};

type RegisterResponse = {
  status: string;
  message: string;
  data: {
    user: {
      id: string;
      name: string;
      email: string;
      avatar: string;
    };
  };
};

type LoginBody = {
  email: string;
  password: string;
};

type LoginResponse = {
  status: string;
  message: string;
  data: {
    token: string;
  };
};

type UsersResponse = {
  status: string;
  message: string;
  data: {
    users: User[];
  };
};

type OwnProfileResponse = {
  status: string;
  message: string;
  data: {
    user: User;
  };
};

type CreateThreadBody = {
  title: string;
  body: string;
  category: string;
};

type CreateThreadResponse = {
  status: string;
  message: string;
  data: {
    thread: Thread;
  };
};

type ThreadsResponse = {
  status: string;
  message: string;
  data: {
    threads: Thread[];
  };
};

type DetailThreadResponse = {
  status: string;
  message: string;
  data: {
    detailThread: DetailThread;
  };
};

type CreateCommentResponse = {
  status: string;
  message: string;
  data: {
    comment: Comment;
  };
};

type VoteThreadResponse = {
  status: string;
  message: string;
  data: {
    vote: ThreadVote;
  };
};

type VoteCommentResponse = {
  status: string;
  message: string;
  data: {
    vote: CommentVote;
  };
};

type LeaderboardResponse = {
  status: string;
  message: string;
  data: {
    leaderboards: Leaderboard[];
  };
};

export type {
  RegisterBody,
  RegisterResponse,
  LoginBody,
  LoginResponse,
  UsersResponse,
  OwnProfileResponse,
  CreateThreadBody,
  CreateThreadResponse,
  ThreadsResponse,
  DetailThreadResponse,
  CreateCommentResponse,
  VoteThreadResponse,
  VoteCommentResponse,
  LeaderboardResponse,
};
