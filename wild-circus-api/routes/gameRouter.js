const express = require("express");
const router = express.Router();
const gameController = require("../controller/gameController");

router.get("/", gameController.gameList);
router.put("/edit/:id", gameController.editGame);
router.delete("/delete/:id", gameController.deleteGame);
router.get("/alternative/:id", gameController.alternative);
router.post("/add/alternative", gameController.createAlternative);
router.get("/random", gameController.gameRandon);
router.get("/search/:name", gameController.gameSearch);
router.get("/:id", gameController.gameDetail);
router.post("/", gameController.create);

module.exports = router;
