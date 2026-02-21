import "./globals.css";
import Navbar from "./Navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main> 
      </body>
    </html>
  );
}
