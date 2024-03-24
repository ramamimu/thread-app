import { ForumApiEndpoint } from "@/types/interface/forumApiEndpoint";
import config from "@/config";

const forumApiEndpoint = (): ForumApiEndpoint => {
  const root: String = config.forumApiEndpoint;

  return {
    root: root,
    register: `${root}/register`,
    login: `${root}/login`,
    users: `${root}/users`,
    ownProfile: `${root}/users/me`,
    threads: `${root}/threads`,
    detailThread: (threadId) => `${root}/threads/${threadId}`,
    createComment: (threadId) => `${root}/threads/${threadId}/comments`,
    upVoteThread: (threadId) => `${root}/threads/${threadId}/up-vote`,
    downVoteThread: (threadId) => `${root}/threads/${threadId}/down-vote`,
    neutralizeVoteThread: (threadId) =>
      `${root}/threads/${threadId}/neutral-vote`,
    upVoteComment: (threadId, commentId) =>
      `${root}/threads/${threadId}/comments/${commentId}/up-vote`,
    downVoteComment: (threadId, commentId) =>
      `${root}/threads/${threadId}/comments/${commentId}/down-vote`,
    neutralizeVoteComment: (threadId, commentId) =>
      `${root}/threads/${threadId}/comments/${commentId}/neutral-vote`,
    leaderboards: `${root}/leaderboards`,
  };
};

export { forumApiEndpoint };
