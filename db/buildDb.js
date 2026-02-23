const dotenv = require('dotenv').config();
const { Client } = require("pg");

const usersSQL = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 )
);

INSERT INTO users (username)
VALUES
('Amando'),
('Charles);
`;

const messagesSQL = `
CREATE TABLE IF NOT EXISTS message_board (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  date_added timestamp,
  user_id BIGINT,
  
  CONSTAINT message_board_user_id_fkey
    FOREIGNKEY (user_id) references users(id)
    ON DELETE CASCADE
);

INSERT INTO message_board (message, date_added, user_id) 
VALUES
  ('Hello world!', '2026-02-03', 1);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.user}@${process.env.host}:${process.env.port}/${process.env.database}`,
  });
  await client.connect();
  await client.query(usersSQL);
  await client.query(messagesSQL);
  await client.end();
  console.log("done");
}

main();
