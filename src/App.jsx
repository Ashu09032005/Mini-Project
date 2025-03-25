import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import DurationInput from "./components/DurationInput";
import ProcessFiles from "./components/ProcessFiles";
import DownloadResult from "./components/DownloadResult";

const App = () => {
  const [files, setFiles] = useState([]);
  const [duration, setDuration] = useState("02:00:00");
  const [filteredData, setFilteredData] = useState([]);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-center">Excel Filter App</h1>
      <FileUpload onFilesUploaded={setFiles} />
      <DurationInput onDurationChange={setDuration} />
      {files.length > 0 && <ProcessFiles files={files} duration={duration} onProcessComplete={setFilteredData} />}
      {filteredData.length > 0 && <DownloadResult data={filteredData} />}
    </div>
  );
};

export default App;
