// components/Layout.js
import Footer from "./layout/Footer";
import FooterB from "./layout/FooterB";

export default function Layout({ children, footerType = "A" }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">{children}</main>
      {footerType === "B" ? <FooterB /> : <Footer />}
    </div>
  );
}
