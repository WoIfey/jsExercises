import Profile from "./pages/Profile";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  VANTA.NET({
    el: "body",
    mouseControls: true,
    touchControls: true,
    points: 15.0,
    scale: 1.85,
    maxDistance: 17.0,
    scaleMobile: 1.0,
    color: 0xffffff,
    backgroundColor: 0x1e1a25,
    showDots: false,
  });
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/jsExercises/hackaton2/dist/" element={<Home />} />
          <Route path="/jsExercises/hackaton2/dist/home/" element={<Home />} />
          <Route path="/jsExercises/hackaton2/dist/profile/" element={<Profile />} />
          <Route path="/jsExercises/hackaton2/dist/about/" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
