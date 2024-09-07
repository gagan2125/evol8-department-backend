const express = require("express");
const {
  createDepartment,
  getAllDepartment,
  getByDepartmentId,
  deleteDepartmentId,
  updateDepartmentid,
} = require("../controllers/departmentController");
const router = express.Router();

router.post("/add-department", createDepartment);
router.get("/get-department", getAllDepartment);
router.get("/get-department-id/:id", getByDepartmentId);
router.put("/update-department/:id", updateDepartmentid);
router.delete("/delete-department/:id", deleteDepartmentId);

module.exports = router;
