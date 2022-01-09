const router = require("express").Router();
const todoCtrl = require("../Controller/todoCtrl");

router.route("/")
.get(todoCtrl.getTodoList)
.post(todoCtrl.createTodo)
.patch(todoCtrl.editTodo)
.delete(todoCtrl.deleteTodo);

module.exports = router;
