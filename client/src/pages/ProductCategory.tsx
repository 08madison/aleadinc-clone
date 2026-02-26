import { useState } from "react";
import { Link, useLocation } from "wouter";
import Layout from "@/components/Layout";
import { products, categoryInfo, Product } from "@/lib/products";

const categoryLinks = [
  { name: "Bluetooth Wireless Transceivers", path: "/products/bluetooth-wireless-transceivers", key: "transceivers" },
  { name: "Bluetooth Wireless Microphones", path: "/products/bluetooth-wireless-microphones", key: "microphones" },
  { name: "Bluetooth Wireless Transmitters/Receivers", path: "/products/bluetooth-wireless-transmitters-receivers", key: "transmitters" },
  { name: "Bluetooth Hearing Aids Links", path: "/products/bluetooth-hearing-aids-links", key: "hearingaids" },
  { name: "Accessories", path: "/products/accessories", key: "accessories" },
  { name: "Online Sales Channels", path: "/products/online-sales-channels", key: "online" },
];

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
}

function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "24px",
          maxWidth: "600px",
          width: "90%",
          maxHeight: "80vh",
          overflowY: "auto",
          borderRadius: "4px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>{product.name}</h2>
          <button
            onClick={onClose}
            style={{ fontSize: "20px", color: "#999", background: "none", border: "none", cursor: "pointer" }}
          >
            ×
          </button>
        </div>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "200px", height: "auto", objectFit: "contain" }}
          />
          <div style={{ flex: 1, minWidth: "200px" }}>
            <div style={{ marginBottom: "12px" }}>
              <span style={{ fontSize: "20px", fontWeight: "bold", color: "#cc0000" }}>
                ${product.price.toFixed(2)}
              </span>
              <span style={{ fontSize: "14px", color: "#999", textDecoration: "line-through", marginLeft: "8px" }}>
                ${product.originalPrice.toFixed(2)}
              </span>
            </div>
            <p style={{ fontSize: "13px", color: "#555", lineHeight: "1.6" }}>
              Feature: • {product.description}
            </p>
            <div style={{ marginTop: "16px" }}>
              <button
                style={{
                  backgroundColor: "#0066cc",
                  color: "white",
                  border: "none",
                  padding: "8px 16px",
                  fontSize: "13px",
                  cursor: "pointer",
                  borderRadius: "3px",
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Props {
  category: string;
}

export default function ProductCategory({ category }: Props) {
  const [location] = useLocation();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categoryProducts = products[category] || [];
  const info = categoryInfo[category];

  if (!info) {
    return (
      <Layout>
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "20px" }}>
          <p>Category not found.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 10px" }}>
        {/* Banner */}
        <div style={{ margin: "10px 0", backgroundColor: "#eee" }}>
          <img
            src={info.banner}
            alt={info.title}
            style={{ width: "100%", maxHeight: "295px", objectFit: "cover" }}
          />
        </div>

        {/* Content area: sidebar + products */}
        <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
          {/* Category sidebar */}
          <div className="category-sidebar hidden md:block">
            {categoryLinks.map((cat) => (
              <Link key={cat.path} href={cat.path}>
                <div
                  style={{
                    display: "block",
                    padding: "6px 12px",
                    fontSize: "13px",
                    borderBottom: "1px solid #eee",
                    color: location === cat.path ? "#0066cc" : "#333",
                    backgroundColor: location === cat.path ? "#f5f5f5" : "transparent",
                    cursor: "pointer",
                  }}
                  className="hover:text-blue-600 hover:bg-gray-50"
                >
                  {cat.name}
                </div>
              </Link>
            ))}
          </div>

          {/* Products grid */}
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "#333", marginBottom: "16px" }}>
              {info.title}
            </h1>

            {categoryProducts.length === 0 ? (
              <p style={{ color: "#666", fontSize: "14px" }}>No products available.</p>
            ) : (
              <div className="product-grid">
                {categoryProducts.map((product) => (
                  <div
                    key={product.id}
                    className="product-grid-item product-card"
                    style={{ border: "1px solid #eee", cursor: "pointer" }}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: "100%", maxWidth: "150px", height: "120px", objectFit: "contain" }}
                    />
                    <div style={{ marginTop: "8px" }}>
                      <a
                        style={{ color: "#0066cc", fontSize: "14px", fontWeight: "bold", textDecoration: "none" }}
                        onClick={(e) => { e.preventDefault(); setSelectedProduct(product); }}
                        href="#"
                      >
                        {product.name}
                      </a>
                    </div>
                    <div style={{ marginTop: "4px" }}>
                      <span className="price-current">${product.price.toFixed(2)}</span>
                    </div>
                    <div>
                      <span className="price-original">${product.originalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
