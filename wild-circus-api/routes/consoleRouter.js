const express = require("express");
const router = express.Router();
const consoleController = require("../controller/consoleController");

router.get("/", consoleController.consoleList);
router.get("/:id", consoleController.consoleDetail);

module.exports = router;
