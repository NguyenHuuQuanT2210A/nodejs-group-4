const express = require("express");
const {
    getAllClass,
    createdClass,
    getClassById,
    updatedClass,
    deletedClass,
} = require("../controllers/ClassController");

const router = express.Router();
router.route("/").get(getAllClass).post(createdClass);
router.route("/:id").get(getClassById).put(updatedClass).delete(deletedClass);

module.exports = router;