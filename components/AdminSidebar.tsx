"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", href: "/admin/dashboard" },
    { name: "Wspólnoty", href: "/admin/communities" },
    { name: "Budynki", href: "/admin/buildings" },
    { name: "Lokale", href: "/admin/units" },
    { name: "Zgłoszenia", href: "/admin/tickets" },
    { name: "Użytkownicy", href: "/admin/users" },
  ];

  return (
    <div
      className="glass"
      style={{
        width: 240,
        height: "100vh",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        position: "fixed",
        left: 20,
        top: 20,
      }}
    >
      <h2 style={{ fontSize: 20, marginBottom: 10 }}>Admin Panel</h2>

      {menu.map((item) => (
        <Link key={item.href} href={item.href}>
          <div
            className="glass"
            style={{
              padding: "12px 16px",
              borderRadius: 14,
              background:
                pathname === item.href
                  ? "rgba(255,255,255,0.18)"
                  : "rgba(255,255,255,0.08)",
              cursor: "pointer",
              transition: "0.2s",
            }}
          >
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
