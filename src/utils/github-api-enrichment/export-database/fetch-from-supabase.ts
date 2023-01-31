import supabase from "./supabase";

type SupaBaseOptions = {
  head?: boolean;
  count?: "exact" | "planned" | "estimated" | null;
};

export default async function fetchFromSupabase(table: string, $: string, options?: SupaBaseOptions) {
  const response = await supabase.from(table).select($, options);
  if (response.error) {
    throw new Error(response.error.message);
    // console.error(response.error.message);
  }
  return response.data;
}
