const express = require('express');
// 
const schoolRoutes = require('./routes/schoolRoutes');

const app = express();
app.use(express.json());
app.use('/api', schoolRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
