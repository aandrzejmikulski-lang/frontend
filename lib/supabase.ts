import { createBrowserClient } from "@supabase/auth-helpers-nextjs";

export const supabase = createBrowserClient(
  "https://owhxyoxswzcycmgluywv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93aHh5b3hzd3pjeWNtZ2x1eXd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1NDg0MDEsImV4cCI6MjA5NTEyNDQwMX0.WV38FzTFmgnJWpe5QHDA5Gp9UgTeb3j8ldh5z9LGHcI"
);

