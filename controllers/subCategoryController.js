const subCategory = require("../models/subCategoryModel");

exports.createsubCategory = async (req, res) => {
  const {
    department_id,
    category_id,
    subcategory_name,
    subcategory_short_name,
    is_active,
  } = req.body;
  try {
    const newsubCategory = new subCategory({
      department_id,
      category_id,
      subcategory_name,
      subcategory_short_name,
      is_active,
    });
    await newsubCategory.save();
    res.status(201).json({ message: "SubCategory created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating SubCategory", error });
  }
};

exports.getAllsubCategory = async (req, res) => {
  try {
    const subcategories = await subCategory
      .find()
      .populate({
        path: "department_id",
        select: "department_name",
      })
      .populate({
        path: "category_id",
        select: "category_name",
      });

    res.status(200).json(subcategories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching SubCategory", error });
  }
};

exports.getBysubCategoryId = async (req, res) => {
  try {
    const { id } = req.params;
    const subcategory = await subCategory.findById(id);
    if (!subcategory) {
      return res.status(404).json({ message: "SubCategory Not Found" });
    } else {
      return res.status(200).json(subcategory);
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching SubCategory", error });
  }
};

exports.updatesubCategoryid = async (req, res) => {
  const { id } = req.params;
  const {
    department_id,
    category_id,
    subcategory_name,
    subcategory_short_name,
    is_active,
  } = req.body;
  try {
    const subcategory = await subCategory.findByIdAndUpdate(id, {
      department_id,
      category_id,
      subcategory_name,
      subcategory_short_name,
      is_active,
    });
    if (!subcategory) {
      return res.status(404).json({ message: "SubCategory not found" });
    }
    res.status(200).json({ message: "SubCategory updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating SubCategory", error });
  }
};

exports.deletesubCategoryId = async (req, res) => {
  try {
    const { id } = req.params;
    const subcategory = await subCategory.findByIdAndDelete(id);
    if (!subcategory)
      return res.status(404).json({ message: "SubCategory Not Found" });
    res.status(200).json({ message: "SubCategory Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting SubCategory", error });
  }
};
