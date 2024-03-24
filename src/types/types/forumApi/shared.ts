type User = {
  id: String;
  name: String;
  email: String;
  avatar: String;
};

type Thread = {
  id: String;
  title: String;
  body: String;
  category: String;
  createdAt: String;
  ownerId: String;
  upVotesBy: String[];
  downVotesBy: String[];
  totalComments: Number;
};

type Owner = {
  id: String;
  name: String;
  avatar: String;
};

type Comment = {
  id: String;
  content: String;
  createdAt: String;
  owner: Owner;
  upVotesBy: String[];
  downVotesBy: String[];
};

type ThreadVote = {
  id: String;
  userId: String;
  threadId: String;
  voteType: 0 | 1 | -1;
};

type CommentVote = {
  id: String;
  userId: String;
  commentId: String;
  voteType: 0 | 1 | -1;
};

type Leaderboard = {
  user: User;
  score: Number;
};

export type {
  User,
  Thread,
  Owner,
  Comment,
  ThreadVote,
  CommentVote,
  Leaderboard,
};
