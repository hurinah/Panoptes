import React, { useState } from 'react'
import './App.css';
import TopBar from './TopBar';
import BottomBar from './BottomBar';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  // Function to handle file selection

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  // Function to reset selected file
  const resetFile = () => {
    setSelectedFile(null);
  };

  return (
    <div className="App">
      <TopBar />
      <header className="App-header">
        <h1> Welcome to Panoptes </h1>
        {/* Button to select file */ }
        <input type ="file" accept=".jpg, .jpeg, .png, .pdf, .doc, .docx" onChange={handleFileSelect} />
        {/* Display selected file name */}
        {selectedFile && <p>Selected File: {selectedFile.name}</p>}
        {/* Display selected file */}
        {selectedFile && (
          <div>
            <h2>Preview:</h2>
            {/* Display image preview if file is an image */}
            {selectedFile.type.startsWith('image') ? (
              <img src={URL.createObjectURL(selectedFile)} alt="Selected File" style={{ maxWidth: '100%', maxHeight: '300px'}} />
            ) : (
              // Display file icon for other file types
              <p> Preview not available for this file type </p>
            )}
            
            {/* Button to reset selected file */ }
            <button onClick={resetFile}>Reset File</button>
            
          </div>
        )}
      </header>
      <BottomBar />
    </div>
  );
}

export default App;
