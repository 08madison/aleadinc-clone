export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  description: string;
  category: string;
}

export const products: Record<string, Product[]> = {
  transceivers: [
    {
      id: "trx-plus2",
      name: "TRX Plus2",
      price: 49.99,
      originalPrice: 89.99,
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/SPoiNnOJwNZXORIH.jpg",
      description: "TRX Plus2 Bluetooth Wireless Home Stereo Audio Transmitter and Receiver (A2DP). Provide 3.5 AUX and optical digital audio input and output. Bluetooth 4.0, aptX, 100ft range.",
      category: "transceivers",
    },
    {
      id: "trx-hd2",
      name: "TRX HD2",
      price: 59.99,
      originalPrice: 89.99,
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/qLucVztGIVWrkanH.jpg",
      description: "TRX HD2 Bluetooth Wireless Home Stereo Audio Transmitter and Receiver (A2DP). The 2nd generation with improved range and audio quality.",
      category: "transceivers",
    },
    {
      id: "trx-hdm2",
      name: "TRX HDM2",
      price: 59.99,
      originalPrice: 99.99,
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/jlybAhQjkAteYyLY.jpg",
      description: "TRX HDM2 Bluetooth Wireless Home Stereo Audio Transmitter and Receiver (A2DP). The 2nd generation with multilink support.",
      category: "transceivers",
    },
    {
      id: "trx-hd-pro",
      name: "TRX HD Pro",
      price: 89.99,
      originalPrice: 109.99,
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/gQXWwiTDMTAbekmG.jpg",
      description: "TRX HD Pro Bluetooth Wireless Home Stereo Audio Transmitter and Receiver (A2DP). The 2nd generation with professional-grade performance.",
      category: "transceivers",
    },
  ],
  microphones: [
    {
      id: "btmic2",
      name: "BTMIC2",
      price: 74.99,
      originalPrice: 79.99,
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/VWhQncKsRjLrHTAb.jpg",
      description: "Alead BTMIC2 Bluetooth Wireless Microphone (A2DP), the 2nd generation MIC. It can stream and capture high quality audio wirelessly.",
      category: "microphones",
    },
    {
      id: "livemic2",
      name: "LiveMIC2",
      price: 84.99,
      originalPrice: 99.99,
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/DZnXQWOXmgWtfwfu.jpg",
      description: "Alead LiveMIC2 Bluetooth Wireless Microphone (A2DP), the 2nd generation MIC. It can stream and capture the live audio wirelessly.",
      category: "microphones",
    },
    {
      id: "micrx2",
      name: "MICRX2",
      price: 99.99,
      originalPrice: 115.99,
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/VIErNAOVcJXUMzCI.jpg",
      description: "Alead BTMICRX2 Bluetooth Wireless Microphone and Receiver Sets. It is a new generation of wireless voice transmission system.",
      category: "microphones",
    },
    {
      id: "livemicrx2",
      name: "LiveMICRX2",
      price: 110.00,
      originalPrice: 159.99,
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/zXIvylMCgPRXmAQB.jpg",
      description: "Alead LiveMICRX2 Bluetooth Wireless Microphone and Receiver Sets. It is a new generation of wireless voice transmission system.",
      category: "microphones",
    },
  ],
  transmitters: [
    {
      id: "rx2",
      name: "RX2",
      price: 31.99,
      originalPrice: 60.99,
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/YkcOzNorRBymLAuM.jpg",
      description: "Alead RX2 Bluetooth Wireless A2DP Stereo Audio Music Receiver and Adapter. It is a new generation of wireless audio receiver.",
      category: "transmitters",
    },
    {
      id: "tx-black",
      name: "TX black",
      price: 44.99,
      originalPrice: 49.99,
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/rTnxXYzocEaxekEZ.jpg",
      description: "Turn audio source device into Bluetooth enabled device to stream audio to Bluetooth headphones or speakers.",
      category: "transmitters",
    },
    {
      id: "txpro",
      name: "TxPro",
      price: 48.99,
      originalPrice: 54.99,
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/uRuJawaZkXKRzwbD.jpg",
      description: "Alead TxPro Bluetooth Wireless Multilink Stereo Music Audio Transmitter (A2DP), the new generation Bluetooth transmitter.",
      category: "transmitters",
    },
    {
      id: "tx8-tws",
      name: "TX8 TWS",
      price: 54.99,
      originalPrice: 69.99,
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/RpJrmvTDrnJQvYyV.jpg",
      description: "Alead TX8 Bluetooth 5.0 True Wireless Earbuds (TWS) with Wireless Charging case, IP68 Waterproof.",
      category: "transmitters",
    },
  ],
  hearingaids: [
    {
      id: "hearlinks",
      name: "HearLinks",
      price: 69.99,
      originalPrice: 168.99,
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/HAMRbvmJtWlxhJGX.jpg",
      description: "Alead HearLinks Wireless Voice Audio Links. A Personal sound amplifier, T-coil receiver, Bluetooth headphone all-in-one device.",
      category: "hearingaids",
    },
    {
      id: "remhearlinks",
      name: "RemHearLinks",
      price: 75.99,
      originalPrice: 139.99,
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/XxOetNJXIGlhhDPJ.jpg",
      description: "Nolan RemHearLinks is a wireless remote voice and audio links with embedded microphone for hearing aid users.",
      category: "hearingaids",
    },
  ],
  accessories: [
    {
      id: "ext-mic",
      name: "EXT MIC",
      price: 19.99,
      originalPrice: 29.99,
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/XNpshXpQabaUpSSe.jpg",
      description: "Tiny, lightweight tie-clip type and high sound quality microphone. Omni-directional pickup pattern.",
      category: "accessories",
    },
  ],
};

export const categoryInfo: Record<string, {
  title: string;
  banner: string;
}> = {
  transceivers: {
    title: "Bluetooth Wireless Transceivers",
    banner: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/OEhoXCTgSjVQknxo.jpg",
  },
  microphones: {
    title: "Bluetooth Wireless Microphones",
    banner: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/mzAeFBPfqfHUKSwn.jpg",
  },
  transmitters: {
    title: "Bluetooth Wireless Transmitters/Receivers",
    banner: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/DzFTUcLdmEdLUalf.jpg",
  },
  hearingaids: {
    title: "Hearing Aids Links",
    banner: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/CPRFecOylkheIClZ.jpg",
  },
  accessories: {
    title: "EX MIC",
    banner: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/NMHLrJdYRDlUprjA.jpg",
  },
};
