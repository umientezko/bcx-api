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

# Additional Implementation 1760682566

# Additional Implementation 1760682566

# Additional Implementation 1760682566

# Additional Implementation 1760682566

# Additional Implementation 1760682566

# Additional Implementation 1760682567

# Additional Implementation 1760682567

# Code Update 1760682567-8444

# Additional Implementation 1760682567

# Additional Implementation 1760682567

# Code Update 1760682567-9880

# Additional Implementation 1760682568

# Code Update 1760682568-9344

# Code Update 1760682568-32096

# Code Update 1760682568-16847

# Additional Implementation 1760682568

# Code Update 1760682568-25452

# Additional Implementation 1760682568

# Code Update 1760682568-21600

# Code Update 1760682569-12182

# Additional Implementation 1760682569

# Additional Implementation 1760682569

# Additional Implementation 1760682569

# Additional Implementation 1760682569

# Code Update 1760682570-26200

# Additional Implementation 1760682570

# Additional Implementation 1760682570

# Additional Implementation 1760682570

# Additional Implementation 1760682571

# Additional Implementation 1760682571

# Additional Implementation 1760682571

# Code Update 1760682571-25123

# Additional Implementation 1760682571

# Additional Implementation 1760682571

# Additional Implementation 1760682571

# Code Update 1760682571-14134

# Additional Implementation 1760682572
