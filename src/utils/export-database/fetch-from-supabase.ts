import supabase from "./supabase";

export default async function fetchFromSupabase(table: string, $: string) {
  const response = await supabase.from(table).select($);
  if (response.error) {
    throw new Error(response.error.message);
    // log.info(response.error.message);
  }
  return response.data;
}
