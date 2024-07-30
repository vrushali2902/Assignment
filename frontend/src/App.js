import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import SummaryDisplay from './components/SummaryDisplay';

function App() {
  const [filePath, setFilePath] = useState('');

  const handleUploadSuccess = (path) => {
    setFilePath(path);
  };

  return (
    <div className="App">
      <h1>Document Summarizer</h1>
      <FileUpload onUploadSuccess={handleUploadSuccess} />
      {filePath && <SummaryDisplay filePath={filePath} />}
    </div>
  );
}

export default App;
