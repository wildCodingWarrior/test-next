import "styles/globals.css";
import { QueryClientWrapper } from "@/components/QueryClientWrapper";
import NavigationBar from "@/components/Navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-300">
        <NavigationBar />
        <QueryClientWrapper>{children}</QueryClientWrapper>
      </body>
    </html>
  );
}
