const router = require('express');
const controller = require('../controller/user/controller');
const auth = require('../middlewares/auth');

router.post('/signUp', controller.signUp);
router.post('/signIn', controller.signIn);

module.exports = router;