const CategoryModel = require("../models/category.model")
const slugify = require("slugify")

const create = async (req, res , next) => {
    const { name } = req.body;
    try {
        const category = await new CategoryModel({ name, slug: slugify(name) })
        const savedCategory = await category.save()
        res.status(200).send({
            success: true,
            data: savedCategory,
            message: "Category Created Sucessfully"
        })
    } catch (error) {
        next(error)
    }
}
const read = async (req, res, next) => {
    try {
        let category = await CategoryModel.findById(req.params.id).exec();
        res.status(200).json({
            success: true,
            data: category,
            message: "Category fetched successfully"
        })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res) => {
    const { name } = req.body
    try {
        const updated = await CategoryModel.findByIdAndUpdate(req.params.id, { name, slug: slugify(name) }, { new: true })
        res.status(200).json({
            success: true,
            data: updated,
            message: "Category updated successfully"
        })
    } catch (err) {
        next(err)
    }
}
const remove = async (req, res , next) => {
    try {
        const deleted = await CategoryModel.findByIdAndDelete(req.params.id);
        if(deleted === null) res.status(200).send({success:false, data:null, message:`No category found!`})
        res.status(200).json({
            success: true,
            data: deleted,
            message: "Category deleted successfully"
        })
    } catch (err) {
        next(err)
    }
}
const list = async (req, res , next) => {
    try {
        const list = await CategoryModel.find({}).sort({ createdAt: -1 }).exec()
        res.status(200).json({
            success: true,
            data:list,
            message:"Category fetched successfully"
        })
    } catch (error) {
        next(error)
    }
}
module.exports = {
    create,
    read,
    update,
    remove,
    list
}