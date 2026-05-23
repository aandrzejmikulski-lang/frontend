"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminTickets() {
  const [tickets, setTickets] = useState<any[]>([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const { data, error } = await supabase.from("tickets").select("*");
      if (!error) setTickets(data);
    };
    fetchTickets();
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: 28, marginBottom: 20 }}>Zgłoszenia mieszkańców</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {tickets.length === 0 ? (
          <p>Brak zgłoszeń.</p>
        ) : (
          tickets.map((t) => (
            <div
              key={t.id}
              className="glass"
              style={{
                padding: 20,
                borderRadius: 12,
                background: "rgba(255,255,255,0.08)",
              }}
            >
              <h3>{t.title}</h3>
              <p style={{ opacity: 0.7 }}>{t.description}</p>
              <p style={{ fontSize: 14, marginTop: 8 }}>
                Status: <strong>{t.status}</strong>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
