var express = require('express');
var router = express.Router();
// var todo = require('../todo.js');


router.get('/api', (req, res, next) => res.send({ msg: 'Hello World!' }));
router.get('/api/user', (req, res, next) => res.send({ msg: 'Hello user, welcome to our world!' }));
// router.get('/api', todo.getAllTodos);
// router.get('/api', todo.getAllTodos);
// router.get('/:id', todo.getSingleTodo);
// router.post('/', todo.createTodo);
// router.patch('/:id', todo.updateTodo);
// router.delete('/:id', todo.deleteTodo);

module.exports = router;