const express = require('express');
const cors = require('cors');
const app = express();

const itemsRoute = require('./routes/items');

app.use(cors());
app.use(express.json());

app.use('/api/items', itemsRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
