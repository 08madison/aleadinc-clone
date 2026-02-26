import { Link } from "wouter";
import Layout from "@/components/Layout";

const QA_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/JOuxvWkFkgrLHRpR.jpeg";

const qaGroups = [
  {
    title: "Bluetooth Wireless Transceiver Products -",
    questions: [
      {
        q: "How can I resolve the audio lag or lip-sync when watch the TV?",
        a: "The audio lag or lip-sync issue is caused by the Bluetooth audio transmission delay. To resolve this issue, please enable the aptX Low Latency mode on your TRX device if your TV supports it. Alternatively, you can adjust the audio delay setting on your TV to compensate for the Bluetooth transmission delay.",
      },
    ],
  },
  {
    title: "Bluetooth Wireless Microphone Products -",
    questions: [
      {
        q: "How can I reduce the audio delay?",
        a: "The audio delay can be reduced by enabling aptX Low Latency mode. Make sure both the transmitter and receiver support aptX Low Latency. The typical delay with aptX Low Latency is less than 40ms, which is imperceptible to most users.",
      },
      {
        q: "How can I avoid the audio echo using Bluetooth microphone?",
        a: "To avoid audio echo when using a Bluetooth microphone: 1) Keep the microphone away from speakers. 2) Reduce speaker volume. 3) Use headphones instead of speakers when monitoring audio. 4) Enable echo cancellation if your audio software supports it.",
      },
      {
        q: "How can Bluetooth microphone pair with iPhone/iPad/Android smartphone/Galaxy Note?",
        a: "To pair with iPhone/iPad: Go to Settings > Bluetooth, turn on Bluetooth, and select your Alead microphone from the list. For Android: Go to Settings > Connections > Bluetooth, turn on Bluetooth, and select your Alead microphone. The pairing code is 0000 if required.",
      },
      {
        q: "How can I use Bluetooth microphone for voice recording with video capturing on iPhone/iPad/Android smartphone/Galaxy Note?",
        a: "After pairing the Bluetooth microphone with your device, open your camera or video recording app. The app should automatically use the Bluetooth microphone as the audio input. For best results, use a recording app that supports external Bluetooth microphones.",
      },
      {
        q: "Where can I get Bluetooth driver for the PC and Mac to work with Bluetooth microphone?",
        a: "Most modern PCs and Macs have built-in Bluetooth support that is compatible with our microphones. If you need additional drivers, please visit our Downloads page for the latest software. For Windows, you may also check Windows Update for Bluetooth drivers.",
      },
      {
        q: "How can I use Bluetooth microphone on the Mac/PC/laptop?",
        a: "For Mac: Go to System Preferences > Bluetooth, pair the microphone, then go to System Preferences > Sound > Input and select the Bluetooth microphone. For Windows: Go to Settings > Devices > Bluetooth, pair the microphone, then go to Settings > System > Sound and select the Bluetooth microphone as input device.",
      },
    ],
  },
];

export default function QA() {
  return (
    <Layout>
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 10px" }}>
        {/* Banner */}
        <div style={{ margin: "10px 0", backgroundColor: "#eee" }}>
          <img
            src={QA_BANNER}
            alt="Q & A"
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
              <div style={{ display: "block", padding: "6px 12px", fontSize: "13px", borderBottom: "1px solid #eee", color: "#0066cc", backgroundColor: "#f5f5f5", cursor: "pointer" }}>
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
            {qaGroups.map((group, gIdx) => (
              <div key={gIdx} style={{ marginBottom: "20px" }}>
                <h2 style={{ fontSize: "15px", fontWeight: "bold", color: "#333", marginBottom: "12px" }}>
                  {group.title}
                </h2>
                {group.questions.map((item, qIdx) => (
                  <div key={qIdx} style={{ marginBottom: "4px" }}>
                    <a
                      href="#"
                      style={{ color: "#0066cc", fontSize: "13px", textDecoration: "none" }}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(`qa-answer-${gIdx}-${qIdx}`);
                        if (el) el.style.display = el.style.display === "none" ? "block" : "none";
                      }}
                    >
                      {item.q}
                    </a>
                    <div
                      id={`qa-answer-${gIdx}-${qIdx}`}
                      style={{ display: "none", padding: "8px 12px", backgroundColor: "#f9f9f9", fontSize: "13px", color: "#555", lineHeight: "1.6", marginTop: "4px", border: "1px solid #eee" }}
                    >
                      {item.a}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
