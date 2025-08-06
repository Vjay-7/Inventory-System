const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all items
router.get('/', async (req, res) => {
  const { category } = req.query;
  const query = category ? 
    'SELECT * FROM inventory WHERE category = $1 ORDER BY id ASC' :
    'SELECT * FROM inventory ORDER BY id ASC';
  const result = await pool.query(query, category ? [category] : []);
  res.json(result.rows);
});
 
// Add item
router.post('/', async (req, res) => {
  const { name, category, quantity, price } = req.body;
  await pool.query(
    'INSERT INTO inventory (name, category, quantity, price) VALUES ($1, $2, $3, $4)',
    [name, category, quantity, price]
  );
  res.sendStatus(201);
});


// Update item
router.put('/:id', async (req, res) => {
  const { name, category, quantity, price } = req.body;
  const { id } = req.params;
  await pool.query(
    'UPDATE inventory SET name = $1, category = $2, quantity = $3, price = $4 WHERE id = $5',
    [name, category, quantity, price, id]
  );
  res.sendStatus(200);
});

// Delete item
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM inventory WHERE id = $1', [id]);
  res.sendStatus(200);
});

module.exports = router;
