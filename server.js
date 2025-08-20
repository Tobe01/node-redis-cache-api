const express = require('express');
const app = express();

app.use(express.json());

// Routes
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Node Redis Cache API',
    endpoints: ['/users']
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
