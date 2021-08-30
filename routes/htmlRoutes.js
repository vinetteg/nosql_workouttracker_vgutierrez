const path = require("path");
const router = require("express").Router();

router.get("/exercise", (req, res) => {
  res.SendFile(path.join(___dirname, "/public/exercise.html"));
});
router.get("/stats", (req, res) => {
  res.SendFile(path.join(___dirname, "/public/stats.html"));
});

module.exports = router;
