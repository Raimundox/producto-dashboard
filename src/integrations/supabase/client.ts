// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ggxkjmyupbzfmkcjtxsj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdneGtqbXl1cGJ6Zm1rY2p0eHNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3MjI5NjIsImV4cCI6MjA1MjI5ODk2Mn0.psKtkGQmt1V1cPWXNAD3HvJ_c4bNBsp8re7nngvGmpU";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);