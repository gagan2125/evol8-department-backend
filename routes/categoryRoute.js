const express = require("express");
const {
  createCategory,
  getAllCategory,
  getByCategoryId,
  getByCategoryDepartmentId,
  updateCategoryid,
  deleteCategoryId,
} = require("../controllers/categoryController");
const router = express.Router();

router.post("/add-category", createCategory);
router.get("/get-category", getAllCategory);
router.get("/get-category-id/:id", getByCategoryId);
router.get("/get-category-department-id/:id", getByCategoryDepartmentId);
router.put("/update-category/:id", updateCategoryid);
router.delete("/delete-category/:id", deleteCategoryId);

module.exports = router;
