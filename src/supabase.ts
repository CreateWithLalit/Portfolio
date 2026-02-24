import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://flwbxwhivbsutalwjlqm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsd2J4d2hpdmJzdXRhbHdqbHFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3NTU0MDMsImV4cCI6MjA4NzMzMTQwM30.oaESaHTGVCLFyAXyjbebDNM62hHbJ0nhS6bL7PBHWY4'

export const supabase = createClient(supabaseUrl, supabaseKey)