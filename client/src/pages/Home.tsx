import { useState, useEffect } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

const heroSlides = [
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/chTWMQJUbiysQznR.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/wBkKXGTTKuceGVFD.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/QBWCwIrDghnVujGB.jpg",
];

const homeImages = [
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/owzCMoOmnftNvHXB.jpg",
    href: "/products/bluetooth-wireless-transceivers",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/WgTlYgzTnOwiyhJi.jpg",
    href: "/products/bluetooth-wireless-microphones",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/xqkSEIrfCcVzujBe.jpg",
    href: "/products/bluetooth-wireless-microphones",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/aWqnJUvLAdAyAreU.jpg",
    href: "/products/bluetooth-wireless-microphones",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/FGRMpXqiMiUnnNFM.jpg",
    href: "/products/bluetooth-wireless-transmitters-receivers",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/NHgZcGpPwXQoRstk.jpg",
    href: "/products/bluetooth-hearing-aids-links",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/gIkHTzmoquyZEdCr.jpg",
    href: "/products/bluetooth-wireless-transmitters-receivers",
  },
];

function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        maxWidth: "920px",
        maxHeight: "295px",
        backgroundColor: "#EEEEEE",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {heroSlides.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt=""
          style={{
            width: "100%",
            height: "auto",
            display: idx === current ? "block" : "none",
            maxHeight: "295px",
            objectFit: "cover",
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 10px" }}>
        {/* Hero Slideshow */}
        <div style={{ margin: "10px 0" }}>
          <HeroSlideshow />
        </div>

        {/* Product Image Links */}
        <div style={{ margin: "10px 0" }}>
          {homeImages.map((img, idx) => (
            <div
              key={idx}
              style={{
                textAlign: "center",
                marginBottom: "8px",
              }}
            >
              <Link href={img.href}>
                <img
                  src={img.src}
                  alt=""
                  style={{
                    maxWidth: "800px",
                    width: "100%",
                    height: "auto",
                    cursor: "pointer",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
