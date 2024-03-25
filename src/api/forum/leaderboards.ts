import { forumApiEndpoint } from "@/config/endpoint";
import { LeaderboardResponse } from "@/types/types/forumApi";
import methods from "../_utils/constant/methods";

async function getLeaderboard(): Promise<LeaderboardResponse> {
  return await fetch(forumApiEndpoint.leaderboards, {
    method: methods.GET,
  }).then((response) => response.json());
}

export { getLeaderboard };
