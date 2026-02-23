const db = require("../db/queries");

async function getAllMessages(req, res) {
    const messages = await db.getMessages();
    res.render("index", {messages})
}

async function messageDetails(req,res) {
    const id = req.params.id;
    const message = await db.getMessageDetails(Number(id));
    res.render("messageDetails", {message, id})
}

module.exports ={
    getAllMessages,
    messageDetails
}