const router = require('express')();
const controller = require('../controller/hospital/controller');
const auth = require('../middlewares/auth');

router.post("/register", auth, controller.createHospital);
router.delete("/:id", auth, controller.deleteHospital);
router.put("/select/:id", auth, controller.selectHospital);
router.put('/deselect/:id', auth, controller.deselectHospital);
router.get('/', auth, controller.getHospital);

module.exports = router;