import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "SufleCenter",
  description: "Sufle tadında AI Komutları"
};

function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Nav />
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
