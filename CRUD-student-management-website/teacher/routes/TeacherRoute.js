const express = require("express");
const {
    getAllTeachers,
    createdTeacher,
    getTeacherById,
    updatedTeacher,
    deletedTeacher,
} = require("../controllers/TeacherController");

const router = express.Router();
router.route("/").get(getAllTeachers).post(createdTeacher);
router.route("/:id").get(getTeacherById).put(updatedTeacher).delete(deletedTeacher);

module.exports = router;