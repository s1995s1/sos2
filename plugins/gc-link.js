import fs from 'fs'
let handler = async (m, { conn, args }) => {
let group = m.chat
conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ССЫЛКА ГРУППЫ',
body: 'ᴛʜᴇ ᴍʏsᴛᴄ ﹣ ʙᴏᴛ',    
previewType: 1, thumbnail: fs.readFileSync("./src/admins.jpg"),
sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`}}}) ('ссылка группы',) 
} 
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^ссылка(gro?up)?$/i
handler.group = true
handler.botAdmin = true
export default handler
