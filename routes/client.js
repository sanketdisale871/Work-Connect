const express = require('express');
const router = express.Router();

const clientController = require('../controllers/client');

router.post("/update", clientController.update_profile_post);
router.post("/add/task", clientController.addTask_post);
router.post("/negotiate/task/price", clientController.negotiateTaskPrice);
router.get("/accept/task/price", clientController.acceptTaskPrice);

router.get("/logout", clientController.logout);

module.exports = router;
