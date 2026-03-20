import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider } from "@/lib/i18n";
import Index from "./pages/Index";
import Expertise from "./pages/Expertise";
import Bookkeeping from "./pages/Bookkeeping";
import Payroll from "./pages/Payroll";
import Taxes from "./pages/Taxes";
import FractionalCFO from "./pages/FractionalCFO";
import AccountsPayable from "./pages/AccountsPayable";
import AccountsReceivable from "./pages/AccountsReceivable";
import Consulting from "./pages/Consulting";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <I18nProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/bookkeeping" element={<Bookkeeping />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/taxes" element={<Taxes />} />
            <Route path="/fractional-cfo" element={<FractionalCFO />} />
            <Route path="/accounts-payable" element={<AccountsPayable />} />
            <Route path="/accounts-receivable" element={<AccountsReceivable />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </I18nProvider>
  </QueryClientProvider>
);

export default App;
