const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    department_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    category_name: {
      type: String,
    },
    category_short_name: {
      type: String,
    },
    category_image_url: {
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

const categoryModel = mongoose.model("Category", categorySchema);

module.exports = categoryModel;
