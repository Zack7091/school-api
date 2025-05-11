require('dotenv').config(); // Make sure this is FIRST
const express = require('express');
const schoolRoutes = require('./routes/schoolRoutes');

const app = express();
app.use(express.json());
app.use('/api/schools', schoolRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
