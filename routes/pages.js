const express = require("express");

const router = express.Router();
const { homeCtrlFunction, shopCtrlFunction, handMadeEarringCtrlFunction, handMadeLampCtrlFunction, contactCtrlFunction, checkoutCtrlFunction, aboutCtrlFunction, costCtrlFunction } = require("../controllers/pagesCtrlFile")

router.get("/", homeCtrlFunction);
router.get("/shop", shopCtrlFunction);
router.get("/HandMadeEarring", handMadeEarringCtrlFunction);
router.get("/HandMadeLamp", handMadeLampCtrlFunction);
router.get("/Contact", contactCtrlFunction);
router.get("/Checkout", checkoutCtrlFunction);
router.get("/About", aboutCtrlFunction);
router.get("/totalcost", costCtrlFunction);



module.exports = router;