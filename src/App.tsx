import { Routes, Route, BrowserRouter } from "react-router-dom";
import FirstPage from "./pages/FirstPage/Index";
import SecondPage from "./pages/SecondPage/Index";
// import { useAtom } from "jotai";
// import { countAtom } from "./jotai/store";

const App: React.FC = () => {
  // const [count, setCount] = useAtom(countAtom);
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <a href="/firstPage">firstPage</a>
                <a href="secondPage">secondPage</a>
              </div>
            }
          />
          <Route path="/firstPage" element={<FirstPage />} />
          <Route path="/secondPage" element={<SecondPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
