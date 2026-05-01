const express = require('express');
const cors = require('cors');
const metricsRoutes = require('./routes/metricsRoutes');

const app = express();
app.use(cors(
  {origin: [ "https://dashboard-frontend-khaki-seven.vercel.app/",
    "http://localhost:3000",
    "http://localhost:3001"
  ],
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true}
));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'Backend is running', api: '/api/metrics' });
});

app.get('/api', (req, res) => {
  res.json({ status: 'Backend is running', api: '/api/metrics' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
