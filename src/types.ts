/**
 * main - Express.js Server
 */

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to bcx-api API',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

# Additional Implementation 1760682566

# Code Update 1760682566-18869

# Code Update 1760682567-12730

# Additional Implementation 1760682567

# Additional Implementation 1760682567

# Additional Implementation 1760682567

# Code Update 1760682567-14557
