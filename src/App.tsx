import { Routes, Route, BrowserRouter } from "react-router-dom";
import FirstPage from "./pages/FirstPage/Index";
import SecondPage from "./pages/SecondPage/Index";
import ThirdPage from "./pages/ThirdPage/Index";
// import { useAtom } from "jotai";
// import { countAtom } from "./jotai/store";

const App: React.FC = () => {
  // const [count, setCount] = useAtom(countAtom);
  return (
    <BrowserRouter>
      <div>
        {/* <div className="flex gap-4 ">
          <a href="/firstPage">firstPage</a>
          <a href="/secondPage">secondPage</a>
          <a href="/thirdPage">thirdPage</a>
        </div> */}
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex gap-4 ">
                <a href="/firstPage">firstPage</a>
                <a href="/secondPage">secondPage</a>
                <a href="/thirdPage">thirdPage</a>
              </div>
            }
          />
          <Route path="/firstPage" element={<FirstPage />} />
          <Route path="/secondPage" element={<SecondPage />} />
          <Route path="/thirdPage" element={<ThirdPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
