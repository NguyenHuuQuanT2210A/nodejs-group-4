const teacherService = require("../services/TeacherService");

exports.getAllTeachers = async (req, res) => {
    try{
        const teachers = await teacherService.getAllTeachers();
        res.json({data: teachers, status: "success"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.createdTeacher = async (req, res) => {
    try {
        const teacher = await teacherService.createdTeacher(req.body);
        res.json({data: teacher, status: "success"});
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTeacherById = async (req, res) => {
    try {
        const teacher = await teacherService.getTeacherById(req.params.id);
        res.json({data: teacher, status: "success"});
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.updatedTeacher = async (req, res) => {
    try {
        const teacher = await teacherService.updatedTeacher(req.params.id, req.body);
        res.json({data: teacher, status: "success"});
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deletedTeacher = async (req, res) => {
    try {
        const teacher = await teacherService.deletedTeacher(req.params.id);
        res.json({data: teacher, status: "success"});
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};