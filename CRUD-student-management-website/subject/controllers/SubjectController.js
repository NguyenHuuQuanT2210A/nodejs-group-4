const subjectService = require("../services/SubjectService");

exports.getAllSubjects = async (req, res) => {
    try{
        const subjects = await subjectService.getAllSubjects();
        res.json({data: subjects, status: "success"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.createdSubject = async (req, res) => {
    try {
        const subject = await subjectService.createdSubject(req.body);
        res.json({data: subject, status: "success"});
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getSubjectById = async (req, res) => {
    try {
        const subject = await subjectService.getSubjectById(req.params.id);
        res.json({data: subject, status: "success"});
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.updatedSubject = async (req, res) => {
    try {
        const subject = await subjectService.updatedSubject(req.params.id, req.body);
        res.json({data: subject, status: "success"});
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deletedSubject = async (req, res) => {
    try {
        const subject = await subjectService.deletedSubject(req.params.id);
        res.json({data: subject, status: "success"});
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};