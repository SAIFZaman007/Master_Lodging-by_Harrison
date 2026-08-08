import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { Portfolio } from "@/pages/Portfolio";
import { PropertyDetail } from "@/pages/PropertyDetail";
import { EventsHub } from "@/pages/EventsHub";
import { EventPage } from "@/pages/EventPage";
import { LocalInfoHub } from "@/pages/LocalInfoHub";
import { LocalInfoTopicPage } from "@/pages/LocalInfoTopicPage";
import { HowItWorks } from "@/pages/HowItWorks";
import { Inquire } from "@/pages/Inquire";
import { Attribution } from "@/pages/Attribution";
import { NotFound } from "@/pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/homes/:slug" element={<PropertyDetail />} />
        <Route path="/events" element={<EventsHub />} />
        <Route path="/events/:slug" element={<EventPage />} />
        <Route path="/local-info" element={<LocalInfoHub />} />
        <Route path="/local-info/:topic" element={<LocalInfoTopicPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/inquire" element={<Inquire />} />
        <Route path="/attribution" element={<Attribution />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
