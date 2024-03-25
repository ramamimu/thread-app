import { forumApiEndpoint } from "@/config/endpoint";
import { VoteType } from "@/types/types/forumApi/shared";
import { voteTypes } from "./constant";

function voteThreadEndpointCreator(
  threadId: string,
  voteType: VoteType
): string {
  switch (voteType) {
    case voteTypes.UPVOTE:
      return forumApiEndpoint.upVoteThread(threadId);
    case voteTypes.DOWNVOTE:
      return forumApiEndpoint.downVoteThread(threadId);
    case voteTypes.NEUTRALIZE:
      return forumApiEndpoint.neutralizeVoteThread(threadId);
    default:
      throw Error("thread id not available");
  }
}

function voteCommentEndpointCreator(
  threadId: string,
  commentId: string,
  voteType: VoteType
): string {
  switch (voteType) {
    case voteTypes.UPVOTE:
      return forumApiEndpoint.upVoteComment(threadId, commentId);
    case voteTypes.DOWNVOTE:
      return forumApiEndpoint.downVoteComment(threadId, commentId);
    case voteTypes.NEUTRALIZE:
      return forumApiEndpoint.neutralizeVoteComment(threadId, commentId);
    default:
      throw Error("thread id or comment id not available");
  }
}

export { voteThreadEndpointCreator, voteCommentEndpointCreator };
