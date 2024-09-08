const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema(
  {
    department_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    subcategory_name: {
      type: String,
    },
    subcategory_short_name: {
      type: String,
    },
    is_active: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const subcategoryModel = mongoose.model("subCategory", subCategorySchema);

module.exports = subcategoryModel;
