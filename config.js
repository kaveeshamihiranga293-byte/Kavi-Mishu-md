const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/kaveeshamihiranga293-byte/Kavi-Mishu-md/blob/main/image/WhatsApp%20Image%202025-12-09%20at%203.07.32%20PM.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 Kavi-MD Is Alive Now😍*",
BOT_OWNER: '94787383732',  // Replace with the owner's phone number



};
