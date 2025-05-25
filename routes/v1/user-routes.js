const express = require("express");
const { UserController } = require("../../controllers");
const router = express.Router();

// /api/v1/user POST
router.post("/signup", UserController.createUser);

// /api/v1/user POST
router.post("/login", UserController.authenticateUser);

// /api/v1/user GET
router.get("/:id", UserController.createUser);

// /api/v1/user DELETE
router.delete("/:id", UserController.createUser);

// /api/v1/user PATCH
router.patch("/:id", UserController.createUser);

module.exports = router;
