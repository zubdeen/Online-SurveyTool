import { Route, Routes, BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Home from "./components/Home";
import NewSurvey from "./components/NewSurvey";
import Categories from "./components/Categories";
import Ranking from "./components/Ranking";
import Progress from "./components/Progress";

function App() {
  return (
    <BrowserRouter>
      <div id="main__wrapper" className="bg-[#f5f5f5] min-h-screen flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/new" element={<NewSurvey />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/progress" element={<Progress />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
