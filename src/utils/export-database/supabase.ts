import { createClient } from "@supabase/supabase-js";

import dotenv from "dotenv";
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl?.length) {
  throw new Error("no supabase url found");
}

if (!supabaseKey?.length) {
  throw new Error("no supabase key found");
}

export default createClient(supabaseUrl, supabaseKey);
