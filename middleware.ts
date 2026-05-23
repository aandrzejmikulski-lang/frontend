import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // Pobieramy sesję użytkownika
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const isAuthRoute = req.nextUrl.pathname.startsWith("/login");

  // Jeśli nie ma sesji → kierujemy na /login
  if (!session && !isAuthRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Jeśli użytkownik jest zalogowany i wchodzi na stronę główną "/"
  if (session && req.nextUrl.pathname === "/") {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", session.user.id)
      .single();

    // Routing po roli
    if (profile?.role === "admin") {
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    } else {
      return NextResponse.redirect(new URL("/user/dashboard", req.url));
    }
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next|static|favicon.ico).*)"],
};

