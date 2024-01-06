const SubjectModel = require("../models/Subject");

exports.getAllSubjects = async () => {
    return await SubjectModel.find();
};

exports.createdSubject = async (subject) => {
    return await SubjectModel.create(subject);
};

exports.getSubjectById = async (id) => {
    return await SubjectModel.findById(id);
};

exports.updatedSubject = async (id, subject) => {
    return await SubjectModel.findByIdAndUpdate(id, subject);
};

exports.deletedSubject = async (id) => {
    return await SubjectModel.findByIdAndDelete(id);
};