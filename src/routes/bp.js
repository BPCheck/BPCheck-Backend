const router = require('express')();
const controller = require('../controller/bp/controller');
const auth = require('../middlewares/auth');

router.post("/", auth.authMiddleware, controller.createBp);

module.exports = router;