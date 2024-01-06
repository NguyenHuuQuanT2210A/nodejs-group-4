const ClassModel = require("../models/Class");

exports.getAllClass = async () => {
    return await ClassModel.find();
};

exports.createdClass = async (classs) => {
    return await ClassModel.create(classs);
};

exports.getClassById = async (id) => {
    return await ClassModel.findById(id);
};

exports.updatedClass = async (id, classs) => {
    return await ClassModel.findByIdAndUpdate(id, classs);
};

exports.deletedClass = async (id) => {
    return await ClassModel.findByIdAndDelete(id);
};