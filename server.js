const express = require('express');
const cors = require('cors');
const metricsRoutes = require('./routes/metricsRoutes');

const app = express();
app.use(cors({
  origin: [
    "https://dashboard-frontend-khaki-seven.vercel.app",
    "http://localhost:3000",
    "http://127.0.0.1:3000"
  ],
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'Backend is running', api: '/api/metrics' });
});

app.use('/api', metricsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
