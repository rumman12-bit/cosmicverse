import "./globals.css";

export const metadata = {
  title: "Cosmic Verse : A journey into Astrophysics & Cosmology",
  description: "A journey into Astrophysics & Cosmology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body qsfont">{children}</body>
    </html>
  );
}
