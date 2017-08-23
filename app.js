"use strict"
const app = require("express")();
const bodyParser = require("body-parser");
const bookController = require("./controllers/book");
const data = require("./models/book");

app.use(bodyParser.urlencoded())

app.route('/books')
    .get(bookController.getAll)
    .post(bookController.create)
    .put()
    .delete()

app.route('/books/:id')
    .get(bookController.getOne)
    .post()
    .put(bookController.update)
    .delete(bookController.delete)

app.listen(5000)