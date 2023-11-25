import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mzmanoydjrwduoqcyipe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16bWFub3lkanJ3ZHVvcWN5aXBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk3NzkwNTksImV4cCI6MjAxNTM1NTA1OX0.C9hiIgPxH62KI8FzI3eevXdNeG85DJi4PoY5lHU0uoI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
