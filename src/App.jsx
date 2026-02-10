import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial"
import FAQ from "./components/FAQ";
import WorkShop from "./components/WorkShop";
import TransForm from "./components/Transform";
import LifeWorkshop from "./components/LifeWorkshop";
import Personal from "./components/Personal";
import LifeSection from "./components/LifeSection";
import StickyOffer from "./components/StickyOffer";
import Checkout from "./components/Checkout";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <LifeSection />
              <TransForm />
              <LifeWorkshop />
              <Personal />
              <WorkShop />
              <Testimonial/>
              <FAQ />
              <StickyOffer />
            </>
          }
        />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
