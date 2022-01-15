const router = require("express").Router();
const todoCtrl = require("../Controller/todoCtrl");
const catCtrl = require("../Controller/catCtrl");

router.route("/")
.post(todoCtrl.createTodo)
.patch(todoCtrl.editTodo)
.delete(todoCtrl.deleteTodo);

router.route('/get').post(todoCtrl.getTodoList)

router.route('/get_one/:id').post(todoCtrl.getTodoById)

router.route('/cat').post(catCtrl.createCategory)
router.route('/getCat').post(catCtrl.sendCat)

router.route('/completeTodo').post(todoCtrl.completeTodo)


module.exports = router;
