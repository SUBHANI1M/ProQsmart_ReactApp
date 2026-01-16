import { useNavigate } from "react-router-dom";
import CsvUploader from "../components/CsvUploader";
import { parseCsv } from "../hooks/useCsvParser";
import { transformCsvData } from "../utils/csv";

export default function UploadPage() {
  const navigate = useNavigate();

  async function handleFile(file: File) {
    const raw = await parseCsv(file);
    const data = transformCsvData(raw);
    navigate("/table", { state: data });
  }

  return (
    <div>
      <h2>Upload CSV File</h2>
      <CsvUploader onFileSelect={handleFile} />
    </div>
  );
}
