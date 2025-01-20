import { Routes, Route, BrowserRouter } from "react-router-dom";
import FirstPage from "./pages/FirstPage/Index";
import NavBar from "./pages/nav/Nav";
// import { useAtom } from "jotai";
// import { countAtom } from "./jotai/store";

const About = () => <h1>About Page</h1>;
const App: React.FC = () => {
  // const [count, setCount] = useAtom(countAtom);
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
