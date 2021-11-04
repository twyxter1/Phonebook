const express = require('express');
const { get } = require('http');
const mainController = require("../controllers/mainController");
const router = express.Router({ mergeParams: true });

router.get("/", mainController.getMainPage);
router.post("/addContact", mainController.addContact);
router.post('/delete', mainController.deleteTask);
module.exports = router;

