import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { useAtom } from "jotai";
import { countAtom } from "./jotai/store";
import { Button } from "./components/ui/button";

const About = () => <h1>About Page</h1>;
const App: React.FC = () => {
  const [count, setCount] = useAtom(countAtom);
  return (
    <BrowserRouter>
      <div>
        <div>
          <h1 className="text-red-900 border border-red-600">
            Count: {count} kiii
          </h1>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <Button>Click me</Button>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<>homee</>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
