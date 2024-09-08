const express = require("express");
const {
  createsubCategory,
  getAllsubCategory,
  getBysubCategoryId,
  updatesubCategoryid,
  deletesubCategoryId,
} = require("../controllers/subCategoryController");
const router = express.Router();

router.post("/add-subcategory", createsubCategory);
router.get("/get-subcategory", getAllsubCategory);
router.get("/get-subcategory-id/:id", getBysubCategoryId);
router.put("/update-subcategory/:id", updatesubCategoryid);
router.delete("/delete-subcategory/:id", deletesubCategoryId);

module.exports = router;
