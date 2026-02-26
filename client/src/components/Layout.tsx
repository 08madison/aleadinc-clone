import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ShoppingCart, ChevronDown, Menu, X } from "lucide-react";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268995439/kdOKQtOlVQTsubjg.jpg";

const productCategories = [
  { name: "Bluetooth Wireless Transceivers", path: "/products/bluetooth-wireless-transceivers" },
  { name: "Bluetooth Wireless Microphones", path: "/products/bluetooth-wireless-microphones" },
  { name: "Bluetooth Wireless Transmitters/Receivers", path: "/products/bluetooth-wireless-transmitters-receivers" },
  { name: "Bluetooth Hearing Aids Links", path: "/products/bluetooth-hearing-aids-links" },
  { name: "Accessories", path: "/products/accessories" },
  { name: "Online Sales Channels", path: "/products/online-sales-channels" },
];

const supportCategories = [
  { name: "Contact Us", path: "/support/contact-us" },
  { name: "Q & A", path: "/support/q-a" },
  { name: "Downloads", path: "/support/downloads" },
];

interface DropdownMenuProps {
  items: { name: string; path: string }[];
  isOpen: boolean;
}

function DropdownMenu({ items, isOpen }: DropdownMenuProps) {
  if (!isOpen) return null;
  return (
    <div className="absolute top-full left-0 bg-white border border-gray-300 shadow-md z-50 min-w-[220px]">
      {items.map((item) => (
        <Link key={item.path} href={item.path}>
          <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 cursor-pointer border-b border-gray-100 last:border-0">
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [productsOpen, setProductsOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
      if (supportRef.current && !supportRef.current.contains(e.target as Node)) {
        setSupportOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return location === "/";
    return location.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 10px" }}>
          {/* Logo row */}
          <div className="flex items-center justify-between py-2">
            <Link href="/">
              <img
                src={LOGO_URL}
                alt="Alead blue"
                style={{ maxWidth: "300px", height: "auto", cursor: "pointer" }}
              />
            </Link>
            {/* Cart */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <ShoppingCart size={18} />
              <span>0</span>
              <span>Shopping cart</span>
            </div>
          </div>

          {/* Navigation row */}
          <nav className="flex items-center border-t border-gray-200 py-1">
            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-0">
              <Link href="/">
                <span className={`alead-nav-link ${isActive("/") && location === "/" ? "text-blue-600" : ""}`}>
                  Home
                </span>
              </Link>

              {/* Products dropdown */}
              <div ref={productsRef} className="relative">
                <button
                  className={`alead-nav-link flex items-center gap-1 ${isActive("/products") ? "text-blue-600" : ""}`}
                  onClick={() => { setProductsOpen(!productsOpen); setSupportOpen(false); }}
                >
                  Products <ChevronDown size={12} />
                </button>
                <DropdownMenu items={productCategories} isOpen={productsOpen} />
              </div>

              {/* Support dropdown */}
              <div ref={supportRef} className="relative">
                <button
                  className={`alead-nav-link flex items-center gap-1 ${isActive("/support") ? "text-blue-600" : ""}`}
                  onClick={() => { setSupportOpen(!supportOpen); setProductsOpen(false); }}
                >
                  Support <ChevronDown size={12} />
                </button>
                <DropdownMenu items={supportCategories} isOpen={supportOpen} />
              </div>

              <Link href="/about-us">
                <span className={`alead-nav-link ${isActive("/about-us") ? "text-blue-600" : ""}`}>
                  About Us
                </span>
              </Link>
            </div>
          </nav>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-2">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <div className="px-4 py-2 text-sm hover:bg-gray-100">Home</div>
              </Link>
              <div className="px-4 py-1 text-xs font-semibold text-gray-500 uppercase mt-2">Products</div>
              {productCategories.map((cat) => (
                <Link key={cat.path} href={cat.path} onClick={() => setMobileMenuOpen(false)}>
                  <div className="px-6 py-2 text-sm hover:bg-gray-100">{cat.name}</div>
                </Link>
              ))}
              <div className="px-4 py-1 text-xs font-semibold text-gray-500 uppercase mt-2">Support</div>
              {supportCategories.map((cat) => (
                <Link key={cat.path} href={cat.path} onClick={() => setMobileMenuOpen(false)}>
                  <div className="px-6 py-2 text-sm hover:bg-gray-100">{cat.name}</div>
                </Link>
              ))}
              <Link href="/about-us" onClick={() => setMobileMenuOpen(false)}>
                <div className="px-4 py-2 text-sm hover:bg-gray-100">About Us</div>
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 mt-8">
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 10px" }}>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
            <button
              onClick={() => window.print()}
              className="hover:text-blue-600"
            >
              Print
            </button>
            <span>|</span>
            <Link href="/sitemap">
              <span className="hover:text-blue-600 cursor-pointer">Sitemap</span>
            </Link>
            <span className="ml-4">© ALEAD, INC</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
