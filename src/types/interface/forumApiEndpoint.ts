interface ForumApiEndpoint {
  root: string;
  register: string;
  login: string;
  users: string;
  ownProfile: string;
  threads: string;
  detailThread: (threadId: string) => string;
  createComment: (threadId: string) => string;
  upVoteThread: (threadId: string) => string;
  downVoteThread: (threadId: string) => string;
  neutralizeVoteThread: (threadId: string) => string;
  upVoteComment: (threadId: string, commentId: string) => string;
  downVoteComment: (threadId: string, commentId: string) => string;
  neutralizeVoteComment: (threadId: string, commentId: string) => string;
  leaderboards: string;
}

export type { ForumApiEndpoint };
