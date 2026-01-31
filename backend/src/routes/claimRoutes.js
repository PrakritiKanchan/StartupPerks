const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const claimController = require("../controllers/claimController");

router.post("/", auth, claimController.claimDeal);
router.get("/", auth, claimController.getMyClaims);

module.exports = router;
