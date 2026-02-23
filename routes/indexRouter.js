const {Router} = require("express");
const indexRouter = Router();
const messagesController = require("../controllers/messageController");

indexRouter.get("/", messagesController.getAllMessages);
indexRouter.get("/new", messagesController.showNewMessageForm);
// indexRouter.post("/new", (req,res) => {
//     messages.push({text: req.body.message_text, user: req.body.author_name, added: new Date(), id: crypto.randomUUID()});
//     res.redirect("/")
// });
indexRouter.post("/new", messagesController.postNewMessage);
indexRouter.get("/messageDetails/:id", messagesController.messageDetails);

module.exports = indexRouter;