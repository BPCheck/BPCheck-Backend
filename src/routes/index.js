const router = require('express')();
const user = require('./user');
const bp = require('./bp');

router.use("/user", user);
router.use('/bp', bp);

module.exports = router;
