import { Link } from "wouter";
import Layout from "@/components/Layout";

const CONTACT_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/wopnNJMBuyuOGxmp.jpeg";

export default function ContactUs() {
  return (
    <Layout>
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 10px" }}>
        {/* Banner */}
        <div style={{ margin: "10px 0", backgroundColor: "#eee" }}>
          <img
            src={CONTACT_BANNER}
            alt="Contact Us"
            style={{ width: "100%", maxHeight: "295px", objectFit: "cover" }}
          />
        </div>

        {/* Content area with sidebar + main */}
        <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "10px 0" }}>
          {/* Sidebar */}
          <div className="category-sidebar hidden md:block">
            <Link href="/support/downloads">
              <div style={{ display: "block", padding: "6px 12px", fontSize: "13px", borderBottom: "1px solid #eee", color: "#333", cursor: "pointer" }}
                className="hover:text-blue-600 hover:bg-gray-50">
                Downloads
              </div>
            </Link>
            <Link href="/support/q-a">
              <div style={{ display: "block", padding: "6px 12px", fontSize: "13px", borderBottom: "1px solid #eee", color: "#333", cursor: "pointer" }}
                className="hover:text-blue-600 hover:bg-gray-50">
                Q &amp; A
              </div>
            </Link>
            <Link href="/support/contact-us">
              <div style={{ display: "block", padding: "6px 12px", fontSize: "13px", borderBottom: "1px solid #eee", color: "#0066cc", backgroundColor: "#f5f5f5", cursor: "pointer" }}>
                Contact Us
              </div>
            </Link>
          </div>

          {/* Main content */}
          <div style={{ flex: 1 }}>
            <div style={{ marginBottom: "20px" }}>
              <h2 style={{ fontSize: "15px", fontWeight: "bold", color: "#333", marginBottom: "8px" }}>
                Headquarters
              </h2>
              <div style={{ fontSize: "13px", color: "#555", lineHeight: "1.8" }}>
                <p>1525 McCarthy Blvd. #1000</p>
                <p>Milpitas, Ca. 95035, USA</p>
                <p>Phone: +1-408-813-8988</p>
              </div>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h2 style={{ fontSize: "15px", fontWeight: "bold", color: "#333", marginBottom: "8px" }}>
                China - ShangHai
              </h2>
              <div style={{ fontSize: "13px", color: "#555", lineHeight: "1.8" }}>
                <p>716, Building E, 1618 Yishan Road</p>
                <p>ShangHai, China 20113</p>
                <p>Phone:+86(0)21-6406-1664</p>
              </div>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h2 style={{ fontSize: "15px", fontWeight: "bold", color: "#333", marginBottom: "8px" }}>
                China - ShenZhen
              </h2>
              <div style={{ fontSize: "13px", color: "#555", lineHeight: "1.8" }}>
                <p>Room 2107, Block B, Jing Yuan Hua Ting Garden</p>
                <p>Fu Qiang Road, Fun Tian District, ShenZhen, China 518045</p>
                <p>Phone:+86(0)755-8398-8910</p>
              </div>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h2 style={{ fontSize: "15px", fontWeight: "bold", color: "#333", marginBottom: "8px" }}>
                Products question/products information
              </h2>
              <div style={{ fontSize: "13px", color: "#555", lineHeight: "1.8" }}>
                <p>E-mail: <a href="mailto:info@aleadinc.com" style={{ color: "#0066cc" }}>info@aleadinc.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
