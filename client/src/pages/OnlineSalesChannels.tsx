import { Link } from "wouter";
import Layout from "@/components/Layout";

const SALES_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/MWRgfDjKmdpvzxdx.jpeg";

const salesChannels = {
  "North America": [
    { name: "Amazon-USA", url: "https://www.amazon.com/s?k=alead+bluetooth" },
    { name: "eBay", url: "https://www.ebay.com/sch/i.html?_nkw=alead+bluetooth" },
    { name: "Amazon-Canada", url: "https://www.amazon.ca/s?k=alead+bluetooth" },
  ],
  "Europe": [
    { name: "Amazon-UK", url: "https://www.amazon.co.uk/s?k=alead+bluetooth" },
    { name: "Amazon-Germany", url: "https://www.amazon.de/s?k=alead+bluetooth" },
    { name: "Amazon-France", url: "https://www.amazon.fr/s?k=alead+bluetooth" },
    { name: "Amazon-Spain", url: "https://www.amazon.es/s?k=alead+bluetooth" },
    { name: "Amazon-Italy", url: "https://www.amazon.it/s?k=alead+bluetooth" },
  ],
  "China": [
    { name: "Taobao 淘宝网", url: "https://www.taobao.com" },
  ],
  "Japan": [
    { name: "Amazon-Japan", url: "https://www.amazon.co.jp/s?k=alead+bluetooth" },
  ],
};

const categoryLinks = [
  { name: "Bluetooth Wireless Transceivers", path: "/products/bluetooth-wireless-transceivers" },
  { name: "Bluetooth Wireless Microphones", path: "/products/bluetooth-wireless-microphones" },
  { name: "Bluetooth Wireless Transmitters/Receivers", path: "/products/bluetooth-wireless-transmitters-receivers" },
  { name: "Bluetooth Hearing Aids Links", path: "/products/bluetooth-hearing-aids-links" },
  { name: "Accessories", path: "/products/accessories" },
  { name: "Online Sales Channels", path: "/products/online-sales-channels" },
];

export default function OnlineSalesChannels() {
  return (
    <Layout>
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 10px" }}>
        {/* Banner */}
        <div style={{ margin: "10px 0", backgroundColor: "#eee" }}>
          <img
            src={SALES_BANNER}
            alt="Online Sales Channels"
            style={{ width: "100%", maxHeight: "295px", objectFit: "cover" }}
          />
        </div>

        {/* Content area with sidebar + main */}
        <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "10px 0" }}>
          {/* Sidebar */}
          <div className="category-sidebar hidden md:block">
            {categoryLinks.map((cat) => (
              <Link key={cat.path} href={cat.path}>
                <div
                  style={{
                    display: "block",
                    padding: "6px 12px",
                    fontSize: "13px",
                    borderBottom: "1px solid #eee",
                    color: cat.path === "/products/online-sales-channels" ? "#0066cc" : "#333",
                    backgroundColor: cat.path === "/products/online-sales-channels" ? "#f5f5f5" : "transparent",
                    cursor: "pointer",
                  }}
                  className="hover:text-blue-600 hover:bg-gray-50"
                >
                  {cat.name}
                </div>
              </Link>
            ))}
          </div>

          {/* Main content */}
          <div style={{ flex: 1 }}>
            {Object.entries(salesChannels).map(([region, channels]) => (
              <div key={region} style={{ marginBottom: "20px" }}>
                <h2 style={{ fontSize: "15px", fontWeight: "bold", color: "#333", marginBottom: "8px" }}>
                  {region}
                </h2>
                <div>
                  {channels.map((channel, idx) => (
                    <div key={idx} style={{ marginBottom: "4px" }}>
                      <a
                        href={channel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#0066cc", fontSize: "13px", textDecoration: "none" }}
                        className="hover:underline"
                      >
                        {channel.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
