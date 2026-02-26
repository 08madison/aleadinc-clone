import { Link } from "wouter";
import Layout from "@/components/Layout";

const DOWNLOADS_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/TONUSfzVrUdQjrBa.jpeg";

const userGuides = [
  { title: "TRX Plus2 QSG", file: "TRX_Plus2_QSG_V02.pdf", size: "Adobe Acrobat document [671.4 KB]" },
  { title: "TRXHD2/TRXHDM2 QSG", file: "TRX HD2_HMD2-QSG_V02.pdf", size: "Adobe Acrobat document [1.4 MB]" },
  { title: "TRX HD Pro QSG", desc: "The user manual of TRX HD Pro", file: "TRX HD Pro_QSG_V01.pdf", size: "Adobe Acrobat document [1.6 MB]" },
  { title: "BTMIC2 QSG", file: "BTMIC2_QSG_V02.pdf", size: "Adobe Acrobat document [1.7 MB]" },
  { title: "LiveMIC2 QSG", file: "LiveMIC2_QSG_V02.pdf", size: "Adobe Acrobat document [2.7 MB]" },
  { title: "BTMICRX2 QSG", file: "BTMIC2-RX2_QSG_V02.pdf", size: "Adobe Acrobat document [2.6 MB]" },
  { title: "LiveMICRX2 QSG", file: "LiveMIC2-RX2_QSG_V02.pdf", size: "Adobe Acrobat document [2.7 MB]" },
  { title: "RX2 QSG", file: "RX2_QSG_V02.pdf", size: "Adobe Acrobat document [1.1 MB]" },
  { title: "Alead TX8 True Wireless Earbuds (TWS) OSG", file: "Alead-TX8-QSG.pdf", size: "Adobe Acrobat document [2.7 MB]" },
  { title: "TX QSG", desc: "for white color and black color TX", file: "TX_QSG_V01.pdf", size: "Adobe Acrobat document [1.4 MB]" },
  { title: "TX Pro QSG", desc: "for white color and black color TX", file: "TxPro_QSG_V01.pdf", size: "Adobe Acrobat document [1.2 MB]" },
  { title: "HearLinks QSG", file: "HearLinks_QSG_V02.pdf", size: "Adobe Acrobat document [2.6 MB]" },
  { title: "HearLinkSet QSG", file: "HearLinkSet_QSG.pdf", size: "Adobe Acrobat document [4.1 MB]" },
  { title: "RemHearlinks QSG", file: "RemHearlinks_QSG.pdf", size: "Adobe Acrobat document [1.9 MB]" },
  { title: "TXPlus QSG", file: "TXPlus_QSG.pdf", size: "Adobe Acrobat document [2.3 MB]" },
];

const appNotes = [
  { title: "LiveMIC2 using on iPhone/iPad/Android and Mac/PC/laptop", file: "Bluetooth LiveMicrophone LiveMIC2 using [...].pdf", size: "Adobe Acrobat document [947.6 KB]" },
  { title: "BTMIC2 using on iPhone/iPad/Android and Mac/PC/laptop", file: "Bluetooth Microphone BTMIC2 using w Mac_[...].pdf", size: "Adobe Acrobat document [1.2 MB]" },
  { title: "LiveMIC using on iPhone/iPad/Android Mac/PC/latop", file: "NSRXRM3C2MXX Bluetooth Live Microphone u[...].pdf", size: "Adobe Acrobat document [740.4 KB]" },
  { title: "BTMIC using on iPhone/iPad/Android Mac/PC/latop", file: "NSRX3C2MXX Bluetooth Microphone using w [...].pdf", size: "Adobe Acrobat document [1.0 MB]" },
];

const softwareUpdates = [
  { title: "TX8 upgrade software for iOS 13", desc: "This software is used to solve the issue that TX8 will automatically disconnect from IOS 13 iPhone when playing music.", file: "Alead TX8.rar", size: "Compressed file archive [2.1 MB]" },
  { title: "TX8 upgrade software operation guidance", file: "APP OTA QUICK OPERATION_20191129.pdf", size: "Adobe Acrobat document [496.2 KB]" },
];

interface DownloadItem {
  title: string;
  desc?: string;
  file: string;
  size: string;
}

function DownloadRow({ item }: { item: DownloadItem }) {
  return (
    <div style={{ marginBottom: "12px", paddingBottom: "12px", borderBottom: "1px solid #f0f0f0" }}>
      <div style={{ fontSize: "13px", fontWeight: "bold", color: "#333", marginBottom: "2px" }}>
        {item.title}
      </div>
      {item.desc && (
        <div style={{ fontSize: "12px", color: "#666", marginBottom: "2px" }}>{item.desc}</div>
      )}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='20' viewBox='0 0 16 20'%3E%3Crect width='16' height='20' fill='%23cc0000' rx='2'/%3E%3Ctext x='8' y='13' font-size='6' fill='white' text-anchor='middle' font-family='Arial'%3EPDF%3C/text%3E%3C/svg%3E" alt="PDF" style={{ width: "16px", height: "20px" }} />
        <a
          href="#"
          style={{ color: "#0066cc", fontSize: "12px", textDecoration: "none" }}
          onClick={(e) => { e.preventDefault(); alert("Download: " + item.file); }}
        >
          {item.file}
        </a>
      </div>
      <div style={{ fontSize: "11px", color: "#888", marginTop: "2px" }}>{item.size}</div>
    </div>
  );
}

export default function Downloads() {
  return (
    <Layout>
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 10px" }}>
        {/* Banner */}
        <div style={{ margin: "10px 0", backgroundColor: "#eee" }}>
          <img
            src={DOWNLOADS_BANNER}
            alt="Downloads"
            style={{ width: "100%", maxHeight: "295px", objectFit: "cover" }}
          />
        </div>

        {/* Content area with sidebar + main */}
        <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "10px 0" }}>
          {/* Sidebar */}
          <div className="category-sidebar hidden md:block">
            <Link href="/support/downloads">
              <div style={{ display: "block", padding: "6px 12px", fontSize: "13px", borderBottom: "1px solid #eee", color: "#0066cc", backgroundColor: "#f5f5f5", cursor: "pointer" }}>
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
              <div style={{ display: "block", padding: "6px 12px", fontSize: "13px", borderBottom: "1px solid #eee", color: "#333", cursor: "pointer" }}
                className="hover:text-blue-600 hover:bg-gray-50">
                Contact Us
              </div>
            </Link>
          </div>

          {/* Main content */}
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: "16px", fontWeight: "bold", color: "#333", marginBottom: "16px", borderBottom: "1px solid #ddd", paddingBottom: "8px" }}>
              User Guides
            </h2>
            {userGuides.map((item, idx) => (
              <DownloadRow key={idx} item={item} />
            ))}

            <h2 style={{ fontSize: "16px", fontWeight: "bold", color: "#333", marginBottom: "16px", marginTop: "24px", borderBottom: "1px solid #ddd", paddingBottom: "8px" }}>
              Application Notes
            </h2>
            {appNotes.map((item, idx) => (
              <DownloadRow key={idx} item={item} />
            ))}

            <h2 style={{ fontSize: "16px", fontWeight: "bold", color: "#333", marginBottom: "16px", marginTop: "24px", borderBottom: "1px solid #ddd", paddingBottom: "8px" }}>
              Software update
            </h2>
            {softwareUpdates.map((item, idx) => (
              <DownloadRow key={idx} item={item} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
