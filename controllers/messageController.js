const db = require("../db/queries");

async function getAllMessages(req, res) {
    const messages = await db.getMessages();
    res.render("index", {messages})
}

module.exports ={
    getAllMessages
}