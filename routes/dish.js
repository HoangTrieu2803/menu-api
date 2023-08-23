const router = require("express").Router();
const dishController = require("../controller/dishController")
//ADD Dish
router.post("/", dishController.addDish);
//GET ALL Dish
router.get("/",dishController.getAllDish);
//GET A Dish
router.get("/:id",dishController.getADish);
//DELETE Dish
router.delete("/:id",dishController.deleteDish);
//UPDATE Dish
router.put("/:id",dishController.updateDish);
module.exports = router;
