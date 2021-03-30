const router = require('express')();
const controller = require('../controller/bp/controller');
const auth = require('../middlewares/auth');

router.post("/check", auth, controller.createBp);
router.delete("/:id", auth, controller.deleteBp);
router.get('/low', auth, controller.getLowBp);
router.get('/high', auth, controller.getHighBp);
router.get('/all', auth, controller.getAllBp);

module.exports = router;