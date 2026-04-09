import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ivdwggrgokcjoxjyknxr.supabase.co"
const supabaseKey = "sb_publishable_aFyvLgqZ5O4Y3U1paLoqjw_ZCVcVTei"

export const supabase = createClient(supabaseUrl, supabaseKey)