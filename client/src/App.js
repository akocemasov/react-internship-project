import "./App.css";

import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import routes from "./routes/routes";
import RenderRoutes from "./components/RenderRoutes/RenderRoutes";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";

const Header = lazy(() => import("./profile/Header/Header"));
const Footer = lazy(() => import("./profile/Footer/Footer"));
const SliderIntro = lazy(() => import("./components/SliderIntro/SliderIntro"));

function App() {

  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="andys flex flex-col w-screen h-screen box-border bg-[#1b1a1b] font-raleway">
            <Header />

            <Routes>
              <Route path={"/:locale"} element={<SliderIntro />}></Route>
            </Routes>

            <Routes>
              {routes.map((route) => (
                <Route
                  exact={true}
                  key={route.path}
                  path={route.path}
                  element={<RenderRoutes {...route} />}
                />
              ))}
            </Routes>

            <Footer />
          </div>
        </Suspense>
      </I18nextProvider>
    </BrowserRouter>
  );
}

export default App;
