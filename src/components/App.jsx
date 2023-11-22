import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout/Layout";

const Home = lazy(() => import("../pages/Home/Home"));
const Characters = lazy(() => import("../pages/Characters/Characters"));
const Comics = lazy(() => import("../pages/Comics/Comics"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="comics" element={<Comics />} />
      </Route>
    </Routes>
  );
};

export default App;
