const {Router} = require("express");
const indexRouter = Router();
const messagesController = require("../controllers/messageController");
// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date(),
//     id: crypto.randomUUID()
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date(),
//     id: crypto.randomUUID()
//   }
// ];

indexRouter.get("/", messagesController.getAllMessages);
indexRouter.get("/new", (req,res) => {res.render("form")});
indexRouter.post("/new", (req,res) => {
    messages.push({text: req.body.message_text, user: req.body.author_name, added: new Date(), id: crypto.randomUUID()});
    res.redirect("/")
});
indexRouter.get("/messageDetails/:id", (req,res) => {
    const id = req.params.id;
    const message = messages.find((m) => m.id === id);

    res.render("messageDetails", {message, id})
});

module.exports = indexRouter;