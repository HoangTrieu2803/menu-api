const router = require("express").Router();
const orderController = require("../controller/orderController")
//ADD Order
router.post("/", orderController.addOrder);
//GET ALL Order
router.get("/",orderController.getAllOrder);
//GET A Order
router.get("/:id",orderController.getAnOrder);
//DELETE Order
router.delete("/:id",orderController.deleteOrder);
module.exports = router;
