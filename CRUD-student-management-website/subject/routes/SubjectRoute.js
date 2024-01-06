const express = require("express");
const {
    getAllSubjects,
    createdSubject,
    getSubjectById,
    updatedSubject,
    deletedSubject,
} = require("../controllers/SubjectController");

const router = express.Router();
router.route("/").get(getAllSubjects).post(createdSubject);
router.route("/:id").get(getSubjectById).put(updatedSubject).delete(deletedSubject);

module.exports = router;