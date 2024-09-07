const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema(
  {
    department_name: {
      type: String,
    },
    department_image: {
      type: String,
    },
    short_name: {
      type: String,
    },
    start_time: {
      type: String,
    },
    end_time: {
      type: String,
    },
    is_building_time: {
      type: String,
    },
    is_active: {
      type: String,
    },
    working_days: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const departmentModel = mongoose.model("Department", departmentSchema);

module.exports = departmentModel;
