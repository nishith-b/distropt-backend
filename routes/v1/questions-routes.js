const express = require("express");
const { QuestionController } = require("../../controllers");
const {} = require("../../middlewares");
const router = express.Router();

// /api/v1/archived POST
//router.post("/", WishlistController.addToWishlist);

// /api/v1/archived GET
router.get("/", QuestionController.getQuestions);

// /api/v1/archived/:id DELETE
//router.delete("/:id", WishlistController.removeDistribution);

module.exports = router;
