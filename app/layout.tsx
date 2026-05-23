export const metadata = {
  title: "Wspólnota Pro",
  description: "Panel mieszkańca i administratora",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}

