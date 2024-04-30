const express = require('express');
const path = require('path');

const app = express();

// Define a route to handle file download
app.get('/download', (req, res) => {
  const filePath = path.join(__dirname, 'BuckShot.zip'); // Path to your .zip file
  res.setHeader('Content-type','application/zip');
  res.download(filePath, 'BuckShot.zip', (err) => {
    if (err) {
      // Handle errors
      console.error('Error downloading file:', err);
      res.status(500).send('Error downloading file');
    }
  });
});

// Start the server
const port = 3003;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
