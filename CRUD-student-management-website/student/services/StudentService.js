const StudentModel = require("../models/Student");

exports.getAllStudents = async () => {
    return await StudentModel.find();
};

exports.createdStudent = async (student) => {
    return await StudentModel.create(student);
};

exports.getStudentById = async (id) => {
    return await StudentModel.findById(id);
};

exports.updatedStudent = async (id, student) => {
    return await StudentModel.findByIdAndUpdate(id, student);
};

exports.deletedStudent = async (id) => {
    return await StudentModel.findByIdAndDelete(id);
};