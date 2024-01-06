const TeacherModel = require("../models/Teacher");

exports.getAllTeachers = async () => {
    return await TeacherModel.find();
};

exports.createdTeacher = async (teacher) => {
    return await TeacherModel.create(teacher);
};

exports.getTeacherById = async (id) => {
    return await TeacherModel.findById(id);
};

exports.updatedTeacher = async (id, teacher) => {
    return await TeacherModel.findByIdAndUpdate(id, teacher);
};

exports.deletedTeacher = async (id) => {
    return await TeacherModel.findByIdAndDelete(id);
};