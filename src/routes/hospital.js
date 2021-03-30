const router = require('express')();
const controller = require('../controller/hospital/controller');
const auth = require('../middlewares/auth');

router.post("/register", auth, controller.createHospital);
router.delete("/:id", auth, controller.deleteHospital);

module.exports = router;