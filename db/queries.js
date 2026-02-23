const pool = require("./pool");

async function getMessages() {
    const {rows} = await pool.query("SELECT * FROM messages INNER JOIN users ON messages.user_id = users.id");
    return rows;
}

async function getMessageDetails(id) {
    const { rows } = await pool.query("SELECT * FROM messages INNER JOIN users ON messages.user_id = users.id WHERE messages.id = $1", [id]);
    return rows[0];
}

module.exports = {
    getMessages,
    getMessageDetails
}