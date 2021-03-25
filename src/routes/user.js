const router = require('express')();
const controller = require('../controller/user/controller');

router.post('/signUp', controller.signUp);
router.post('/signIn', controller.signIn);

module.exports = router;