const router = require("express").Router();
const menuController = require("../controller/menuController")
//ADD MENU
router.post("/", menuController.addMenu);
//GET ALL MENU OF USER
router.get("/byUser/:id",menuController.getMenu);
//UPDATE MENU
router.put("/:id", menuController.updateMenu);
// GET A MENU
router.get("/:id",menuController.getAMenu)
//GET ALL MENU
router.get('/',menuController.getAllMenu)
module.exports = router;
