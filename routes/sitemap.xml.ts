import { Handlers } from "$fresh/server.ts";
import manifest from "../fresh.gen.ts";
import { SitemapContext } from "https://deno.land/x/fresh_seo@0.1.0/mod.ts";

export const handler: Handlers = {
  GET(_req, _ctx) {
    const sitemap = new SitemapContext("https://deno.kr", manifest);

    return sitemap.render();
  },
};
