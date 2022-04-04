const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

<<<<<<< HEAD:routes/index.js
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
=======
module.exports = router;
>>>>>>> develop:controllers/index.js
