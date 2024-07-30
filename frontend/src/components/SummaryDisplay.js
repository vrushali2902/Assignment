import React, { useState, useEffect } from 'react';

function SummaryDisplay({ filePath }) {
  const [summary, setSummary] = useState('');

  useEffect(() => {
    const fetchSummary = async () => {
      const response = await fetch('http://localhost:8000/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ file_path: filePath }),
      });

      const data = await response.json();
      setSummary(data.summary);
    };

    if (filePath) {
      fetchSummary();
    }
  }, [filePath]);

  return (
    <div>
      <h2>Summary:</h2>
      <p>{summary}</p>
    </div>
  );
}

export default SummaryDisplay;
