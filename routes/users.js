const express = require('express');
const router = express.Router();
const redis = require('redis');

// Create Redis client
const client = redis.createClient();

client.connect().catch(console.error);

const fakeDB = [
  { id: 1, name: 'Alice', role: 'Engineer' },
  { id: 2, name: 'Bob', role: 'Designer' }
];

// Middleware to check cache
async function checkCache(req, res, next) {
  const { id } = req.params;
  const data = await client.get(id);

  if (data) {
    return res.json({ fromCache: true, user: JSON.parse(data) });
  }
  next();
}

// Get user by ID
router.get('/:id', checkCache, async (req, res) => {
  const { id } = req.params;
  const user = fakeDB.find(u => u.id == id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Save in cache
  await client.set(id, JSON.stringify(user), { EX: 30 }); // expire in 30s
  res.json({ fromCache: false, user });
});

module.exports = router;
