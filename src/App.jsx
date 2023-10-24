import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import "./selection.json";
// import "./icons.css";
import "./index.css";
import { CATEGORIES } from "./config";

import LoadingFullPage from "./pages/LoadingFullPage";
import Header from "./components/Header";
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const HomePage = lazy(() => import("./pages/HomePage"));
const StorePage = lazy(() => import("./pages/StorePage"));
const PaymentPage = lazy(() => import("./pages/PaymentPage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage"));
const RenderProducts = lazy(() => import("./components/RenderProducts"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFullPage />}>
        <Header />
        <Routes>
          <Route index path="/" element={<HomePage />} />

          <Route path="/store" element={<StorePage categories={CATEGORIES} />}>
            {/* {CATEGORIES.map((category) => (
              <Route
                key={category}
                path={category}
                element={<RenderProducts category={category} />}
              />
            ))} */}
          </Route>

          <Route path="/payment" element={<PaymentPage />} />

          {/* <Route path="/settings" element={<SettingsPage />} /> */}
          <Route path="/settings" element={<LoadingFullPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
