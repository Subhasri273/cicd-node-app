const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('🚀 CI/CD Pipeline is working! Deployed using Jenkins & Docker on AWS EC2');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
