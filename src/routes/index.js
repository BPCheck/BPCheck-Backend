const router = require('express')();
const user = require('./user');
const bp = require('./bp');
const hospital = require('./hospital');

router.use("/user", user);
router.use("/bp", bp);
router.use("/hospital", hospital);

module.exports = router;
