const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Serve static files from the public directory
app.use(express.static('public'));

// Add endpoint to list images in territorypics
app.get('/list-territory-pics', (req, res) => {
  const directoryPath = path.join(__dirname, 'public', 'territorypics');
  
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return res.status(500).json({ error: err.message });
    }
    
    // Filter for image files
    const imageFiles = files.filter(file => 
      file.toLowerCase().endsWith('.jpg') || 
      file.toLowerCase().endsWith('.jpeg') || 
      file.toLowerCase().endsWith('.png')
    );
    
    res.json(imageFiles);
  });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});