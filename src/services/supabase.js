
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://zeejxeiqhlliknvzsksf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplZWp4ZWlxaGxsaWtudnpza3NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4MTkxMzksImV4cCI6MjAyODM5NTEzOX0.N5m8mmmZwYt6_vsG4QYLLyiWtDHb7S8HkNdj2seAgGU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;