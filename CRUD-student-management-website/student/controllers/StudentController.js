const studentService = require("../services/StudentService");

exports.getAllStudents = async (req, res) => {
    try{
        const students = await studentService.getAllStudents();
        res.json({data: students, status: "success"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.createdStudent = async (req, res) => {
    try {
        const student = await studentService.createdStudent(req.body);
        res.json({data: student, status: "success"});
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getStudentById = async (req, res) => {
    try {
        const student = await studentService.getStudentById(req.params.id);
        res.json({data: student, status: "success"});
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.updatedStudent = async (req, res) => {
    try {
        const student = await studentService.updatedStudent(req.params.id, req.body);
        res.json({data: student, status: "success"});
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deletedStudent = async (req, res) => {
    try {
        const student = await studentService.deletedStudent(req.params.id);
        res.json({data: student, status: "success"});
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};