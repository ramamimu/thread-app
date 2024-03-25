import { forumApiEndpoint } from "@/config/endpoint";
import { CreateCommentResponse } from "@/types/types/forumApi";
import methods from "../_utils/constant/methods";
import headers from "../_utils/helper/headers";

async function createCommentApi(
  content: string,
  threadId: string
): Promise<CreateCommentResponse> {
  return await fetch(forumApiEndpoint.createComment(threadId), {
    method: methods.POST,
    headers: {
      ...headers.contentTypeJSON,
      ...headers.authorizationBearer,
    },
    body: JSON.stringify({
      content,
    }),
  }).then((response) => response.json());
}

export { createCommentApi };
