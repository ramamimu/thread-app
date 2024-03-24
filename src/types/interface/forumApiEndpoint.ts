interface ForumApiEndpoint {
  root: String;
  register: String;
  login: String;
  users: String;
  ownProfile: String;
  threads: String;
  detailThread: (threadId: String) => String;
  createComment: (threadId: String) => String;
  upVoteThread: (threadId: String) => String;
  downVoteThread: (threadId: String) => String;
  neutralizeVoteThread: (threadId: String) => String;
  upVoteComment: (threadId: String, commentId: String) => String;
  downVoteComment: (threadId: String, commentId: String) => String;
  neutralizeVoteComment: (threadId: String, commentId: String) => String;
  leaderboards: String;
}

export type { ForumApiEndpoint };
