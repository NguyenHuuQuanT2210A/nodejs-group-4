const express = require("express");
const {
    getAllStudents,
    createdStudent,
    getStudentById,
    updatedStudent,
    deletedStudent,
} = require("../controllers/StudentController");

const router = express.Router();
router.route("/").get(getAllStudents).post(createdStudent);
router.route("/:id").get(getStudentById).put(updatedStudent).delete(deletedStudent);

module.exports = router;