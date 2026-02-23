const pool = require("./pool");

async function getMessages() {
    const {rows} = await pool.query("SELECT * FROM messages INNER JOIN users ON messages.user_id = users.id");
    return rows;
}

module.exports = {
    getMessages
}