import axios from "axios";

const CMS_ACCESS_TOKEN = process.env.NEXT_PUBLIC_CMS_ACCESS_TOKEN;

export type Entries = {
  spaceId: string;
  environmentId: "master" | "staging";
};

export async function getAllEntries(entry: Entries) {
  const response = await axios.get(
    `/spaces/${entry.spaceId}/environments/${entry.environmentId}/entries?access_token=${CMS_ACCESS_TOKEN}`
  );
  return response.data;
}
