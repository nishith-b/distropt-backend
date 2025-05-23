const express = require("express");
const { ArchivedController } = require("../../controllers");
const {} = require("../../middlewares");
const router = express.Router();

// /api/v1/archived POST
router.post("/", ArchivedController.createArchived);

// /api/v1/archived GET
router.get("/", ArchivedController.getArchives);

// /api/v1/archived/:id GET
router.get("/:id", ArchivedController.getArchived);

// /api/v1/archived/:id DELETE
router.delete("/:id", ArchivedController.deleteArchived);

// /api/v1/archived/:id PATCH
router.patch("/:id", ArchivedController.updateArchived);

module.exports = router;
