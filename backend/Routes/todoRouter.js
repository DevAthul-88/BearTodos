const router = require("express").Router();
const todoCtrl = require("../Controller/todoCtrl");
const catCtrl = require("../Controller/catCtrl");

router.route("/")
.get(todoCtrl.getTodoList)
.post(todoCtrl.createTodo)
.patch(todoCtrl.editTodo)
.delete(todoCtrl.deleteTodo);

router.route('/cat').post(catCtrl.createCategory)
router.route('/getCat').post(catCtrl.sendCat)



module.exports = router;
