import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ShowTable from "./pages/ShowTable";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ShowTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
