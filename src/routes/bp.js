const router = require('express')();
const controller = require('../controller/bp/controller');
const auth = require('../middlewares/auth');

router.post("/check", auth, controller.createBp);
router.delete("/:id", auth, controller.deleteBp);

module.exports = router;