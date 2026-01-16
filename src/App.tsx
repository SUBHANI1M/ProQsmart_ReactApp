import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/UploadPage";
import TablePage from "./pages/TablePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UploadPage />} />
        <Route path="/table" element={<TablePage />} />
      </Routes>
    </BrowserRouter>
  );
}
