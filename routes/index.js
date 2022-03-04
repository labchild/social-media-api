const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// if route does not exist
router.use((req, res) => {
  res.status(404).json({ message: 'Nothing to see here!' });
});

module.exports = router;