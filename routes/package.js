const router = require("express").Router();
const packageController = require("../controller/packageController")
//ADD PACKAGE
router.post("/", packageController.addPackage);
//GET ALL PACKAGE
router.get("/",packageController.getAllPackage);
//GET A PACKAGE
router.get("/:id",packageController.getAPackage);
//DELETE PACKAGE
router.delete("/:id",packageController.deletePackage);
//UPDATE PACKAGE
router.put("/:id",packageController.updatePackage);
module.exports = router;
