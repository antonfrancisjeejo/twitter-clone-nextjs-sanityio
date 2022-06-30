import { createClient } from "next-sanity";

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-03-10",
  token: process.env.SANITY_TOKEN,
};

export const sanityClient = createClient(config);
