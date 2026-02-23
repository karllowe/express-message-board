const pool = require("./pool");

async function getMessages() {
    const {rows} = await pool.query("SELECT * FROM message_board INNER JOIN users ON message_board.user_id = users.id");
    return rows;
}

async function getMessageDetails(id) {
    const { rows } = await pool.query("SELECT * FROM message_board INNER JOIN users ON message_board.user_id = users.id WHERE message_board.id = $1", [id]);
    return rows[0];
}

async function getUsers() {
    const { rows } = await pool.query("SELECT * from users");
    return rows 
}

async function postMessage(message, userID, date) {
    await pool.query("INSERT INTO message_board (message, date_added, user_id) values ($1, $2, $3)", [message, date, userID])
}

module.exports = {
    getMessages,
    getMessageDetails,
    getUsers,
    postMessage
}