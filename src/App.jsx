import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import Navigation from "./pages/Navigation";
const delayImport = (importFunc, delay = 1000) =>
  new Promise((resolve) => setTimeout(() => resolve(importFunc()), delay));
function App() {
  const Home = loadable(() => delayImport(() => import("./pages/Home"), 400), {
    fallback: <div>Loading Home...</div>,
  });
  const About = loadable(
    () => delayImport(() => import("./pages/About"), 400),
    {
      fallback: <div>Loading About...</div>,
    }
  );

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/lazy-loading/" element={<Home />} />
        <Route path="/lazy-loading/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
