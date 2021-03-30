const router = require('express')();
const user = require('./user');
const bp = require('./bp');
const hospital = require('./hospital');
const main = require('./main');

router.use("/user", user);
router.use("/bp", bp);
router.use("/hospital", hospital);
router.use('/main', main);

module.exports = router;
