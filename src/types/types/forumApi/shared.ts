type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

type Thread = {
  id: string;
  title: string;
  body: string;
  category: string;
  createdAt: string;
  ownerId: string;
  upVotesBy: string[];
  downVotesBy: string[];
  totalComments: Number;
};

type DetailThread = {
  id: string;
  title: string;
  body: string;
  category: string;
  createdAt: string;
  upVotesBy: string[];
  downVotesBy: string[];
  owner: Owner[];
  comments: Comment[];
};

type Owner = {
  id: string;
  name: string;
  avatar: string;
};

type Comment = {
  id: string;
  content: string;
  createdAt: string;
  owner: Owner;
  upVotesBy: string[];
  downVotesBy: string[];
};

type VoteType = 0 | 1 | -1;

type ThreadVote = {
  id: string;
  userId: string;
  threadId: string;
  voteType: VoteType;
};

type CommentVote = {
  id: string;
  userId: string;
  commentId: string;
  voteType: VoteType;
};

type Leaderboard = {
  user: User;
  score: Number;
};

type VoteEndpoint = "up-vote" | "down-vote" | "neutral-vote";

export type {
  User,
  Thread,
  DetailThread,
  Owner,
  Comment,
  ThreadVote,
  CommentVote,
  Leaderboard,
  VoteType,
  VoteEndpoint,
};
