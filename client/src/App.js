import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/results" element={<List />} /> */}
        <Route path="/results/:id" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
