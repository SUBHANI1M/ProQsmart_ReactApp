type Props = {
  onFileSelect: (file: File) => void;
};

export default function CsvUploader({ onFileSelect }: Props) {
  return (
    <input
      type="file"
      accept=".csv"
      onChange={(e) => {
        if (e.target.files?.[0]) {
          onFileSelect(e.target.files[0]);
        }
      }}
    />
  );
}
