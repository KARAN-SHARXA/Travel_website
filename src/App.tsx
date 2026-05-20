import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "@/components/ErrorBoundary";
import ScrollToTop from "@/components/ScrollToTop";
import { Suspense, lazy } from "react";
const Index = lazy(() => import("./pages/Index"));
const Fleet = lazy(() => import("./pages/Fleet"));
const LocalRides = lazy(() => import("./pages/LocalRides"));
const Destinations = lazy(() => import("./pages/Destinations"));
const HimachalDestinations = lazy(() => import("./pages/HimachalDestinations"));
const DestinationRedirect = lazy(() => import("./pages/DestinationRedirect"));
const TempleDetail = lazy(() => import("./pages/TempleDetail"));
const BookNow = lazy(() => import("./pages/BookNow"));
const BookCustom = lazy(() => import("./pages/BookCustom"));
const DeviDarshanBook = lazy(() => import("./pages/DeviDarshanBook"));
const Contact = lazy(() => import("./pages/Contact"));
const Rules = lazy(() => import("./pages/Rules"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BookStation = lazy(() => import('@/pages/BookStation'));
const AmbDharamshalaBook = lazy(() => import('@/pages/AmbDharamshalaBook'));
const BookAmbDeviDarshan = lazy(() => import('@/pages/BookAmbDeviDarshan'));
const DehraDelhiDrop = lazy(() => import('@/pages/DehraDelhiDrop'));
const PackageDetail = lazy(() => import('@/pages/PackageDetail'));
const BookFixedPackageUnified = lazy(() => import('@/pages/BookFixedPackageUnified'));
const ExploreHimachal = lazy(() => import('@/pages/ExploreHimachal'));

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter future={{ v7_startTransition: false }}>
            <ScrollToTop />
            <Suspense fallback={null}>
            <Routes>
              <Route path="/book/station" element={<BookStation />} />
              <Route path="/book/amb-dharamshala" element={<AmbDharamshalaBook />} />
              <Route path="/book/amb-devi-darshan" element={<BookAmbDeviDarshan />} />
              <Route path="/book/dehra-delhi-drop" element={<DehraDelhiDrop />} />
              <Route path="/book/custom" element={<BookCustom />} />

              {/* New unified package routes */}
              <Route path="/packages/:slug" element={<PackageDetail />} />
              <Route path="/book/:slug" element={<BookFixedPackageUnified />} />

              <Route path="/" element={<Index />} />
              <Route path="/fleet" element={<Fleet />} />
              <Route path="/local-rides" element={<LocalRides />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/fixed-packages" element={<Navigate to="/destinations" replace />} />
              <Route path="/himachal-destinations" element={<HimachalDestinations />} />
              {/* Redirect old destination routes to new explore-himachal format */}
              <Route path="/destination/:destinationId" element={<DestinationRedirect />} />
              <Route path="/temple/:templeId" element={<TempleDetail />} />
              <Route path="/book" element={<BookNow />} />
              <Route path="/devi-darshan-book" element={<DeviDarshanBook />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/privacy" element={<Privacy />} />

              <Route path="/explore-himachal" element={<ExploreHimachal />} />
              <Route path="/explore-himachal/:slug" element={<ExploreHimachal />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;
