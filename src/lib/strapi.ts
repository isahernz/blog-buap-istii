import { STRAPI_TOKEN } from "astro:env/server";
import { STRAPI_HOST } from "astro:env/client";

export async function query(url: string) {
  const res = await fetch(`${STRAPI_HOST}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  });
  return await res.json();
}
