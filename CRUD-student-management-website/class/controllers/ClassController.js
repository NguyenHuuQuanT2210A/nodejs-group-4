const classsService = require("../services/ClassService");

exports.getAllClass = async (req, res) => {
    try{
        const classss = await classsService.getAllClass();
        res.json({data: classss, status: "success"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.createdClass = async (req, res) => {
    try {
        const classs = await classsService.createdClass(req.body);
        res.json({data: classs, status: "success"});
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getClassById = async (req, res) => {
    try {
        const classs = await classsService.getClassById(req.params.id);
        res.json({data: classs, status: "success"});
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.updatedClass = async (req, res) => {
    try {
        const classs = await classsService.updatedClass(req.params.id, req.body);
        res.json({data: classs, status: "success"});
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deletedClass = async (req, res) => {
    try {
        const classs = await classsService.deletedClass(req.params.id);
        res.json({data: classs, status: "success"});
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};