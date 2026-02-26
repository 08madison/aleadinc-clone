import { Link } from "wouter";
import Layout from "@/components/Layout";

const supportItems = [
  {
    name: "Contact Us",
    path: "/support/contact-us",
    description: "Get in touch with our support team",
  },
  {
    name: "Q & A",
    path: "/support/q-a",
    description: "Frequently asked questions and answers",
  },
  {
    name: "Downloads",
    path: "/support/downloads",
    description: "Download product manuals and software",
  },
];

export default function Support() {
  return (
    <Layout>
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "20px 10px" }}>
        <h1 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px", color: "#333" }}>
          Support
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "16px" }}>
          {supportItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <div
                style={{
                  border: "1px solid #ddd",
                  padding: "16px",
                  cursor: "pointer",
                  backgroundColor: "white",
                }}
                className="hover:border-blue-500"
              >
                <h2 style={{ fontSize: "15px", fontWeight: "bold", color: "#0066cc", marginBottom: "8px" }}>
                  {item.name}
                </h2>
                <p style={{ fontSize: "13px", color: "#666" }}>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
