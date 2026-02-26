import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductCategory from "./pages/ProductCategory";
import Support from "./pages/Support";
import ContactUs from "./pages/ContactUs";
import QA from "./pages/QA";
import Downloads from "./pages/Downloads";
import AboutUs from "./pages/AboutUs";
import OnlineSalesChannels from "./pages/OnlineSalesChannels";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/products/bluetooth-wireless-transceivers" component={() => <ProductCategory category="transceivers" />} />
      <Route path="/products/bluetooth-wireless-microphones" component={() => <ProductCategory category="microphones" />} />
      <Route path="/products/bluetooth-wireless-transmitters-receivers" component={() => <ProductCategory category="transmitters" />} />
      <Route path="/products/bluetooth-hearing-aids-links" component={() => <ProductCategory category="hearingaids" />} />
      <Route path="/products/accessories" component={() => <ProductCategory category="accessories" />} />
      <Route path="/products/online-sales-channels" component={OnlineSalesChannels} />
      <Route path="/support" component={Support} />
      <Route path="/support/contact-us" component={ContactUs} />
      <Route path="/support/q-a" component={QA} />
      <Route path="/support/downloads" component={Downloads} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
