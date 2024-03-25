import { forumApiEndpoint } from "@/config/endpoint";
import {
  LoginResponse,
  OwnProfileResponse,
  RegisterBody,
  RegisterResponse,
  UsersResponse,
} from "@/types/types/forumApi";
import methods from "../_utils/constant/methods";
import headers from "../_utils/helper/headers";

async function registerUserApi({
  name,
  email,
  password,
}: RegisterBody): Promise<RegisterResponse> {
  return await fetch(forumApiEndpoint.register, {
    method: methods.POST,
    headers: {
      ...headers.contentTypeJSON,
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  }).then((response) => response.json());
}

async function loginApi({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<LoginResponse> {
  return await fetch(forumApiEndpoint.login, {
    method: methods.POST,
    headers: {
      ...headers.contentTypeJSON,
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((response) => response.json());
}

async function getAllUsersApi(): Promise<UsersResponse> {
  return await fetch(forumApiEndpoint.users, {
    method: methods.GET,
  }).then((response) => response.json());
}

async function getOwnProfileApi(): Promise<OwnProfileResponse> {
  return await fetch(forumApiEndpoint.ownProfile, {
    method: methods.GET,
  }).then((response) => response.json());
}

export { registerUserApi, loginApi, getAllUsersApi, getOwnProfileApi };
