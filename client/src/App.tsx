import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import LenisScroll from "./components/LenisScroll";
import Pricing from "./pages/Pricing";
import Generate from "./pages/Generate";
import MyGenerate from "./pages/MyGenerate";
import YtPreview from "./pages/YtPreview";
import Login from "./components/Login";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <><Toaster/>
      <LenisScroll />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/generate/:id" element={<Generate />} />
        <Route path="/my-generation" element={<MyGenerate />} />
        <Route path="/preview" element={<YtPreview />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
