import type { Post } from "@interfaces/post-response-strapi";
import { query } from "./strapi";

export async function getPosts(): Promise<Post[]> {
  const res = await query(
    "news?fields[0]=title&fields[1]=date&fields[2]=slug&fields[3]=description&populate[category][fields][0]=title&populate[cover][fields]=url&populate[gallery][fields]=url"
  );
  return res.data;
}
