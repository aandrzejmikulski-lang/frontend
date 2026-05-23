"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Błędne dane logowania");
      return;
    }

    window.location.href = "/";
  }

  return (
    <div className="center">
      <div className="glass" style={{ padding: 40, width: 350 }}>
        <h2 style={{ marginBottom: 20, fontWeight: 600 }}>Logowanie</h2>

        <form onSubmit={handleLogin}>
          <input
            className="input"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input"
            type="password"
            placeholder="Hasło"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn" style={{ width: "100%", marginTop: 10 }}>
            Zaloguj się
          </button>
        </form>
      </div>
    </div>
  );
}

