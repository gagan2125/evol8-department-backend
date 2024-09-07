const Department = require("../models/departmentModel");

exports.createDepartment = async (req, res) => {
  const {
    department_name,
    short_name,
    start_time,
    end_time,
    is_building_time,
    is_active,
    working_days,
    department_image,
  } = req.body;
  try {
    const newDepartment = new Department({
      department_name,
      short_name,
      start_time,
      end_time,
      is_building_time,
      is_active,
      working_days,
      department_image,
    });
    await newDepartment.save();
    res.status(201).json({ message: "Department created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating Department", error });
  }
};

exports.getAllDepartment = async (req, res) => {
  try {
    const departments = await Department.find();
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Department", error });
  }
};

exports.getByDepartmentId = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.findById(id);
    if (!department) {
      return res.status(404).json({ message: "Department Not Found" });
    } else {
      return res.status(200).json(department);
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching Department", error });
  }
};

exports.updateDepartmentid = async (req, res) => {
  const { id } = req.params;
  const {
    department_name,
    short_name,
    start_time,
    end_time,
    is_building_time,
    is_active,
    working_days,
    department_image,
  } = req.body;
  try {
    const department = await Department.findByIdAndUpdate(id, {
      department_name,
      short_name,
      start_time,
      end_time,
      is_building_time,
      is_active,
      working_days,
      department_image,
    });
    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }
    res.status(200).json({ message: "Department updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating Department", error });
  }
};

exports.deleteDepartmentId = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.findByIdAndDelete(id);
    if (!department)
      return res.status(404).json({ message: "Department Not Found" });
    res.status(200).json({ message: "Department Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting Department", error });
  }
};
