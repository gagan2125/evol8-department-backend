const Category = require("../models/categoryModel");

exports.createCategory = async (req, res) => {
  const {
    department_id,
    category_name,
    category_short_name,
    category_image_url,
    is_active,
  } = req.body;
  try {
    const newCategory = new Category({
      department_id,
      category_name,
      category_short_name,
      category_image_url,
      is_active,
    });
    await newCategory.save();
    res.status(201).json({ message: "Category created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating Category", error });
  }
};

exports.getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find().populate(
      "department_id",
      "department_name"
    );
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Category", error });
  }
};

exports.getByCategoryId = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ message: "Category Not Found" });
    } else {
      return res.status(200).json(category);
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching Category", error });
  }
};

exports.getByCategoryDepartmentId = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.find({ department_id: id });
    if (!category) {
      return res.status(404).json({ message: "Department Category Not Found" });
    } else {
      return res.status(200).json(category);
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching Category", error });
  }
};

exports.updateCategoryid = async (req, res) => {
  const { id } = req.params;
  const {
    department_id,
    category_name,
    category_short_name,
    category_image_url,
    is_active,
  } = req.body;

  try {
    // Find the category by its ID and update its fields
    const category = await Category.findByIdAndUpdate(
      id,
      {
        department_id,
        category_name,
        category_short_name,
        category_image_url,
        is_active,
      },
      { new: true }
    ); // new: true returns the updated document

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res
      .status(200)
      .json({ message: "Category updated successfully", category });
  } catch (error) {
    res.status(500).json({ message: "Error updating Category", error });
  }
};

exports.deleteCategoryId = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);
    if (!category)
      return res.status(404).json({ message: "Category Not Found" });
    res.status(200).json({ message: "Category Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting Category", error });
  }
};
