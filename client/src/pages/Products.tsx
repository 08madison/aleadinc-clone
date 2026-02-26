import { Link } from "wouter";
import Layout from "@/components/Layout";

const productCategories = [
  {
    name: "Bluetooth Wireless Transceivers",
    path: "/products/bluetooth-wireless-transceivers",
    description: "Home stereo audio transmitter and receiver",
  },
  {
    name: "Bluetooth Wireless Microphones",
    path: "/products/bluetooth-wireless-microphones",
    description: "Wireless microphone systems",
  },
  {
    name: "Bluetooth Wireless Transmitters/Receivers",
    path: "/products/bluetooth-wireless-transmitters-receivers",
    description: "Audio transmitters and receivers",
  },
  {
    name: "Bluetooth Hearing Aids Links",
    path: "/products/bluetooth-hearing-aids-links",
    description: "Wireless hearing aid accessories",
  },
  {
    name: "Accessories",
    path: "/products/accessories",
    description: "Microphone accessories",
  },
  {
    name: "Online Sales Channels",
    path: "/products/online-sales-channels",
    description: "Where to buy our products",
  },
];

export default function Products() {
  return (
    <Layout>
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "10px" }}>
        <h1 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px", color: "#333" }}>
          Products
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
          {productCategories.map((cat) => (
            <Link key={cat.path} href={cat.path}>
              <div
                style={{
                  border: "1px solid #ddd",
                  padding: "16px",
                  cursor: "pointer",
                  backgroundColor: "white",
                  transition: "border-color 0.2s",
                }}
                className="hover:border-blue-500"
              >
                <h2 style={{ fontSize: "15px", fontWeight: "bold", color: "#0066cc", marginBottom: "8px" }}>
                  {cat.name}
                </h2>
                <p style={{ fontSize: "13px", color: "#666" }}>{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
