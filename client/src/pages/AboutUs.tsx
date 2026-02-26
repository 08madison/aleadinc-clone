import Layout from "@/components/Layout";

const ABOUT_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/BUIFFdwhbzJDSijV.jpeg";

export default function AboutUs() {
  return (
    <Layout>
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 10px" }}>
        {/* Banner */}
        <div style={{ margin: "10px 0", backgroundColor: "#eee" }}>
          <img
            src={ABOUT_BANNER}
            alt="About Us"
            style={{ width: "100%", maxHeight: "295px", objectFit: "cover" }}
          />
        </div>

        {/* Content */}
        <div style={{ padding: "10px 0 20px" }}>
          <h1 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "12px", color: "#333" }}>
            Alead Inc. - A Wireless Solution Company
          </h1>

          <div style={{ fontSize: "13px", color: "#555", lineHeight: "1.8" }}>
            <p style={{ marginBottom: "12px" }}>
              Alead Inc. is located in California, USA. Alead bills itself as a comprehensive "Wireless Solutions Provider"
              and offers a variety of technology applications to wirelessly connect electronic devices seamlessly utilizing
              the Bluetooth standard. Company is a leading designer and manufacturer advance wireless consumer electronic
              solution in the exterprise market. In addition, Alead has committed a team of talented engineers and
              development specialists to explore and develop advanced applications and new products utilizing wireless and
              Bluetooth technology. At the dawn of this new era in wireless communications, Alead is well on its way to
              becoming a successful industry leader in providing wireless and Bluetooth technology solutions to the
              electronics industry.
            </p>

            <p style={{ marginBottom: "12px" }}>
              Alead distributes throughout North and South America, Aisa and Europe.
            </p>

            <p style={{ marginBottom: "12px" }}>
              For more information, please visit Alead's Web site at{" "}
              <a href="https://www.aleadinc.com" style={{ color: "#0066cc" }}>www.aleadinc.com</a>
            </p>

            <p style={{ marginTop: "20px", fontSize: "12px", color: "#888" }}>
              ©2015 Alead. All rights reserved. Alead and the Alead logo are registered trademarks or trademarks of Alead.
              Other company and product names may be trademarks of their respective owners.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
