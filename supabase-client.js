const SUPABASE_URL = "https://rxlgjtdaofofhdzolenn.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4bGdqdGRhb2ZvZmhkem9sZW5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU5MDQxMDYsImV4cCI6MjEwMTQ4MDEwNn0.sTUavJq-AR3ZQS28XbcPDyzfyaXG-JV4HdQ2rFztFoQ";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
