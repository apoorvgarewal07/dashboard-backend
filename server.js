const express = require('express');
const cors = require('cors');
const metricsRoutes = require('./routes/metricsRoutes');

const app = express();
app.use(cors({
  origin: ["https://dashboard-frontend-khaki-seven.vercel.app/" ],
   methods: ["GET", "POST", "OPTIONS"],
  credentials: true
}));
app.use(express.json());


app.use('/api', metricsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
