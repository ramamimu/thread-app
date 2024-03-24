import {
  Owner,
  Thread,
  User,
  Comment,
  ThreadVote,
  CommentVote,
  Leaderboard,
} from "./shared";

type RegisterBody = {
  name: String;
  email: String;
  password: String;
};

type RegisterResponse = {
  status: String;
  message: String;
  data: {
    user: {
      id: String;
      name: String;
      email: String;
      avatar: String;
    };
  };
};

type LoginBody = {
  email: String;
  password: String;
};

type LoginResponse = {
  status: String;
  message: String;
  data: {
    token: String;
  };
};

type UsersResponse = {
  status: String;
  message: String;
  data: {
    users: User[];
  };
};

type OwnProfileResponse = {
  status: String;
  message: String;
  data: {
    user: User;
  };
};

type CreateThreadBody = {
  title: String;
  body: String;
  category: String;
};

type CreateThreadResponse = {
  status: String;
  message: String;
  data: {
    thread: Thread;
  };
};

type ThreadsResponse = {
  status: String;
  message: String;
  data: {
    threads: Thread[];
  };
};

type DetailThreadResponse = {
  status: String;
  message: String;
  data: {
    detailThread: {
      id: String;
      title: String;
      body: String;
      category: String;
      createdAt: String;
      upVotesBy: String[];
      downVotesBy: String[];
      owner: Owner[];
      comments: Comment[];
    };
  };
};

type CreateCommentResponse = {
  status: String;
  message: String;
  data: {
    comment: Comment;
  };
};

type VoteThreadResponse = {
  status: String;
  message: String;
  data: {
    vote: ThreadVote;
  };
};

type VoteCommentResponse = {
  status: String;
  message: String;
  data: {
    vote: CommentVote;
  };
};

type LeaderboardResponse = {
  status: String;
  message: String;
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
