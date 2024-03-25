import { forumApiEndpoint } from "@/config/endpoint";
import {
  CreateThreadBody,
  CreateThreadResponse,
  DetailThreadResponse,
  ThreadsResponse,
} from "@/types/types/forumApi";
import methods from "../_utils/constant/methods";
import headers from "../_utils/helper/headers";

async function createThreadApi(
  { title, body, category }: CreateThreadBody,
  token: string | null
): Promise<CreateThreadResponse> {
  return await fetch(forumApiEndpoint.threads, {
    method: methods.POST,
    headers: {
      ...headers.contentTypeJSON,
      ...headers.authorizationBearer(token),
    },
    body: JSON.stringify({
      title,
      body,
      category,
    }),
  }).then((response) => response.json());
}

async function getAllThreadsApi(): Promise<ThreadsResponse> {
  return await fetch(forumApiEndpoint.threads, {
    method: methods.GET,
  }).then((response) => response.json());
}

async function getDetailThreadApi(
  threadId: string
): Promise<DetailThreadResponse> {
  return await fetch(forumApiEndpoint.detailThread(threadId), {
    method: methods.GET,
  }).then((response) => response.json());
}

export { createThreadApi, getAllThreadsApi, getDetailThreadApi };
