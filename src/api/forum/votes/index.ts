import {
  VoteCommentResponse,
  VoteThreadResponse,
} from "@/types/types/forumApi";
import {
  voteCommentEndpointCreator,
  voteThreadEndpointCreator,
} from "./helper";
import { VoteType } from "@/types/types/forumApi/shared";
import methods from "@/api/_utils/constant/methods";
import headers from "@/api/_utils/helper/headers";

async function voteThreadApi(
  threadId: string,
  voteType: VoteType
): Promise<VoteThreadResponse> {
  return await fetch(voteThreadEndpointCreator(threadId, voteType), {
    method: methods.POST,
    headers: {
      ...headers.authorizationBearer,
    },
  }).then((response) => response.json());
}

async function voteCommentApi(
  threadId: string,
  commentId: string,
  voteType: VoteType
): Promise<VoteCommentResponse> {
  return await fetch(
    voteCommentEndpointCreator(threadId, commentId, voteType),
    {
      method: methods.POST,
      headers: {
        ...headers.authorizationBearer,
      },
    }
  ).then((response) => response.json());
}

export { voteThreadApi, voteCommentApi };
