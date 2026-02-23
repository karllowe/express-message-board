const db = require("../db/queries");

async function getAllMessages(req, res) {
    const messages = await db.getMessages();
    res.render("index", {messages})
}

async function showNewMessageForm(req, res) {
    const users = await db.getUsers();
    res.render("form", {users})
}

async function messageDetails(req,res) {
    const id = req.params.id;
    const message = await db.getMessageDetails(Number(id));
    res.render("messageDetails", {message, id});
    res.redirect("/")
}

async function postNewMessage(req, res) {
    const message  = req.body.message_text;
    const date = new Date();
    const userId = Number(req.body.username);

    await db.postMessage(message, userId, date);
    res.redirect("/")
}

module.exports = {
    getAllMessages,
    messageDetails,
    showNewMessageForm,
    postNewMessage
}