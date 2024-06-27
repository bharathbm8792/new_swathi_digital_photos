import React, { useEffect, useState, Suspense, lazy } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import Login from "./components/Login.jsx";
import Private from "./components/Private.jsx";
import Loading from "./components/Loading.jsx";

// Lazy loading for other components
const WeddingService = lazy(() => import("./components/Wedding_service.jsx"));
const PreWedding = lazy(() => import("./components/Pre_wedding.jsx"));
const Engagement = lazy(() => import("./components/Engagement.jsx"));
const CorporateEvents = lazy(() => import("./components/Corporate_events.jsx"));
const SchoolEvents = lazy(() => import("./components/School_events.jsx"));
const NaacApproval = lazy(() => import("./components/Naac_approval.jsx"));
const Birthday = lazy(() => import("./components/Birthday.jsx"));
const HouseWarming = lazy(() => import("./components/House_warming.jsx"));
const CandidWedding = lazy(() => import("./components/Candid_wedding.jsx"));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedLoggedIn = localStorage.getItem("isLoggedIn");
    return storedLoggedIn ? JSON.parse(storedLoggedIn) : false;
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/private"
          element={
            isLoggedIn ? (
              <Private onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        {/* Lazy-loaded routes */}
        <Route
          path="/wedding_service"
          element={
            <Suspense fallback={<Loading />}>
              <WeddingService />
            </Suspense>
          }
        />
        <Route
          path="/pre_wedding_service"
          element={
            <Suspense fallback={<Loading />}>
              <PreWedding />
            </Suspense>
          }
        />
        <Route
          path="/engagement_service"
          element={
            <Suspense fallback={<Loading />}>
              <Engagement />
            </Suspense>
          }
        />
        <Route
          path="/corporate_events"
          element={
            <Suspense fallback={<Loading />}>
              <CorporateEvents />
            </Suspense>
          }
        />
        <Route
          path="/school_events"
          element={
            <Suspense fallback={<Loading />}>
              <SchoolEvents />
            </Suspense>
          }
        />
        <Route
          path="/naac_approval"
          element={
            <Suspense fallback={<Loading />}>
              <NaacApproval />
            </Suspense>
          }
        />
        <Route
          path="/birthday"
          element={
            <Suspense fallback={<Loading />}>
              <Birthday />
            </Suspense>
          }
        />
        <Route
          path="/house_warming"
          element={
            <Suspense fallback={<Loading />}>
              <HouseWarming />
            </Suspense>
          }
        />
        <Route
          path="/candid_wedding"
          element={
            <Suspense fallback={<Loading />}>
              <CandidWedding />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
